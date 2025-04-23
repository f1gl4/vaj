import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Outlet, Link as RouterLink } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/characters">
            Characters
          </Button>
          <Button color="inherit" component={RouterLink} to="/episodes">
            Episodes
          </Button>
          <Button color="inherit" component={RouterLink} to="/locations">
            Locations
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}

export default App;
