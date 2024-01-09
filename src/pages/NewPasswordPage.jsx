import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout/AuthLayout';
import Button from 'components/Button/Button';
import {
  FormContainer,
  InputForm,
  Title,
} from 'components/SingUpForm/SingUpFormikForm.styled';
import InputPassword from 'components/InputPassword/InputPassword';
import { Container } from 'styles/GlobalStyle';

const passwordRegex = /^.{8,64}$/;

const NewPasswordPage = () => {
  const { confirmationToken } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordsMatchError, setPasswordsMatchError] = useState('');
  const [formError, setFormError] = useState('');

  const handlePasswordChange = e => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordsMatchError('');
    setFormError('');
  };

  const handleRepeatPasswordChange = e => {
    const newRepeatPassword = e.target.value;
    setRepeatPassword(newRepeatPassword);
    setPasswordsMatchError('');
    setFormError('');
  };

  const handleSendClick = async evt => {
    evt.preventDefault();

    if (!password || !repeatPassword) {
      setFormError('Both password fields must be filled');
      return;
    }

    if (!passwordRegex.test(password)) {
      setFormError('Password must be between 8 and 64 characters');
      return;
    }

    if (password !== repeatPassword) {
      setPasswordsMatchError('Passwords must match');
      return;
    }

    try {
      await axios.patch(
        `https://groguls.github.io/project-team5-frontend/api/users/settings/password/${confirmationToken}`,
        {
          newPassword: password,
        }
      );

      console.log('New password sent successfully');

      clearForm();
      navigate('/signin');
    } catch (error) {
      console.error('Error sending new password:', error);
      setFormError('Error sending new password. Please try again.');
    }
  };

  const clearForm = () => {
    setPassword('');
    setRepeatPassword('');
    setPasswordsMatchError('');
    setFormError('');
  };

  const isSubmitDisabled =
    !password || !repeatPassword || password !== repeatPassword;

  return (
    <AuthLayout>
      <Container>
        <FormContainer>
          <Title>Change Password</Title>
          <InputForm
            style={{ marginBottom: passwordsMatchError ? '10px' : '0px' }}
          >
            <label htmlFor="password">New Password:</label>
            <InputPassword
              placeholderText="New Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </InputForm>

          <InputForm
            style={{ marginBottom: passwordsMatchError ? '10px' : '0px' }}
          >
            <label htmlFor="repeatPassword">Repeat New Password:</label>
            <InputPassword
              placeholderText="Repeat New Password"
              type="password"
              value={repeatPassword}
              onChange={handleRepeatPasswordChange}
            />
            {passwordsMatchError && (
              <div style={{ color: 'red' }}>{passwordsMatchError}</div>
            )}
          </InputForm>

          {formError && <div style={{ color: 'red' }}>{formError}</div>}

          <Button
            label="Send"
            onClick={handleSendClick}
            disabled={isSubmitDisabled}
          />
        </FormContainer>
      </Container>
    </AuthLayout>
  );
};

export default NewPasswordPage;
