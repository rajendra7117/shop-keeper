import React from "react";
import { Drawer, List, ListItem, Typography } from "@mui/material";

import "./Styles.css";
import { arr } from "../../utils/data";
import { NavLink } from "react-router-dom";
import { DrawerSx, TypographySx, ListItemSx } from "./Styles";

const SideBar = () => {
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      className="flex-col drawer"
      sx={DrawerSx}
    >
      <Typography variant="h5" sx={TypographySx}>
        Menu
      </Typography>
      <List sx={{ marginTop: "3rem" }}>
        {arr.map((item) => (
          <ListItem key={item.item} sx={ListItemSx}>
            <NavLink to={item.url} className="nav-link">
              {item.item}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
