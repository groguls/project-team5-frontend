import { Modal } from 'components/Modal/Modal';
import { ModalBox } from 'components/ModalBox/ModalBox';
import { PreviousWaterData } from './PreviousWaterData';
import { AmountOfWater } from './AmountOfWater';
import { SaveBtn } from './SaveBtn';
import { EditEnterValueWater } from './EditEnterValueWater';

export const TodayListModal = () => {
  return (
    <Modal>
      <ModalBox title={' Edit the entered amount of water'}>
        <PreviousWaterData />
        <AmountOfWater />
        <EditEnterValueWater />
        <SaveBtn />
      </ModalBox>
    </Modal>
  );
};
