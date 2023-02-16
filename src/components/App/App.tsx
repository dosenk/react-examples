import React, { useCallback, useContext } from "react";
import "./App.css";
import ModalContext from "../../contexts/ModalContext/ModalContext";
import { Button } from "@mui/material";
import { useAppSelector } from "../../hooks/useStore";
import ShowInfoModal from "../LoginFormModal/LoginFormModal";
import TestContext from "../../contexts/TestContext/TestContext";
import TestComponent from "../TestComponent/TestComponent";
import { userSelector } from "../../store/user/user.selector";

const App = () => {
  const { isAuth, user, loading } = useAppSelector(userSelector);
  const { openModal } = useContext(ModalContext);
  // const { openDrawer } = useContext(DrawerContext);
  console.log(loading, user, isAuth);
  const handleClick = useCallback(() => {
    openModal({
      content: <ShowInfoModal />,
    });
    // openDrawer({
    //   content: <LoginFormModal handleSetValue={handleSetValue} />,
    // });
  }, []);

  return (
    <TestContext.Provider value={""}>
      <div className="App">
        <Button onClick={handleClick} variant="contained">
          Open AuthModal
        </Button>
      </div>
      <TestComponent />
    </TestContext.Provider>
  );
};

export default App;
