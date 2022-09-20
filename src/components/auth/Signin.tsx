import React, { useState, useEffect } from "react";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_PASSWORD,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/Validators";
import {
  TextField,
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import "./Styles.css";
import Input from "../FormComponents/Input";
import useForm from "../hooks/FormHook";
const Signin = () => {
  const [category, setCategory] = useState<string>("Grocery");
  const [categoryTouched, setCategoryTouched] = useState<boolean>(false);

  const [formState, changeHandler] = useForm({
    inputs: {
      shopName: { value: "", isTouched: false, isValid: false },
      operaterName: { value: "", isTouched: false, isValid: false },
      shopLocation: { value: "", isTouched: false, isValid: false },
      shopCategory: { value: "", isTouched: false, isValid: false },
    },
    isValid: false,
  });

  const categoryChangeHandler = (event: SelectChangeEvent<unknown>): void => {
    setCategory(event.target.value as string);
  };
  const blurHandler = () => {
    setCategoryTouched(true);
  };
  useEffect(() => {
    let isCatValid = category !== "" && categoryTouched;
    changeHandler("shopCategory", category, categoryTouched, isCatValid);
  }, [category, categoryTouched]);
  console.log(formState);
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
          Create your shop account
        </Typography>
        <form className="form">
          <Input
            id="outlined-basic"
            label="shop-name"
            variant="outlined"
            FieldId="shopName"
            onInput={changeHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="outlined-basic"
            label="operater-name"
            variant="outlined"
            FieldId="operaterName"
            onInput={changeHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="outlined-basic"
            label="shop-location"
            variant="outlined"
            FieldId="shopLocation"
            onInput={changeHandler}
            validators={[VALIDATOR_REQUIRE()]}
          />

          <FormControl>
            <InputLabel id="shop-category-label">Category</InputLabel>
            <Select
              labelId="shop-category-label"
              id="shop-category"
              value={category}
              label="Select categoru"
              onChange={categoryChangeHandler}
              onBlur={blurHandler}
              sx={{ marginBottom: "1rem", width: "20rem" }}
            >
              <MenuItem value={"Grocery"}>Grocery</MenuItem>
              <MenuItem value={"Medical"}>Medical</MenuItem>
              <MenuItem value={"Fashion"}>Fashion</MenuItem>
              <MenuItem value={"Bakery"}>Bakery</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="success"
            disabled={!formState.isValid}
          >
            Next
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Signin;
