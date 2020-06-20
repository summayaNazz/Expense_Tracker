import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState={
AllExpenses: [
// {id:1,charge:'rent',amount:1600},
// {id:2,charge:'grossery',amount:800},
// {id:3,charge:'car-payment',amount:600},
// {id:4,charge:'credit-card-bill',amount:1200}
]
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
const [state, dispatch] = useReducer(AppReducer, initialState)

function deleteHandle(id) {
    dispatch({
      type: 'DELETE',
      payload: id
    });
  }

  function AddHandle(expenses) {
    dispatch({
      type: 'ADD',
      payload: expenses
    });
  }

return (<GlobalContext.Provider value={{
AllExpenses:state.AllExpenses,
deleteHandle,
AddHandle  
}}>
{children}
</GlobalContext.Provider>);
}