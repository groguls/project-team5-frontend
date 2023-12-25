import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { SignUpPage } from 'pages/SignUpPage';
import { SignInPage } from 'pages/SignInPage';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

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
        <Route index element={isAuth ? <HomePage /> : <h1>WelcomePage</h1>} />
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
