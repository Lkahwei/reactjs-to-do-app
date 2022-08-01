import {all, takeLatest, call, put} from 'redux-saga/effects';

import { TaskActionsTypes } from "./task.types";

import { fetchTasksSuccess, fetchTasksFailure, removeTaskSuccess, removeTaskFailure, addTaskSuccess, addTaskFailure, editTaskSuccess, editTaskFailure } from "./task.actions";

export function* fetchTasksAsync() {
    try{
        const tasksRef = yield fetch("http://127.0.0.1:3001/api/v1/tasks");
        const tasks = yield tasksRef.json();
        yield put(fetchTasksSuccess(tasks.data.tasks));
    }
    catch(error){
        yield put(fetchTasksFailure(error.message));
    }
}

export function* removeTaskAsync({payload: task}) {
    try{
        console.log(task);
        const taskRef = yield fetch(`http://127.0.0.1:3001/api/v1/tasks/${task._id}`, {method: 'DELETE', headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }});
        
        const taskJson = yield taskRef.json();
        yield put(removeTaskSuccess(taskJson.data.task));
    }
    catch(error){
        yield put(removeTaskFailure(error.message));
    }
}

export function* addTaskAsync({payload: task}) {
    try{

        const taskRef = yield fetch(`http://127.0.0.1:3001/api/v1/tasks`, {method: 'POST', headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(task)});
          
        const taskJson = yield taskRef.json();
        yield put(addTaskSuccess(taskJson.data.task));
    }
    catch(error){
        console.log(JSON.stringify(task))
        yield put(addTaskFailure(error.message));
    }
}

export function* editTaskAsync({payload: task}) {
    try{
        // console.log(task);
        const taskRef = yield fetch(`http://127.0.0.1:3001/api/v1/tasks/${task._id}`, {method: 'PATCH', headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }, body: JSON.stringify({title: task.title, completed: task.completed, _id: task._id})});
        
        const taskJson = yield taskRef.json();
        console.log(taskJson.data.task);
        yield put(editTaskSuccess(taskJson.data.task));
    }
    catch(error){
        yield put(editTaskFailure(`http://127.0.0.1:3001/api/v1/tasks/${task._id}`));
    }
}


export function* removeTaskStart(){
    yield takeLatest(
       TaskActionsTypes.REMOVE_TASK_START,
       removeTaskAsync
    )
}

export function* fetchTasksStart(){
    yield takeLatest(
       TaskActionsTypes.FETCH_TASKS_START,
       fetchTasksAsync
    )
}

export function* addTaskStart(){
    yield takeLatest(
       TaskActionsTypes.ADD_TASK_START,
       addTaskAsync
    )
}

export function* editTaskStart(){
    yield takeLatest(
       TaskActionsTypes.EDIT_TASK_START,
       editTaskAsync
    )
}

export function* tasksSagas() {
    yield(all([call(fetchTasksStart), call(removeTaskStart), call(addTaskStart), call(editTaskStart)]))
}