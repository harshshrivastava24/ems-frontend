import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'

const EmployeeDash = () => {
    return (
        <div className='p-8 bg-[#1c1c1c] h-screen'>
            <Header />

            <div className='flex text-white gap-5 mt-10 screen'>
                <div className='p-10 bg-blue-400 w-[45%] rounded-lg'>
                    <h1 className='text-3xl font-bold'>0</h1>
                    <h3 className='text-lg font-semibold'>New Task</h3>
                </div>
                <div className='p-10 bg-green-400 w-[45%] rounded-lg'>
                    <h1 className='text-3xl font-bold'>3</h1>
                    <h3 className='text-lg font-semibold'>Completed</h3>
                </div>
                <div className='p-10 bg-yellow-400 w-[45%] rounded-lg'>
                    <h1 className='text-3xl font-bold'>0</h1>
                    <h3 className='text-lg font-semibold'>Accepted</h3>
                </div>
                <div className='p-10 bg-red-400 w-[45%] rounded-lg'>
                    <h1 className='text-3xl font-bold'>0</h1>
                    <h3 className='text-lg font-semibold'>Failed</h3>
                </div>
            </div>

            <TaskList />
        </div>
    )
}

export default EmployeeDash