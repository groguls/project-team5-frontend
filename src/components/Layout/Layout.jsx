import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'styles/GlobalStyle';

import { selectIsLoading } from '../../redux/selectors';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};
