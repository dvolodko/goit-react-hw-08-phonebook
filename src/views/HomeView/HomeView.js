import React from 'react';
import { Container, Title } from './HomeView.styled';

const HomeView = () => (
  <Container>
    <Title>
      Contacts App Welcome Page{' '}
      <span role="img" aria-label="Welcome icon">
        💁‍♀️
      </span>
    </Title>
  </Container>
);

export default HomeView;
