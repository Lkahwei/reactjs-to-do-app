import React from "react";
import './task-list.styles.scss';

import { useSelector } from "react-redux";
import TaskItem from "../task-item/task-item.component";

import { connect } from "react-redux";
import { fetchTasksStart } from "../../redux/task/task.actions";    

import { selectTaskList } from "../../redux/task/task.selector";
import { useEffect } from "react";
//React Hooks Solution
const TaskList = ({fetchTasksStart}) => {
    
    useEffect(() => {fetchTasksStart()}, [fetchTasksStart])
    const taskList = useSelector(selectTaskList);
    return (
        <div className="task-list">
            <div className="task-items">
                {
                    taskList.length ? taskList.map(taskItem => <TaskItem key={taskItem._id} task={taskItem}></TaskItem>) : <span className="empty-message">Your Task Is Empty</span>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTasksStart: () => dispatch(fetchTasksStart())
})

export default connect(null, mapDispatchToProps)(TaskList);