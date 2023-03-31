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
          key={part.id} 
          id={part.id}
          name={part.name}
        />
      ))}
    </ul>
  );
};

export default PartList;
