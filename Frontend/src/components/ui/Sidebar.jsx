import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, CalendarDays, CheckSquare, Settings, Bell, Zap, LogOut } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '', role: 'all' },
  { name: 'Employees', icon: <Users size={20} />, path: '/employees', role: 'admin' },
  { name: 'Attendance', icon: <CalendarDays size={20} />, path: '/attendance', role: 'all' },
  { name: 'Tasks', icon: <CheckSquare size={20} />, path: '/tasks', role: 'all' },
  { name: 'Settings', icon: <Settings size={20} />, path: '/settings', role: 'all' },
  { name: 'Notifications', icon: <Bell size={20} />, path: '/notifications', role: 'all' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const role = userData?.role || 'employee';

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData(null);
    navigate('/login');
  };

  const getBasePath = () => {
      return role === 'admin' ? '/admin' : '/employee';
  }

  const filteredNavItems = navItems.filter(item => item.role === 'all' || item.role === role);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`w-64 h-screen bg-surface border-r border-border flex flex-col fixed left-0 top-0 overflow-y-auto z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
      {/* Brand */}
      <div className="h-20 flex items-center px-6 gap-3 border-b border-border">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm shadow-primary/10">
          <Zap size={22} fill="currentColor" />
        </div>
        <div className="font-bold text-xl text-text-main tracking-tight">QuantumHR</div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {filteredNavItems.map((item) => (
          <NavLink
            key={item.name}
            to={`${getBasePath()}${item.path}`}
            end={item.path === ''}
            onClick={() => setIsOpen && setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'text-text-muted hover:bg-surface-hover hover:text-text-main'
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium text-text-muted hover:bg-danger/10 hover:text-danger transition-colors"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
