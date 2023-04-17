import { useState } from 'react';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';

import '../../parts/componets/PartItem.css';

const WorkDayItem = (props) => {
    const [isDeleting, setIsDeleting]  = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const deleteWorkdayHandler = () => {
        setIsDeleting(true);
        fetch(`http://localhost:3002/api/workdays/${props.id}`,{
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
          <h2>{props.name} {props.createdAt}</h2>
          <h3>DATE:{props.createdAt}</h3>
          <h3>PARTNUMBER: {props.partsUsed}</h3>
        </div>
        <div className="part-item__actions">
          <Button to={`/workdays/${props.id}`}>EDIT</Button>
          <Button danger onClick={showConfirmationHandler} disabled={isDeleting}>
              {isDeleting ? 'DELETING...' : 'DELETE'}
          </Button>
        </div>
        {showConfirmation && (
            <div className="part-item__confirmation">
              <p>Are you sure you want to delete this part?</p>
              <Button danger onClick={deleteWorkdayHandler}>DELETE</Button>
              <Button onClick={cancelDeleteHandler}>CANCEL</Button>
            </div>
        )}
      </Card>
    </li>

  );
};

export default WorkDayItem;
