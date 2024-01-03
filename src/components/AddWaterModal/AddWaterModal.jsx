import { Modal } from 'components/Modal/Modal';
import { ModalBox } from 'components/ModalBox/ModalBox';
import { AmountOfWater } from './AmountOfWater';
import { AddWaterTime } from './AddWaterTime';
import { AddEnterValueWater } from './AddEnterValueWater';
import { SaveBtn } from './SaveBtn';

export const AddWaterModal = () => {
  return (
    <Modal>
      <ModalBox title={'Add water'}>
        <AmountOfWater />
        <AddWaterTime />
        <AddEnterValueWater />
        <SaveBtn />
      </ModalBox>
    </Modal>
  );
};
