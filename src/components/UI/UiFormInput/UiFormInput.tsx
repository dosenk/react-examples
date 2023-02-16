import React, { FC, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from "@mui/material";
import { OutlinedInputProps } from "@mui/material/OutlinedInput/OutlinedInput";
import { FormControlProps } from "@mui/material/FormControl/FormControl";

const UiFormInput: FC<TUiFormInput> = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { name, label, variant, placeholder } = props;
  const errorText = (errors[name]?.message ?? "") as string;
  useEffect(() => {
    throw new Error();
  }, []);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormControl variant={variant} id={`${name}Form`}>
            <FormLabel error={!!errorText}>{label}</FormLabel>
            <OutlinedInput
              {...field}
              placeholder={placeholder}
              error={!!errors[name]}
              aria-describedby={name}
            />
            <FormHelperText error={!!errorText} id={name}>
              {errorText}
            </FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default UiFormInput;

type TUiFormInput = {
  name: string;
} & OutlinedInputProps &
  FormControlProps;
