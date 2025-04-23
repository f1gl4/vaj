import React from "react";
import { Outlet, useLoaderData, NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";


export function loader() {
  return fetch("https://rickandmortyapi.com/api/location").then((res) =>
    res.json()
  );
}

export function Locations() {
  const {results} = useLoaderData();

  return (
    <Box display="flex" height="100vh">

      <Box
        sx={{
          width: 320,
          borderRight: "1px solid #ddd",
          overflowY: "auto",
          flexShrink: 0,
        }}
      >
        <Typography variant="h6" sx={{ p: 2 }}>
          Locations
        </Typography>
        <List>
          {results.map(loc => (
            <ListItem key={loc.id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`${loc.id}`}
                sx={{
                  "&.active": {
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                  },
                }}
              >
                <ListItemText primary={loc.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        <Outlet />
      </Box>
    </Box>
  );
}
