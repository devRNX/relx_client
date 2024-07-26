import CreateAlert from './CreateAlert'
import './IndexHome.css'
import { useNavigate } from 'react-router-dom'
import logo2 from '../assets/png/logo.png'
import { useDetailsQuery } from '../services/alertAuthApi'
import { useState, useEffect } from 'react'
import Vehicles from '../components/Vehicles/Vehicles'

function IndexHome() {
  const navigate = useNavigate()

  const [details, setDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('createA')
  const token = localStorage.getItem("token");
  const { data, isSuccess } = useDetailsQuery(token);

  useEffect(() => {
    if (isSuccess) {
      setDetails(data);
    }
  }, [data, isSuccess]);

  const a_count = details?.a_count || 0;
  const sCount = details?.sCount || 0;
  const u_data = details?.u_data || [];
  const user_data = u_data[0] || {};
  const vehicleNumbers = user_data.v_number ? user_data.v_number.split(',').map(num => num.trim()) : [];

  const handleClickTab = (tab) => {
    navigate('/alerts');
  }

  return (
    <div className='background-image'>
      <img src={logo2} className='rounded mx-auto d-block logoImg1' alt='img'/>
      <div className="container my-5 mainText">
        <h1 className='fw-regular'>Rely on us and Relax ..</h1>
        <span>
          Set a reminder with us at RelyNRelax, and we'll notify you on your chosen date <br /> 
          <span className='urlLink'>via call, WhatsApp, SMS, or Email.</span>
        </span>
      </div>
      
      <div className="container w-50">
        <p className='my-4 infoT fs-5'>Hello, {user_data.name || 'User'}</p>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="card rounded-4 border-success-subtle shadow custom-card" onClick={handleClickTab}>
              <div className="mt-3">
               <span className='infoText1'> Your Alerts </span>
              </div>
              <div className="mt-2 ">
               <span className='infoText2 fw-light fst-italic'>Total Alerts :- {a_count}</span>
              </div>
              <div className="">
               <span className='infoText2 fw-light fst-italic'>Pending :- {a_count - sCount}</span>
              </div>
              <div className="mb-4">
               <span className='infoText2 fw-light fst-italic'>Sent :- {sCount}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
              <div className="card rounded-4 border-success-subtle shadow custom-card" onClick={handleClickTab}>
                <div className="mt-3">
                <span className='infoText1'> Registered Vehicles </span>
                </div>
                <ul className='list-unstyled'>
                  {vehicleNumbers.length > 0 ? (
                      <>
                        {vehicleNumbers.map((number, index) => (
                          <li key={index} className='infoText2 fw-light fst-italic'>{number}</li>
                        ))}
                      </>
                      ) : (
                        <span className='infoText2 fw-light fst-italic'>No vehicles registered</span>
                  )}
                </ul>
              </div>
          </div>
        </div>
      </div>

      <div className="container w-50 my-5">
        <div className="card text-center rounded-4 border-success-subtle shadow">
          <div className="card-header my-4 bg-white">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className={`nav-link ${activeTab === 'createA' ? 'active' : ''}`} onClick={() => setActiveTab('createA')} aria-current="true" href="#createA">Create Alerts</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeTab === 'vehicles' ? 'active' : ''}`} onClick={() => setActiveTab('vehicles')} href="#vehicle">Your Vehicles</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeTab === 'updates' ? 'active' : ''}`} onClick={() => setActiveTab('updates')} href="#updates">Latest Updates</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {activeTab === 'createA' && <CreateAlert/>}
            {activeTab === 'vehicles' && <Vehicles/>}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexHome
