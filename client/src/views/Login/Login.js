import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
        <h1 className='title'> User Login</h1>

        <form className='signUpForm'>

        <input
          type='email'
          placeholder='Email'
          className='userInput'
        />

        <input
          type='password'
          placeholder='Password'
          className='userInput'
        />

        <button type='button' className='btnAuth'>Login</button>
      </form>
    </div>
  )
}

export default Login
