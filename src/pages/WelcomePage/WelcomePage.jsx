import { WaterConsumptionTracker } from 'components/WaterConsumptionTracker/WaterConsumptionTracker';
import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WelcomePageContainer } from './WelcomePage.styled';
import { MainContainer } from '../HomePage/HomePage.styled';
// import { Loader } from 'components/Loader/Loader';

export default function WelcomePage() {
  return (
    <MainContainer $page="welcome">
      <WelcomePageContainer>
        {/* <Loader>Loading...</Loader> */}
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      </WelcomePageContainer>
    </MainContainer>
  );
}
