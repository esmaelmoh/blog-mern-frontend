import React from 'react'

const Register = () => {
    return (
        <div className='login-container'>
          {/* <div className="login-container-left">
              <img src="./images/icon.png"data-aos="flip-right" data-aos-duration="2000" className='welcome-icon' alt="" />
              <h1 className='welcome-eng'>Welcome</h1>
              <h1 data-aos="zoom-in-up" data-aos-duration="2000" >እንኳን ደህና መጡ</h1>
          </div> */}
          <div className="login-container-right">
          <section className='newone'>
            <form action=""className='login-form-new'>
                  <h1 className='login-title-new'>Login</h1>
                  <label htmlFor="">Username:</label>
                  <input type="text" name className='login-input-field-new'  id="" />
                  <label htmlFor="">Password:</label>
                  <input type="password" name className='login-input-field-new'  id="" />
                  <label htmlFor="">Email Adress:</label>
                  <input type="email" name className='login-input-field-new'  id="" />
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

export default Register