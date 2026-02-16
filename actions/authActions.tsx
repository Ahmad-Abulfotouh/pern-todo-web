import { useRouter } from 'next/navigation';

export const signUpHandler = async (e: React.FormEvent) => {
  e.preventDefault();
  const router = useRouter();

  try {
      //(API Call)
      console.log("registring ...");
      
      const success = true;

      if (success) {
        router.push('/todos'); 
      }
    } catch (error) {
      console.error("Error hapend!", error);
    }
  }

export const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const router = useRouter();

    try {
      //(API Call)
      console.log("login ...");
      
      const success = true;

      if (success) {
        router.push('/todos'); 
      }
    } catch (error) {
      console.error("Error hapend!", error);
    }
}