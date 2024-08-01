import "./IndexHome.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/png/logo.png";
import { useState, useEffect } from "react";
import VechiclesDetails from "../components/Vehicles/VechiclesDetails";
import Vehicles from "../components/Vehicles/Vehicles";
import { useGetVehicleQuery } from "../services/userAuthApi";
import Spinner from "../Spinner/Spinner";

function IndexHomeNew() {
  const navigate = useNavigate();

  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("vehicles");
  const token = localStorage.getItem("token");
  const { data, isSuccess, isLoading } = useGetVehicleQuery(token);

  useEffect(() => {
    if (isSuccess) {
      setDetails(data.data);
    }
  }, [data, isSuccess]);
  if (isLoading) {
    return <Spinner />;
  }
  const a_count = details?.a_count || 0;
  const sCount = details?.sCount || 0;
  const u_data = details?.u_data || [];
  const user_data = u_data[0] || {};

  return (
    <div className="background-image">
      <img src={logo2} className="rounded mx-auto d-block logoImg1" alt="img" />
      <div className="container my-5 mainText">
        <h1 className="fw-regular">Rely on us and Relax ..</h1>
        <span>
          Set a reminder with us at RelyNRelax, and we'll notify you on your
          chosen date <br />
          <span className="urlLink">via call, WhatsApp, SMS, or Email.</span>
        </span>
      </div>

      <div className="container w-50">
        <p className="my-4 infoT fs-5">Hello, {user_data.name || "User"}</p>
      </div>
      {/* <Vehicles /> */}
      <VechiclesDetails />
    </div>
  );
}

export default IndexHomeNew;
