import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const authData = useContext(AuthContext);
    return (
        <div id='task-card' className='mt-5 bg-[#1c1c1c] p-5 text-white rounded-lg'>
            <div className='flex items-center justify-between mb-4 bg-red-400 rounded-lg py-2 px-4'>
                <h1>Name</h1>
                <h3>New Task</h3>
                <h4>Active</h4>
                <h4>Completed</h4>
                <h4>Failed</h4>
            </div>

            {authData.employees.map((elem, idx) => {
                return (
                    <div className='flex items-center justify-between mb-4 border-2 border-emerald-500 rounded-lg py-2 px-4' key={idx}>
                        <h1 className=''>{elem.firstName}</h1>
                        <h3 className='text-blue-400'>{elem.taskCount.newTask}</h3>
                        <h4 className='text-yellow-300'>{elem.taskCount.active}</h4>
                        <h4>{elem.taskCount.completed}</h4>
                        <h4 className='text-red-400'>{elem.taskCount.failed}</h4>
                    </div>)
            })}

        </div>
    )
}

export default AllTasks