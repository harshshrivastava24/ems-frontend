import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='shrink-0 h-[300px] w-[300px] bg-emerald-400 rounded-lg text-white p-5'>
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>{data.category}</h1>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='mt-2 text-sm'>{data.description}</p>
            <div className='mt-10 flex justify-center items-center'>
                <button className='px-2 py-2 bg-red-600 rounded-sm text-sm w-1/3'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask