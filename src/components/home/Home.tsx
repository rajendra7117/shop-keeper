import React from "react";
import Layout from "../layout/Layout";
import Box from "@mui/material/Box";
import "./Styles.css";
import Typography from "@mui/material/Typography";
// import { NavLink } from "react-router-dom";
import shopImg from "../../images/waiting.png";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidIcon from "@mui/icons-material/Paid";
const Home = () => {
  return (
    <div className="home">
      <div className="flex-container">
        <div className="flex-col home-sec-1">
          <div className="flex-col">
            <Typography variant="h4">
              Welcome to <br /> shop-keeping
            </Typography>
          </div>
          <div className="list">
            <ul>
              <li>
                {" "}
                <AccessTimeIcon /> save time
              </li>
              <li>
                {" "}
                <PaidIcon /> save money
              </li>
              <li>
                {" "}
                <ReceiptIcon /> save records
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <img src={shopImg} alt="img" />
          </div>
        </div>
      </div>
      <div className="home-sec-2 flex-row">
        <Paper className="flex-col">
         <Button variant="contained">Sign in</Button>
        </Paper>
        <Paper className="flex-col">
          <Button variant="contained">Login</Button>
        </Paper>
        <Paper className="flex-col">
          <Button variant="contained">Know more</Button>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
