import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminDash = (props) => {
    return (
        <div className='p-8'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTasks />
        </div>
    )
}

export default AdminDash