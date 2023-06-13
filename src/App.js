import React from "react";

import Footer from "./Footer";
import Weather from "./Weather.js";
import "./styles.css";

import "./SearchForm.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lublin" />

        <Footer />
      </div>
    </div>
  );
}
