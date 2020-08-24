import React, { useState } from "react";
import Header from "./components/Header";
import HomeAbout from "./components/HomeAbout";
import Products from "./components/Products";
import Services from "./components/Services";
import MobileFooter from "./components/MobileFooter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Header sidebarOpen={sidebarOpen} sidebarClick={sidebarClick} />
      <HomeAbout />
      <Products />
      <Services />
      <MobileFooter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
