import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectIsRefreshing } from '../redux/selectors';
import { Layout } from './Layout/Layout';
import { refreshUser } from '../redux/auth/operations';
import { Loader } from './Loader/Loader';

const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const NewPasswordPage = lazy(() => import('../pages/NewPasswordPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={isAuth ? <HomePage /> : <WelcomePage />} />
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
        <Route
          path="forgot-password"
          element={
            <RestrictedRoute
              redirectTo="/"
              component={<ForgotPasswordPage />}
            />
          }
        />
        <Route
          path="settings/password/:confirmationToken"
          element={
            <RestrictedRoute redirectTo="/" component={<NewPasswordPage />} />
          }
        />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  ) : (
    <Loader />
  );
};
