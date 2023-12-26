import { Calendar } from 'components/Icons/Calendar';
import { Presentation } from 'components/Icons/Presentation';
import { Service } from 'components/Icons/Service';
import Typography from 'components/Typography/Typography';
import {
  ListContainer,
  ListItemContainer,
  WaterConsumptionTrackerContainer,
} from './WaterConsumptionTracker.styled';
import Button from 'components/Button/Button';

export const WaterConsumptionTracker = () => {
  return (
    <WaterConsumptionTrackerContainer>
      <Typography styled={'MainTitle'}>Water consumption tracker</Typography>
      <Typography styled={'Subtitle'}>
        Record daily water intake and track
      </Typography>
      <Typography styled={'ListTitle'}>Tracker Benefits</Typography>
      <ul>
        <ListContainer>
          <li>
            <ListItemContainer>
              <Calendar />
              <Typography styled={'Text'}>Habit drive</Typography>
            </ListItemContainer>
          </li>
          <li>
            <ListItemContainer>
              <Presentation />
              <Typography styled={'Text'}>View statistic</Typography>
            </ListItemContainer>
          </li>
          <li>
            <ListItemContainer>
              <Service />
              <Typography styled={'Text'}>Personal rate setting</Typography>
            </ListItemContainer>
          </li>
        </ListContainer>
      </ul>
      <Button label={'Try tracker'} width={'324px'} />
    </WaterConsumptionTrackerContainer>
  );
};
