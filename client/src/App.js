import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//Components
import Navbar from "./components/Navbar"; 
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import ModReg from "./components/ModReg";
import Error from "./components/Error";
import Timetable from "./components/Timetable";
import ManageModules from "./components/ManageModules";
import ListModules from "./components/ListModules";
import MyProfile from "./components/MyProfile";
import ModuleDetails from "./components/ModuleDetails";

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
    </Fragment>
  );
}

export default App;
 