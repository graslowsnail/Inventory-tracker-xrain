import React, { useState, useEffect } from 'react';
import PartList from '../componets/PartList.js';
import Button from '../../shared/FormElements/Button';

const PartHistory = () => {
    const [partHistory, setPartHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation]= useState(false);


    useEffect(() => {
    fetch('http://localhost:3002/api/partHistory')
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
  }, []);
      if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }


const showConfirmationHandler = () => {
    setShowConfirmation(true);
  };
const cancelResetHandler = () => {
    setShowConfirmation(false);
};



  return (
      <div>

          <PartList items={partHistory} />

      </div>
  );
};

export default Part;


      
};
