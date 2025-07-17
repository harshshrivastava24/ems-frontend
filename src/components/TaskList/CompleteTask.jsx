import React from 'react'

const CompleteTask = () => {
    return (
        <div className='shrink-0 h-[300px] w-[300px] bg-green-400 rounded-lg text-white p-5'>
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                <h4 className='text-sm'>27 May 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            <div className='mt-10 flex justify-evenly items-center'>
                <button className='px-2 py-2 w-1/2 bg-blue-600 rounded-sm'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask