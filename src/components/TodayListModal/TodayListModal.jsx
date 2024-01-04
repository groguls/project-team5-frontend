import { Modal } from 'components/Modal/Modal';
import { ModalBox } from 'components/ModalBox/ModalBox';
import { PreviousWaterData } from './PreviousWaterData';
import { CorrectionOfEnteredWaterData } from './CorrectionOfEnteredWaterData';
import { SaveBtn } from './SaveBtn';

export const TodayListModal = () => {
  return (
    <Modal>
      <ModalBox title={' Edit the entered amount of water'}>
        <PreviousWaterData />
        <CorrectionOfEnteredWaterData />
        <SaveBtn />
      </ModalBox>
    </Modal>
  );
};
