import React, { useState } from 'react'
import './Register.css'
import Axios from 'axios'
const Register = () => {

  const [username,setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [email,setEmail]= useState('')
  console.log(username,password,email)

  const handleChange = async(e)=>{
    e.preventDefault()
    try {
      const user = await Axios.post('http://localhost:5000/api/auth/register',{username,password,email})
      console.log(user)
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <div className='register-container'>
          <div className="register-container-right">
          <section className='newone'>
            <form action=""className='register-form-new'>
                  <h1 className='register-title-new'>Register</h1>
                  <label htmlFor="">Username:</label>
                  <input type="text" name className='register-input-field-new' onChange={(e)=>setUsername(e.target.value)} id="" />
                  <label htmlFor="">Password:</label>
                  <input type="password" name className='register-input-field-new' onChange={(e)=>setPassword(e.target.value)} id="" />
                  <label htmlFor="">Email Adress:</label>
                  <input type="email" name className='register-input-field-new' onChange={(e)=>setEmail(e.target.value)}  id="" />
                  <br /><br />
                  <button type="submit" className='register-btn-new' onChange={handleChange}>Register</button>
                  <div className="line"></div>
                  <button type="submit" className='register-btn-new'>Sign In With Google  </button>
                  <p style={{color:'white',paddingTop:'0.7rem', textAlign:'center'}}>Don't have an account? <span style={{color:'#00e0ff',fontWeight:'bold'}}>Sign Up Now!</span> </p>
              </form></section>  
          </div>
          </div>
  )
}

export default Register