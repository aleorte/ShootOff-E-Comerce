import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ props }) => {
  return (
    <div className="card-deck">
       
      <div className="cards">
      
        <Link to={`/product/${props.id}`}>
          <img src={props.img} className="card-img-top" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
      </div>
  
  );
};
