import { PencilSquare } from '../Icons/PencilSquare';

// import { Basket } from '../Icons/Basket';
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
          {/* <Basket /> */}
        </TodayIcons>
      </TodayItem>
    </>
  );
};
