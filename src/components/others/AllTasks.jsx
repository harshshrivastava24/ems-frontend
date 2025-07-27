import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const authData = useContext(AuthContext);

    return (
        <div id='task-card' className='mt-5 bg-[#1c1c1c] p-5 text-white rounded-lg h-48'>
            <div className='flex items-center justify-between mb-4 bg-red-400 rounded-lg py-2 px-4'>
                <h1>Name</h1>
                <h3>New Task</h3>
                <h4>Active</h4>
                <h4>Completed</h4>
                <h4>Failed</h4>
            </div>
            <div className='overflow-auto'>
                {authData.employees.map((elem, idx) => {
                    <div className='flex items-center justify-between mb-4 bg-red-400 rounded-lg py-2 px-4' key={idx}>
                        <h1>{elem.firstName}</h1>
                        <h3>{elem.taskCOunt.newTask}</h3>
                        <h4>{elem.taskCOunt.active}</h4>
                        <h4>{elem.taskCOunt.completed}</h4>
                        <h4>{elem.taskCOunt.failed}</h4>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTasks