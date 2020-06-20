import React,{useContext} from 'react'
import { GlobalContext } from '../context/initialExpense'
import Expense from './Expense'

function ExpenseList() {
    const {AllExpenses} = useContext(GlobalContext)
    return (
        <div>
          <h3>History</h3>
      <ul className="list">
        {AllExpenses.map(expenses => (<Expense key={expenses.id} expenses={expenses} />))}
      </ul>   
        </div>
    )
}

export default ExpenseList
