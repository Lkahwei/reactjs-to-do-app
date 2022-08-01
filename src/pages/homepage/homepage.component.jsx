import React from 'react';
import './homepage.styles.scss';

import Header from '../../components/header/header.component';
import AddTaskModal from '../../components/add-task-modal/add-task-modal.component';
import TaskList from '../../components/task-list/task-list.component';
const Homepage = () => {
    return(
        <div className="homepage">
            <Header></Header>
            <AddTaskModal/>
            <TaskList/>
        </div>

    )
}

export default Homepage;