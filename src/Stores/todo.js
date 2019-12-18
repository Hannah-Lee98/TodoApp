import { createStore } from 'redux'
import todoApp from '../Reducers/todo'

const store = createStore(todoApp)

export default store;

