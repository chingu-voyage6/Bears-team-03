import {combineReducers} from 'redux'
import UserReducer from './User/userReducers'
import {reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  user: UserReducer,
  form
})

export default rootReducer;