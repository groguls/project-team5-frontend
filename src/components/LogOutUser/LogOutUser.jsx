import React from 'react';
import {
  ButtonGroup,
  CancelButton,
  LogoutButton,
  LogOutCaption,
} from './LogOutUser.styled';
import { logOut } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../ModalContextProvider/ModalContextProvider';

export const LogOutUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleModal = useModal();

  const handleLogout = () => {
    toggleModal();
    dispatch(logOut());
    navigate('/');
  };
  return (
    <>
      <LogOutCaption>Do you really want to leave?</LogOutCaption>
      <ButtonGroup>
        <CancelButton onClick={() => toggleModal()}>Cancel</CancelButton>
        <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
      </ButtonGroup>
    </>
  );
};
