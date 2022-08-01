import React from 'react';
import './header.styles.scss';
import AddIcon from '@mui/icons-material/Add';
import AddTaskModal from '../add-task-modal/add-task-modal.component';

const Header = () => {
    function toggleAddTask() {
        const addTaskModal = document.getElementById('add-task-modal');
        addTaskModal.style.display = 'block';
    }
    return (
        <div className="header">
            <div className="modal-toggle">
                <div className="modal-toggle__button" onClick={toggleAddTask}>
                    <AddIcon className='modal-toggle__icon' />
                    <span className="modal-toggle__text">New Task</span>
                </div>
            </div>
            
            <div className="header__text">
                To-Do List
            </div>

        </div>
    )
}

export default Header;