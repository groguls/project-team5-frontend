import { createContext, useCallback, useContext, useState } from 'react';
import { Overley } from '../Overley/Overley';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = useCallback((modal = null) => {
    setModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={toggleModal}>
      {children}
      {modal && <Overley>{modal}</Overley>}
    </ModalContext.Provider>
  );
};
