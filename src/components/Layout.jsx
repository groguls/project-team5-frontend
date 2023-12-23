import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Container } from 'styles/GlobalStyle';

export const Layout = () => {
  return (
    <Container>
      {/* Header here */}
      <h2>Our Group Project</h2>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};
