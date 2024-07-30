import React from 'react';
import './spinner.css';

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
