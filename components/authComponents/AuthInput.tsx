'use client';
import { useState } from 'react';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';

interface AuthInputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  icon: LucideIcon;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AuthInput({ type, placeholder, icon: Icon, value, onChange }: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="relative w-full mb-4">

      {/* Input Icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
        <Icon size={20} />
      </div>

      {/* Input */}
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-gray-500 py-3 pl-12 pr-12 outline-none font-medium placeholder:text-gray-500 focus:border-black"
      />

      {/* Eye */}
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer hover:scale-110 transition-transform"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
}