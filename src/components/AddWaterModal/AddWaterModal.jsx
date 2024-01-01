import { Modal } from 'components/Modal/Modal';
import { ModalBox } from 'components/ModalBox/ModalBox';
import { modalSizes } from 'components/ModalBox/modalSize';
import Button from 'components/Button/Button';
import { AmountOfWater } from './AmountOfWater';
import { SaveBtnBox } from './AddWaterModal.styled';

export const AddWaterModal = () => {
  const savedWaterData = () => {};

  return (
    <Modal>
      <ModalBox title={'Add water'} $size={(modalSizes, 'xl')}>
        <AmountOfWater />
        <SaveBtnBox>
          <p>50 ml</p>
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
