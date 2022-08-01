import { TaskActionsTypes } from "./task.types"
import { addTaskToList, removeTaskFromList, editTaskItem} from "./task.utils"

const INITIAL_STATE = {
    taskList: [],
    isFetching: false,
    isDeleting: false,
    isAdding: false,
    errorMessage: undefined
}

const taskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // REDUX SAGA
        case TaskActionsTypes.FETCH_TASKS_START:
            return {
                ...state,
                isFetching: true
            }
        case TaskActionsTypes.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                taskList: action.payload
            }
        case TaskActionsTypes.FETCH_TASKS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case TaskActionsTypes.ADD_TASK_START:
            return {
                ...state,
                isAdding: true,
                errorMessage: null
            }
        case TaskActionsTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                isAdding: false,
                taskList: addTaskToList(state.taskList, action.payload)
            }
        case TaskActionsTypes.ADD_TASK_FAILURE:
            return {
                ...state,
                isAdding: false,
                errorMessage: action.payload
            }
        case TaskActionsTypes.EDIT_TASK_START:
            return {
                ...state,
                isDeleting: true,
                errorMessage: null
            }
        case TaskActionsTypes.EDIT_TASK_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                taskList: editTaskItem(state.taskList, action.payload)
            }
        case TaskActionsTypes.EDIT_TASK_FAILURE:
            return {
                ...state,
                isDeleting: false,
                errorMessage: action.payload
            }
        case TaskActionsTypes.REMOVE_TASK_START:
            return {
                ...state,
                isDeleting: true,
                errorMessage: null
            }
        case TaskActionsTypes.REMOVE_TASK_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                taskList: removeTaskFromList(state.taskList, action.payload)
            }
        case TaskActionsTypes.REMOVE_TASK_FAILURE:
            return {
                ...state,
                isDeleting: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default taskReducer;