import React, { useEffect } from "react";
import { useParams, useNavigate, useNavigation } from "react-router-dom";

export default function Bouncer() {
  const { name } = useParams();
  const navigate = useNavigate();
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation.state === "idle") {
        navigate("/lab");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, navigation.state]);

  return (
    <div>
      <h2>Bouncer Page</h2>
      <p>Name: {name}</p>
      <p>Go to Lab Page in 2 sec</p>
      <p>Navigation state: {navigation.state}</p>
    </div>
  );
}
