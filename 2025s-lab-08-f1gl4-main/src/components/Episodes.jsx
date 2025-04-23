import React from "react";
import { Outlet, useLoaderData, NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

export function loader() {
  return fetch("https://rickandmortyapi.com/api/episode").then((res) =>
    res.json()
  );
}

export function Episodes() {
  const { results } = useLoaderData();

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
          Episodes
        </Typography>
        <List>
          {results.map(ep => (
            <ListItem key={ep.id} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`${ep.id}`}
                sx={{
                  "&.active": {
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                  },
                }}
              >
                <ListItemText
                  primary={`${ep.episode}: ${ep.name}`}
                />
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

