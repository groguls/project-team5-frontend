import { useSelector } from 'react-redux';
import { selectName, selectUserLogo } from '../../redux/selectors';
import { UserIcon } from './UserLogo.styled';

export const UserLogo = () => {
  const userLogo = useSelector(selectUserLogo);
  const userName = useSelector(selectName);

  return <UserIcon src={userLogo} alt={userName} />;
};
