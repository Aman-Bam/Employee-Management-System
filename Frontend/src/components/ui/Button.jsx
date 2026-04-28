import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 outline-none";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/30",
    secondary: "bg-surface hover:bg-surface-hover text-text-main border border-border shadow-sm",
    danger: "bg-danger/10 hover:bg-danger/20 text-danger border border-danger/20",
    outline: "border border-primary/50 hover:border-primary text-primary hover:bg-primary/10",
    ghost: "bg-transparent hover:bg-surface-hover text-text-muted hover:text-text-main"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base w-full",
    icon: "p-2"
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
