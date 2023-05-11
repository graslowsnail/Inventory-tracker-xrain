import React from 'react';
import Card from '../../shared/UIElements/Card';

const PartHistoryItem = (part) => {

  return (
        <div className="">
      <Card>
          <h2>{part.name}</h2>
          <h3>PART SIZE: {part.size}</h3>
          <h3>Box quantity: {part.boxQuantity}</h3>
          <h3>Initial Stock: {part.initialStock}</h3>
          <h3>Current Stock: {part.currentStock}</h3>
          <h3>AMMOUT USED : {part.usedStockAmmount}</h3>
      </Card>
        </div>
  );
};

export default PartHistoryItem;

