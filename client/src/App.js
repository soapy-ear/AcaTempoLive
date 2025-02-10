import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar"; // Import Navbar
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
      .then((res) => res.json());
  }, []);
  return (
    <Fragment>
      <Router>
        <Routes>

          {/* Dashboard as default / temp landing page */}
          <Route path="/" element={<Navigate replace to="/dashboard" />} />

          {/* Each page is a top-level route */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/modreg" element={<ModReg />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/manage-modules" element={<ManageModules />} />
          <Route path="/list-modules" element={<ListModules />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/module-details" element={<ModuleDetails />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Error Page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
