import "./Addcar.scss";
import axios from "axios";
import React, { useState } from "react";

export default function Addcar() {
  const [carModel, setCarModel] = useState();
  const [reg, setReg] = useState();
  const [color, setColor] = useState();
  const [name, setName] = useState();
  const [pin, setPin] = useState();
  const [image, setImage] = useState();

  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "https://car-darts.vercel.app";

  function addCar() {

    let carData = {
      model: carModel,
      reg: reg,
      color: color,
      name: name,
      pin: pin,
      image: image
    };

    console.log(carData);

    axios
      .post(`${BASE_URL}/create`, carData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
    <div className="Addcar">
      <div className="add-card">
        <h1>Add a new car</h1>
        <div className="inputs">
          <p htmlFor="">car model</p>
          <input
            type="text"
            placeholder="car model"
            onChange={(e) => setCarModel(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p htmlFor="">car reg no</p>
          <input
            type="text"
            placeholder="car reg no"
            onChange={(e) => setReg(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p htmlFor="">car color</p>
          <input
            type="text"
            placeholder="car color"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p htmlFor="">dealer name</p>
          <input
            type="text"
            placeholder="dealer name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <p htmlFor="">dealer pincode</p>
          <input
            type="text"
            placeholder="dealer pincode"
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div className="inputs"><p htmlFor="">Product Image</p>
          <input
            type="text"
            placeholder="car image link"
            onChange={(e) => setImage(e.target.value)}
          /></div>

        <div className="btn">
          <button onClick={()=>addCar()}>Submit</button>
        </div>
      </div>
    </div>
  );
}
