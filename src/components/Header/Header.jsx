import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Logo } from 'components/Icons/Logo';
import { Link } from 'react-router-dom';
import {
  Button,
  HeaderContainer,
  UserLogoContainer,
  UserName,
  DefaultNeme,
} from './Header.styled';
import {
  selectIsLoggedIn,
  selectName,
  selectUserLogo,
  selectEmail,
} from '../../redux/selectors';

import { UserIcon } from 'components/Icons/UserIcon';
import { ArrowDown } from 'components/Icons/ArrowDown';
import { UserLogo } from 'components/UserLogo/UserLogo';

import { UserLogoModal } from 'components/UserLogoModal/UserLogoModal';
import { SettingModal } from 'components/SettingModal/SettingModal';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);
  const userLogo = useSelector(selectUserLogo);
  const [logoModal, setLogoModal] = useState(false);
  const [settingModal, setSettingModal] = useState(false);

  const toggleModal = () => {
    setLogoModal(!logoModal);
  };

  const switchSettingModal = () => {
    setSettingModal(!settingModal);
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      {isLoggedIn ? (
        <UserLogoContainer onClick={toggleModal}>
          {userName ? (
            <UserName>{userName}</UserName>
          ) : (
            <DefaultNeme>{userEmail[0]}</DefaultNeme>
          )}
          {userLogo ? <UserLogo /> : ''}
          <ArrowDown />
          {logoModal && (
            <UserLogoModal
              onClose={toggleModal}
              openSettings={switchSettingModal}
            />
          )}
        </UserLogoContainer>
      ) : (
        <Link to="/signin">
          <UserLogoContainer>
            <Button type="botton">Sign in</Button>
            <UserIcon />
          </UserLogoContainer>
        </Link>
      )}
      {settingModal && <SettingModal onClose={switchSettingModal} />}
    </HeaderContainer>
  );
};
