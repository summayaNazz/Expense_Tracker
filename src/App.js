import React from 'react';
import './App.css';
import  {Header} from './components/Header';
import  {GlobalProvider}  from './context/initialExpense';
import TotalAmount from './components/TotalAmount';
import ExpenseIncome from './components/ExpenseIncome';
import ExpenseList from './components/ExpenseList';
import EntryForm from './components/EntryForm';

function App() {
  return (
  <GlobalProvider>
    <Header/>
    <div className='container'>
   <TotalAmount/>
   <ExpenseIncome/>
   <ExpenseList/>
   <EntryForm/>
    </div>
  </GlobalProvider>
    );
}

export default App;
