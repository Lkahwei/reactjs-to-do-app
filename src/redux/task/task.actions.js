import { TaskActionsTypes } from "./task.types";

// REDUX SAGA (start, success, failure)

export const fetchTasksStart = () => ({
    type: TaskActionsTypes.FETCH_TASKS_START,
})

export const fetchTasksSuccess = tasks => ({
    type: TaskActionsTypes.FETCH_TASKS_SUCCESS,
    payload: tasks
})

export const fetchTasksFailure = errorMessage => ({
    type: TaskActionsTypes.FETCH_TASKS_FAILURE,
    payload: errorMessage
})

export const addTaskStart = task => ({
    type: TaskActionsTypes.ADD_TASK_START,
    payload: task
})

export const addTaskSuccess = task => ({
    type: TaskActionsTypes.ADD_TASK_SUCCESS,
    payload: task
})

export const addTaskFailure = errorMessage => ({
    type: TaskActionsTypes.ADD_TASK_FAILURE,
    payload: errorMessage
})

export const editTaskStart = task => ({
    type: TaskActionsTypes.EDIT_TASK_START,
    payload: task
})

export const editTaskSuccess = task => ({
    type: TaskActionsTypes.EDIT_TASK_SUCCESS,
    payload: task
})

export const editTaskFailure = errorMessage => ({
    type: TaskActionsTypes.EDIT_TASK_FAILURE,
    payload: errorMessage
})

export const removeTaskStart = task => ({
    type: TaskActionsTypes.REMOVE_TASK_START,
    payload: task
})

export const removeTaskSuccess = task => ({
    type: TaskActionsTypes.REMOVE_TASK_SUCCESS,
    payload: task
})

export const removeTaskFailure = errorMessage => ({
    type: TaskActionsTypes.REMOVE_TASK_FAILURE,
    payload: errorMessage
})

export const addTaskItem = task => ({
    type: TaskActionsTypes.ADD_TASK_ITEM,
    payload: task
});

export const removeTaskItem = task => ({
    type: TaskActionsTypes.REMOVE_TASK_ITEM,
    payload: task
});

export const uncompleteTaskItem = task => ({
    type: TaskActionsTypes.UNCOMPLETE_TASK_ITEM,
    payload: task
})

export const completeTaskItem = task => ({
    type: TaskActionsTypes.COMPLETE_TASK_ITEM,
    payload: task
})