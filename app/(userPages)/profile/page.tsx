'use client';
import { Suspense } from 'react';
import Cookies from 'js-cookie';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { logoutHandler } from '@/actions/profileActions';

import { getEmail } from '@/actions/profileActions';
// components
import GlobalButton from '@/components/globalComponents/GlobalButton';

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get('token');
        if (token) {
          const data = await getEmail(token);
          setEmail(data.user.email);
        } else {
          router.push('/auth');
        }
      } catch (err) {
        console.error("Something went wrong:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProfile();
    }, 
  []);
  return (
    <section className='w-full'>
      <h1 className="m-2">Profile</h1>
      <div className="w-full border-2 p-10 rounded-2xl border-black flex flex-col justify-center">
        {isLoading ? (
          <p className="text-center p-4 animate-pulse">Loading Profile...</p>
        ) : (
          email && <p className="mb-5 font-bold">Email: {email}</p>
        )}
        <GlobalButton title="change password" action={ () => router.push('/change-password') }/>
        <GlobalButton title="logout" action={ () => { 
          logoutHandler();
          router.push('/auth');
        }}
        />
      </div>
    </section>
  )
}

export default page