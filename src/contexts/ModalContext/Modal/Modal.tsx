import { FC, ReactNode, useContext } from "react";
import TitleCloseBtn from "./TitleCloseBtn/TitleCloseBtn";
import ModalContext from "../ModalContext";

import { ModalDialog } from "./modal.styled";

const Modal: FC<IModal> = ({ content, isCloseBtn = true }) => {
  const { isOpenedModal, closeModal } = useContext(ModalContext);

  return (
    <ModalDialog open={isOpenedModal} onClose={closeModal}>
      {isCloseBtn ? <TitleCloseBtn /> : null}
      {content}
    </ModalDialog>
  );
};

export default Modal;

export interface IModalContent {
  content: string | ReactNode;
}

export interface IModal extends IModalContent {
  isCloseBtn?: boolean;
}

export interface IModalProvider {
  children?: ReactNode;
}
