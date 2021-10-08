import React from "react";

const Card = ({ title, price, count, description }) => {
  return (
    <div className="card">
      <div className="card-item">
        <h2>{title}</h2>
        <h4>{price}</h4>
        <span>
          <strong> - {count}</strong>
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
