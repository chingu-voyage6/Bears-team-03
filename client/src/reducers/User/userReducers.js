import * as actionTypes from '../../actions/actionTypes'

export default function(state = {}, action){
  switch(action.type){
    case actionTypes.SIGN_UP:
      return {...state, authenticated: true}
    case actionTypes.SIGN_IN:
      return {...state,authenticated: true}
    case actionTypes.USER_ERROR:
      return {...state, error: action.payload}
    case actionTypes.USER_DASHBOARD:
      return {...state, user:action.payload.user, monthAccumulatedExpenses: action.payload.expenses}
    case actionTypes.USER_HEADER:
      return {...state, graph:action.payload}
    case actionTypes.LOGGED_IN:
       return {...state, authenticated: true}
    case actionTypes.LOGGED_OUT:
        return {...state, authenticated: true}
    case actionTypes.SHOW_EXPENSE_MODAL:
        return {...state, visible: action.payload}
    case actionTypes.MONTH_EXPENSE:
       return {...state, table: action.payload.data}  
    default:
      return state
   
  }
}