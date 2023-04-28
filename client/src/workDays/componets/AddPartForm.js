import React, { useState } from 'react';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import '../../parts/pages/PartForm.css';

const AddPartForm = ({ workDay, workDayId }) => {
  const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    barCodeId: formState.inputs.barCodeId.value
                })
            });

            const responseData = await response.json();
            console.log(responseData);
            setIsSuccess(true);
            setIsLoading(false);
        
            window.location.reload();
        } catch (err) {
            console.log(err.message);
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


