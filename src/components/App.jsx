import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { SharedLayout } from './SharedLayout/SharedLayout';
import ContactsView from '../views/ContactsView/ContactsView';
import HomeView from '../views/HomeView/HomeView';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from '../views/LoginView/LoginView';
import { Container } from './App.styled';
import authOperations from '../redux/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/phonebook" element={<ContactsView />} />
        </Route>
      </Routes>
    </Container>
  );
}
