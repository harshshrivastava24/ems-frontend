import React from 'react'

const TaskList = () => {
    return (
        <div id='task-card' className='flex flex-nowrap overflow-x-auto items-center justify-start gap-5 w-full mt-10 py-4'>
            <div className='shrink-0 h-[300px] w-[300px] bg-blue-400 rounded-lg text-white p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                    <h4 className='text-sm'>27 May 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            </div>
            <div className='shrink-0 h-[300px] w-[300px] bg-green-400 rounded-lg text-white p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                    <h4 className='text-sm'>27 May 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            </div>
            <div className='shrink-0 h-[300px] w-[300px] bg-yellow-400 rounded-lg text-white p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                    <h4 className='text-sm'>27 May 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            </div>
            <div className='shrink-0 h-[300px] w-[300px] bg-emerald-400 rounded-lg text-white p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                    <h4 className='text-sm'>27 May 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            </div>
            <div className='shrink-0 h-[300px] w-[300px] bg-red-400 rounded-lg text-white p-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-red-500 px-3 py-1 rounded text-sm'>High</h1>
                    <h4 className='text-sm'>27 May 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, maiores!</p>
            </div>
        </div>
    )
}

export default TaskList