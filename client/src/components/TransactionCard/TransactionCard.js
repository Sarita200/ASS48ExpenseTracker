import React from 'react'
import './TransactionCard.css'

function TransactionCard({_id , title , amount , category ,type , createdAt}) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default TransactionCard
