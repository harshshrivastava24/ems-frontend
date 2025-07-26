import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    // console.log(data)
    return (
        <div id='task-card' className='flex flex-nowrap overflow-x-auto items-center justify-start gap-5 w-full mt-10 py-4 text-white'>
            {
                data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} />
                    }
                })
            }
            {/* <AcceptTask />
            <CompleteTask />
            <NewTask />
            <FailedTask /> */}

        </div>
    )
}

export default TaskList