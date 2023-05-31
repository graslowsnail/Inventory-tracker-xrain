import { useState } from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';

import './PartItem.css';

const PartItem = (part) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const token =  localStorage.getItem('token');


  const deletePartHandler = () => {
    setIsDeleting(true);
    fetch(`http://localhost:3002/api/parts/${part.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        setIsDeleting(false)
        console.log('part deleted');
        window.location.reload();
      })
      .catch(error => {
        setIsDeleting(false);
        console.error(`Error deleting part: ${error.message}`);
      });
  };

  const showConfirmationHandler = () => {
    setShowConfirmation(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmation(false);
  };

  return (
    <li className="part-item">
      <Card className="part-item__content">
        <div className="part-item__info">
          <h2>{part.name}</h2>
          <h3>PART SIZE: {part.size}</h3>
          <h3>Box quantity: {part.boxQuantity}</h3>
          <h3>CURRENT STOCK: {part.currentStock}</h3>
          <h3>Initial Stock: {part.initialStock}</h3>
          <h3>BARCODE ID: {part.barCodeId}</h3>
        </div>
        <div className="part-item__actions">
          <Button to={`/parts/${part.id}`}>EDIT</Button>
          <Button danger onClick={showConfirmationHandler} disabled={isDeleting}>
            {isDeleting ? 'DELETING...' : 'DELETE'}
          </Button>
        </div>
      </Card>
      {showConfirmation && (
        <div className="part-item__confirmation">
          <p>Are you sure you want to delete this part?</p>
          <Button danger onClick={deletePartHandler}>DELETE</Button>
          <Button onClick={cancelDeleteHandler}>CANCEL</Button>
        </div>
      )}
    </li>
  );
};

export default PartItem;
