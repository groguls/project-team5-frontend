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
          helperText={'Invalid email format'}
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
          helperText={'Must be at least 8 characters long'}
          onBlur={formik.handleBlur}
        />
      </InputForm>

      <InputForm style={{ marginTop: formik.errors.password ? '10px' : '0px' }}>
        <label htmlFor="email">Repeat password</label>
        <InputPassword
          placeholderText={'Repeat password'}
          type={'password'}
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.repeatPassword &&
            Boolean(formik.errors.repeatPassword)
          }
          id={'repeatPassword'}
          helperText={'Passwords must match'}
        />
      </InputForm>
      <ButtonSubmit
        type="submit"
        style={{ marginTop: formik.errors.repeatPassword ? '10px' : '0px' }}
      >
        Sign Up
      </ButtonSubmit>
      <ButtonLink>
        <a href="signin">Sign In</a>
      </ButtonLink>
    </FormContainer>
  );
};
