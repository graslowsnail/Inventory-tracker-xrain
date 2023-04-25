import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
//import moment from 'moment';

import '../../parts/componets/PartItem.css';
//import UpdatePart from '../../parts/pages/UpdatePart';
import UpdateWorkDay from './UpdateWorkDay';


const WorkDayDetail = () => {
    const { workDayId } = useParams();
  const [workDay, setWorkday] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
      setIsLoading(true);
    fetch(`http://localhost:3002/api/workday/${workDayId}`)
      .then(response => {
          if(!response.ok) {
              throw new Error('failed to fetch work day')
          }
          return response.json();
      })
      .then(data =>{
          setWorkday(data); 
          setIsLoading(false)
  })
      .catch(error => {
          console.error(`Error fetching workday: ${error.message}`)
          setIsLoading(false);
      });
  }, [workDayId]);

  const deleteWorkdayHandler = () => {
    setIsDeleting(true);
    fetch(`http://localhost:3002/api/workdays/${workDayId}`,{
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

    if(!workDay) {
        return (
          <div className='part-list center' > <h2>No WorkDay found. maybe create one!</h2>
            ----
            <Button to='/new/workday'>Add WorkDay</Button>
          </div>
        );
    };

    if(isLoading) {
        return (
            <Card><p>Loading...</p></Card>
        );
    };

    //const formattedDate = moment(workday.createdAt).format('YYYY/DD/MM'); // returns a string in the format of MM/DD/YYYY

    //const usedPartsArr = [workday.partsUsed];
  return (
    <>
      {workDay && (
        <Card className="part-item__content">
          <div className="part-item__info">
            <h1>{workDay.name} {workDay.date}</h1>
          <Card>
          <h3>scan and add part!</h3>
        <UpdateWorkDay workDay={workDay} workDayId={workDayId}/>

          <h3> PART USED ON {workDay.date}</h3>
            <ul>
            {workDay.partsUsed.map(part => (
                <div key={part._id}>
                (Part Name: {part.name})
                -(Size: {part.size})
                -(quantity: {part.quantity})
                </div>
            ))}
            </ul>
          </Card>
          </div>
          <div className="part-item__actions">
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

