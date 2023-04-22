import { useState } from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import { Link } from 'react-router-dom';

import '../../parts/componets/PartItem.css';

const WorkDayItem = (props) => {

  return (
    <li className="part-item">
      <Card className="part-item__content">
      <Link to={`/workday/${props.id}`} className="part-item__content">
        <div className="part-item__info">
              <h2>{props.name}</h2>
              <h3>DATE: {props.date}</h3>
              <h3>PARTSUSED: {props.partsUsed}</h3>
            </div>
      </Link>
      </Card>
    </li>

  );
};

export default WorkDayItem;
