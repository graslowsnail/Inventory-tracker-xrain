import { useState } from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import './PartItem.css';

const PartItem = (props) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const deletePartHandler = () => {
    setIsDeleting(true);
      fetch(`http://localhost:3002/api/parts/${props.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        setIsDeleting(false);
        console.log('part deleted');
          window.location.reload();
      })
      .catch(error => {
        setIsDeleting(false);
        console.error(`Error deleting part: ${error.message}`);
      });
  };

  return (
    <li className="part-item">
      <Card className="part-item__content">
        <div className="part-item__info">
          <h2>{props.name}</h2>
          <h3>PART SIZE: {props.size}</h3>
          <h3>QUANTITY: {props.quantity}</h3>
          <h3>PARTNUMBER: {props.partNumber}</h3>
        </div>
        <div className="part-item__actions">
          <Button to={`/parts/${props.id}`}>EDIT</Button>
          <Button danger onClick={deletePartHandler} disabled={isDeleting}>
            {isDeleting ? 'DELETING...' : 'DELETE'}
          </Button>
        </div>
      </Card>
    </li>
  );
};

export default PartItem;
