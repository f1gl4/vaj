import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/lab">Lab</Link>
      </nav>

      
      <Outlet />
    </div>
  );
}

export default App;
