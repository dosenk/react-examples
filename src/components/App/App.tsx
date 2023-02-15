import React, { useContext } from "react";
import "./App.css";
import ModalContext from "../../contexts/ModalContext/ModalContext";
import { Button } from "@mui/material";

function App() {
  const { openModal } = useContext(ModalContext); // toDo asdas

  const handleClick = () => {
    openModal({
      content: (
        <div style={{ width: "200px", height: "200px", background: "#ffffff" }}>
          Modal
        </div>
      ),
    });
  };

  return (
    <div className="App">
      <Button onClick={handleClick} variant="contained">
        OpenModal
      </Button>
    </div>
  );
}

export default App;
