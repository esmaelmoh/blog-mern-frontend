import React, { useState } from 'react'
import './Login.css'
import {GrGoogle} from 'react-icons/gr'
const Login = () => {
  const [username,setUsername] = useState('esmael mohammed')
  const [password,setPassword] = useState('')
  return (
  <div className='login-container'>
    <div className="login-container-right">
    <section className='newone'>
      <form action=""className='login-form-new'>
            <h1 className='login-title-new'>Login</h1>
            <label htmlFor="">Username:</label>
            <input type="text" name className='login-input-field-new'  id="" />
            <label htmlFor="">Password:</label>
            <input type="password" name className='login-input-field-new'  id="" />
            <br /><br />
            <button type="submit" className='login-btn-new'>Login</button>
            <div className="line"></div>
            <button type="submit" className='login-btn-new'>Sign In With Google  </button>
            <p style={{color:'white',paddingTop:'0.7rem', textAlign:'center'}}>Don't have an account? <span style={{color:'#00e0ff',fontWeight:'bold'}}>Sign Up Now!</span> </p>
        </form></section>  
    </div>
    </div>
  )
}

export default Login