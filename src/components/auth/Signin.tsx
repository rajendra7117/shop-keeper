import React, { useState } from "react";
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
import "./Styles.css";
import Input from "../FormComponents/Input";
const Signin = () => {
  const [category, setCategory] = useState<String | null>("Grocery");

  const InputHandler = (FieldId: String, value: String, isTouched: boolean) => {
   
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
          Create your shop account
        </Typography>
        <form className="form">
          <Input
            id="outlined-basic"
            label="shop-name"
            variant="outlined"
            FieldId="shop-name"
            onInput={InputHandler}
          />
          <Input
            id="outlined-basic"
            label="operater-name"
            variant="outlined"
            FieldId="operater-name"
            onInput={InputHandler}
          />
          <Input
            id="outlined-basic"
            label="shop-location"
            variant="outlined"
            FieldId="shop-location"
            onInput={InputHandler}
          />

          <FormControl>
            <InputLabel id="shop-category-label">Category</InputLabel>
            <Select
              labelId="shop-category-label"
              id="shop-category"
              value={category}
              label="Category"
              sx={{ marginBottom: "1rem", width: "20rem" }}
            >
              <MenuItem value={"Grocery"}>Grocery</MenuItem>
              <MenuItem value={"Medical"}>Medical</MenuItem>
              <MenuItem value={"Fashion"}>Fashion</MenuItem>
              <MenuItem value={"Bakery"}>Bakery</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="success">
            Next
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Signin;
