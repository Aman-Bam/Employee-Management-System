import React from 'react'

const TasklistNumber = ({ data }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 px-5'>
      
      {data?.tasks?.map((task, idx) => {
        // Determine status tag based on task boolean properties
        let statusText = 'Unknown';
        let statusColor = 'bg-gray-100 text-gray-700';
        let dotColor = '⚪';
        let borderColor = 'border-gray-200';
        let bgColor = 'bg-white';

        if (task.newTask) {
          statusText = 'New Task';
          statusColor = 'bg-blue-100 text-blue-700';
          dotColor = '🔵';
          borderColor = 'border-blue-200';
          bgColor = 'bg-blue-50';
        } else if (task.completed) {
          statusText = 'Completed';
          statusColor = 'bg-green-100 text-green-700';
          dotColor = '🟢';
          borderColor = 'border-green-200';
          bgColor = 'bg-green-50';
        } else if (task.failed) {
          statusText = 'Failed';
          statusColor = 'bg-red-100 text-red-700';
          dotColor = '🔴';
          borderColor = 'border-red-200';
          bgColor = 'bg-red-50';
        } else if (task.active) {
          statusText = 'In Progress';
          statusColor = 'bg-amber-100 text-amber-700';
          dotColor = '🟡';
          borderColor = 'border-amber-200';
          bgColor = 'bg-amber-50';
        }

        // Determine category color based on category string
        let catColor = 'bg-purple-100 text-purple-700';
        const cat = task.category.toLowerCase();
        if (cat.includes('design')) catColor = 'bg-pink-100 text-pink-700';
        else if (cat.includes('dev')) catColor = 'bg-purple-100 text-purple-700';
        else if (cat.includes('test') || cat.includes('qa')) catColor = 'bg-orange-100 text-orange-700';
        else if (cat.includes('data')) catColor = 'bg-teal-100 text-teal-700';
        else if (cat.includes('front')) catColor = 'bg-indigo-100 text-indigo-700';
        else if (cat.includes('back')) catColor = 'bg-slate-100 text-slate-700';
        else if (cat.includes('management') || cat.includes('finance')) catColor = 'bg-emerald-100 text-emerald-700';

        return (
          <div key={idx} className={`h-full flex-shrink-0 w-[320px] ${bgColor} rounded-xl flex flex-col overflow-hidden border ${borderColor} p-6 hover:shadow-lg transition-all duration-300`}>
            
            <div className='flex items-center justify-between mb-4'>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catColor}`}>
                {task.category}
              </span>
              <span className='text-sm' title={statusText}>{dotColor}</span>
            </div>

            <h3 className='text-xl font-bold text-gray-800 mb-3'>{task.taskTitle}</h3>
            
            <p className='text-sm text-gray-600 mb-4 flex-grow'>
              {task.taskDescription}
            </p>
            
            <div className='flex items-center justify-between mt-auto pt-4 border-t border-black/5'>
              <div className='flex items-center gap-2'>
                <span className={`text-xs font-medium px-2 py-1 rounded-md ${statusColor}`}>
                  {statusText}
                </span>
              </div>
              <span className='text-xs font-medium text-gray-500'>
                {task.taskDate}
              </span>
            </div>

          </div>
        );
      })}

    </div>
  )
}

export default TasklistNumber