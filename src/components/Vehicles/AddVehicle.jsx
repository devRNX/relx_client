import React, { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom for navigation

const AddVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page using the history object or navigate hook
  };

  return (
    <div
      className=" d-flex align-items-center justify-content-center v_background"
      style={{ minHeight: "60vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-body p-4">
                <h1 className="text-center fw-bold mb-4">Add Vehicle</h1>

                <form onSubmit={handleSubmit} className="mt-3">
                  <div className="form-group mb-3">
                    <label htmlFor="vehicleNumber" className="form-label">
                      <strong>Vehicle Number</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vehicleNumber"
                      name="vehicleNumber"
                      value={vehicleNumber}
                      onChange={(e) =>
                        setVehicleNumber(e.target.value?.toUpperCase())
                      }
                      required
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-secondary btn-block"
                      onClick={handleGoBack}
                    >
                      Go Back
                    </button>
                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
