import React, { FC, useCallback, useMemo, useState } from "react";
import ModalContext, { IValueModalProvider } from "./ModalContext";
import Modal, { IModal, IModalProvider } from "./Modal/Modal";

const ModalProvider: FC<IModalProvider> = ({ children }) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [modalContent, setModalContent] = useState<IModal>({
    content: "",
    isCloseBtn: true,
  });

  const openModal = useCallback((content: IModal): void => {
    // @ts-ignore
    setModalContent(content);
    setIsOpenedModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenedModal(false);
  }, []);

  const valueModalProvider: IValueModalProvider = useMemo(
    () => ({
      openModal,
      closeModal,
      isOpenedModal,
    }),
    [openModal, closeModal, isOpenedModal]
  );

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {isOpenedModal && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
