import Lottie from 'lottie-react';
import { createPortal } from 'react-dom';

import WaterLoading from '../../img/animation/WaterLoading.json';
import { SignInLoaderContainer } from './Loader.styled';

const style = {
  width: 300,
  height: 300,
};

export const SignInLoader = () => {
  return createPortal(
    <SignInLoaderContainer>
      <Lottie animationData={WaterLoading} loop style={style} />
    </SignInLoaderContainer>,
    document.body
  );
};
