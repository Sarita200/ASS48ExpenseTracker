import React from 'react'
import './TransactionCard.css'

function TransactionCard({_id , title , amount , category ,type , createdAt}) {
  return (
    <div className='TransactionCard'>
      <h1 className='TransactionCardTitle'>{title}</h1>
    </div>
  )
}

export default TransactionCard
