import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/mainTheme";
import { store } from "./store/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ModalProvider from "./contexts/ModalContext/ModalContextProvider";
import DrawerProvider from "./contexts/DrawerContext/DrawerContextProvider";
import { Flip, ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ModalProvider>
                <DrawerProvider>
                  <CssBaseline />
                  <App />
                  <ToastContainer
                    transition={Flip}
                    autoClose={1800}
                    hideProgressBar
                    draggable={false}
                    theme="colored"
                  />
                </DrawerProvider>
              </ModalProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </DevSupport>
  </React.StrictMode>
);
