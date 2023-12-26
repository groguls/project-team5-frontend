import Typography from 'components/Typography/Typography';
import { WhyDrinkWaterContainer } from './WhyDrinkWater.styled';

export const WhyDrinkWater = () => {
  return (
    <WhyDrinkWaterContainer>
      <Typography styled={'ListTitle'}>Why drink water</Typography>
      <ul>
        <li>
          <Typography styled={'Text'}>
            Supply of nutrients to all organs
          </Typography>
        </li>
        <li>
          <Typography styled={'Text'}>Providing oxygen to the lungs</Typography>
        </li>
        <li>
          <Typography styled={'Text'}>
            Maintaining the work of the heart
          </Typography>
        </li>
        <li>
          <Typography styled={'Text'}>
            Release of processed substances
          </Typography>
        </li>
        <li>
          <Typography styled={'Text'}>
            Ensuring the stability of the internal environment
          </Typography>
        </li>
        <li>
          <Typography styled={'Text'}>
            Maintaining within the normal temperature
          </Typography>
        </li>
        <li>
          <Typography styled={'Text'}>
            Maintaining an immune system capable of resisting disease
          </Typography>
        </li>
      </ul>
    </WhyDrinkWaterContainer>
  );
};
