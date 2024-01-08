

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import { CloseModal } from 'components/ModalBox/ModalBox.styled';
import { Close } from 'components/Icons/Close';

const modalRoot = document.querySelector(`#modal-root`);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: 292,
  bgcolor: '#ffffff',
  border: 'none',
  borderRadius: 1,
  boxShadow: '0px 4px 4px 0px rgba(64, 123, 255, 0.30)',
  padding: '24px 16px',
};

const backdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'transparent', 
  transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) visibility 250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const CloseButtonStyle = {
  position: 'absolute',
  top: '24px',
  right: '16px',
  cursor: 'pointer',
  weight: '24px',
  height: '24px',
};

export const ModalDaysGeneralStats = ({ isClose, children, open }) => {
  useEffect(() => {
    const isCloseEscape = (e) => {
      if (e.code === 'Escape') {
        isClose();
      }
    };
    window.addEventListener('keydown', isCloseEscape);

    return () => {
      window.removeEventListener('keydown', isCloseEscape);
    };
  }, [isClose]);

  return createPortal(
    <Modal
      open={open}
      onClose={isClose}
      BackdropComponent={(props) => <div style={{ ...backdropStyle, ...props.style }} onClick={isClose} />}
    >
      <Box sx={style}>
        {children}
        <CloseModal type='button' onClick={isClose} style={CloseButtonStyle}>
        <Close />
        </CloseModal>
        </Box>
    </Modal>,
    modalRoot
  );
};



