// import { useSelector } from 'react-redux';

import { Logo } from 'components/Icons/Logo';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './Header.styled';
// import { selectIsLoggedIn } from '../../redux/selectors';

export const Header = () => {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
    </HeaderContainer>
  );
};
