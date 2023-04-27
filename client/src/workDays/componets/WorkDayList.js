import React from 'react';
import WorkDayItem from './WorkDayItem.js';
import moment from 'moment';

import '../../parts/componets/PartList.css';

const WorkDayList = ( workDays ) => {
    
    //FORMATTED CREATED AT DATE
    const formattedDate = moment(workDays.date).format('MM/DD/YYYY'); // returns a string in the format of MM/DD/YYYY

  return(
<ul className='part-list'>
      {workDays.items?.map(workDay =>(
        < WorkDayItem
          key={workDay._id} 
          id={workDay._id}
          name={workDay.name}
          partsUsed={workDay.partsUsed}
          date={formattedDate}
        />
      ))}
    </ul>
  );
};

export default WorkDayList;
