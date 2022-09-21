import React, { useState, useEffect, useReducer } from "react";
import { TextField } from "@mui/material";
import { validate } from "../../utils/Validators";
import { inputProps, Action,stateType } from "../../utils/Interfaces";



const inputReducer = (state: stateType, action: Action): stateType => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.payload.value,
        isValid: validate(action.payload.value, action.payload.validators),
      };
    case "TOUCHED":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return {
        ...state,
        isValid: false,
      };
  }
};
const Input = ({
  id,
  label,
  variant,
  FieldId,
  onInput,
  type,
  defaultValue,
  validators,
}: inputProps) => {
  let initialState: stateType = {
    value: "",
    isTouched: false,
    isValid: false,
  };
  const [state, dispatch] = useReducer(inputReducer, initialState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      payload: { value: e.target.value, validators: validators },
    });
  };

  console.log(defaultValue)
  const blurHandler = () => {
    dispatch({ type: "TOUCHED", payload: { value: "", validators } });
  };

  const {value, isTouched, isValid} = state;

  useEffect(() => {
    onInput(FieldId, value, isTouched, isValid)
  }, [value, isTouched, isValid])
  return (
    <TextField
      error={!state.isValid && state.isTouched}
      id={!state.isValid && state.isTouched ? "outlined-error" : id}
      label={label}
      variant={variant}
      type={type || 'text'}
      value={defaultValue ? defaultValue : ''}
      sx={{ marginBottom: "1rem", width: "20rem" }}
      helperText={
        !state.isValid && state.isTouched
          ? `${FieldId} is not valid, please check`
          : ""
      }
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
};

export default Input;
