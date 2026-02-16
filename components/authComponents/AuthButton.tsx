type Props = {
  title: string;
  type?: "submit" | "button" | "reset";
  onButtonClick?: () => void;
}


const AuthButton = ({title, type, onButtonClick}: Props) => {
  return (
    <button
      className="
        w-full border-2 border-black py-2 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 font-bold 
        hover:bg-black hover:text-white hover:shadow-none
        active:translate-x-1 active:translate-y-1"
      type={type}
      onClick={onButtonClick}
    >
      {title}
    </button>
  );
}

export default AuthButton