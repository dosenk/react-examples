import React, { FC, ReactNode, useCallback, useMemo, useState } from "react";
import DrawerContext, { IDrawer, IValueDrawerProvider } from "./DrawerContext";
import TemporaryDrawer from "./Drawer/TemporaryDrawer";

const DrawerProvider: FC<IDrawerProvider> = ({ children }) => {
  const [isOpenedDrawer, setIsOpenedDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<IDrawer>({
    content: "",
    isCloseBtn: true,
    anchor: "right",
  });

  const openDrawer = useCallback((data: IDrawer): void => {
    setIsOpenedDrawer(true);
    setDrawerContent((val) => ({ ...val, ...data }));
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpenedDrawer(false);
  }, []);

  const valueDrawerProvider: IValueDrawerProvider = useMemo(
    () => ({
      openDrawer,
      closeDrawer,
      isOpenedDrawer,
    }),
    [openDrawer, closeDrawer, isOpenedDrawer],
  );

  return (
    <DrawerContext.Provider value={valueDrawerProvider}>
      <TemporaryDrawer {...drawerContent} />
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;

export interface IDrawerProvider {
  children: ReactNode;
}
