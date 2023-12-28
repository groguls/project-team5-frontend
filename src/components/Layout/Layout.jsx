import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from 'styles/GlobalStyle';

import { useState } from 'react';

import { selectIsLoading } from '../../redux/selectors';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const [logoModal, setLogoModal] = useState(false);

  const openModal = () => {
    setLogoModal({ logoModal: true });
  };

  const closeModal = () => {
    setLogoModal(!logoModal);
  };

  return (
    <Container onClick={closeModal}>
      {isLoading ? <Loader /> : null}
      <Header openModal={openModal} logoModal={logoModal} />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};
