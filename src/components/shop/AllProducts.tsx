import React from "react";
import './Products.css'
import { Box, Typography} from "@mui/material";
import Layout2 from "../layout/Layout2";
import Product from "./Product";
import InventoryIcon from '@mui/icons-material/Inventory';
const AllProducts = () => {
  let products = [
    { id: 1, name: "gun", price: "50" },
    { id: 2, name: "bun", price: "20" },
    { id: 3, name: "doll", price: "30" },
    { id: 4, name: "pen", price: "10" },
    { id: 5, name: "bull", price: "70" },
  ];
  return (
    <Layout2>
      <Box sx={{ width: "89.6vw", heigth: "auto", marginTop: '2rem' }}>
      <Typography variant="h4" sx={{margin: '1rem auto', width: '25rem'}}> Available Products <InventoryIcon fontSize="medium" sx={{marginTop: '2rem'}} /></Typography>
        <Box  sx={{ width: "90%" }} className="products-container">
        
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </Box>
      </Box>
      ;
    </Layout2>
  );
};

export default AllProducts;
