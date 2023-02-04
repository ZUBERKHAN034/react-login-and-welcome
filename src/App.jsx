import React from "react";
import Heading from "./components/Heading";
import Login from "./components/Login";

function App() {
  const isLoggedIn = false;
  return (
    <div className="container">{isLoggedIn ? <Heading /> : <Login />}</div>
  );
}

export default App;
