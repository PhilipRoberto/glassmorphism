import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

// Utils import....
import philip from "./utils/philip.jpg";

export default function App () {

  useEffect (() => {
    VanillaTilt.init();
  });
  
  return (
    <div className="App App-Container">
      <div className="main main-container">
        <div className="glass-heading">
          <h1>Glassmorphic Design</h1>
        </div>
          <div className="card card1" data-tilt>
            <div className="cards-details">
              <div className="card-heading">
                <div className="card-name">
                  <h1>Philip Oyetunde</h1>
                </div>
                <div className="card-img">
                  <img src={philip} alt="Philip_Oyetunde" />
                </div>
              </div>
              <div className="card-info bio">
                <p>I am Philip Oyetunde, and I am learning software engineering in Frontend web development...</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};