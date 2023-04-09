import React, { useState,useEffect } from 'react';
import {Form,Button} from 'react-bootstrap';
import { Link,useNavigate } from "react-router-dom";

function LoginForm() {

  const initialValues = {email:'',password:''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  let navigate = useNavigate();

  const ChangeHandler = (event) => {
      let {name,value} = event.target;
      setFormValues({...formValues,[name]:value});
  }

  const Validate = (values) =>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if(!values.email){
        errors.email = "email is required!";
      }
      else if(!regex.test(values.email)){
        errors.email = "enter valid email id!";
      }
      else if(values.email !== "user@paperflite.com"){
        errors.email = "incorrect email"
      }

      if(!values.password){
        errors.password = "password is required!";
      }
      else if(values.password.length < 8){
        errors.password = "password cannot be less than 8 letters!";
      }
      else if(values.password !== "welcome123"){
        errors.password = "incorrect password";
      }
      return errors;
  }

  const SubmitHandler = (event) =>{
        event.preventDefault();
        setFormErrors(Validate(formValues));
        setIsSubmit(true)
  }

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log("formValues",formValues);

        navigate("/login/success");

        setTimeout(()=>{
            alert("logged In")
        },3000)
    }
  },[formErrors])

  return (
    <>
      <Form onSubmit={SubmitHandler} className='LoginForm'>
          <h2 className='heading'>Please login to continue</h2>
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" name='email' onChange={(event)=>ChangeHandler(event)} autoComplete='off'/>
              <span className='error_msg'>{formErrors.email}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" name='password' onChange={(event)=>ChangeHandler(event)} autoComplete='off'/>
              <span className='error_msg'>{formErrors.password}</span>
          </Form.Group>
          <div className='forgot_password'><Link to='/forgot_password' className='link'>Forgot Password?</Link></div>
          <Button type="submit" className='btn_continue'>Continue</Button>
          <div className='sign_up'>Don't have an account? <Link to='/sign_up' className='link'>Sign Up</Link></div>
      </Form>
    </>
  )
}

export default LoginForm