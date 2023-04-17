import React from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';

import '../../parts/componets/PartItem.css';

const WorkDayItem = (props) => {
  return (
    <li className="part-item">
      <Card className="part-item__content">
        <div className="part-item__info">
          <h2>{props.name}</h2>
          <h3>PARTNUMBER: {props.partsUsed}</h3>
        </div>
        <div className="part-item__actions">
          <Button to={`/parts/${props.id}`}>EDIT</Button>
        </div>
      </Card>
    </li>

  );
};

export default WorkDayItem;
