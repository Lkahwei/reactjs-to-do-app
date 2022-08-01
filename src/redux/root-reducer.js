import { combineReducers } from '@reduxjs/toolkit';
import taskReducer from './task/task.reducer';

/* Combine all the reducers into one variable */
const reducers = combineReducers({
    task: taskReducer
})

//with Redux Persist
export default reducers;
