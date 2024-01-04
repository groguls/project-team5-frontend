import { GlassOfWater } from '../Icons/GlassOfWater';
import { PencilSquare } from '../Icons/PencilSquare';

export const TodayServingListItem = ({ todayList }) => {
  return (
    <>
      <li>
        <GlassOfWater />
        <p>{todayList.waterVolume + ' ml'}</p>
        <p>{todayList.time}</p>
        <PencilSquare />
      </li>
    </>
  );
};
