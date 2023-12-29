import { useEffect } from 'react';
import { Backdrop, StyledModal } from './Modal.styled';

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscKeyDown = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <StyledModal>{children}</StyledModal>
    </Backdrop>
  );
};
