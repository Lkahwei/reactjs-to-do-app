import  { createSelector } from 'reselect';

// The 'task' is following the name in the combineReducers
const selectTask = state => state.task;

export const selectTaskList = createSelector(
    [selectTask],
    task => task.taskList
);