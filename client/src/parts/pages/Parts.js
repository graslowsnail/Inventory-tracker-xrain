import React, { useState, useEffect } from 'react';
import PartList from '../componets/PartList.js';
import Button from '../../shared/FormElements/Button';

const Part = () => {
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation]= useState(false);

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


    const resetPartsHandler = () => {
    };

const showConfirmationHandler = () => {
    setShowConfirmation(true);
  };
const cancelResetHandler = () => {
    setShowConfirmation(false);
};



  return (
      <div>
          <Button onClick={showConfirmationHandler}> RESTART PART COUNT</Button>
      {showConfirmation && (
        <div className="part-item__confirmation">
          <p>--Are you sure you want to reset all parts current stock?
          <br/>
          --Clicking reset will restet all the current stock with the initial stock.
          </p>
          <Button danger onClick={resetPartsHandler}>RESET PARTS</Button>
          <Button onClick={cancelResetHandler}>CANCEL</Button>
        </div>
      )}

          <PartList items={parts} />

      </div>
  );
};

export default Part;

