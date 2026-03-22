import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className="rounded-xl w-[200px] h-[200px] py-6 px-6 shadow-lg bg-blue-400">
            <h2 className='text-3xl font-semibold text-white'>{data?.tasks?.filter(task => task.newTask).length}</h2>
            <h3 className='text-xl font-medium text-white'>New Task</h3>
        </div>
    )
}

export default NewTask