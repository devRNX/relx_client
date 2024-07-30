import './vehicles.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Spinner from '../../Spinner/Spinner';
import logo2 from '../../assets/png/logo.png'
import { useGetVehicleQuery } from '../../services/userAuthApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    useCreateAlertMutation,
  } from "../../services/alertAuthApi";
  import { toast } from "react-toastify";

function VechiclesDetails() {
    const selectedAlertType = [
        "Driving Licence Expiry",
        "Fitness Expiry",
        "RC Expiry",
        "Pollution Certificate Expiry",
        "Permit Expiry",
        "Insurance Expiry",
    ];
    const { v_id } = useParams();
    const [vData, setVData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const token = localStorage.getItem("token");
    const [createAlert] = useCreateAlertMutation();
    const { data, isSuccess, isLoading } = useGetVehicleQuery(token);
    

    const [alertData, setAlertData] = useState({
        id: "",
        alertType: "",
        alertDate: "",
        vehicleNumber: "",
        alertName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlertData({
            ...alertData,
            [name]: value
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        const response = await createAlert({ alertData, token });
        if (response?.data?.setAlert?.status === true) {
            toast.success("Alert Created Successfully");
            window.location.reload();
        } else {
            toast.error("Fail to create Alert. Please try again");
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            setVData(data.data);
            if (v_id) {
                const vehicle = data.data.find(vehicle => vehicle._id === v_id);
                if (vehicle) {
                    setSelectedVehicle(vehicle);
                    setAlertData((prevData) => ({
                        ...prevData,
                        id: vehicle._id,
                        vehicleNumber: vehicle.v_number,
                        name: vehicle.v_number // Assuming 'name' refers to the vehicle number
                    }));
                    setShowModal(true);
                }
            }
        }
    }, [data, isSuccess, v_id]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!vData || vData.length === 0) {
        return <div>No vehicle data available.</div>;
    }

    const itemsPerPage = 9;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = vData.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleCardClick = (vehicle) => {
        setSelectedVehicle(vehicle);
        setAlertData((prevData) => ({
            ...prevData,
            id: vehicle._id,
            vehicleNumber: vehicle.v_number,
            name: vehicle.v_number // Assuming 'name' refers to the vehicle number
        }));
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVehicle(null);
        setAlertData({
            id: "",
            alertType: "",
            alertDate: "",
            vehicleNumber: "",
            name: "",
        });
    };

    return (
        <div className='v_background'>
            <img src={logo2} className='rounded mx-auto d-block logoImg1' alt='img'/>
            <p className="text-center mb-1 v_card fw-semibold">Your Vehicle Details</p>
            <p className="text-center mb-5">You can Add or Modify your Vehicle details...</p>
            <div className='container'>
                <div className='row'>
                    {paginatedData.map((vehicle) => (
                        <div key={vehicle._id} className={`col-md-4 mb-5`}>
                            <div className="card custom-card border border-success-subtle rounded shadow" onClick={() => handleCardClick(vehicle)}>
                                <div className="card-header border border-0">
                                    <div className="card-title">Vehicle Number :- {vehicle.v_number}</div>
                                    <div className="card-title mt-3">Created On :- {new Date(vehicle.createdAt).toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='pagination'>
                    <div className="row">
                        <div className="col-mb-3">
                            {[...Array(Math.ceil(vData.length / itemsPerPage)).keys()].map((page) => (
                                <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-outline-success me-2' : 'btn-outline-success me-2'} my-4`}>
                                    {page + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-mb-3">
                            <div className="d-grid gap-2 mt-4 btn-add">
                                <button className="btn custom-card border-secondary-subtle shadow-sm" type="button">Add Vehicle Numbers</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal for vehicle details */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Vehicle Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedVehicle && (
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="hidden" 
                                    name="id" 
                                    value={alertData.id}
                                    onChange={handleChange} 
                                />
                                <div className="mb-3">
                                    <label htmlFor="vehicleNumber" className="form-label"><strong>Vehicle Number</strong></label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="vehicleNumber" 
                                        name="vehicleNumber" 
                                        value={alertData.vehicleNumber} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="alertDate" className="form-label"><strong>Select Date:</strong></label>
                                    <input 
                                        type="date" 
                                        className="form-control" 
                                        id="alertDate" 
                                        name="alertDate" 
                                        value={alertData.alertDate} 
                                        onChange={handleChange} 
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="alertType" className="form-label"><strong>Select Alert Type:</strong></label>
                                    <select 
                                        className="form-control" 
                                        id="alertType" 
                                        name="alertType" 
                                        value={alertData.alertType} 
                                        onChange={handleChange} 
                                        required
                                    >
                                        <option value="">-- Select Alert Type --</option>
                                        {selectedAlertType.map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label"><strong>Name:</strong></label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="alertName" 
                                        name="alertName" 
                                        value={alertData.alertName} 
                                        onChange={handleChange}
                                        placeholder='Alert Name'
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default VechiclesDetails;
