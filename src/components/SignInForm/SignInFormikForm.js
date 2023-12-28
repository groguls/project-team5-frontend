import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { InputNameEmail } from 'components/InputEmailName/InputEmailName';
import InputPassword from 'components/InputPassword/InputPassword';

import { signIn } from '../../redux/auth/operations';
import {
  ButtonLink,
  ButtonSubmit,
  FormContainer,
  InputForm,
  Title,
} from './SignInFormikForm.styled';

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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values, actions) => {
      dispatch(
        signIn({
          email: values.email,
          password: values.password,
        })
      );
      actions.resetForm();
    },
  });
  return (
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
        />
      </InputForm>

      <ButtonSubmit
        type="submit"
        style={{ marginTop: formik.errors.password ? '10px' : '0px' }}
      >
        Sign In
      </ButtonSubmit>
      <ButtonLink>
        <a href="signup">Sign Up</a>
      </ButtonLink>
    </FormContainer>
  );
};
