import React, { useEffect, useCallback, useReducer } from "react";
import { formStateType } from "../../utils/Interfaces";

type Action = {
  type: string;
  FieldId: string;
  value: string;
  isTouched: boolean;
  isValid: boolean;
};

let obj = {
  shopName: "",
  operaterName: "",
  shopLocation: "",
  shopCategory: "",
};
type objectKey = keyof typeof obj;

const formReducer = (state: formStateType, action: Action): formStateType => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const FieldId in state.inputs) {
        if (FieldId === action.FieldId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          const prop = FieldId as objectKey;
          formIsValid = formIsValid && state.inputs[prop].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.FieldId]: {
            value: action.value,
            isTouched: action.isTouched,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    default:
      return {
        ...state,
        isValid: false,
      };
  }
};
const useForm = (
  state: formStateType
): [
  formStateType,
  (FieldId: string, value: string, isTouched: boolean, isValid: boolean) => any
] => {
  const [formState, dispatch] = useReducer(formReducer, state);
  const changeHandler = useCallback(
    (FieldId: string, value: string, isTouched: boolean, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", FieldId, value, isTouched, isValid });
    },
    []
  );

  return [formState, changeHandler];
};

export default useForm;
