import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../shared/UIElements/Card';
import Button from '../../shared/FormElements/Button';
import AddPartForm from '../componets/AddPartForm.js';

import moment from 'moment';
import '../../parts/componets/PartItem.css';


const WorkDayDetail = () => {
    const { workDayId } = useParams();
    const [workDay, setWorkday] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [count, setCount] = useState(1);

    const token = localStorage.getItem('token');

  useEffect(() => {
      setIsLoading(true);
    fetch(`http://localhost:3002/api/workday/${workDayId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
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
  }, [workDayId, token]);

  const deleteWorkdayHandler = () => {
    setIsDeleting(true);
    fetch(`http://localhost:3002/api/workdays/${workDayId}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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

  const handleChange = (event) => {
      setCount(count + 1);
      console.log(count);
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

    const formattedDate = moment(workDay.createdAt).format('YYYY/DD/MM'); // returns a string in the format of MM/DD/YYYY

  return (
    <>
      {workDay && (
        <Card className="part-item__content">
          <div className="part-item__info">
            <h1>{workDay.name} {formattedDate}</h1>
            < br/>
            <h3>scan and add part!</h3>
            <AddPartForm workDay={workDay} workDayId={workDayId}/>

          <h3> PART USED ON {formattedDate}</h3>
            <ul>

<table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    current Stock
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    barCodeId
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {workDay.partsUsed.map((part) => (
                  <tr key={part._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{part.name}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.currentStock}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.barCodeId}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          {/*
            {workDay.partsUsed.map(part => (
                <div key={part._id} >
                -Parts grabbed:{count}  
                    (Part Name: {part.name})
                -(currentStock: {part.currentStock})
                -(BARCODE ID: {part.barCodeId})
                </div>
            ))}
              */}
            </ul>
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

