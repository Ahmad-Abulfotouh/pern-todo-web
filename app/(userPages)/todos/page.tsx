import { cookies } from 'next/headers';
import { Suspense } from 'react';

// compoents
import TodoList from '@/components/todosComponents/TodoList'
import AddingBar from '@/components/todosComponents/AddingBar'

type Props = {}

const page = async (props: Props) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  return (
    <section className="w-full">
      <h1 className="m-2">Todo List</h1>
      <div className="w-full border-2 p-2 rounded-2xl border-black flex flex-col justify-center">
        <AddingBar token={token} />
        <div className="mt-3 w-full">
          <Suspense fallback={<p className="text-center p-4 animate-pulse">Loading Todos...</p>}>
          {token ? (
            <TodoList token={token} />
          ) : (
            <></>
          )}
        </Suspense>
        </div>
      </div>
    </section>
  )
}

export default page;