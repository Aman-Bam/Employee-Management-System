import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div>
            <div className="rounded-xl w-[200px] h-[200px] py-6 px-6 shadow-lg bg-yellow-400">
                <h2 className='text-3xl font-semibold text-white'>{data?.tasks?.filter(task => task.failed).length}</h2>
                <h3 className='text-xl font-medium text-white'>Failed Task</h3>
            </div></div>
    )
}

export default FailedTask