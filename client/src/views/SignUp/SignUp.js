import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div>
      <h1 className='title'> User Registration</h1>

      <form className='signUpForm'>
        <input
          type='text'
          placeholder='Full Name'
          className='userInput'
        />

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

        <input
          type='Date'
          placeholder='Date of Birth'
          className='userInput'
        />

        <button type='button' className='btnAuth'>Register</button>
      </form>
    </div>
  )
}

export default SignUp
