import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { SignUpPage } from 'pages/SignUpPage';
import { SignInPage } from 'pages/SignInPage';
import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="signin"
          element={
            <RestrictedRoute redirectTo="/" component={<SignInPage />} />
          }
        />
        <Route
          path="signup"
          element={
            <RestrictedRoute redirectTo="/" component={<SignUpPage />} />
          }
        />
        <Route path="*" element={<h2>Our Group Project</h2>} />
      </Route>
    </Routes>
  );
};
