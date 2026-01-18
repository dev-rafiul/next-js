import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {

    const pathName = usePathname();
    console.log(pathName)

    return (
        
             <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center">
        <Link href='/' className="text-lg font-semibold">  Dev-Story</Link>


<nav className='space-x-20'>
    <Link href="/about">About</Link>
    <Link href="/about/contact">Contact</Link>
    <Link href="/about/teampage/teammember">Team Member</Link>
    <Link href="/about/teampage">Teams</Link>
    <Link href="/login">Login</Link>
    <Link href="/register">Register</Link>
    <Link href="/tutorials">Tutorials</Link>
</nav>

      </header>
       
    );
};

export default Header;