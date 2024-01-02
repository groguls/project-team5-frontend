import { Modal } from 'components/Modal/Modal';
import { ModalBox } from 'components/ModalBox/ModalBox';
// import { modalSizes } from 'components/ModalBox/modalSize';
import { PreviousWaterData } from './PreviousWaterData';
import { CorrectionOfEnteredWaterData } from './CorrectionOfEnteredWaterData';
import Button from 'components/Button/Button';
import { SaveBtnBox } from './TodayListModal.styled';

export const TodayListModal = () => {
  const saveEditWaterData = () => {};

  return (
    <Modal style={{ width: '592px' }}>
      <ModalBox
        title={' Edit the entered amount of water'}
        // $size={{ width: '592px' }}
      >
        <PreviousWaterData />
        <CorrectionOfEnteredWaterData />
        <SaveBtnBox>
          <p>250 ml</p>
          <Button
            label={'Save'}
            onClick={saveEditWaterData}
            //    width={160px}
            //   backgroundColor={ Blue}
            //   textColor={White }
          />
        </SaveBtnBox>
      </ModalBox>
    </Modal>
  );
};
