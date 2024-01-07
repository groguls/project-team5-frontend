import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Container } from 'styles/GlobalStyle';
import { Header } from '../Header/Header';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};
