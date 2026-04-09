"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Mail, Lock } from 'lucide-react';

import { changePasswordHandler } from '@/actions/profileActions';

// components
import GlobalButton from '@/components/globalComponents/GlobalButton';
import GlobalInput from '@/components/globalComponents/GlobalInput';

const page = () => {
  const router = useRouter();
  const [newPassword, setNewPassord] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(newPassword !== confirmNewPassword) { 
      setErrorMessage("passwords are not compatible.");
      return 0;
    }

    setIsSubmitting(true);
    try {
      // const data = await changePasswordHandler(newPassword);
      router.push('/success-message');
    } catch (err: any) {
      setErrorMessage(`Server Error! try again later, ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='w-full'>
      <h1 className="m-2">Profile</h1>
      <div className="w-full border-2 p-10 rounded-2xl border-black flex flex-col justify-center">
        <h2 className='mb-5'>Enter the new password</h2>
        <form onSubmit={ (e) => onSubmit(e) } >
          {errorMessage && (
            <p className={"bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm"}>passwords are not compatible.</p>
          )}
          <GlobalInput 
              type="password" 
              placeholder="new password" 
              icon={Lock}
              value={newPassword}
              onChange={(e) => setNewPassord(e.target.value)}
          />
          <GlobalInput 
              type="password" 
              placeholder="confirm new password" 
              icon={Lock}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <GlobalButton title="change password" type="submit" disabled={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default page