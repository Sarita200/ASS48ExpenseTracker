import React, { useEffect, useState } from 'react'
import './AddTransaction.css'

function AddTransaction() {

    const [user , setUser ] = useState('')

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if(currentUser){
            setUser(currentUser)
        }
        if(!currentUser){
            window.location.href = '/login'
        }
    }, [ ])
    return (
        <div>
            <h1>Add Transactions For {user.fullName}</h1>

            <form className='signUpForm'>
                <input
                    type='text'
                    placeholder='Title'
                    className='userInput'
                />

                <input
                    type='number'
                    placeholder='Amount'
                    className='userInput'
                />
                
                <select className='userInput'>
                    <option value='credit'>Income</option>
                    <option value='debit'>Expense</option>
                </select>

                <select className='userInput'>
                    <option value='food'>Food</option>
                    <option value='rent'>Rent</option>
                    <option value='utilities'>Utilities</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='clothing'>Clothing</option>
                    <option value='health'>Health</option>
                    <option value='salary'>Salary</option>
                </select>

                <button type='button' className='btnAuth'>
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction
