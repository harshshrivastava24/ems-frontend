import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../TaskList/TaskListNumbers'

const EmployeeDash = (props) => {
    return (
        <div className='p-8 bg-[#1c1c1c] h-screen'>
            <Header changeUser={props.changeUser} data={props.data} />

            <TaskListNumbers data={props.data} />

            <TaskList data={props.data} />
        </div>
    )
}

export default EmployeeDash