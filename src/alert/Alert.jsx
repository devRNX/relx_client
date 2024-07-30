import React, { useState } from "react";
import './alert.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useDeleteAlertMutation } from "../services/alertAuthApi";

const Alert = ({ allAlert, onDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Set the number of items per page
  // const [deleteAlert] = useDeleteAlertMutation();
  const totalPages = Math.ceil((allAlert?.data?.length || 0) / itemsPerPage);
  const paginatedData = allAlert?.data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) || [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      
      {paginatedData.length > 0 ? (
        <>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Alert Name</th>
                <th scope="col">Reminder Date</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((a_data) => (
                <tr key={a_data._id}>
                  <td>{a_data.a_name.substring(0, 9)}...</td>
                  <td>{a_data.a_end_date}</td>
                  <td className="">
                    <button className="btn">
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

          {/* Pagination Controls */}
          <nav>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">No Alerts Created</h5>
            <p className="card-text">Please create an alert.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
