import { Basket } from 'components/Icons/Basket';
import { GlassOfWhater } from 'components/Icons/GlassOfWater';
import { PencilSquare } from 'components/Icons/PencilSquare';
import { Service } from 'components/Icons/Service';

export const TodayServingListItem = ({ todayList }) => {
  return (
    <li>
      <GlassOfWhater />
      <p>{todayList.waterVolume + ' ml'}</p>
      <p>{todayList.time}</p>
      <PencilSquare />
      <Basket />
    </li>
  );
};
