import { WaterConsumptionTracker } from 'components/WaterConsumptionTracker/WaterConsumptionTracker';
import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';
import { WelcomePageContainer } from './WelcomePage.styled';
import { MainContainer } from '../HomePage/HomePage.styled';
import { Container } from '../../styles/GlobalStyle';

export default function WelcomePage() {
  return (
    <MainContainer $page="welcome">
      <Container>
        <WelcomePageContainer>
          <WaterConsumptionTracker />
          <WhyDrinkWater />
        </WelcomePageContainer>
      </Container>
    </MainContainer>
  );
}
