import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Container } from './App.styled';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authOperations from '../redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { ColorRing } from 'react-loader-spinner';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PublicRoute />}>
              <Route index element={<HomeView />} />
            </Route>
            <Route element={<PublicRoute redirectTo="phonebook" restricted />}>
              <Route exact path="register" element={<RegisterView />} />
            </Route>
            <Route element={<PublicRoute redirectTo="phonebook" restricted />}>
              <Route exact path="login" element={<LoginView />} />
            </Route>
            <Route element={<PrivateRoute redirectTo="login" />}>
              <Route path="phonebook" element={<ContactsView />} />
            </Route>
          </Route>
        </Routes>
      )}
    </Container>
  );
}
