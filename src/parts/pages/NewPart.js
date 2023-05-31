import React, { useState } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const NewPart = () => {
    const token = localStorage.getItem('token');

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
      boxQuantity: {
        value:'',
        isValid: false
      },
      currentStock: {
        value:'',
        isValid: false
      },
      initialStock: {
        value:'',
        isValid: false
      },
      barCodeId: {
        value: '',
        isValid: false
      }
    }, false);
  const [isSuccess, setIsSuccess] = useState(false);

  const partSubmitHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/api/parts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formState.inputs.name.value,
          size: formState.inputs.size.value,
          boxQuantity: formState.inputs.boxQuantity.value,
          currentStock: formState.inputs.currentStock.value,
          initialStock: formState.inputs.initialStock.value,
          barCodeId: formState.inputs.barCodeId.value
        })
      });
      const responseData = await response.json();
      console.log(responseData);
      setIsSuccess(true);
        window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Card>
      <h1 className=''>
      ADD NEW PART
      </h1>

      {isSuccess && <p>Part added successfully!</p>}
      <form className='part-form' onSubmit={partSubmitHandler}>
        <Input
          id='name'
          element='input'
          type='text'
          label='Part name'
          validators={[VALIDATOR_REQUIRE() ]}
          errorText='Please enter a valid partName.'
          onInput={inputHandler}
        />
        <Input 
          id='size'
          element='input'
          type='text'
          label='Part size'
          validators={[VALIDATOR_REQUIRE() ]}
          errorText='please enter a ammout of parts'
          onInput={inputHandler}
        />
        <Input
          id='boxQuantity'
          element='input'
          label='box Quantity'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter quantity over 1'
          onInput={inputHandler}
          initialValue={formState.inputs.boxQuantity.value}
          initialValid={formState.inputs.boxQuantity.isValid}
        />
        <Input
          id='currentStock'
          element='input'
          label='current Stock'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter quantity over 1'
          onInput={inputHandler}
          initialValue={formState.inputs.currentStock.value}
          initialValid={formState.inputs.currentStock.isValid}
        />
        <Input
          id='initialStock'
          element='input'
          label='initial Stock'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter quantity over 1'
          onInput={inputHandler}
          initialValue={formState.inputs.initialStock.value}
          initialValid={formState.inputs.initialStock.isValid}
        />
        <Input
          id='barCodeId'
          element='input'
          label='barCodeId'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter barCodeId longer then  1 charcter'
          onInput={inputHandler}
          initialValue={formState.inputs.barCodeId.value}
          initialValid={formState.inputs.barCodeId.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>
          ADD PART
        </Button>
      </form>
    </Card>
  );
};
export default NewPart;

