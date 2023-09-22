import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";

export default function Home() {
  const [cars, setCars] = useState(null);

  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "https://car-darts.vercel.app";

  // Fetching Data
  useEffect(() => {
    axios
      .get(`${BASE_URL}/read`)
      .then((response) => {
        let carsData = response.data.data;
        setCars(carsData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []); // Only run this effect once, no need to watch the 'cars' state

  return (
    <div className="Home">
      <div className="car-show">
        {/* Conditionally render the map function */}
        {cars !== null ? (
          cars.map((element, i) => {
            return (
              <div key={i} className="car-card">
                <img src={element.image} alt="" />
                <div className="details">
                  <div>
                    <p><span className="text">Model</span>{element.model}</p>
                    <span className="color" style={{background: `${element.color}`}}></span>
                  </div>
                  <p><span className="text">Reg</span>{element.reg}</p>
                  <div>
                    <p><span className="text">Dealer</span>{element.name}</p>
                    <p>{element.pin}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
