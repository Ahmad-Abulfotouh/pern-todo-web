"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

// components
import GlobalButton from '@/components/globalComponents/GlobalButton';

interface BtnProps {
  title: string;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const page = () => {
  const router = useRouter();

  const backToTodoListHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/todos'); 
  }
  return (
    <section className='w-full'>
      <div className="w-full border-2 p-10 rounded-2xl border-black flex flex-col justify-center items-center">
        <h3>password changed successfully!</h3>
        <GlobalButton title="back to todo list" action={backToTodoListHandler}/>
      </div>
    </section>
  )
}

export default page