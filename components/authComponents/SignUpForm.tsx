import { Mail, Lock } from 'lucide-react';

import AuthInput from "./AuthInput"
import AuthButton from "./AuthButton"

type Props = {}

const SignUpForm = (props: Props) => {
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
        <AuthInput 
            type="password" 
            placeholder="Password" 
            icon={Lock} 
        />
        <AuthButton 
            title="Join Us"
            type="submit"
        />
    </form>
  )
}

export default SignUpForm