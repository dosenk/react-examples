import { alpha, Box, InputBase, styled } from "@mui/material";

export const PageWrap = styled(Box)`
  & .MuiTableContainer-root {
    overflow-x: unset;
    overflow: unset;
  }
`;

export const FilterBlock = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-end;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
  padding: 5px;

  > div {
    width: auto;
    flex: 1 1;
    margin-bottom: 0;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const BootstrapInput = styled(InputBase)(({ theme, about }) => ({
  position: "relative",
  display: "flex",
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: about === "image" ? "10px 12px 10px 30px" : "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
