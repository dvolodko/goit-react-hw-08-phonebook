import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import authSelectors from '../../redux/auth/authSelectors';
import { ColorRing } from 'react-loader-spinner';
import { Header, Container } from './SharedLayout.styled';

export const SharedLayout = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Header>
        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        <AuthNav />
      </Header>
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
