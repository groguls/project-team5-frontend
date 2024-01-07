import Lottie from 'lottie-react';
import WaterLoading from '../../img/animation/WaterLoading.json';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Lottie animationData={WaterLoading} loop />
    </LoaderContainer>
  );
};
