import React from 'react';
import { Link } from 'react-router-dom';

import './PartItem.css';


const PartItem = props => {

  return (
    <li className='user-item'>
      <div className='user-item__content'>
        <Link to={`parts/${props.id}`}>
          <div>
            <div className='user-item__info'>
              <h2>{props.name}</h2>
          </div>
          </div>
        </Link>
      </div>
    </li>
  );
}
export default PartItem;
