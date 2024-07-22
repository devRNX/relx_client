import React from "react";
// import AlertCard from "./AlertCard";
import './alert.css'

const Alert = ({ allAlert, onDelete }) => {
  return (
    <>
        {allAlert && allAlert.data && allAlert.data.length > 0 ? (
          <div className="row">
            {/* First Column */}
            <div className="col-md-6">
              {allAlert.data.slice(0, 2).map((a_data) => (  // Displaying first 2 cards
                <div key={a_data._id} className="card shadow-sm custom-card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title">{a_data.a_name.substring(0, 9)}...</h5>
                        <p className="card-text">Reminder Date: {a_data.a_end_date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="col-md-6">
              {allAlert.data.slice(2, 4).map((a_data) => (  // Displaying next 2 cards
                <div key={a_data._id} className="card shadow-sm custom-card mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title">{a_data.a_name.substring(0, 9)}...</h5>
                        <p className="card-text">Reminder Date: {a_data.a_end_date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
        <div className="card">
          <div className="card-title">No Alerts Created.Please create an alert.</div>
        </div>
        )}
    </>
  );
};

export default Alert;
