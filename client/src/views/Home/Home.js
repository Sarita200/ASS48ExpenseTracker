import React, { useEffect, useState } from 'react'
import './Home.css'
import toast, { Toaster } from "react-hot-toast"
import axios from 'axios'
import TransactionCard from '../../components/TransactionCard/TransactionCard'

function Home() {  
  const [user ,setUser] = useState(' ')

  const [ transactions , setTransactions ] = useState([])

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

    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/transactions?userId=${user._id}`)
    
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

          setTimeout(() =>{
            window.location.href = '/login'
          })
        }}
        >
          Logout
        </span>

        <div className='netTransactionvalue'>
          <div className='netTransactionItem'>
              <span className='net-transaction-value-amount'>
                + totalCreditAmount
              </span>
              <span className='net-transaction-value-title'>
                Total Credit Amount
              </span>
          </div>
          <div className='netTransactionItem'>
              <span className='net-transaction-value-amount'>
                + totalCreditAmount
              </span>
              <span className='net-transaction-value-title'>
                Total Credit Amount
              </span>
          </div>
          <div className='netTransactionItem'>
              <span className='net-transaction-value-amount'>
                + totalCreditAmount
              </span>
              <span className='net-transaction-value-title'>
                Total Credit Amount
              </span>
          </div>          
          
        </div>

        {
          transactions.map( (transaction) => {
            const {_id , title, amount, category, type, createdAt} = transaction

            return (<TransactionCard
              Key={_id}
              _id={_id}
              title={title}
              amount={amount}
              category={category}
              type={type}
              createdAt={createdAt}
              loadTransactions={loadTransactions}
              />
            )
          })
        }
        <Toaster/>
    </div>
  )
}

export default Home
