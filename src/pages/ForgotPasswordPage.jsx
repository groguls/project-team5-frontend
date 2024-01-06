import AuthLayout from '../components/AuthLayout/AuthLayout';
import Button from 'components/Button/Button';
import { InputNameEmail } from 'components/InputEmailName/InputEmailName';
import {
  FormContainer,
  InputForm,
  Title,
} from 'components/SingUpForm/SingUpFormikForm.styled';
import React, { useState } from 'react';
// import { theme } from 'styles/theme';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(emailPattern.test(newEmail) ? '' : 'Invalid email');
  };

  const handleSendClick = async evt => {
    evt.preventDefault();
    if (!emailError) {
      try {
        // Запит на бекенд
        console.log('Email отправлен:', email);
      } catch (error) {
        console.error('Error send email:', error);

        setEmailError('Error send email');
      }
    }
  };

  return (
    <AuthLayout>
      <FormContainer>
        <Title>Forgot Password</Title>
        <InputForm>
          <label htmlFor="email">Enter your email</label>
          <InputNameEmail
            placeholderText={'Email'}
            type={'email'}
            value={email}
            onChange={handleEmailChange}
            onBlur={() => {}}
            id={'email'}
            error={!!emailError}
            helperText={emailError}
          />
        </InputForm>

        <Button
          label="Send"
          // backgroundColor={theme.colors.primaryBlue}
          // textColor={theme.colors.primaryWhite}
          onClick={handleSendClick}
        />
      </FormContainer>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
