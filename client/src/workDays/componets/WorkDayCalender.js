import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WorkDayItem from './WorkDayItem';

function WorkDayCalender() {
  const [workday, setWorkday] = useState(null);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]); // default to today's date range

  useEffect(() => {
    async function fetchWorkDay() {
      try {
        const [startDate, endDate] = dateRange;
        const response = await fetch(`http://localhost:3002/api/workdays?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`);
        const data = await response.json();
        setWorkday(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (dateRange.every(date => date instanceof Date)) {
      fetchWorkDay();
    }
  }, [dateRange]);

  return (
    <div>
      <Calendar
        value={dateRange}
        onChange={setDateRange}
        selectRange={true}
        tileDisabled={({ activeStartDate, date, view }) => {
          // disable dates that are in the future
          return date > new Date();
        }}
      />
      {workday ? (
        <div>
          <div>Workday found!</div>
          <WorkDayItem items={workday}/>
        </div>
      ) : (
        <p>No workday found for this date range</p>
      )}
    </div>
  );
}

export default WorkDayCalender;

