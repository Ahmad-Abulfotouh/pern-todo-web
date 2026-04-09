interface ButtonProps {
  title: string,
  type?: any,
  disabled?: any,
  action?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function GlobalButton({title, type, disabled, action}: ButtonProps) {
  return (
    <button 
      onClick={action ? action : () => {}}
      type={type ? type : ""}
      disabled={disabled ? disabled : ""}
      className="
        w-50 mt-5 border-2 border-black py-2 cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 font-bold 
        hover:bg-black hover:text-white hover:shadow-none
        active:translate-x-1 active:translate-y-1"
      >
      {title}
    </button>
  )
}