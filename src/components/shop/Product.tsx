import React from "react";
import { Grid, Paper, Typography, Stack, Button} from "@mui/material";
import Item from '@mui/material/ListItem'
import { product } from "../../utils/Interfaces";

const Product = ({ key, name, price }: product) => {
  return (
    <Paper
      elevation={5}
      sx={{ width: "15rem", height: "14rem", justifyContent: "space-around" }}
      className="flex-col"
    >
      <Stack spacing={2}>
        <Paper elevation={3} sx={{width: "13rem", textAlign: 'center', marginTop: "0.7rem"}}>
        <Typography variant="h6" >{name}</Typography>
        </Paper>
        <Paper  elevation={3} sx={{width: "13rem", textAlign: 'center', marginTop: "0.7rem" }}>
        <Typography variant="h6">{price}</Typography>
        </Paper>
      

        <Stack spacing={2} sx={{ marginTop: "0.7rem" }}>
          <Button variant="outlined" color="secondary">
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
