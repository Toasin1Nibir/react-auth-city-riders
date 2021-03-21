import React from 'react';
import './Form.css'

import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    return (
      <div className='form'>
    <form onSubmit={handleSubmit(onSubmit)}>
   
   <input name="name" placeholder='Name' ref={register} />
   
      <br/>
   <input name="Email"  placeholder='Username or email'  ref={register({ required: true })} />
   <br/>
   <input name="Password"  placeholder='Password'  ref={register({ required: true })} />
   <br/>
   <input name="CPassword"  placeholder='Confirm Password'  ref={register({ required: true })} />
   <br/>
   {errors.exampleRequired && <span>This field is required</span>}
   
   <input type="submit" />
 </form>
      </div>
  
    );
}

export default Form;