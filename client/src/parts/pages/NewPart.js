import React, { useState } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PartForm.css';
import { useForm } from '../../shared/hooks/form-hook';

const NewPart = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
      size: {
        value: '',
        isValid: false
      },
      quantity: {
        value: '',
        isValid: false
      },
      partNumber: {
        value: '',
        isValid: false
      }
    }, false);

const partSubmitHandler = async event => {
  event.preventDefault();
  //console.log(formState.inputs);// send this to the backend!!!!
    try{

    const response = await fetch('http://localhost:3002/api/parts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formState.inputs.name.value,
        size: formState.inputs.size.value,
        quantity: formState.inputs.quantity.value,
        partNumber: formState.inputs.partNumber.value
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
  < Card>
  <form className='part-form' onSubmit={partSubmitHandler}>
    <Input
      id='name'
      element='input'
      type='text'
      label='name'
      validators={[VALIDATOR_REQUIRE() ]}
      errorText='Please enter a valid partName.'
      onInput={inputHandler}
    />
      <Input 
      id='size'
      element='input'
      type='text'
      label='size'
      validators={[VALIDATOR_REQUIRE() ]}
      errorText='please enter a ammout of parts'
      onInput={inputHandler}
    />
    <Input
      id='quantity'
      element='input'
      label='quantity'
      validators={[VALIDATOR_MINLENGTH(1)]}
      errorText='please enter quantity over 1'
      onInput={inputHandler}
    />
    <Input
      id='partNumber'
      element='input'
      label='partNumber'
      validators={[VALIDATOR_MINLENGTH(1)]}
      errorText='please enter partNumber longer then  1 char'
      onInput={inputHandler}
    />

    <Button type='submit' disabled={!formState.isValid}>
      ADD PART
    </Button>

  </form>
  </Card>
);
};



export default NewPart;
