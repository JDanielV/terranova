import React from "react";
import Header from "./components/Header";
import HomeAbout from "./components/HomeAbout";
import Products from "./components/Products";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <HomeAbout />
      <Products />
    </div>
  );
}

export default App;
