import { Close } from 'components/Icons/Close';

import { DivModalBox, DivTitleWrapper } from './ModalBox.styled';
import { useModal } from '../ModalContextProvider/ModalContextProvider';

export const ModalBox = ({ children, title, size, isLogoModal = false }) => {
  const toggleModal = useModal();

  return (
    <DivModalBox $size={size}>
      {!isLogoModal && (
        <DivTitleWrapper>
          <h2>{title}</h2>
          <Close style={{ cursor: 'pointer' }} onClick={() => toggleModal()} />
        </DivTitleWrapper>
      )}
      {children}
    </DivModalBox>
  );
};
