import React, {useContext} from 'react'
import { GlobalContext } from '../context/initialExpense';

function ExpenseIncome() {
    const { AllExpenses } = useContext(GlobalContext);

    const amounts = AllExpenses.map(expenses => expenses.amount);
  
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  
  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

    return (
        <div className="signs">
        <div>
        <h4>Income</h4>
<p className="plus-sign">+ {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
<p className="minus-sign">- {expense}</p>
      </div>
    </div>
    )
}
export default ExpenseIncome
