import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
 
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="dashboard-container">
        <h1 className="welcome-text">Welcome Guest</h1>

        <div className="dashboard-content">
          <div className="button-group">
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/timetable")}
            >
              Timetable
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/modreg")}
            >
              Module Registration
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/listmodules")}
            >
              List of Modules
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/managemodules")}
            >
              Create Modules
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => navigate("/myprofile")}
            >
              My Profile
            </button>
            {/* Add log out button here */}
          </div>

          <div className="schedule-box">
            <h2>Today's Schedule</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
