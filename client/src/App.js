import React from "react";
import Header from "./components/Header";
import HomeAbout from "./components/HomeAbout";
import Products from "./components/Products";
import Services from "./components/Services";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <HomeAbout />
      <Products />
      <Services />
    </div>
  );
}

export default App;
