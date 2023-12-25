// UserLogoModal - компонент рендерить модалку з кнопками:
// - Setting - по кліку на яку відкривається модальне
//  вікно  UserInfoModal
//      - LogoutBtn - по кліку на яку відкривається
// модальне вікно UserLogoutModal
import { useState } from 'react';
// import { Button } from '../Button/Button.js';
import { Modal } from '../Modal/Modal';
import { Button } from './UserLogoModal.styled';
import { Settings } from '../Icons/Settings';
import { Logout } from '../Icons/Logout';

const UserLogoModal = () => {
  const [showModal, setShowModal] = useState(false);

  const UserInfoModal = () => {};
  const UserLogoutModal = () => {};

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <Modal onClose={toggleModal}>
      <Button type="button" onClick={UserInfoModal}>
        <Settings />
        Setting
      </Button>

      <Button type="button" onClick={UserLogoutModal}>
        <Logout />
        Logout
      </Button>
    </Modal>
  );
};

export default UserLogoModal;
