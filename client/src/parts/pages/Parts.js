import React, { useState, useEffect } from 'react';
import PartList from '../componets/PartList.js';

const Part = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3002/api/parts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch parts');
        }
        return response.json();
      })
      .then(data => {
        setParts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <PartList items={parts} />;
};

export default Part;

