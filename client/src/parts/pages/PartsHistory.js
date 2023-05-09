import React, { useState, useEffect } from 'react';
import Button from '../../shared/FormElements/Button.js';
import PartItem from '../componets/PartItem.js';
//import PartList from '../componets/PartList.js';


const PartHistory = () => {
  const [partHistory, setPartHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    fetch('http://localhost:3002/api/parts/partHistory')
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

  if (partHistory.items.length === 0) {
    return (
      <div className='part-list center' >
        <h2>No Parts found. maybe create one! ------</h2>
        <Button to='/new/parts'>make part</Button>
      </div>
    );
  }

  return (
      <div>
        {partHistory.items?.map(part =>(
            <PartItem
              key={part._id} 
              id={part._id}
              name={part.name}
              size={part.size}
              boxQuantity={part.boxQuantity}
              currentStock={part.currentStock}
              initialStock={part.initialStock}
              usedStockAmmout={part.usedStockAmmout}
              isUsed={part.isUsed}
            />
          ))}

      </div>
  );
};

export default PartHistory;
