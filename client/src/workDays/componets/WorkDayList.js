import React from 'react';
import WorkDayItem from './WorkDayItem.js';
import moment from 'moment';
import Button from '../../shared/FormElements/Button';

import '../../parts/componets/PartList.css';

const WorkDayList = ( props ) => {
  if (props.items.length === 0) {
    return (
      <div className='part-list center' >
        <h2>No WorkDay found. maybe create one!</h2>
        ----
        <Button to='/new/workday'>Add WorkDay</Button>
      </div>
    );
  }
    //FORMATTED CREATEDAT DATE
    const formattedDate = moment(props.date).format('MM/DD/YYYY'); // returns a string in the format of MM/DD/YYYY

  return(
<ul className='part-list'>
      {props.items?.map(part =>(
        < WorkDayItem
          key={part._id} 
          id={part._id}
          name={part.name}
          partsUsed={part.partsUsed}
          date={formattedDate}
        />
      ))}
    </ul>
  );
};

export default WorkDayList;
