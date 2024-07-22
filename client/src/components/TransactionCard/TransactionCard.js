import React from 'react'
import './TransactionCard.css'

function TransactionCard({_id , title , amount , category ,type , createdAt}) {
  return (
    <div className='TransactionCard'>
      <h1 className='TransactionCardTitle'>{title}</h1>

      <span  className="TransactionCardDate">
        {new Date(createdAt).toLocaleString()}
      </span>

      <span className='TransactionCardCategory'>
        {category}
      </span>

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
