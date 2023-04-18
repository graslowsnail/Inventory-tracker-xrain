import { useState } from 'react';

import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';

const SingleWorkDay = props => {

    return (
              <Card className="part-item__content">
        <div className="part-item__info">
          <h2>{props.name}</h2>
          <h3>DATE: {props.date}</h3>
          <h3>PARTNUMBER: {props.partsUsed}</h3>
        <h3>PARTS USED: {props.partsUsed}</h3>
        </div>
        <div className="part-item__actions">
          <Button to={`/workdays/${props.id}`}>EDIT</Button>
        </div>
      </Card>

    );
};

export default SingleWorkDay;
