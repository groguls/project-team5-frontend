import { Calendar } from 'components/Icons/Calendar';
import { Presentation } from 'components/Icons/Presentation';
import { Service } from 'components/Icons/Service';
import Typography from 'components/Typography/Typography';

export const WaterConsumptionTracker = () => {
  return (
    <div>
      <Typography>Water consumption tracker</Typography>
      <Typography>Record daily water intake and track</Typography>
      <Typography>Tracker Benefits</Typography>
      <ul>
        <li>
          <div>
            <Calendar />
            <Typography>Habit drive</Typography>
          </div>
        </li>
        <li>
          <div>
            <Presentation />
            <Typography>View statistic</Typography>
          </div>
        </li>
        <li>
          <div>
            <Service />
            <Typography>Personal rate setting</Typography>
          </div>
        </li>
      </ul>
      <button>Try tracker</button>
    </div>
  );
};
