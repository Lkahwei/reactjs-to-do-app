import React, {useState} from "react";
import './add-task-modal.styles.scss';
import { addTaskStart } from "../../redux/task/task.actions";
import { connect } from "react-redux";

const AddTaskModal = ({addTaskStart}) => {
    const [title, setTitle] = useState('');

    function handleChange(event) {
        setTitle(event.target.value);
        
    }

    function closeModal() {
        const addTaskModal = document.getElementById('add-task-modal');
        addTaskModal.style.display = 'none';     
    }
    
    return (
        <div id="add-task-modal" className="add-task-modal">
            <div className="add-task-modal__content">
                <span className="add-task-modal__content--close" onClick={closeModal}>
                    &times;
                </span>
                <input type="text" id="taskTitle" className="add-task-modal__content--input" onChange={handleChange}/>
                <button className="add-task-modal__button" onClick={() => {addTaskStart({title: title, completed: false}); document.getElementById('taskTitle').value = "";}}>ADD</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addTaskStart: task => dispatch(addTaskStart(task))
})

export default connect(null, mapDispatchToProps)(AddTaskModal);