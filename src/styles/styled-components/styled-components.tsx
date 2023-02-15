import { Chip, styled } from "@mui/material";

// eslint-disable-next-line import/prefer-default-export
export const StyledChip = styled(Chip)<{
  bgcolor?: string;
  textcolor?: string;
}>`
  color: ${({ theme, textcolor }: any) => {
    switch (textcolor) {
      case "warning.text":
        return theme.palette.warning.text;
      case "error.main":
        return theme.palette.error.main;
      default:
        return "#065F46";
    }
  }};
  width: 80px;
  height: 24px;
  border-radius: 6px;
  background-color: ${({ theme, bgcolor }: any) => {
    switch (bgcolor) {
      case "warning.main":
        return theme.palette.warning.main;
      case "error.light":
        return theme.palette.error.light;
      default:
        return theme.palette.secondary.main;
    }
  }};
`;
