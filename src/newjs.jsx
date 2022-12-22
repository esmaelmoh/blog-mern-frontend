import React from 'react'
import './newjs.css'
const NewJs = () => {
  return (
    <>
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
            <p style={{color:'rgba(0, 0, 0, 0.705)',paddingTop:'0.7rem', textAlign:'center'}}>Don't have an account? <span style={{color:" #3963cb",fontWeight:'bold'}}>Sign Up Now!</span> </p>
        </form></section>  
    </>
  )
}

export default NewJs