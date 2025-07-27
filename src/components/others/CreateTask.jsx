import React, { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [newtask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, completed: false, failed: false })

        const data = JSON.parse(localStorage.getItem('employees'));

        data.forEach((elem) => {
            if (assignTo == elem.firstName) {
                elem.tasks.push(newtask)
            }
        })

        localStorage.setItem('employees', data)

        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setCategory('')
        setAssignTo('')
    }
    return (
        <div className='text-white mt-7 p-5 bg-[#1c1c1c] rounded-lg'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-lg font-normal'>Title</h1>
                    <input type="text" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg' placeholder='Make a UI Design'
                        value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value);
                        }} />
                    <h1 className='text-lg font-normal mt-4'>Date</h1>
                    <input type="date" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg'
                        value={taskDate} onChange={(e) => {
                            setTaskDate(e.target.value);
                        }} />
                    <h1 className='text-lg font-normal mt-4'>Assign To</h1>
                    <input type="text" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg'
                        value={assignTo} onChange={(e) => {
                            setAssignTo(e.target.value);
                        }} />
                    <h1 className='text-lg font-normal mt-4'>Category</h1>
                    <input type="text" className='border-2 w-4/5 bg-transparent p-2 mt-1 rounded-lg' placeholder='Design, Development, etc..'
                        value={category} onChange={(e) => {
                            setCategory(e.target.value);
                        }} />
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h1 className='text-lg font-normal'>Description</h1>
                    <textarea cols="30" rows="10" className='border-2 rounded-lg p-2 mt-1 w-full'
                        value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }}></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-4 py-2 mt-5 rounded-lg w-full'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask