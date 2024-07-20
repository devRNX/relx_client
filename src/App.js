import React from "react";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import GlobalStyle from "./global-styles";
import AdminLogIn from "./Admin/AdminLogIn";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { getToken } from "./services/localStorage";
import AdminDashboard from "./Admin/AdminDashboard";
// import Dashboard from "./components/Dashboard/Dashboard";
import ResetPass from "./components/ResetPassword/ResetPass";
import NewPassword from "./components/ResetPassword/NewPassword";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import IndexHome from "./IndexPage/IndexHome";

function App() {
  const [token, setToken] = useState(() => getToken());
  useEffect(() => {
    const newToken = getToken();
    if (newToken) {
      setToken(newToken);
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          // element={!token ? <Home /> : <Navigate to="/dashboard" />}
          element={!token ? <Home /> : <Navigate to="/dashboard" />}
        /> 
        <Route path="/register" exact element={<Auth mode="signup-mode" />} />
        <Route path="/login" exact element={<Auth mode="" />} />
        <Route path="/reset/password/" exact element={<ResetPass />} />
        <Route path={"/new/password/:id?"} exact element={<NewPassword />} />
        <Route path={"/admin/login"} exact element={<AdminLogIn />} />
        <Route path={"/admin/dashboard"} exact element={<AdminDashboard />} />
        <Route path="/dashboard" element={<IndexHome />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
