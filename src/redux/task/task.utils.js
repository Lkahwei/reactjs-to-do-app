export const addTaskToList = (taskList, taskToAdd) => {
    return [...taskList, {...taskToAdd}];
}

export const editTaskItem = (taskList, taskToEdit) => {
    const existingTask = taskList.find(task => task._id === taskToEdit._id);

    if(existingTask) {
        taskList.forEach(taskItem => {
            if(taskItem._id === existingTask._id) {
                taskItem.completed = taskToEdit.completed
            }
        })
        return [...taskList];
    }
}

export const removeTaskFromList = (taskList, taskToRemove) => {
    const existingTask = taskList.find(task => task._id === taskToRemove._id);

    if(existingTask) {
        return taskList.filter(taskItem => taskItem._id !== existingTask._id)
    }
}