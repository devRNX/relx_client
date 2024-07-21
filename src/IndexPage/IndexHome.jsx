import './IndexHome.css'
import { useNavigate } from 'react-router-dom'


function IndexHome() {

  const navigate = useNavigate()

  const handleClickTab = (tab) => {
    navigate('/alerts')
  }

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
      
      <div className="container w-50">
        <p className='my-4 infoT fs-5'>Hello, Bishal Deb.</p>
        <div className="row mt-4">
          <div className="col-lg-6">
            <div className="card rounded-4 border-success-subtle shadow card-hover"  onClick={handleClickTab}>
              <div className="mt-3">
               <span className='infoText1'> Your Alerts </span>
              </div>
              <div className="mt-2 ">
               <span className='infoText2 fw-light fst-italic'>Total Alerts :- 20</span>
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
              <div className="card rounded-4 border-success-subtle shadow card-hover" onClick={handleClickTab}>
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
                <a class="nav-link active" aria-current="true" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Our Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="#">Updates</a>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexHome