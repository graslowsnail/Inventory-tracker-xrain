import React from "react";
import { Link } from "react-router-dom";

import Card from '../../shared/UIElements/Card';

import "./PartItem.css";

const PartItem = (props) => {
  return (
    <li className="part-item">
      <Card className="part-item__content">
        <Link to={`parts/${props._id}`}>
          <div>
            <div className="part-item__info">
              <h2>{props.name}</h2>
              <h3>PART SIZE: {props.size}</h3>
              <h3>QUANTITY: {props.quantity}</h3>
              <h3>PARTNUMBER: {props.partNumber}</h3>
            </div>
          </div>
        </Link>
      </Card>
    </li>
  );
};
export default PartItem;
