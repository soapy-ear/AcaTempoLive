import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://acatempolive-backend.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <Fragment>
      <div className="App">
        <h1>{message}</h1>
        <h1>Welcome to AcaTempo</h1>
      </div>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path ="/dashboard" />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
 