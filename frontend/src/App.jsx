import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservationform";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <Reservation />
      <Footer />
    </div>
  );
};

export default App;