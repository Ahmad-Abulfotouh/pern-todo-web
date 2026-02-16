// components
import WelcomeMessage from '@/components/authComponents/WelcomeMessage'
import AuthCard from '@/components/authComponents/AuthCard'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex pt-25 flex-col md:flex-row justify-center gap-12 min-h-[80vh]'>
      <WelcomeMessage />
      <AuthCard />
    </div>
  )
}

export default page