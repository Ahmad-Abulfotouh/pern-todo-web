import Image from "next/image";
import { redirect } from 'next/navigation';

export default function Home() {
  const token = false;
  
  if (!token) {
    redirect('/auth');
  } else {
    redirect('/todos');
  }
  return null;
}
