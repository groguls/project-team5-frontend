import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { InputNameEmail } from 'components/InputEmailName/InputEmailName';
import InputPassword from 'components/InputPassword/InputPassword';
import {
  ButtonLink,
  ButtonSubmit,
  FormContainer,
  InputForm,
  Title,
} from './SingUpFormikForm.styled';

import { signUp } from '../../redux/auth/operations';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const formSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, {
      message: `Invalid email.Please enter a valid email in the format: example@example.com.`,
    })
    .required('Required'),
  password: Yup.string()
    .matches(passwordRegex, {
      message: `Invalid password. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).`,
    })
    .required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const SingUpFormFormik = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values, actions) => {
      dispatch(
        signUp({
          email: values.email,
          password: values.password,
        })
      );
      actions.resetForm();
      console.log('Sign up successful!');
      console.log(values.email);
      console.log(values.password);
    },
  });
  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Sign Up</Title>
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
        />
      </InputForm>
      <InputForm>
        <label htmlFor="email">Enter your password</label>
        <InputPassword
          placeholderText={'Password'}
          type={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          id={'password'}
        />
      </InputForm>

      <InputForm>
        <label htmlFor="email">Repeat password</label>
        <InputPassword
          placeholderText={'Repeat password'}
          type={'password'}
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.repeatPassword &&
            Boolean(formik.errors.repeatPassword)
          }
          id={'repeatPassword'}
        />
      </InputForm>
      <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
      <ButtonLink>
        <a href="/signin">Sign In</a>
      </ButtonLink>
    </FormContainer>
  );
};
