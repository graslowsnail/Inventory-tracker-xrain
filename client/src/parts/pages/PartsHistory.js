import React, { useState, useEffect } from 'react';
import PartHistoryList from '../componets/PartHistoryList';


const PartHistory = () => {
  const [partHistory, setPartHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

    useEffect(() => {
    fetch('http://localhost:3002/api/partHistory',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch partHistory');
        }
        return response.json();
      })
      .then(data => {
        setPartHistory(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [token]);
    
      if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

    console.log(partHistory);

  return (
      <div>
      <PartHistoryList items={partHistory}/>
      </div>
  );
};

export default PartHistory;
