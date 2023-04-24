import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
//import moment from 'moment';

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
    fetch(`http://localhost:3002/api/workdays/${workday._id}`,{
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
        window.location.href = '/';
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
    //const formattedDate = moment(workday.createdAt).format('YYYY/DD/MM'); // returns a string in the format of MM/DD/YYYY

    //const usedPartsArr = [workday.partsUsed];
  return (
    <>
      {workday && (
        <Card className="part-item__content">
          <div className="part-item__info">
            <h2>{workday.name}</h2>
            <h3>DATE: {workday.createdAt}</h3>
          <h3> PARTS USED</h3>
            <ul>
            {workday.partsUsed.map(part => (
                <div key={part._id}>
                (Part Name: {part.name})
                -(Size: {part.size})
                -(quantity: {part.quantity})
                </div>
            ))}
            </ul>
          </div>
          <div className="part-item__actions">
            <Button to={`/workdays/${workday._id}`}>EDIT</Button>
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

