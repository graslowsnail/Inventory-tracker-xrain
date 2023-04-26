import React from 'react';
import PartItem from './PartItem';

import './PartList.css';

const PartList = props => {
  if (props.items.length === 0) {
    return (
      <div className='part-list center' >
        <h2>No Parts found. maybe create one!</h2>
        <button to='/parts/new'>make part</button>
      </div>
    );
  }

  return (
    <ul className='part-list'>
      {props.items?.map(part =>(
        <PartItem
          key={part._id} 
          id={part._id}
          name={part.name}
          size={part.size}
          quantity={part.quantity}
          barCodeId={part.barCodeId}
        />
      ))}
    </ul>
  );
};

export default PartList;
