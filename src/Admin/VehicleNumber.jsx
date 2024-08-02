import React, { useEffect, useState } from 'react';
import { useAdminVehiclesQuery } from '../services/userAuthApi';

function VehicleNumber() {
  const [adminVehicle, setAdminVehicle] = useState([]);
  const { data, isSuccess, isLoading, isError } = useAdminVehiclesQuery();

  useEffect(() => {
    if (isSuccess) {
      setAdminVehicle(data);
    }
  }, [data, isSuccess]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading data.</p>;

  return (
    <div>
      <table className="table table-secondary table-striped">
        <thead>
          <tr>
            <th className="text-center">User Name</th>
            <th className="text-center">Phone Number</th>
            <th className="text-center">Alt Phone Number</th>
            <th className="text-center">Email</th>
            <th className="text-center">Vehicle Number</th>
          </tr>
        </thead>
        <tbody>
          {adminVehicle.map((vehicle) => (
            <tr key={vehicle._id}>
              <td className="text-center">{vehicle.user?.name || 'N/A'}</td>
              <td className="text-center">{vehicle.user?.phone_number || 'N/A'}</td>
              <td className="text-center">{vehicle.user?.alternate_number || 'N/A'}</td>
              <td className="text-center">{vehicle.user?.email || 'N/A'}</td>
              <td className="text-center">{vehicle.v_number || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleNumber;
