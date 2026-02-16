import { Mail, Lock } from 'lucide-react';

import { loginHandler } from '@/actions/authActions';

// components
import AuthInput from "./AuthInput"
import AuthButton from "./AuthButton"


type Props = {}

const LoginForm = (props: Props) => {
  return (
    <form className="flex flex-col">
        <AuthInput 
            type="email" 
            placeholder="Email Address" 
            icon={Mail} 
        />
        <AuthInput 
            type="password" 
            placeholder="Password" 
            icon={Lock} 
        />
        <AuthButton 
            title="Sign In"
            type="submit"
        />
    </form>
  )
}

export default LoginForm