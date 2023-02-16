import React, { useContext, useEffect } from "react";
import "./App.css";
import ModalContext from "../../contexts/ModalContext/ModalContext";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/useStore";
// import { signInApi } from "../../api/auth/auth.api";
import { signIn } from "../../store/user/user.actions";

const App = () => {
  const dispatch = useAppDispatch();
  const { openModal } = useContext(ModalContext); // toDo asdas

  const handleClick = () => {
    // signInApi({ username: "kdulyt", password: "5t6q4KC7O" }).then((data) => {
    //   console.log(data);
    // });
    console.log(signIn);
    // openModal({
    //   content: (
    //     <div style={{ width: "200px", height: "200px", background: "#ffffff" }}>
    //       Modal

    //     </div>
    //   ),
    // });
    // dispatch(signIn({ username: "kdulyt", password: "5t6q4KC7O" })).then(
    //   (res) => {
    //     console.log(res);
    //   }
    // );
  };

  return (
    <div className="App">
      <Button onClick={handleClick} variant="contained">
        OpenModal
      </Button>
    </div>
  );
};

export default App;
