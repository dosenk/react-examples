import { createContext } from "react";
import { IModal } from "./Modal/Modal";

const ModalContext = createContext<IValueModalProvider>({
  openModal: () => {},
  closeModal: () => {},
  isOpenedModal: false,
});

export default ModalContext;

export interface IValueModalProvider {
  isOpenedModal: boolean;

  closeModal(): void;

  openModal(content: IModal): void;
}
