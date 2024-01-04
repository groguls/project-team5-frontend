import { TodayServingsList } from './TodayServingsList';

export const TodayWaterList = () => {
  return (
    <div>
      <h3>Today</h3>
      <TodayServingsList />
      <button type="button">+ Add water</button>
    </div>
  );
};
