"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { editTodo, toggleTodoStatus, deleteTodo } from '@/actions/todoActions'


// components
import  CustomCheckbox from './CheckBox'

type ListItemProps = {
  id: number, 
  content: string, 
  checked: boolean,
  token: string
}

type ListItemButtonProps = {
  title: string,
  type?: any,
  disabled?: any,
  onClick?: () => void
}

export default function ListItem({ id, token, content, checked }: ListItemProps) {
  const router = useRouter();

  const [ediState, setEditState] = useState(false);
  const [editValue, setEditValue] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [checkedState, setCheckedState] = useState(false);

  const editHandler = () => {
    setEditState(true);
    setEditValue(content);
  }
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(!editValue) {
      return 0;
    }

    setIsSubmitting(true);
    try {
      const data = await editTodo(editValue, id, token);
      router.refresh()
    } catch (err: any) {
      console.log(`Server Error! try again later, ${err.message}`);
    } finally {
      setIsSubmitting(false);
      setEditState(false);
    }
  };
  const handleToggle = async (newValue: boolean) => {
    setCheckedState(newValue); 

    try {
      await toggleTodoStatus(id, newValue, token);
      router.refresh()
    } catch (err) {
      console.error("Failed to update check box status.");
    }
  };
  const deleteHandler = async () => {
    setIsDeleting(true);
    try {
      const data = await deleteTodo(id, token);
      router.refresh()
    } catch (err: any) {
      console.log(`Server Error! try again later, ${err.message}`);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className='flex flex-row p-2 border-b border-black'>
      {!ediState ? 
      (<>
        <div className="flex grow">
          <CustomCheckbox 
            label={content}
            checked={checked || isDone} 
            onChange={handleToggle} 
          />
        </div>
        <div>
          <ListItemButton title="Edit" onClick={editHandler} />
          <ListItemButton title="Delete" onClick={deleteHandler} disabled={isDeleting} />
        </div>
      </>
      ) : (<>
        <form 
          className="w-full flex grow row-auto justify-between align-middle items-center"
          onSubmit={onSubmit}
        >
          <div>
            <input 
              type="text"
              required
              value={editValue} 
              onChange={(e) => setEditValue(e.target.value)} 
              className='w-full border-2 border-gray-500 p-3 outline-none font-medium placeholder:text-gray-500 focus:border-black'
            />
          </div>
          <div>
            <ListItemButton title="Done" type="submit" disabled={isSubmitting} />
            <ListItemButton title="Cancle" onClick={() => setEditState(false)} />
          </div>
        </form>
      </>)}
    </div>
  )
}

const ListItemButton = ({title, type, disabled, onClick}: ListItemButtonProps) => {
  return(
    <button 
      onClick={onClick}
      type={type ? type : ""}
      disabled={disabled ? disabled : ""}
      className={`mx-1 px-1 cursor-pointer hover:text-gray-400 ${(title === "Done" || title === "Cancle") ? "text-blue-500" : ""}`}
    >
      {title}
    </button>
  );
}