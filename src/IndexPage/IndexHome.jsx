import React from 'react'
import './IndexHome.css'
import UserData from './UserData';


function IndexHome() {
  return (
    <div className='my-5 pt-5'>
      <div className="container my-5 mainText">
        <h1 className='fw-regular'>Welcome To
          <span className='urlLink'>relynrelax.com </span> 
        </h1>
        <span>The complete toolkit to turn one-time browsers into long-term
          customers.
        </span>
      </div>
      <div className="container my-5 mainText">
        <span className='fs-5'>
          Hii, Bishal Deb
        </span>
      </div>
      <div className="container">
        <div className="card">
          <UserData/>
        </div>
      </div>
    </div>
  )
}

export default IndexHome