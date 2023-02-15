import { createContext, ReactNode } from "react";
import { TAnchor } from "./Drawer/TemporaryDrawer";

const DrawerContext = createContext({
  openDrawer: () => {},
  closeDrawer: () => {},
  isOpenedDrawer: false,
} as IValueDrawerProvider);

export default DrawerContext;

export interface IValueDrawerProvider {
  isOpenedDrawer: boolean;

  closeDrawer(): void;

  openDrawer(content: IDrawer): void;
}

export interface IDrawer extends IDrawerContent {
  isCloseBtn?: boolean;
  anchor?: TAnchor;
}

export interface IDrawerContent {
  content: string | ReactNode;
}
