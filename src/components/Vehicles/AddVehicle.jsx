import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAddVehicleMutation,
  useGetVehicleQuery,
} from "../../services/userAuthApi";
import { toast } from "react-toastify";

const AddVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { data, isSuccess, isLoading } = useGetVehicleQuery(token);
  const [addVehicle] = useAddVehicleMutation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await addVehicle({
        token,
        data: { v_number: vehicleNumber },
      });
      if (response.data?.status === true) {
        toast.success("Vehicle added successfully");
        navigate("/dashboard");
      } else {
        toast.error(
          response.data?.message || "Fail to add vehicle. Please try again"
        );
      }
    } catch (error) {
      toast.error("An error occurred ");
    } finally {
      setLoading(false);
    }
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
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={loading}
                    >
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
