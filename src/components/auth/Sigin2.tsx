import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import Input from "../FormComponents/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/Validators";
import { useLocation } from "react-router-dom";
import useForm from "../hooks/FormHook";
const Sigin2 = () => {
  const [formState, changeHandler] = useForm({
    inputs: {
      email: { value: "", isTouched: "", isValid: false },
      password: { value: "", isTouched: "", isValid: false },
    },
    isValid: false,
  });

  const location = useLocation();

  console.log(location.pathname);

  const createAccount = () => {
    if (location.pathname === "/signin") {
      console.log("signin:", formState.inputs);
    }
    if (location.pathname === "/login") {
      console.log("login:", formState.inputs);
    }
  };
  return (
    <Box
      sx={{
        paddingTop: "6rem",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={4} className="form-paper">
        <Typography variant="h6" mb={1}>
          {location.pathname === "/signin"
            ? "Create your shop account"
            : "Login"}
        </Typography>
        <form className="form">
          <Input
            id="outlined-basic"
            label="email address"
            variant="outlined"
            FieldId="email"
            type="text"
            onInput={changeHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          />
          <Input
            id="outlined-basic"
            label="password"
            variant="outlined"
            FieldId="password"
            type="password"
            onInput={changeHandler}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          />

          <Button
            variant="contained"
            color="success"
            disabled={!formState.isValid}
            onClick={createAccount}
          >
            {location.pathname === "/signin"
              ? "Create your shop account"
              : "Login"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Sigin2;
