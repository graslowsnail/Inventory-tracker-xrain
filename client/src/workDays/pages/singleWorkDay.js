import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';

import '../../parts/componets/PartItem.css';


const WorkDayDetail = ({ workdayId }) => {
    const { workDayId } = useParams();
  const [workday, setWorkday] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3002/api/workday/${workDayId}`)
      .then(response => response.json())
      .then(data => setWorkday(data))
      .catch(error => console.error(`Error fetching workday: ${error.message}`));
  }, [workDayId]);

  const deleteWorkdayHandler = () => {
    setIsDeleting(true);
    fetch(`http://localhost:3002/api/workdays/${workday.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        setIsDeleting(false);
        console.log('Workday Deleted');
        window.location.reload();
      })
      .catch(error => {
        setIsDeleting(false);
        console.error(`Error deleting workday: ${error.message}`);
      });
  };

  const showConfirmationHandler = () => {
    setShowConfirmation(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {workday && (
        <Card className="part-item__content">
          <div className="part-item__info">
            <h2>{workday.name}</h2>
            <h3>DATE: {workday.date}</h3>
            <h3>PARTNUMBER: {workday.partsUsed}</h3>
          </div>
          <div className="part-item__actions">
            <Button to={`/workdays/${workday.id}`}>EDIT</Button>
            <Button danger onClick={showConfirmationHandler} disabled={isDeleting}>
              {isDeleting ? 'DELETING...' : 'DELETE'}
            </Button>
          </div>
          {showConfirmation && (
            <div className="part-item__confirmation">
              <p>Are you sure you want to delete this workday?</p>
              <Button danger onClick={deleteWorkdayHandler}>DELETE</Button>
              <Button onClick={cancelDeleteHandler}>CANCEL</Button>
            </div>
          )}
        </Card>
      )}
    </>
  );
};

export default WorkDayDetail;

