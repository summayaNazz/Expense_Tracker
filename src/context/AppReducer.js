export default (state,action)=>{
    
switch (action.type) {
    case 'DELETE':
    return{...state,AllExpenses: state.AllExpenses.filter(expenses => expenses.id !== action.payload)}
    
    case 'ADD':
        return { ...state, AllExpenses: [action.payload, ...state.AllExpenses] }

    default:
        return state;
}
}