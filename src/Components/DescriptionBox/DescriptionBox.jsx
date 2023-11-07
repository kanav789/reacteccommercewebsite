import React from "react";
import "./Descriptionbox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descritptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          porro. Culpa non quibusdam dolorum vel numquam, unde vero aperiam
          consequatur optio amet.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores at,
          fuga nulla amet ullam voluptatum cumque atque repellat, quod velit
          consequuntur corporis consequatur nisi placeat ipsum, illo culpa iure
          eos ut obcaecati excepturi molestiae earum! Laudantium voluptate
          cupiditate reiciendis illum!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
