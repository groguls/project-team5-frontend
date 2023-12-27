// UserLogoModal - компонент рендерить модалку з кнопками:
// - Setting - по кліку на яку відкривається модальне
//  вікно  UserInfoModal
//      - LogoutBtn - по кліку на яку відкривається
// модальне вікно UserLogoutModal
// import { Button } from '../Button/Button.js';

import { Button, BackdropBox } from './UserLogoModal.styled';
import { Settings } from '../Icons/Settings';
import { Logout } from '../Icons/Logout';

export const UserLogoModal = () => {
  const UserInfoModal = () => {};
  const UserLogoutModal = () => {};

  return (
    <>
      <BackdropBox>
        <Button type="button" onClick={UserInfoModal}>
          <div style={{ marginRight: '8px' }}>
            <Settings />
          </div>
          Setting
        </Button>
        <Button type="button" onClick={UserLogoutModal}>
          <div style={{ marginRight: '8px' }}>
            <Logout />
          </div>
          Logout
        </Button>
      </BackdropBox>
    </>
  );
};
