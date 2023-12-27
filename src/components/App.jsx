import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/selectors';
import { Layout } from './Layout/Layout';
import { refreshUser } from '../redux/auth/operations';

// import { SingUpFormFormik } from './SingUpForm/SingUpFormikForm';
// import { SingInFormFormik } from './SignInForm/SignInFormikForm';

const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  const isAuth = useSelector(selectIsAuth);
  console.log(isAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   if (token) dispatch();
  // }, [dispatch, token]);

  return (
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
        <Route path="*" element={<h2>Our Group Project</h2>} />
      </Route>
    </Routes>
  );
};
