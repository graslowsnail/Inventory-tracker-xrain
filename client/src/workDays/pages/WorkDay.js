import React, { useState, useEffect } from 'react';
import WorkDayList from '../componets/WorkDayList';

const WorkDay = () => {
  const [workDays, setWorkDays] = useState([]);
  fetch('http://localhost:3002/api/workdays')
    .then(response => response.json())
    .then(data => setWorkDays(data))
    .catch(error => console.error(error));
  return (
    < WorkDayList items={workDays} />
  );
};

export default WorkDay;
