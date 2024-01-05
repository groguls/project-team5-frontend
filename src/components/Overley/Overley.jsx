import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';

import { useModal } from '../ModalContextProvider/ModalContextProvider';
import { ModalBox } from '../ModalBox/ModalBox';
import { OverlayStyle } from './Overley.styled';

export const Overley = ({ children }) => {
  const toggleModal = useModal();

  const backdropClick = e => {
    if (e.target === e.currentTarget) toggleModal();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <OverlayStyle
      $isLogoModal={children.props.isLogoModal}
      onClick={backdropClick}
    >
      {children.props.isLogoModal ? (
        children
      ) : (
        <ModalBox {...children.props}>{children}</ModalBox>
      )}
    </OverlayStyle>,
    document.body
  );
};
