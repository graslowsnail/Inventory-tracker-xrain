import React from 'react';
import { useState } from 'react';
import Button from '../../shared/FormElements/Button';

const PartList = (parts) => {
      
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPart, setSelectedPart] = useState(null);


  const deletePartHandler = (part) => {
      setSelectedPart(part);
      setShowConfirmation(true);

    fetch(`http://localhost:3002/api/parts/${part._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
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


  if (parts.items.length === 0) {
    return (
      <div className='part-list center' >
        <h2>No Parts found. maybe create one! ------</h2>
        <Button to='/new/parts'>make part</Button>
      </div>
    );
  }
          return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">All Parts</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the parts that are in the containers and apart of the consignment
          </p>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Size
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Box Quantity
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Initial Stock
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Current Stock
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Bar Code Id
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">

                {parts.items?.map(part =>(
                  <tr key={part._id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {part.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.size}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.boxQuantity}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.initialStock}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.currentStock}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{part.barCodeId}</td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <Button className="text-indigo-600 hover:text-indigo-900" to={`/parts/${part._id}`}>EDIT</Button>
                        <Button danger onClick={() => deletePartHandler(part)} disabled={isDeleting}>
                          {isDeleting ? 'DELETING...' : 'DELETE'}
                        </Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
            {showConfirmation && selectedPart && (
                <div className="part-item__confirmation">
                  <p>Are you sure you want to delete this part?</p>
                  <Button danger onClick={() => deletePartHandler(selectedPart)}>DELETE</Button>
                  <Button onClick={cancelDeleteHandler}>CANCEL</Button>
                </div>
          )}

          </div>
        </div>
      </div>
    </div>
  )

};

export default PartList;
