import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './PartForm.css';
import { useForm } from '../../shared/hooks/form-hook';

const UpdatePart = () => {
  const partId = useParams().partId;
  const [formState, inputHandler, setFormData] = useForm(
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

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchPart = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/parts/${partId}`);
        const responseData = await response.json();
        setFormData({
          name: {
            value: responseData.name,
            isValid: true
          },
          size: {
            value: responseData.size,
            isValid: true
          },
          quantity: {
            value: responseData.quantity,
            isValid: true
          },
          partNumber: {
            value: responseData.partNumber,
            isValid: true
          }
        }, true);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchPart();
  }, [partId, setFormData]);

  const partSubmitHandler = async event => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3002/api/parts/${partId}`, {
        method: 'PUT',
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
      setIsSuccess(true);
      // you may want to redirect the user to a success page instead of reloading the page
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Card>
      {isSuccess && <p>Part Updated successfully!</p>}
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
          errorText='please enter partNumber longer then  1 charcter'
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>
          UPDATE PART
        </Button>
      </form>
    </Card>
  );
};

export default UpdatePart;

