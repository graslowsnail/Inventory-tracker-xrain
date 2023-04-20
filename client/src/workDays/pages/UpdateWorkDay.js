import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import '../../parts/pages/PartForm.css';

const UpdateWorkDay = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const workDayId = useParams().workDayId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      partsUsed: {
        value: '',
        isValid: false
      }
    }, false);

  useEffect(() => {
    const fetchWorkDay = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/workdays/${workDayId}`);
        const responseData = await response.json();
        setFormData({
          name: {
            value: responseData.name,
            isValid: true
          },
          partsUsed: {
            value: responseData.partsUsed,
            isValid: true
          }
        }, true);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchWorkDay();
  }, [workDayId, setFormData]);

  const workDaySubmitHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3002/api/workdays/${workDayId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formState.inputs.name.value,
          partsUsed: formState.inputs.partsUsed.value
        })
      });
      const responseData = await response.json();
      console.log(responseData);
      setIsSuccess(true);
      // you may want to redirect the user to a success page instead of reloading the page
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  if (isLoading) {
    return <Card><p>Loading...</p></Card>
  }

  return (
    <Card>
      {isSuccess && <p>Part Updated successfully!</p>}
      <form className='part-form' onSubmit={workDaySubmitHandler}>
        <Input
          id='name'
          element='input'
          type='text'
          label='Name'
          validators={[VALIDATOR_REQUIRE() ]}
          errorText='Please enter a valid partName.'
          onInput={inputHandler}
          initialValue={formState.inputs.name.value}
          initialValid={formState.inputs.name.isValid}
        />
        <Input
          id='partsUsed'
          element='input'
          label='PartsUsed'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter parts used this working day'
          onInput={inputHandler}
          initialValue={formState.inputs.partsUsed.value}
          initialValid={formState.inputs.partsUsed.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>
          UPDATE PART
        </Button>
      </form>
    </Card>
  );
};

export default UpdateWorkDay;

