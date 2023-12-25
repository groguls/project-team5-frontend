import { useSelector } from 'react-redux';

import { Logo } from 'components/Icons/Logo';
import { Link } from 'react-router-dom';
import {
  Button,
  HeaderContainer,
  UserLogoContainer,
  UserName,
} from './Header.styled';
import {
  selectIsLoggedIn,
  selectName,
  selectUserLogo,
} from '../../redux/selectors';

// import { LogoModal } from '../LogoModal/LogoModal';
import { UserIcon } from 'components/Icons/UserIcon';
import { ArrowDown } from 'components/Icons/ArrowDown';
import { UserLogo } from 'components/UserLogo/UserLogo';

export const Header = () => {
  // const toggleModal = useModal();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectName);
  const userLogo = useSelector(selectUserLogo);

  const defaultName = 'V';

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>

      {isLoggedIn ? (
        <UserLogoContainer>
          <UserName>{userName ? userName : defaultName}</UserName>
          {userLogo ? <UserLogo /> : ''}
          <ArrowDown />
        </UserLogoContainer>
      ) : (
        <Link to="/signin">
          <UserLogoContainer>
            <Button type="botton">Sign in</Button>
            <UserIcon />
          </UserLogoContainer>
        </Link>
      )}
    </HeaderContainer>
  );
};
