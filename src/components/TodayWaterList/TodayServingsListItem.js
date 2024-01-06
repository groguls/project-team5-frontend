import { PencilSquare } from '../Icons/PencilSquare';
import { Delete } from '../Icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/waterOperations';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { DeleteWater } from '../TodayListModal/DeleteWater';
import toast from 'react-hot-toast';

import {
  DeleteWaterContainer,
  StyledGlassOfWater,
  TimeServing,
  TodayData,
  TodayIcons,
  TodayItem,
  WaterVolume,
} from './TodayServingsListItem.styled';

export const TodayServingListItem = ({ todayList }) => {
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleDelete = id => {
    dispatch(deleteWater(id))
      .unwrap()
      .then(data => {
        toast.success('Delete success');
        toggleModal();
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };
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
          <DeleteWaterContainer
            onClick={() =>
              toggleModal(
                <DeleteWater
                  size={'small'}
                  title={'Delete entry'}
                  deleteEntry={() => handleDelete(todayList._id)}
                />
              )
            }
          >
            <Delete />
          </DeleteWaterContainer>
        </TodayIcons>
      </TodayItem>
    </>
  );
};
