import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='flex text-white gap-5 mt-10 screen'>
            <div className='p-10 bg-blue-400 w-[45%] rounded-lg'>
                <h1 className='text-3xl font-bold'>{data.taskCount.newTask}</h1>
                <h3 className='text-lg font-semibold'>New Task</h3>
            </div>
            <div className='p-10 bg-green-400 w-[45%] rounded-lg'>
                <h1 className='text-3xl font-bold'>{data.taskCount.completed}</h1>
                <h3 className='text-lg font-semibold'>Completed</h3>
            </div>
            <div className='p-10 bg-yellow-400 w-[45%] rounded-lg'>
                <h1 className='text-3xl font-bold'>{data.taskCount.active}</h1>
                <h3 className='text-lg font-semibold'>Accepted</h3>
            </div>
            <div className='p-10 bg-red-400 w-[45%] rounded-lg'>
                <h1 className='text-3xl font-bold'>{data.taskCount.failed}</h1>
                <h3 className='text-lg font-semibold'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers