import React from "react";
import Header from "./components/Header";
import HomeAbout from "./components/HomeAbout";
import Products from "./components/Products";
import Services from "./components/Services";
import MobileFooter from "./components/MobileFooter";
import MobileNav from "./components/MobileNav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <MobileNav />
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
