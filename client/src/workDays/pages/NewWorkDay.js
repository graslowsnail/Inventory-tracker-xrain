import React from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
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

  const workDaySubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
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
  );
};

export default NewWorkDay;
