import "./IndexHome.css";
// import { useNavigate } from "react-router-dom";
import logo2 from "../assets/png/logo.png";
import { useState, useEffect } from "react";
import VechiclesDetails from "../components/Vehicles/VechiclesDetails";
// import Vehicles from "../components/Vehicles/Vehicles";
import {useLoggedUserQuery} from "../services/userAuthApi";
import Spinner from "../Spinner/Spinner";

function IndexHomeNew() {
  // const navigate = useNavigate();

  const [details, setDetails] = useState({});
  // const [activeTab, setActiveTab] = useState("vehicles");
  const token = localStorage.getItem("token");
  const { data, isSuccess, isLoading } = useLoggedUserQuery(token);
  useEffect(() => {
    if (!token) {
      window.location.href = "/";
      return;
    }
  }, [token]);
  useEffect(() => {
    if (isSuccess) {
      if(data.status){
        setDetails({
          id: data.message[0]._id,
          name: data.message[0].name,
          email: data.message[0].email
        });
      }
    }
  }, [data, isSuccess]);
  if (isLoading) {
    return <Spinner />;
  }

  // console.log(details)

  return (
    <div className="background-image">
      <img src={logo2} className="rounded mx-auto d-block logoImg1" alt="img" />
      <div className="container my-5 mainText">
        <h1 className="fw-regular">Rely on us and Relax ..</h1>
        <span>
          Create alert with required details and relyNrelax will notify you on
          selected reminder date <br />
          <span className="urlLink">
            via call, whatsapp or sms, email, etc.
          </span>
        </span>
      </div>

      <div className="container w-50">
        <p className="my-4 infoT fs-5">Hello {details.name} ...</p>
      </div>
      {/* <Vehicles /> */}
      <VechiclesDetails />
    </div>
  );
}

export default IndexHomeNew;
