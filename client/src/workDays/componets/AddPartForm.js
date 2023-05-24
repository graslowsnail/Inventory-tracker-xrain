import React, { useState } from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import '../../parts/pages/PartForm.css';

const AddPartForm = ({ workDay, workDayId }) => {
  const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('token');
    const [formState, inputHandler] = useForm(
    {
      barCodeId: {
        value: '',
        isValid: false
      }
    }, false);
    

    const addPartSubmitHandler = async event => {
        event.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch(`http://localhost:3002/api/workdays/${workDayId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    barCodeId: formState.inputs.barCodeId.value
                })
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }

            setIsSuccess(true);
            setIsLoading(false);
            window.location.reload();
        } catch (err) {
            event.preventDefault();
            setIsSuccess(false)
            setError(true);
            console.error(err);
            setIsLoading(false);
        }
    };

      if (!workDay) {
    return (
      <div className='part-list center' > <h2>No WorkDay found. maybe create one!</h2>
        ----
        <Button to='/new/workday'>Add WorkDay</Button>
      </div>
    );
  }


  if (isLoading) {
    return <Card><p>Loading...</p></Card>
  }

// workDaySubmitHandler was at onSubmit for the form 
  return (
      <div>
      {isSuccess && <p>Part Updated successfully!</p>}
      {error && <p> ERROR SCANNIGN PART,TRY AGAIN!</p>}
      <form className='part-form' onSubmit={addPartSubmitHandler}>
        <Input
          id='barCodeId'
          element='input'
          type='text'
          label='SCAN BARCODE'
          validators={[VALIDATOR_REQUIRE()]}
          errorText='please enter a part used this working day'
          onInput={inputHandler}
          initialValid={false}
        />
        <Button type='submit' disabled={!formState.isValid}>
          ADD PART
        </Button>
      </form>
      </div>
  );
};

export default AddPartForm;


