import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useContext } from "react";
import ModalContext from "../../ModalContext";

const TitleCloseBtn = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <Box
      onClick={closeModal}
      style={{
        position: "absolute",
        top: "7px",
        right: "7px",
        cursor: "pointer",
      }}
    >
      <CloseIcon />
    </Box>
  );
};

export default TitleCloseBtn;
