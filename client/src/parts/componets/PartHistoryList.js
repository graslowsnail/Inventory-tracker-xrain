import React from 'react';
import PartHistoryItem from './PartHistoryItem';

const PartHistortList = (partHistory) => {

    return (
        <div>
                <ul className='part-list'>
          {partHistory.items?.map(part =>(
            <PartHistoryItem
              key={part._id} 
              id={part._id}
              name={part.name}
              size={part.size}
              boxQuantity={part.boxQuantity}
              currentStock={part.currentStock}
              initialStock={part.initialStock}
              usedStockAmmount={part.usedStockAmmount}
            />
          ))}
        </ul>
        </div>
    );
};
export default PartHistortList;
