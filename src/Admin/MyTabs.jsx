import React, { useState } from 'react';
import DisplayAllUser from './DisplayAllUser'
import {useGetAllAlertsQuery} from '../services/userAuthApi'; 
import VehicleNumber from "./VehicleNumber"
import UserList from './UserList';

function MyTabs() {
  const [activeTab, setActiveTab] = useState('home');
  const {data} = useGetAllAlertsQuery();
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link me-3 ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleTabClick('home')}
            href="#home"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link me-3 ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => handleTabClick('profile')}
            href="#profile"
          >
            Users
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link  me-3 ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleTabClick('contact')}
            href="#contact"
          >
            Alerts
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'cron' ? 'active' : ''}`}
            onClick={() => handleTabClick('cron')}
            href="#cron"
          >
            Vehicle List
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'home' ? 'active' : ''}`} id="home">
          <h1 className='fs-4 my-3'>Home Content</h1>
          <ul>
            <li>Welcome to relayNrelax</li>
          </ul>
        </div>
        <div className={`tab-pane ${activeTab === 'profile' ? 'active' : ''}`} id="profile">
          <h1 className='fs-4 my-3'>All Users</h1>
          <UserList />
        </div>
        <div className={`tab-pane ${activeTab === 'contact' ? 'active' : ''}`} id="contact">
          <h1 className='fs-4 my-3'>All Alerts</h1>
           <DisplayAllUser alertData={data}/>
        </div>
        <div className={`tab-pane ${activeTab === 'cron' ? 'active' : ''}`} id="cron">
          <h1 className='fs-4 my-3'>Vehicle Numbers</h1>
           <VehicleNumber/>
        </div>
      </div>
    </div>
  );
}

export default MyTabs;
