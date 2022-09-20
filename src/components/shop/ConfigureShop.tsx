import React from "react";
import Layout2 from "../layout/Layout2";
import { Box, Typography, Paper, Button } from "@mui/material";


const ConfigureShop = () => {
  return (
    <Layout2>
      <Box
        component={"div"}
        sx={{
          width: "89.6vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "auto",
          backgroundColor: "#06283D"
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: 'auto',
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid #ffffff",
            padding: "0.3rem",
            marginTop: '2rem',
            color: "#ffffff"
          }}
        >
          <Typography variant="h4">
        
            Hi Raj, Please configure your shop{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: '50rem' }} className="flex-row">
          <Paper elevation={5} variant="outlined" sx={{width: "20rem", height: "15rem", justifyContent: 'center', backgroundColor: '#1B2430'}} className="flex-col">
            <Button variant="contained" color="warning" >View All</Button>
          </Paper>
          <Paper elevation={5} variant="outlined" sx={{width: "20rem", height: "15rem", justifyContent: 'center', backgroundColor: '#1B2430'}} className="flex-col">
            <Button variant="contained" color="warning" >Quick Add</Button>
          </Paper>
          <Paper elevation={5} variant="outlined" sx={{width: "20rem", height: "15rem", justifyContent: 'center', backgroundColor: '#1B2430'}} className="flex-col">
            <Button variant="contained" color="warning" >Edit existing Product</Button>
          </Paper>
        </Box>
      </Box>
    </Layout2>
  );
};

export default ConfigureShop;
