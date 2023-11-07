import React from "react";
import "./Offers.css";
import exclsive_img from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLER</p>
        <button>Check NOW</button>
      </div>
      <div className="offers-right">
        <img src={exclsive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
