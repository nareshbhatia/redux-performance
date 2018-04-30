import { combineReducers } from 'redux';
import { todoIds } from './todo-ids';
import { todoMap } from './todo-map';

export const rootReducer = combineReducers({
    todoIds,
    todoMap
});
