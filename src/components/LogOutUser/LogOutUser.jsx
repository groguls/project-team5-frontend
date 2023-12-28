import React from 'react';
import {
  ModalWrapper,
  Content,
  ButtonGroup,
  CancelButton,
  LogoutButton,
  CloseIcon,
  LogoutTitle,
  Question,
} from './LogOut.styled';
import { theme } from 'styles/theme';
import { logout } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'components/Icons/Plus/Plus';
import Modal from 'components/Modal';

const LogOut = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
    navigate('/');
  };
  return (
    <Modal type="logout" onClose={onClose}>
      <ModalWrapper onClick={e => e.stopPropagation()}>
        <CloseIcon onClick={() => onClose()}>
          <Plus stroke={theme.colors.primaryBlue} width={32} height={32} />
        </CloseIcon>
        <Content>
          <LogoutTitle>Log out</LogoutTitle>
          <Question>Do you really want to leave?</Question>
        </Content>
        <ButtonGroup>
          <CancelButton onClick={() => onClose()}>Cancel</CancelButton>
          <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
        </ButtonGroup>
      </ModalWrapper>
    </Modal>
  );
};

export default LogOut;
