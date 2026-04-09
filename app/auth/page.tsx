// components
import WelcomeMessage from '@/components/authComponents/WelcomeMessage'
import AuthCard from '@/components/authComponents/AuthCard'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="
      flex flex-col md:flex-row 
      items-center justify-center 
      gap-8 md:gap-12 
      min-h-screen w-full px-4
    ">
      <WelcomeMessage />
      <AuthCard />
    </div>
  )
}

export default page