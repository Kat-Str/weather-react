import React from "react";
import SearchForm from "./SearchForm.js";
import Forecast from "./Forecast";
import Footer from "./Footer";
import Weather from "./Weather.js";
import "./styles.css";

import "./SearchForm.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchForm />
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
