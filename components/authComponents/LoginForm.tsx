"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock } from 'lucide-react';

// components
import AuthInput from "./AuthInput"
import AuthButton from "./AuthButton"

// functions
import { loginHandler } from "../../actions/authActions"

type Props = {}

const LoginForm = (props: Props) => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const [errorMessageVisibility, setErrorMessageVisibility] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginHandler({ email, password });
      router.push('/todos'); 
      
    } catch (err: any) {
      setErrorMessageVisibility(true);
    }
  };
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
				<p className={`${errorMessageVisibility ? "block" : "hidden"} bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm`}>wrong email or password.</p>
        <AuthInput 
            type="email" 
            placeholder="Email Address" 
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <AuthInput 
            type="password" 
            placeholder="Password" 
            icon={Lock}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <AuthButton 
            title="Sign In"
            type="submit"
        />
    </form>
  )
}

export default LoginForm