import React, { useState, useEffect } from 'react';
import WorkDayList from '../componets/WorkDayList';

const WorkDay = () => {
  const [workDays, setWorkDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3002/api/workdays')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch workdays');
        }
        return response.json();
      })
      .then(data => {
        setWorkDays(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <WorkDayList items={workDays} />;
};

export default WorkDay;

