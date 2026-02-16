'use client';
import { useState } from 'react';

// components
import AuthCardFace from '@/components/authComponents/AuthCardFace'
import LoginForm from '@/components/authComponents/LoginForm';
import SignUpForm from '@/components/authComponents/SignUpForm';

type Props = {}

export default function AuthCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="group h-[500px] w-80 [perspective:1000px]">
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* front */}
        <AuthCardFace
          title="Login"
          description="Welcome back! Please enter your details."
          flipButtonTitle="Go to Signup →"
          onFlipButtonClick={() => setIsFlipped(true)}
          isBack={false}
        >
          <LoginForm />
        </AuthCardFace>
        
        {/* back */}
        <AuthCardFace
          title="Sign Up"
          description="Join us today and start managing your todos."
          flipButtonTitle="← Back to Login"
          onFlipButtonClick={() => setIsFlipped(false)}
          isBack={true}
        >
          <SignUpForm />
        </AuthCardFace>
      </div>
    </div>
  );
}