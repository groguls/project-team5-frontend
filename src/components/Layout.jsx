import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Container } from 'styles/GlobalStyle';
import { TextButton } from './TextButton/TextButton';
import { Plus } from './Icons/Plus/Plus';

export const Layout = () => {
  return (
    <Container>
      <TextButton icon={<Plus/>}>add water</TextButton>
      {/* Header here */}
      <h2>Our Group Project</h2>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </Container>
  );
};
