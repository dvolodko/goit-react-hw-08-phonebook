import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import authOperations from '../../redux/auth/authOperations';
import { Container, Name } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <Name>Welcome, {name}</Name>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </Container>
  );
}
