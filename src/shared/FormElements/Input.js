import React, { useReducer, useEffect, useRef } from 'react';

import { validate } from '../util/validators';
import './Input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH' : {
      return {
        ...state,
        isTouched:true
      }
    } 
    default:
      return state;
  } 
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isTouch: false,
    isValid: props.initialValid ||false
  });

  const { id, onInput } = props;
  const {value, isValid} = inputState;

  useEffect ( () => {
    onInput(id, value,isValid)
  }, [id,value,isValid, onInput]);

    const inputRef = useRef(null); // Create a ref for the input element

  useEffect(() => {
          if (document.querySelectorAll('.form-control').length > 1) {
          } else {
    inputRef.current.focus(); // Focus on the input element when the component mounts
          }
  }, []);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({
      type:'TOUCH'
    });
  };

  const element = 
    props.element === 'input' ? (
      <input
        ref={inputRef} // Pass the ref to the input element
        _id={props._id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <select 
      _id={props._id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
      >
        <option value="OTHER">OTHER</option>
        <option value="1/4inch">1/4inch</option>
        <option value="1/2inch">1/2inch</option>
        <option value="3/4inch">3/4inch</option>
        <option value="1inch">1inch</option>
        <option value="1-1/4inch">1-1/4inch</option>
        <option value="1-1/2inch">1-1/2inch</option>
        <option value="2inch">2inch</option>
        <option value="2-1/2inch">2-1/2inch</option>
        <option value="3inch">3inch</option>
        <option value="3-1/2inch">3-1/2inch</option>
        <option value="4inch">4inch</option>
        <option value="6inch">6inch</option>
      </select>
    );

  return (
    <div 
    className={`form-control ${!inputState.isValid && inputState.isTouched &&
        'form-control--invalid'}`}
    > 
    <label htmlFor={props._id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );

};

export default Input;

/*
      <textarea
        _id={props._id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      */
