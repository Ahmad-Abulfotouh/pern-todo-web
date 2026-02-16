import AuthButton from "./AuthButton";

type Props = {
  title: string;
  description: string;
  flipButtonTitle: string;
  onFlipButtonClick: () => void;
  isBack: boolean;
  children: React.ReactNode;
}

const AuthCardFace = ({ title, description, flipButtonTitle, onFlipButtonClick, isBack, children }: Props) => {
  return (
    <div
      className={`absolute shadow-lg inset-0 h-full w-full p-8 [backface-visibility:hidden] 
      bg-slate-50 ${isBack ? '[transform:rotateY(180deg)]' : ''}`}
    >
      <div className="flex flex-col h-full">
          <h2 className="text-3xl font-bold mb-8 font-hand text-center">{title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          
          {/* form */}
          <div className="mt-4">
             {children}
          </div>

          <div className="grow flex flex-col justify-end">
            {title === 'Login' ? <p className="text-center pb-2 text-gray-600">Don't have an account?</p> : <></>}
            <AuthButton 
              title={flipButtonTitle}
              onButtonClick={onFlipButtonClick}
            />
          </div>
      </div>
    </div>
  );
}

export default AuthCardFace