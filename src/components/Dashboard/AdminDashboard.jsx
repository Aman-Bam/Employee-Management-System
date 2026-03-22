import React from 'react'
import Header from '../../other/Header'
import CreateTaskAdmin from '../../other/CreateTaskAdmin'
import AllTask from '../../other/AllTask'

const AdminDashboard = ({ data, changeUser }) => {
    return (
        <div>
            <Header changeUser={changeUser} data={data} />
            <AllTask />
            <CreateTaskAdmin data={data} />
        </div>
    )
}

export default AdminDashboard 