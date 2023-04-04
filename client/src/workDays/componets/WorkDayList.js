import React from 'react';

import WorkDayItem from './WorkDayItem.js';

import '../../parts/componets/PartList.css';

const WorkDayList = ( props ) => {
  if (props.items.length === 0) {
    return (
      <div className='part-list center' >
        <h2>No Parts found. maybe create one!</h2>
        <button to='/parts/new'>make part</button>
      </div>
    );
  }
  return(
<ul className='part-list'>
      {props.items?.map(part =>(
        < WorkDayItem
          key={part._id} 
          id={part._id}
          name={part.name}
        />
      ))}
    </ul>
  );
};

export default WorkDayList;
