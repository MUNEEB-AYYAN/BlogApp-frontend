import React, { useState } from 'react'
import { Box,Typography,TextField,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [input, setInput] = useState({
    name:'',
    email:'',
    password:''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post("http://localhost:8080/apiv1/auth/register",{username:input.name,email:input.email,password:input.password});
      if (data.success){
        alert("Registration Successful");
        navigate('/login');
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <>

    <form onSubmit={handleSubmit}>
      <Box maxWidth={450} display='flex' flexDirection={'column'} alignItems='center' justifyContent={'center'} margin='auto' marginTop={5} padding={3} boxShadow={'10px 10px 20px #ccc'} borderRadius={5}>
      <Typography variant='h4' padding={3} textAlign='center'
      >Register
      </Typography>
      <TextField placeholder='name' onChange={handleChange} value={input.name} name='name' type={'text'} margin='normal' required />
      <TextField placeholder='email' onChange={handleChange} value={input.email} name='email' type={'email'} margin='normal' required />
      <TextField placeholder='password' onChange={handleChange} value={input.password} name='password' type={'password'} margin='normal' required />
      
      <Button type='submit' variant='contained' color='primary' sx={{marginTop:3,borderRadius:3}}
      >Submit
      </Button>
      <Button onClick={() => navigate('/login')} sx={{marginTop:3,borderRadius:3}}>
        Already registered ? Please login
      </Button>
    </Box>
    </form>
    
    </>
  )
}

export default Register