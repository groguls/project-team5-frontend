import { Modal } from 'components/Modal/Modal';
import { ModalBox } from 'components/ModalBox/ModalBox';
import { modalSizes } from 'components/ModalBox/modalSize';
import Button from 'components/Button/Button';
import { AmountOfWater } from './AmountOfWater';
import { SaveBtnBox, SavedValue } from './AddWaterModal.styled';

export const AddWaterModal = () => {
  const savedWaterData = () => {};
  console.log('AddWaterModal modalSizes.xl.small:', modalSizes);
  return (
    <Modal>
      <ModalBox title={'Add water'} $size={modalSizes.xl.medium}>
        <AmountOfWater />
        <SaveBtnBox>
          <SavedValue>50 ml</SavedValue>
          <Button
            label={'Save'}
            onClick={savedWaterData}
            //    width={160px}
            //   backgroundColor={ Blue}
            //   textColor={White }
          />
        </SaveBtnBox>
      </ModalBox>
    </Modal>
  );
};
