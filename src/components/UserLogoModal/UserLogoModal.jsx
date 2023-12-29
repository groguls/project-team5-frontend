import { useEffect } from 'react';
import { Backdrop, Button, Modal, IconBox } from './UserLogoModal.styled';
import { Settings } from '../Icons/Settings';
import { Logout } from '../Icons/Logout';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserLogoModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const UserInfoModal = () => {};
  // const UserLogoutModal = () => {};

  useEffect(() => {
    const handleEscKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (!evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <Button type="button" onClick={UserInfoModal}>
          <IconBox style={{ marginRight: '8px' }}>
            <Settings />
          </IconBox>
          Setting
        </Button>
        <Button type="button" onClick={() => dispatch(logOut())}>
          <IconBox style={{ marginRight: '8px' }}>
            <Logout />
          </IconBox>
          Logout
        </Button>
      </Modal>
    </Backdrop>
  );
};
