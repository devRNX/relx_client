import CreateAlert from './CreateAlert'
import './IndexHome.css'
import { useNavigate } from 'react-router-dom'
import logo2 from '../assets/png/logo.png'


function IndexHome() {

  const navigate = useNavigate()
  const handleClickTab = (tab) => {
    navigate('/alerts')
  }

  return (
    <div className='my-5'>
        <img src={logo2} className='rounded mx-auto d-block logoImg1' alt='img'/>
      <div className="container my-5 mainText">
        <h1 className='fw-regular'>Welcome To
          <span className='urlLink'>relynrelax.com </span> 
        </h1>
        <span>
          
          Set a reminder with us at RelyNRelax, and we'll notify you on your chosen date <br></br> 
          <span className='urlLink'>via call, WhatsApp, SMS, or Email.</span>
        </span>
      </div>
      
      <div className="container w-50">
        <p className='my-4 infoT fs-5'>Hello, Bishal Deb.</p>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="card rounded-4 border-success-subtle shadow custom-card"  onClick={handleClickTab}>
              <div className="mt-3">
               <span className='infoText1'> Your Alerts </span>
              </div>
              <div className="mt-2 ">
               <span className='infoText2 fw-light fst-italic'>Total Alerts :- 4</span>
              </div>
              <div className="">
               <span className='infoText2 fw-light fst-italic'>Pending :- 10</span>
              </div>
              <div className="mb-4">
               <span className='infoText2 fw-light fst-italic'>Sent :- 10</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
              <div className="card rounded-4 border-success-subtle shadow custom-card" onClick={handleClickTab}>
                <div className="mt-3">
                <span className='infoText1'> Registered Vehicles </span>
                </div>
                <div className="mt-2 ">
                <span className='infoText2 fw-light fst-italic'>AS11D3456</span>
                </div>
                <div className="">
                <span className='infoText2 fw-light fst-italic'>AS11D3456</span>
                </div>
                <div className="mb-4">
                <span className='infoText2 fw-light fst-italic'>AS11D3456</span>
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className="container w-50 my-5">
        <div class="card text-center rounded-4 border-success-subtle shadow">
          <div class="card-header my-4 bg-white">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#createA">Create Alerts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#product">Your Vehicles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#update">Latest Updates</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <CreateAlert/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexHome