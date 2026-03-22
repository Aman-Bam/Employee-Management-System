import React from 'react'
import AcceptTask from '../components/TaskList/AcceptTask'
import CompleteTask from '../components/TaskList/CompleteTask'
import FailedTask from '../components/TaskList/FailedTask'
import NewTask from '../components/TaskList/NewTask'
import TasklistNumber from '../components/TaskList/TasklistNumber'

const TaskList = ({ data }) => {
  return (
    <>
      <div className='flex justify-between gap-5 '>
        <AcceptTask key={data.id} data={data} />
        <CompleteTask key={data.id} data={data} />
        <FailedTask key={data.id} data={data} />
        <NewTask key={data.id} data={data} />
      </div>
      <TasklistNumber key={data.id} data={data} />
    </>
  )
}

export default TaskList 