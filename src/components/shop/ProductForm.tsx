import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import Input from "../FormComponents/Input";
import useForm from "../hooks/FormHook";
const ProductForm = () => {
  const [formState, changeHandler] = useForm({
    inputs: {
      name: { value: "", isTouched: false, isValid: false },
      price: { value: 0, isTouched: false, isValid: false },
      defaultQuantity: { value: 0, isTouched: false, isValid: false },
    },
    isValid: false
  });

  const addProduct = () => {

  }
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
          Add Product
        </Typography>
        <form className="form">
          <Input
            id="outlined-basic"
            label="product name"
            variant="outlined"
            FieldId="name"
            type="text"
            onInput={changeHandler}
            validators={[]}
          />
          <Input
            id="outlined-basic"
            label="product price"
            variant="outlined"
            FieldId="price"
            type="number"
            onInput={changeHandler}
            validators={[]}
          />
          <Input
            id="outlined-basic"
            label="default quantity"
            variant="outlined"
            FieldId="quantity"
            type="number"
            onInput={changeHandler}
            validators={[]}
          />
        
          

          <Button
            variant="contained"
            color="success"
            disabled={!formState.isValid}
            onClick={addProduct}
          >
            Add
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default ProductForm;
