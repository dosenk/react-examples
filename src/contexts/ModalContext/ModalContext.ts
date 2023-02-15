import { createContext } from "react";
import { IModal } from "./Modal/Modal";

const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  isOpenedModal: false,
} as IValueModalProvider);

export default ModalContext;

export interface IValueModalProvider {
  isOpenedModal: boolean;

  closeModal(): void;

  openModal(content: IModal): void;
}
