import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authInteraction';
import { StyledButton } from 'components/Button/Button.styled';

export const LogOutUser = () => {
  const dispatch = useDispatch();
  return (
    <StyledButton onClick={() => dispatch(logOut())}>Log out</StyledButton>
  );
};
