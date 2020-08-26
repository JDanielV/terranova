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
  const { i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const sidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const languageClick = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  return (
    <div>
      <Header
        sidebarOpen={sidebarOpen}
        sidebarClick={sidebarClick}
        currentLang={currentLang}
      />
      <HomeAbout />
      <Products />
      <Services />
      <MobileFooter languageClick={languageClick} currentLang={currentLang} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
