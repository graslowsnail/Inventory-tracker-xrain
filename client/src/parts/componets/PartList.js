import React from 'react';
import PartItem from './PartItem';
import Button from '../../shared/FormElements/Button';

import './PartList.css';

const PartList = (parts) => {
  if (parts.items.length === 0) {
    return (
      <div className='part-list center' >
        <h2>No Parts found. maybe create one! ------</h2>
        <Button to='/new/parts'>make part</Button>
      </div>
    );
  }

  return (
    <div>
        <ul className='part-list'>
          {parts.items?.map(part =>(
            <PartItem
              key={part._id} 
              id={part._id}
              name={part.name}
              size={part.size}
              boxQuantity={part.boxQuantity}
              currentStock={part.currentStock}
              initialStock={part.initialStock}
              barCodeId={part.barCodeId}
            />
          ))}
        </ul>
    </div>
  );
};

export default PartList;
