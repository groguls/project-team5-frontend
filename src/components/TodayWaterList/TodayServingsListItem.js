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
import { EditWaterModal } from 'components/AddWaterModal/EditWaterModal';

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
  const date = new Date(todayList.date);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  const formattedTime = `${hours}:${minutes}`;
  return (
    <>
      <TodayItem>
        <TodayData>
          <StyledGlassOfWater />
          <WaterVolume>{todayList.waterVolume + ' ml'}</WaterVolume>
          <TimeServing>{formattedTime}</TimeServing>
        </TodayData>
        <TodayIcons>
          <EditWaterContainer
            onClick={() =>
              toggleModal(
                <EditWaterModal
                  size={'medium'}
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
