import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../TaskList/TaskListNumbers'

const EmployeeDash = ({ data }) => {
    return (
        <div className='p-8 bg-[#1c1c1c] h-screen'>
            <Header data={data} />

            <TaskListNumbers data={data} />

            <TaskList data={data} />
        </div>
    )
}

export default EmployeeDash