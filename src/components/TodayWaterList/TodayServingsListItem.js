import { GlassOfWater } from '../Icons/GlassOfWater';
import { PencilSquare } from '../Icons/PencilSquare';
import { useDispatch } from 'react-redux';
import { deleteWater } from '../../redux/water/waterOperations';
import { useModal } from '../ModalContextProvider/ModalContextProvider';
import toast from 'react-hot-toast';
import { Delete } from '../Icons/Delete';
import { DeleteWater } from '../TodayListModal/DeleteWater';
import { DeleteWaterContainer } from './TodayServingsListItem.styled';

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
    <li>
      <GlassOfWater />
      <p>{todayList.waterVolume + ' ml'}</p>
      <p>{todayList.time}</p>
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
    </li>
  );
};
