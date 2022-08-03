import React from 'react';
import './Input.scss';

export default function Input({ name, ...props }) {
  return (
    <div className='customInput'>
      <label>
        <input {...props} placeholder=" " />
        <div>{name}</div>
      </label>
    </div>
  );
}
