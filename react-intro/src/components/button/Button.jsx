import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false, 
  icon: Icon = null, 
  iconPosition = 'left',
  onClick = () => {},
  className = '',
  ...props 
}) {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out transform
    focus:outline-none focus:ring-2 focus:ring-offset-2
    active:scale-95 disabled:cursor-not-allowed disabled:opacity-50
    disabled:transform-none select-none
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-indigo-600 text-white
      hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5
      focus:ring-blue-500 shadow-md
    `,
    secondary: `
      bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 border border-gray-300
      hover:from-gray-200 hover:to-gray-300 hover:shadow-md hover:-translate-y-0.5
      focus:ring-gray-500
    `,
    success: `
      bg-gradient-to-r from-green-600 to-emerald-600 text-white
      hover:from-green-700 hover:to-emerald-700 hover:shadow-lg hover:-translate-y-0.5
      focus:ring-green-500 shadow-md
    `,
    danger: `
      bg-gradient-to-r from-red-600 to-pink-600 text-white
      hover:from-red-700 hover:to-pink-700 hover:shadow-lg hover:-translate-y-0.5
      focus:ring-red-500 shadow-md
    `,
    outline: `
      bg-transparent text-blue-600 border-2 border-blue-600
      hover:bg-blue-600 hover:text-white hover:shadow-md hover:-translate-y-0.5
      focus:ring-blue-500
    `,
    ghost: `
      bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900
      focus:ring-gray-500
    `
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm gap-1.5',
    md: 'px-4 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
    xl: 'px-8 py-4 text-lg gap-3'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          {/* <Loader2 className={`${iconSizes[size]} animate-spin`} /> */}
          Loading...
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && (
            <Icon className={iconSizes[size]} />
          )}
          {children}
          {Icon && iconPosition === 'right' && (
            <Icon className={iconSizes[size]} />
          )}
        </>
      )}
    </button>
  );
};