import React from 'react';

interface ButtonProps {
  variant?: 'gold' | 'outline';
  size?: 'icon' | 'default';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  children, 
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses: Record<string, string> = {
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700',
    outline: 'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50'
  };
  
  const sizeClasses: Record<string, string> = {
    icon: 'h-10 w-10 p-0',
    default: 'px-4 py-2'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};