import React, { useState } from "react";
import Header from "./components/Header";
import HomeAbout from "./components/HomeAbout";
import Products from "./components/Products";
import Services from "./components/Services";
import MobileFooter from "./components/MobileFooter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import "./styles/main.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { i18n } = useTranslation();

  const sidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const languageClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Header sidebarOpen={sidebarOpen} sidebarClick={sidebarClick} />
      <HomeAbout />
      <Products />
      <Services />
      <MobileFooter languageClick={languageClick} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
