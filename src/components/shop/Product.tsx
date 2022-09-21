import React from "react";
import { Paper, Typography, Stack, Button, Box } from "@mui/material";
import Item from "@mui/material/ListItem";
import { product } from "../../utils/Interfaces";
import { productSliceActions } from "../../redux/products/productsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = ({ id, key, name, price }: product) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const editProduct = () => {
    dispatch(productSliceActions.setEditing({id, name, price}))
    navigate('/add-product')
  }
  return (
    <Paper
      elevation={5}
      sx={{ width: "15rem", height: "14rem", justifyContent: "space-around" }}
      className="flex-col"
    >
      <Stack spacing={2}>
        <Paper
          elevation={3}
          sx={{ width: "13rem", textAlign: "center", marginTop: "0.7rem" }}
        >
          <Typography variant="h6">{name}</Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{ width: "13rem", textAlign: "center", marginTop: "0.7rem" }}
        >
          <Typography variant="h6">{price}</Typography>
        </Paper>

        <Stack spacing={2} sx={{ marginTop: "0.7rem" }}>
          <Button variant="outlined" color="secondary" onClick={editProduct}>
            Edit
          </Button>
          <Button variant="outlined" color="warning">
            Delete
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Product;
