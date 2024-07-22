import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {  
  const [user ,setUser] = useState(' ')

  useEffect(() =>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setUser(currentUser)
    }

    if(!currentUser){
      window.location.href = '/login'
    }
  })
  return (
    <div>
      <h1 className='greeting'>Hello {user.fullName}</h1>
        <h2 className='heading'>Welcome To Expense Tracker</h2>

        <span className='homeLogout'>
          Logout
        </span>
    </div>
  )
}

export default Home
