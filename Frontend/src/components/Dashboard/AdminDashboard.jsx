import React from 'react';
import Header from '../../other/Header';
import CreateTaskAdmin from '../../other/CreateTaskAdmin';
import AllTask from '../../other/AllTask';

const AdminDashboard = ({ data, changeUser }) => {
  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col pb-12">
      <Header changeUser={changeUser} data={data} />
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-8 flex flex-col gap-8 animate-fade-in">
        <CreateTaskAdmin data={data} />
        <AllTask />
      </main>
    </div>
  );
};

export default AdminDashboard;