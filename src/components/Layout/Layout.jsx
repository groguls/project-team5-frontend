import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { SignInLoader } from '../Loader/SignInLoader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors';
import { ModalContextProvider } from '../ModalContextProvider/ModalContextProvider';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <ModalContextProvider>
      {isLoading ? <SignInLoader /> : null}
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </ModalContextProvider>
  );
};
