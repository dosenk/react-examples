import React, { FC, useContext, useEffect, useRef } from "react";
import {
  ModalActions,
  ModalContent,
  ModalTitle,
} from "../../contexts/ModalContext/Modal/modal.styled";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ModalContext from "../../contexts/ModalContext/ModalContext";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import UiFormInput from "../UI/UiFormInput/UiFormInput";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { signIn } from "../../store/user/user.actions";
import { DEFAULT_VALUES, schema } from "./LoginFormModal.constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSelector } from "../../store/user/user.selector";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const LoginFormModal: FC<ILoginFormModal> = () => {
  const dispatch = useAppDispatch();
  // const { setAuth, setUser, setLoading, setError } = useActions(userActions);
  const { closeModal } = useContext(ModalContext);
  const { loading, error } = useAppSelector(userSelector);
  // const abortControllerRef = useRef<AbortController>(new AbortController());
  const abortController = useRef<any>(null);

  const methods = useForm<IFormValues>({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
  });

  const handleSave: SubmitHandler<IFormValues> = async (values) => {
    abortController.current = dispatch(signIn(values));
    // const res = await signInApi(values, {
    //   signal: abortControllerRef.current.signal,
    // });
    // console.log(res);
    // setLoading(true);
    // signInApi(values)
    //   .then((data) => {
    //     const { token, ...userData } = data;
    //     setAuthToken(token);
    //     dispatch(userActions.setAuth(true));
    //     // setAuth(true);
    //     setLoading(false);
    //     setUser(userData);
    //   })
    //   .catch((e: any) => {
    //     setLoading(false);
    //     setError(e?.response?.data?.message);
    //   });
  };

  useEffect(() => {
    return () => {
      abortController?.current?.abort();
      // abortControllerRef.current.abort();
    };
  }, []);

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: "700px" }}>
        <form id="loginForm">
          <ModalTitle>Auth Form</ModalTitle>
          <ModalContent
            dividers
            sx={{
              padding: "10px 0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <ErrorBoundary>
              <UiFormInput name="username" variant="standard" label="Login" />
              <UiFormInput
                name="password"
                variant="standard"
                label="Password"
              />
            </ErrorBoundary>
            <Box color="red">{error}</Box>
          </ModalContent>
          <ModalActions>
            <Button variant="outlined" disabled={loading} onClick={closeModal}>
              Cancel
            </Button>
            <LoadingButton
              sx={{ width: "130px" }}
              variant="contained"
              onClick={methods.handleSubmit(handleSave)}
              loading={loading}
              endIcon={<SaveIcon sx={{ display: "none" }} />}
              loadingPosition="end"
            >
              Login
            </LoadingButton>
          </ModalActions>
        </form>
      </Box>
    </FormProvider>
  );
};

export default React.memo(LoginFormModal);

export interface ILoginFormModal {}

export interface IFormValues {
  username: string;
  password: string;
}
