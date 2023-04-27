import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import Card from '../../shared/UIElements/Card';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PartForm.css';

const UpdatePart = () => {
  const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
      currentStock: {
        value:'',
        isValid: false
      },
      barCodeId: {
        value: '',
        isValid: false
      }
    }, false);

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
          currentStock: {
            value: responseData.currentStock,
            isValid: true
          },
          barCodeId: {
            value: responseData.barCodeId,
            isValid: true
          }
        }, true);
          setIsLoading(false);
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
          currentStock: formState.inputs.currentStock.value,
          barCodeId: formState.inputs.barCodeId.value
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

    if(isLoading) {
            return <Card><p>Loading...</p></Card>
    }

  return (
    <Card>
      {isSuccess && <p>Part Updated successfully!</p>}
      <form className='part-form' onSubmit={partSubmitHandler}>
        <Input
          id='name'
          element='input'
          type='text'
          label='Part name'
          validators={[VALIDATOR_REQUIRE() ]}
          errorText='Please enter a valid partName.'
          onInput={inputHandler}
          initialValue={formState.inputs.name.value}
          initialValid={formState.inputs.name.isValid}
        />
        <Input 
          id='size'
          element='input'
          type='text'
          label='Part size'
          validators={[VALIDATOR_REQUIRE() ]}
          errorText='please enter a ammout of parts'
          onInput={inputHandler}
          initialValue={formState.inputs.size.value}
          initialValid={formState.inputs.size.isValid}
        />
        <Input
          id='currentStock'
          element='input'
          label='currentStock'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter quantity over 1'
          onInput={inputHandler}
          initialValue={formState.inputs.currentStock.value}
          initialValid={formState.inputs.currentStock.isValid}
        />
        <Input
          id='barCodeId'
          element='input'
          label='barCodeId'
          validators={[VALIDATOR_MINLENGTH(1)]}
          errorText='please enter partNumber longer then  1 charcter'
          onInput={inputHandler}
          initialValue={formState.inputs.barCodeId.value}
          initialValid={formState.inputs.barCodeId.isValid}
        />
        <Button type='submit' disabled={!formState.isValid}>
          UPDATE PART
        </Button>
      </form>
    </Card>
  );
};

export default UpdatePart;

