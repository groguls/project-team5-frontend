import { useEffect } from 'react';
import { Backdrop, Button, Modal, IconBox } from './UserLogoModal.styled';
import { Settings } from '../Icons/Settings';
import { Logout } from '../Icons/Logout';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { LogOutUser } from 'components/LogOutUser/LogOutUser';

export const UserLogoModal = ({ onClose, openSettings }) => {
  const UserInfoModal = () => {
    onClose();
    openSettings();
  };
  const toggleModal = useModal();

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
    <>
      <Backdrop onClick={handleBackdropClick} />
      <Modal>
        <Button type="button" onClick={UserInfoModal}>
          <IconBox>
            <Settings />
          </IconBox>
          Setting
        </Button>
        <Button
          type="button"
          onClick={() =>
            toggleModal(<LogOutUser size={'small'} title={'Log out'} />)
          }
        >
          <IconBox>
            <Logout />
          </IconBox>
          Logout
        </Button>
      </Modal>
    </>
  );
};
