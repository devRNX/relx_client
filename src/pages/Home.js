import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import { Container } from "../global-styles";
import Services from "../components/Services/Services";
import { useNavigate } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
// Hero features content carousel
const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);
  return (
    <Container>
      <Hero />
      <Services />
      <AboutUs />
    </Container>
  );
};

export default Home;
