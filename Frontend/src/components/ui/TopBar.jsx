import React, { useContext } from 'react';
import { Search, Bell, Sun, Moon, Menu } from 'lucide-react';
import { AuthContext } from '../../context/AuthProvider';
import { useTheme } from '../../context/ThemeContext';

const TopBar = ({ toggleSidebar }) => {
  const { userData } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const initials = (userData?.name || 'AD')
    .split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="h-20 bg-surface/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      
      {/* Left side (Date & Time) */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-2 text-text-muted hover:text-text-main hover:bg-surface-hover rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-text-main tracking-tight">Dashboard</h2>
          <p className="text-sm text-text-muted hidden sm:block">{formattedDate} | {formattedTime}</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-64 bg-background border border-border rounded-full py-2 pl-10 pr-4 text-sm text-text-main outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 border-r border-border pr-6">
          <button onClick={toggleTheme} className="p-2 text-text-muted hover:text-text-main hover:bg-surface-hover rounded-full transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="relative p-2 text-text-muted hover:text-text-main hover:bg-surface-hover rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-2 w-2 h-2 bg-danger rounded-full"></span>
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm shadow-primary/10">
            {initials}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-text-main leading-tight">{userData?.name || 'Admin'}</p>
            <p className="text-xs text-text-muted capitalize">{userData?.role || 'Administrator'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
