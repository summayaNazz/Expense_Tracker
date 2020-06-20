import React,{useContext} from 'react'
import { GlobalContext } from '../context/initialExpense'

function Expense({expenses}) {
    const {deleteHandle} = useContext(GlobalContext)

    const sign = expenses.amount < 0 ? '-' : '+';
    return (
        <div>
         <li className={expenses.amount < 0 ? 'minus' : 'plus'}>
      {expenses.charge} <span>{sign}Rs{Math.abs(expenses.amount)}</span><button onClick={() => deleteHandle(expenses.id)} className="delete-btn">x</button>
    </li>    
        </div>
    )
}

export default Expense
