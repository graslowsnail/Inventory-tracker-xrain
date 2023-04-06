import React, { useState } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import '../../parts/pages/PartForm.css';
import { useForm } from '../../shared/hooks/form-hook';

const NewWorkDay = () => {
  const [formState, inputHandler] = useForm(
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

  const workDaySubmitHandler = async event => {
    event.preventDefault();
    //console.log(formState.inputs);
    try {
    const response = await fetch ('http://localhost:3002/api/workdays', {
      method: 'POST',
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
    formState(false);
  } catch (err) {
    console.log(err.message);
  }
  };

  return (
    <Card>
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
        <Input 
        id='partsUsed'
        element='input'
        type='text'
        label='parts used'
        validators={[VALIDATOR_REQUIRE() ]}
        errorText='Please enter a parts used'
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
