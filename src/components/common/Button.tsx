import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  secondary = false,
  fullWidth = false,
  size = 'md'
}) => {
  const baseClasses = "rounded-full font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2.5 px-6 text-base",
    lg: "py-3 px-8 text-lg"
  };
  
  const styleClasses = secondary
    ? "bg-white text-[#1E2A78] border border-[#1E2A78] hover:bg-gray-50 focus:ring-[#1E2A78]"
    : "bg-[#FFD93D] text-[#1E2A78] hover:bg-[#FFC107] focus:ring-[#FFD93D]";
  
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${styleClasses} ${widthClass}`}
    >
      {children}
    </button>
  );
};

export default Button;