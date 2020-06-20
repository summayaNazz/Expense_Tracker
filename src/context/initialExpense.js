import React,{createContext,useReducer,useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState={
AllExpenses: JSON.parse(localStorage.getItem('AllExpenses')) || []
}

export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children})=>{
const [state, dispatch] = useReducer(AppReducer, initialState)

useEffect(()=>{
  localStorage.setItem('AllExpenses',JSON.stringify(state.AllExpenses))
})

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