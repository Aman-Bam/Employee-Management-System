import React from 'react';

const Input = React.forwardRef(({ 
  label, 
  error, 
  className = '', 
  id, 
  ...props 
}, ref) => {
  const inputId = id || label?.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-[#475569] text-[10.5px] font-bold tracking-widest uppercase mb-1.5"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className="w-full bg-slate-800/30 border-2 border-slate-700/50 rounded-xl px-4 py-3.5 text-slate-200 text-sm outline-none transition-all duration-200 focus:bg-emerald-500/5 focus:border-emerald-500/40"
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
