"use client";

import React from 'react';

type CustomCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const CustomCheckbox = ({ label, checked, onChange, disabled }: CustomCheckboxProps) => {
  return (
    <label className={`flex items-center cursor-pointer select-none ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div className="relative">
        {/* invisible Input */}
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
        />
        
        {/* custom check box*/}
        <div className={`
          w-6 h-6 border-2 rounded-md transition-all duration-200 flex items-center justify-center
          ${checked 
            ? 'bg-black border-black' // شكل الصندوق وهو متعلّم عليه
            : 'bg-white border-gray-400 hover:border-black' // شكل الصندوق وهو فاضي
          }
        `}>
          {/* the checked sign */}
          {checked && (
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="3" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          )}
        </div>
      </div>
      
      {/* the label  */}
      <span className={`
        ml-3 font-medium transition-all duration-200
        ${checked 
          ? 'text-gray-400 line-through'
          : 'text-gray-700'
        }
      `}>
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;