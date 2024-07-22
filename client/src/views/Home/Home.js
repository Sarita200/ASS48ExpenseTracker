import React, { useEffect, useState } from 'react'
import './Home.css'
import toast from "react-hot-toast"
import axios from 'axios'

function Home() {  
  const [user ,setUser] = useState(' ')

  const [ transaction , setTransactions ] = useState([])

  useEffect(() =>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setUser(currentUser)
    }

    if(!currentUser){
      window.location.href = '/login'
    }
  }, [])

  const loadTransactions = async () =>{

    if(!user._id){
      return
    }

    toast.loading('Loading Transaction...')

    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/login}/transactions?userId=${user._id}`)
    
    toast.dismiss()
    setTransactions(response.data.data)
  }

  useEffect(() =>{
    loadTransactions()
  }, [user])

  return (
    <div>
      <h1 className='greeting'>Hello {user.fullName}</h1>
        <h2 className='heading'>Welcome To Expense Tracker</h2>

        <span 
        className='homeLogout'
        onClick={() =>{
          localStorage.clear()
          toast.success(`Logged out successfully..`)
        }}
        >
          Logout
        </span>
    </div>
  )
}

export default Home
