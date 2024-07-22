import React from 'react'
import './TransactionCard.css'

function TransactionCard({_id , title , amount , category ,type , createdAt}) {
  return (
    <div className='TransactionCard'>
      <h1 className='TransactionCardTitle'>{title}</h1>

      <spam>
        
        {new Date(createdAt).toLocaleString()}
      </spam>

      <span className='TransactionCardAmount' style={{
        color: type === "credit" ? "green":"red"
      }}>
        {type === "credit" ? "+": "-"}
        {amount}
      </span>
    </div>
  )
}

export default TransactionCard
