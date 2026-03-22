import React from 'react'
import Header from '../../other/Header'
import TaskList from '../../other/TaskList'

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <div>

      <Header changeUser={changeUser} data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard