import AuthLayout from '../components/AuthLayout/AuthLayout';
import Button from 'components/Button/Button';
import { InputNameEmail } from 'components/InputEmailName/InputEmailName';
import {
  FormContainer,
  InputForm,
  Title,
} from 'components/SingUpForm/SingUpFormikForm.styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendForgotPasswordRequest } from '../redux/forgotPassword/forgotPasswordOperations';




const ForgotPasswordPage = () => {
const dispatch = useDispatch();

const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

  const handleEmailChange = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailError(emailPattern.test(newEmail) ? '' : 'Invalid email');
  };

  const handleSendClick = async (evt) => {
    evt.preventDefault();
    if (!emailError) {
      try {
        dispatch(sendForgotPasswordRequest(email));
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
        <InputForm style={{ marginBottom: emailError ? '10px' : '0px' }}>
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
          onClick={handleSendClick}
        />
      </FormContainer>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
