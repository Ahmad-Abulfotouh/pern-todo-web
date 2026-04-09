import { redirect } from 'next/navigation';
import { getTodos } from '@/actions/todoActions'

// components
import ListItem from './ListItem'

type Props = {
  token: string
}

export default async function TodoList({ token }: Props) {
  try {
    const data = await getTodos(token);
    const todos = data.todo;
    
    return (
      <div className="mt-3 w-full">
        {todos.map((todo: any) => (
          <ListItem 
            key={todo.id}
            id={todo.id} 
            token={token} 
            content={todo.content} 
            checked={todo.checked} />
        ))}
      </div>
    );
  } catch (err: any) {
    if (err.message === 'UNAUTHORIZED') {
      redirect('/auth');
    }
    return <p className="text-red-500 text-center p-4">error happend! {err.message}</p>;
  }
}
