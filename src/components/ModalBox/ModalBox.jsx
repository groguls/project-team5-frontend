import { Close } from 'components/Icons/Close';

import { CloseModal, DivModalBox, DivTitleWrapper } from './ModalBox.styled';
import { useModal } from '../ModalContextProvider/ModalContextProvider';

export const ModalBox = ({ children, title, size, isLogoModal = false }) => {
  const toggleModal = useModal();

  return (
    <DivModalBox $size={size}>
      {!isLogoModal && (
        <DivTitleWrapper>
          <h2>{title}</h2>
          <CloseModal type="button" onClick={() => toggleModal()}>
            <Close />
          </CloseModal>
        </DivTitleWrapper>
      )}
      {children}
    </DivModalBox>
  );
};
