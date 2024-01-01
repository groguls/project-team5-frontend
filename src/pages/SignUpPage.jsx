import { SingUpFormFormik } from 'components/SingUpForm/SingUpFormikForm';
import AuthLayout from '../components/AuthLayout/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SingUpFormFormik />
    </AuthLayout>
  );
};

export default SignUpPage;
