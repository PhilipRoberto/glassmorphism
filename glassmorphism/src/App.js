import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import philip from "./utils/philip.jpg";
import facebook from "./utils/facebook.png";
import twitter from "./utils/twitter.png";
import telegram from "./utils/telegram.png";

function Glasshouse() {
  return (
    <div className="Appm App-Container">
      <div className="card">
        <img src={philip} alt="philip_oyetunde" />
        <h2>Philip Oyetunde</h2>
        <p>I am a software engineer, frontend developer</p>
        <div className="links">
          <Link to="https://www.facebook.com">
            <img src={facebook} alt="facebook-logo" />
          </Link>
          <Link to="https://www.twitter.com">
            <img src={twitter} alt="twitter-logo" />
          </Link>
          <Link to="https://www.telegram.com">
            <img src={telegram} alt="telegram-logo" />
          </Link>
        </div>
        <Link to="#" className="btn">message me</Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Glasshouse />} />
    </Routes>
  );
};