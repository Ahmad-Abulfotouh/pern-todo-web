"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {}
type itemProps = {
    title: string,
    href: string,
    isActive: boolean
}

const NavBar = (props: Props) => {
  const pathname = usePathname();
  return (
    <header>
        <nav className='p-1 flex justify-between border-2 items-center flex-row rounded-4xl'>
            <div className="ml-5 px-8 py-2 font-bold">
                PERN<br />Todo
            </div>
            <ul className='w-40 mr-10 flex justify-between items-center flex-row'>
                <NavItem 
                  title="todos" 
                  href="/todos" 
                  isActive={pathname === '/todos'} 
                />
                <NavItem 
                  title="profile" 
                  href="/profile" 
                  isActive={pathname === '/profile' || pathname === '/change-password' || pathname === '/success-message'} 
                />
            </ul>
        </nav>
    </header>
  )
}

export default NavBar

const NavItem = ({title, href, isActive}: itemProps) => {
    return (
        <li >
          <Link 
            href={href}
            className={`p-2 font-semibold transition-all duration-200 ease-in-out border-b-3 ${
              isActive 
                ? "border-black text-black font-semibold" 
                : "border-transparent text-gray-400 hover:border-gray-400 "
            }`}
          >
            {title}
          </Link>
        </li>
    );
}