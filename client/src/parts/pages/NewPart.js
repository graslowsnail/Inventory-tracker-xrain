import React from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PartForm.css';
import { useForm } from '../../shared/hooks/form-hook';

const NewPart = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: 'hi',
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

const partSubmitHandler = event => {
  event.preventDefault();
  console.log(formState.inputs);// send this to the backend!!!!
};

return (
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
      element='select'
      label='size'
      validators={[VALIDATOR_REQUIRE() ]}
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
);
};



export default NewPart;
