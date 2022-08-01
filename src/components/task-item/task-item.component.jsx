import React, {useState} from 'react';
import './task-item.styles.scss';
import { removeTaskStart, editTaskStart} from '../../redux/task/task.actions';
import { connect } from "react-redux";
import { useEffect } from "react";

const TaskItem = ({task, editTaskStart, removeTaskStart}) => {
    
    const {title, completed, _id} = task;
    const [checked, setChecked] = useState(completed)
    return (
        <div className="task-item">
            {/* {completed ? <input className="task-item__checkbox" type="checkbox" defaultChecked={checked} onChange={() => editTaskStart({title: title, completed: !completed, _id: _id})} /> : <input className="task-item__checkbox" type="checkbox" onChange={() => editTaskStart({title: title, completed: true, _id: _id})}/>} */}
            <input className="task-item__checkbox" type="checkbox" defaultChecked={checked} onChange={() => editTaskStart({title: title, completed: !completed, _id: _id})} />
            <span className="task-item__title">{title}</span>
            <button className="task-item__delete-button" onClick={() => removeTaskStart(task)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeTaskStart: task => dispatch(removeTaskStart(task)),
    editTaskStart: task => dispatch(editTaskStart(task))
})


export default connect(null, mapDispatchToProps)(TaskItem);