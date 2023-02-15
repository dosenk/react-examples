import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalTitle = styled(DialogTitle)`
  display: flex;
  justify-content: center;
  padding: 16px 15px;
`;

export const ModalContent = styled(DialogContent)`
  padding: 0;
  margin: 15px;
`;

export const ModalActions = styled(DialogActions)`
  padding: 0;
  margin: 15px;
`;

export const ModalDivider = styled(Divider)`
  height: 1px;
`;

export const ModalDialog = styled(Dialog)`
  & .MuiDialog-paper {
    max-width: fit-content;
  }
`;
