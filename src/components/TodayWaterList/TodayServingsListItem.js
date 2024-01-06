import { PencilSquare } from '../Icons/PencilSquare';

import { Delete } from '../Icons/Delete';
import {
  StyledGlassOfWater,
  TimeServing,
  TodayData,
  TodayIcons,
  TodayItem,
  WaterVolume,
} from './TodayServingsListItem.styled';

export const TodayServingListItem = ({ todayList }) => {
  return (
    <>
      <TodayItem>
        <TodayData>
          <StyledGlassOfWater />
          <WaterVolume>{todayList.waterVolume + ' ml'}</WaterVolume>
          <TimeServing>{todayList.time}</TimeServing>
        </TodayData>
        <TodayIcons>
          <PencilSquare />
          <Delete />
        </TodayIcons>
      </TodayItem>
    </>
  );
};
