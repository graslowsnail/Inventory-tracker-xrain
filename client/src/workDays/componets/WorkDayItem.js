import React from 'react';

import { Link } from 'react-router-dom';

import Card from '../../shared/UIElements/Card';

import '../../parts/componets/PartItem.css';

const WorkDayItem = (props) => {
  return (
    <li className="part-item">
      <Card className="part-item__content">
        <Link to={`parts/${props.id}`}>
          <div>
            <div className="part-item__info">
              <h2>{props.name}</h2>
            </div>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default WorkDayItem;
