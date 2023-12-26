import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { SignUpPage } from 'pages/SignUpPage';
import { SignInPage } from 'pages/SignInPage';
import { lazy } from 'react';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
=======
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/selectors';
import { Layout } from './Layout/Layout';
import { SingUpFormFormik } from './SingUpForm/SingUpFormikForm';

const RestrictedRoute = lazy(() => import('./RestrictedRoute'));
const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
>>>>>>> 21d602c08570e492e521d4657866c974a7f17c25

export const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  const isAuth = useSelector(selectIsAuth);

  // useEffect(() => {
  //   if (token) dispatch();
  // }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
<<<<<<< HEAD
        <Route index element={<WelcomePage />} />
=======
        <Route
          index
          element={
            <div>
              Home Page <SingUpFormFormik />
            </div>
          }
        />
        <Route index element={isAuth ? <HomePage /> : <WelcomePage />} />
>>>>>>> 21d602c08570e492e521d4657866c974a7f17c25
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
