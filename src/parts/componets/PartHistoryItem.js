import React from 'react';

const PartHistoryItem = (part) => {

  return (
        <div className="">
          <h2>{part.name}</h2>
          <h3>PART SIZE: {part.size}</h3>
          <h3>Initial Stock: {part.initialStock}</h3>
          <h3>Current Stock: {part.currentStock}</h3>
          <h3>Box quantity: {part.boxQuantity}</h3>
          <h3>AMMOUT USED : {part.usedStockAmmount}</h3>
        </div>
  );
};

export default PartHistoryItem;

