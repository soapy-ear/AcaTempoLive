import React, { Fragment, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://acatempolive-backend.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
      <h1>Welcome to AcaTempo</h1>
    </div>
  );
}

export default App;
