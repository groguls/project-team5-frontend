import { PencilSquare } from '../Icons/PencilSquare';
import { Delete } from '../Icons/Delete';
import { useDispatch } from 'react-redux';
import {
  deleteWater,
  // editWater
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
// import { TodayListModal } from '../TodayListModal/TodayListModal';

export const TodayServingListItem = ({ todayList }) => {
  const dispatch = useDispatch();
  const toggleModal = useModal();

  // const handleLiClick = () => {
  //   toggleModal();
  // };

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

  // const handleEdit = id => {
  //   dispatch(editWater(id))
  //     .unwrap()
  //     .then(data => {
  //       toast.success('Update success');
  //       toggleModal();
  //     })
  //     .catch(() => {
  //       toast.error('Something went wrong');
  //     });
  // };

  return (
    <>
      <TodayItem>
        {/* <button
          style={{ width: '24px', height: '24px', background: 'blue' }}
          onClick={() =>
            toggleModal(
              <TodayListModal
                size={'medium'}
                title="Edit the entered amount of water"
                editEntry={() => handleEdit(todayList._id)}
                selectedRecord={todayList}
              />
            )
          }
        /> */}
        <TodayData>
          <StyledGlassOfWater />
          <WaterVolume>{todayList.waterVolume + ' ml'}</WaterVolume>
          <TimeServing>{todayList.time}</TimeServing>
        </TodayData>
        <TodayIcons>
          <EditWaterContainer>
            {/*  */}
            <PencilSquare />
          </EditWaterContainer>
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
