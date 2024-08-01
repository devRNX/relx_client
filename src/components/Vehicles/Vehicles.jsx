import "./vehicles.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  useDeleteVehicleMutation,
  useGetVehicleQuery,
} from "../../services/userAuthApi";
import toast from "react-toastify";

function Vehicles() {
  const navigate = useNavigate();
  const [vehicleData, setVehicleData] = useState(null);
  const token = localStorage.getItem("token");
  const { data, isSuccess } = useGetVehicleQuery(token);
  const [deleteVehicle] = useDeleteVehicleMutation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setVehicleData(data.data);
    }
  }, [data, isSuccess]);

  const handleVnumbers = () => {
    navigate("/add-vehicle");
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const response = await deleteVehicle({
        token,
        id,
      });
      if (response.data?.status === true) {
        toast.success("Vehicle deleted successfully");
        window.location.reload();
      } else {
        toast.error(
          response.data?.message || "Fail to delete vehicle. Please try again"
        );
      }
    } catch (error) {
      toast.error("An error occurred ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mb-4">
      <table className="table table-success">
        <thead>
          <tr>
            <th scope="col">SL Number</th>
            <th scope="col">Vehicle Number</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData &&
            vehicleData.map((vehicle, index) => (
              <tr key={vehicle._id}>
                <td>{index + 1}</td>
                <td>{vehicle.v_number}</td>
                <td>
                  <button
                    className="btn btnColor"
                    onClick={() => navigate(`/edit/${vehicle._id}`)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                      />
                    </svg>
                  </button>
                </td>
                <td>
                  <button
                    className="btn"
                    onClick={() => handleDelete(vehicle._id)}
                    disabled={loading}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center gap-2 mt-3">
        <button
          className="btn custom-card border-secondary-subtle shadow-sm"
          onClick={handleVnumbers}
          type="button"
          style={{ maxWidth: "500px" }}
        >
          Add Vehicle
        </button>
      </div>
    </div>
  );
}

export default Vehicles;
