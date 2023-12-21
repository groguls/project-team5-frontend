import { Container, CssBaseline, Toolbar } from '@mui/material';
import { ApplicationBar } from 'components/ApplicationBar';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <CssBaseline />
      <ApplicationBar />
      <Toolbar />
      <Container component="main" maxWidth="md" sx={{ position: 'relative' }}>
        <Suspense>
          <Outlet />
        </Suspense>
        <Toaster position="top-center" />
      </Container>
    </>
  );
};
