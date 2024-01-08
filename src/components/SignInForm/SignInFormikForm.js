import * as Yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { InputNameEmail } from 'components/InputEmailName/InputEmailName';
import InputPassword from 'components/InputPassword/InputPassword';

import { signIn } from '../../redux/auth/operations';
import {
  ButtonLink,
  ButtonSubmit,
  FormContainer,
  InputForm,
  Title,
} from '../SingUpForm/SingUpFormikForm.styled';
import { Container } from '../../styles/GlobalStyle';

import { selectError } from '../../redux/selectors';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^.{8,64}$/;

const formSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, {
      message: `Invalid email.Please enter a valid email in the format: example@example.com.`,
    })
    .required('Required'),
  password: Yup.string()
    .matches(passwordRegex, {
      message: `Invalid password. Password must be at least 8 characters long.`,
    })
    .required('Required'),
});

export const SingInFormFormik = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectError);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, actions) => {
      dispatch(
        signIn({
          email: values.email,
          password: values.password,
        })
      )
        .unwrap()
        .then(() => toast.success('SignIn was successfull'))
        .catch(error => {
          toast.error(errorMessage || 'Invalid email or password');
        });
      actions.resetForm();
    },
  });
  return (
    <Container>
      <FormContainer onSubmit={formik.handleSubmit}>
        <Title>Sign In</Title>
        <InputForm>
          <label htmlFor="email">Enter your email</label>
          <InputNameEmail
            placeholderText={'E-mail'}
            type={'email'}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            id={'email'}
            helperText={'Invalid email.'}
          />
        </InputForm>
        <InputForm style={{ marginTop: formik.errors.email ? '10px' : '0px' }}>
          <label htmlFor="password">Enter your password</label>
          <InputPassword
            placeholderText={'Password'}
            type={'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            id={'password'}
            helperText={'Invalid password.'}
            onBlur={formik.handleBlur}
          />
        </InputForm>

        <ButtonSubmit
          type="submit"
          style={{ marginTop: formik.errors.password ? '10px' : '0px' }}
        >
          Sign In
        </ButtonSubmit>
        <ButtonLink>
          <a href="forgot-password">Forgot password?</a>
        </ButtonLink>
        <ButtonLink>
          <a href="signup">Sign Up</a>
        </ButtonLink>
      </FormContainer>
    </Container>
  );
};
