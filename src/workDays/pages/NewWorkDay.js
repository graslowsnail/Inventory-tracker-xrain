import React, { useState } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import '../../parts/pages/PartForm.css';

const NewWorkDay = () => {
    const token = localStorage.getItem('token');
    
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      }
  }, false);
    const [isSuccess,  setIsSuccess] = useState(false);

  const workDaySubmitHandler = async event => {
    event.preventDefault();
    //console.log(formState.inputs);
    try {
    const response = await fetch ('http://localhost:3002/api/workdays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formState.inputs.name.value
      })
    });

    const responseData = await response.json();
    console.log(responseData);
    const workDayId = (responseData.workday._id);
        console.log(workDayId);
        setIsSuccess(true);
        window.location.href = `/workday/${workDayId}`;
  } catch (err) {
    console.log(err.message);
  }
  };

  return (
    <Card>
      <h1> ADD NEW WORKDAY</h1>
    {isSuccess && <p>Part added successfully!</p> }
    <form className='part-form' onSubmit={workDaySubmitHandler}>
        <Input
            id='name'
            element='input'
            type='text'
            label='WorkDay name'
            validators={[VALIDATOR_REQUIRE() ]}
            errorText='Please enter a work Day name.'
            onInput={inputHandler}
        />

        <Button type='submit' disabled={!formState.isValid}>
          ADD WORKDAY
        </Button>
    </form>
    </Card>
  );
};

export default NewWorkDay;
