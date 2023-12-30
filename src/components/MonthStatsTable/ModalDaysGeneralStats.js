import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';

const modalRoot = document.querySelector(`#modal-root`);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalDaysGeneralStats = ({ isClose, children, open }) => {
  console.log('modal');
  useEffect(() => {
    const isCloseEscape = e => {
      if (e.code === `Escape`) {
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
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>,
    modalRoot
  );
};
