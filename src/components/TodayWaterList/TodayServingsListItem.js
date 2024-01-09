import { PencilSquare } from '../Icons/PencilSquare';
import { Delete } from '../Icons/Delete';
import { useDispatch } from 'react-redux';
import {
  deleteWater,
  editWater,
  getTodayInfo,
} from '../../redux/water/waterOperations';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { DeleteWater } from '../TodayListModal/DeleteWater';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

import {
  DeleteWaterContainer,
  EditWaterContainer,
  StyledGlassOfWater,
  TimeServing,
  TodayData,
  TodayIcons,
  TodayItem,
  WaterVolume,
} from './TodayServingsListItem.styled';
import { TodayListModal } from 'components/TodayListModal/TodayListModal';

export const TodayServingListItem = ({ todayList }) => {
  const dispatch = useDispatch();
  const toggleModal = useModal();
  const handleDelete = id => {
    dispatch(deleteWater(id))
      .unwrap()
      .then(data => {
        dispatch(getTodayInfo());
        toast.success('Delete success');
        toggleModal();
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  const handleEdit = id => {
    dispatch(editWater(id))
      .unwrap()
      .then(data => {
        dispatch(getTodayInfo());
        toast.success('Update success');
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
          <TimeServing>{format(new Date(todayList.date), 'HH:mm')}</TimeServing>
        </TodayData>
        <TodayIcons>
          <EditWaterContainer
            onClick={() =>
              toggleModal(
                <TodayListModal
                  size={'big'}
                  title={'Edit the entred amount of water'}
                  editEntry={() => handleEdit(todayList._id)}
                  selectedRecord={todayList}
                />
              )
            }
          >
            <PencilSquare />
          </EditWaterContainer>
          {/* <PencilSquare /> */}
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
