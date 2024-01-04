import { useModal } from '../ModalContextProvider/ModalContextProvider';
import {
  ButtonContainer,
  CancelBtn,
  DeleteBtn,
  DeleteCaption,
} from './TodayListModal.styled';

export const DeleteWater = ({ deleteEntry }) => {
  const toggleModal = useModal();

  return (
    <>
      <DeleteCaption>Are you sure you want to delete the entry?</DeleteCaption>
      <ButtonContainer>
        <CancelBtn onClick={() => toggleModal()}>Cancel</CancelBtn>
        <DeleteBtn onClick={deleteEntry}>Delete</DeleteBtn>
      </ButtonContainer>
    </>
  );
};
