import AuthLayout from '../components/AuthLayout/AuthLayout';
import { SingInFormFormik } from 'components/SignInForm/SignInFormikForm';

const SignInPage = () => {
  return (
    <AuthLayout>
      <SingInFormFormik />
    </AuthLayout>
  );
};

export default SignInPage;
