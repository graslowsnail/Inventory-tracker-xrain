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

const partSubmitHandler = event => {
  event.preventDefault();
  console.log(formState.inputs);// send this to the backend!!!!
};

return (
  <form className='place-form' onSubmit={partSubmitHandler}>
    <Input
      id='name'
      element='input'
      type='text'
      lable='Name'
      validators={[VALIDATOR_REQUIRE() ]}
      errorText='Please enter a valid title.'
      onInput={inputHandler}
    />
      <Input 
      id='size'
      element='textarea'
      lable='size'
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText= 'please enter a valid descrtiption (at least 5 char long).'
      onInput={inputHandler}
    />
    <Input
      id='quantity'
      element='textarea'
      lable='quantity'
      validators={[VALIDATOR_MINLENGTH(1)]}
      errorText='please enter quantity over 1'
      onInput={inputHandler}
    />
    <Input
      id='partNumber'
      element='textarea'
      lable='partNumber'
      validators={[VALIDATOR_MINLENGTH(1)]}
      errorText='please enter partNumber longer then  1 char'
      onInput={inputHandler}
    />

    <button type='submit' disabled={!formState.isValid}>
    ADD PART
    </button>

  </form>
);
};



export default NewPart;
