import React from "react";
import "./Items.css";

const Items = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} className="item-image" />
      <h3>{name}</h3>
      <div className="price">
        {old_price && <span className="old-price">${old_price}</span>}
        <span className="new-price">${new_price}</span>
      </div>
    </div>
  );
};

export default Items;
