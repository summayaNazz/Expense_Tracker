import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/initialExpense';

function EntryForm() {
    const [charge, setCharge] = useState('')
    const [amount, setAmount] = useState('')

    const {AddHandle} = useContext(GlobalContext)

    const handleCharge=e=>{
        setCharge(e.target.value)
      }

      const handleAmount=e=>{
        setAmount(e.target.value)
      }
      const handleSubmit = e => {
        e.preventDefault();
    
        const newExpenses = {
          id: Math.floor(Math.random() * 100000000),
          charge,
          amount: +amount
        }
    
        AddHandle(newExpenses);
      }
    

    return (
        <div>
            <h2>Enter New Data</h2>
         <form onSubmit={handleSubmit}>
            <div className='form-center'>
<div className='form-group'>
<label htmlFor='expense'>charge</label>
<input type='text' className='form-control' id='charge' name='charge' 
placeholder='Enter Text' onChange={handleCharge} value={charge}/>
</div>
<div className='form-group'>
<label htmlFor='amount'>amount: ( '-' for expense)</label>
<input type='number' className='form-control' id='amount' name='amount' 
placeholder='100' onChange={handleAmount} value={amount}/>
</div>

            </div>
            <button type='submit' className='btn'> submit</button>
        </form>
        </div>
    )
}

export default EntryForm;