import React,{useContext} from 'react'
import { GlobalContext } from '../context/initialExpense';

function TotalAmount() {
    const { AllExpenses } = useContext(GlobalContext);
    const amounts = AllExpenses.map(expenses => expenses.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    return (
        <div>
            <h4>Your Balance</h4>
           <h1><i class='fa fa-money'></i>PKR {total}</h1>   
        </div>
    )
}

export default TotalAmount;