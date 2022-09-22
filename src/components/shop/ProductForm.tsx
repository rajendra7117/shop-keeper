import React, { useEffect } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import Input from "../FormComponents/Input";
import useForm from "../hooks/FormHook";
import { VALIDATOR_REQUIRE, VALIDATOR_MIN } from "../../utils/Validators";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";
import { GlobalFormBoxSx } from "../../Styles";

const ProductForm = () => {
  const isEditing = useSelector((state: rootState) => state.products.isEditing);

  const product = useSelector(
    (state: rootState) => state.products.editingProduct
  );

  console.log(product.name);

  const [formState, changeHandler] = useForm({
    inputs: {
      name: {
        value: isEditing ? product.name : "",
        isTouched: false,
        isValid: false,
      },
      price: {
        value: isEditing ? product.price : 0,
        isTouched: false,
        isValid: false,
      },
      defaultQuantity: {
        value: isEditing ? 1 : 0,
        isTouched: false,
        isValid: false,
      },
    },
    isValid: false,
  });

  useEffect(() => {
    if (isEditing) {
      changeHandler("name", product.name, false, true);
      changeHandler("price", product.price, false, true);
      changeHandler("defaultQuantity", "1", false, true);
    }
  }, [isEditing]);
  const addProduct = () => {};
  return (
    <Box
      sx={GlobalFormBoxSx}
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
            defaultValue={formState.inputs.name.value}
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            id="outlined-basic"
            label="product price"
            variant="outlined"
            FieldId="price"
            type="number"
            onInput={changeHandler}
            defaultValue={formState.inputs.price.value}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(2)]}
          />
          <Input
            id="outlined-basic"
            label="default quantity"
            variant="outlined"
            FieldId="defaultQuantity"
            type="number"
            onInput={changeHandler}
            defaultValue={formState.inputs.defaultQuantity.value}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(2)]}
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
