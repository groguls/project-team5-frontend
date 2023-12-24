import { WaterConsumptionTracker } from 'components/WaterConsumptionTracker/WaterConsumptionTracker';
import { WhyDrinkWater } from 'components/WhyDrinkWater/WhyDrinkWater';

export default function WelcomePage() {
  return (
    <div>
      <h1>Welcome page</h1>
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </div>
  );
}
