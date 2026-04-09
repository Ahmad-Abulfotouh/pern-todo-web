"use client";

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { addTodo } from '@/actions/todoActions'

interface AddingBarProps {
  token: string | undefined;
}

function AddingBar({ token }: AddingBarProps) {
	const [content, setContent] = useState("")
	const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
    if (!content.trim()) return;
		
		setIsSubmitting(true);
    try {
      if (!token) throw new Error("No token found");

      await addTodo(content, token);
      
      setContent("");
      router.refresh();
    } catch (err) {
      alert("Faild to add the todo! try again later.");
    } finally {
      setIsSubmitting(false);
    }
	};

  return (
    <form className="border-2 rounded-2xl w-full flex" onSubmit={handleSubmit}>
        <input 
					type="text" 
					value={content} 
					onChange={(e) => setContent(e.target.value)} 
					placeholder='what needs to be done..'
					className="grow p-3 outline-none rounded-l-2xl" />
        <button 
					type="submit"
					disabled={isSubmitting}
          className="px-4 py-1 m-3 rounded-xl cursor-pointer border-2 border-transparent transition-all duration-200 ease-in-out text-white bg-black hover:border-black hover:text-black hover:bg-transparent">add</button>
    </form>
  )
}

export default AddingBar