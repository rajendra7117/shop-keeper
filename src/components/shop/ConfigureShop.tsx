import React from "react";
import Layout2 from "../layout/Layout2";
import { Box, Typography, Paper, Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box1Sx, Box2Sx, PaperSx } from "./Styles";
import LinkBox from "./LinkBox";
import { linkData } from "../../utils/data";
import "./ConfigureShop.css";

const ConfigureShop = () => {
  return (
    <Layout2>
      <Box component={"div"} sx={Box1Sx}>
        <Box sx={Box2Sx}>
          <Typography variant="h4">
            Hi Raj, Please configure your shop
          </Typography>
        </Box>
        <Box
          sx={{ width: "100%", height: "50rem" }}
          className="flex-row link-box"
        >
          {linkData.map((item) => (
            <LinkBox key={item.id} text={item.text} url={item.url} />
          ))}
        </Box>
      </Box>
    </Layout2>
  );
};

export default ConfigureShop;
