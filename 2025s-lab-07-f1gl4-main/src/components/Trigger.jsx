import React from "react";
import { Link } from "react-router-dom";
import { randomName } from "../data";

export default function Trigger() {
  const name = randomName();

  return (
    <div>
      <h2>Trigger Page</h2>
      <p>Random name: {name}</p>
      <p>
        
        <Link to={`bouncer/${name}`}>Go to Bouncer</Link>
      </p>
    </div>
  );
}
