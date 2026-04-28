import React, { useContext, useState } from 'react';
import DashboardLayout from '../components/ui/DashboardLayout';
import Card from '../components/ui/Card';
import { AuthContext } from '../context/AuthProvider';
import { Search } from 'lucide-react';

const EmployeesPage = () => {
  const { userData } = useContext(AuthContext);
  const employees = userData?.employees || [];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(emp => 
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Employee Directory</h2>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input 
            type="text" 
            placeholder="Search employees..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-lg bg-surface border border-border text-sm w-64"
          />
        </div>
      </div>

      <Card noPadding>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-text-muted uppercase border-b border-border bg-surface-hover/50">
              <tr>
                <th className="px-6 py-4">Employee Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4 text-center">Active Tasks</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => {
                const activeTasks = emp.tasks?.filter(t => !t.completed && t.active).length || 0;
                return (
                  <tr key={emp._id} className="border-b border-border hover:bg-surface-hover/50 transition-colors">
                    <td className="px-6 py-4 font-medium flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                        {emp.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                      </div>
                      {emp.name}
                    </td>
                    <td className="px-6 py-4 text-text-muted">{emp.email}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-primary/10 text-primary py-1 px-3 rounded-full text-xs font-bold">
                        {activeTasks} Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-emerald-500/10 text-emerald-400 py-1 px-3 rounded-full text-xs font-bold">
                        Active
                      </span>
                    </td>
                  </tr>
                );
              })}
              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-text-muted">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default EmployeesPage;
