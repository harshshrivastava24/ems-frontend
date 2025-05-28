import React from 'react'

const CreateTask = () => {
    return (
        <div className='text-white mt-7 p-5 bg-[#1c1c1c] rounded-lg'>
            <form className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-lg font-normal'>Title</h1>
                    <input type="text" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg' placeholder='Make a UI Design' />
                    <h1 className='text-lg font-normal mt-4'>Date</h1>
                    <input type="date" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg' />
                    <h1 className='text-lg font-normal mt-4'>Assign To</h1>
                    <input type="text" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg' />
                    <h1 className='text-lg font-normal mt-4'>Category</h1>
                    <input type="text" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg' placeholder='Design, Development, etc..' />
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h1 className='text-lg font-normal'>Description</h1>
                    <textarea cols="30" rows="10" className='border-2 rounded-lg p-2 mt-1 w-full'></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-4 py-2 mt-5 rounded-lg w-full'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask