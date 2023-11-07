import "./NewsLetter.css";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>GETcEXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
