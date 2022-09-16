import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";

import "./Styles.css";

const SideBar = () => {
  let drawerWidth = "10rem";
  let drawerHeight = "100vh";
  let arr = ["home", "login", "register", "keep-shop", "about"];
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      className="flex-col drawer"
      sx={{
        width: drawerWidth,
        height: drawerHeight,
    
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Typography variant="h5" sx={{ marginLeft: "2rem", marginTop: "2rem" }}>
        Menu
      </Typography>
      <List sx={{ marginTop: "3rem" }}>
        {arr.map((item: string) => (
          <ListItem key={item} sx={{ width: "100%", paddingInline: 0 }}>
            <ListItemButton
              className="list-button"
              sx={{ width: "100%", paddingInline: 0, textAlign: "center" }}
            >
              <Typography variant="h6" sx={{paddingLeft: "1.5rem"}}>{item}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
