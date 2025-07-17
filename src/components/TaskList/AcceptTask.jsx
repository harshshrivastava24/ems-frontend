import React from 'react'

const AcceptTask = () => {
    return (
        <div className='shrink-0 h-[300px] w-[300px] bg-blue-400 rounded-lg text-white p-5'>
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                <h4 className='text-sm'>27 May 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            <div className='mt-10 flex justify-evenly items-center'>
                <button className='px-3 py-3 text-sm rounded-md items-center bg-green-500 w-1/3'>Mark as Completed</button>
                <button className='px-3 py-3 text-sm rounded-md items-center bg-red-500 w-1/3'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask