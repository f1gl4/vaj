import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div>
      <h2>Error!</h2>
      <p>{error?.message}</p>
    </div>
  );
}
