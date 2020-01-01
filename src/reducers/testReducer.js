import { combineReducers } from 'redux'
import {
  ADD_TODO,
} from '../actions/testAction'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}
const rootReducer = combineReducers({
  todos
})
export default rootReducer