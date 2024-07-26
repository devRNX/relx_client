import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDetailsQuery } from '../../services/alertAuthApi';

function Vehicles() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem("token");
    const { data, isSuccess } = useDetailsQuery(token);
    useEffect(() => {
        if (isSuccess && data.u_data && data.u_data.length > 0) {
            setUserData(data.u_data[0]);
        }
    }, [data, isSuccess]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    const vNumbers = userData.v_number ? userData.v_number.split(', ') : [];

    const handleVnumbers = () => {
        navigate('/details');
    }

    return (
        <div className='container mb-4'>
            {vNumbers.length > 0 ? (
                <div className="row">
                    {/* First Column */}
                    <div className="col-md-6">
                        {vNumbers.slice(0, Math.ceil(vNumbers.length / 2)).map((v_num, index) => (
                            <div key={index} className="card shadow-sm custom-card mb-3" onClick={handleVnumbers}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title">{v_num}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Column */}
                    <div className="col-md-6">
                        {vNumbers.slice(Math.ceil(vNumbers.length / 2)).map((v_num, index) => (
                            <div key={index + Math.ceil(vNumbers.length / 2)} className="card shadow-sm custom-card mb-3" onClick={handleVnumbers}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="card-title">{v_num}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="card">
                    <div className="card-title">No Vehicles Found.</div>
                </div>
            )}
            <div class="d-grid gap-2 mt-3">
                <button class="btn custom-card border-secondary-subtle shadow-sm" onClick={handleVnumbers} type="button">Edit or Add Vehicle Numbers</button>
            </div>
        </div>
    );
}

export default Vehicles;
