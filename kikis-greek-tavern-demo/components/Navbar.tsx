'use client'; 

import Link from 'next/link';

export default function Navbar(){ 
    return ( 
        <nav className="bg-gray-800 text-white p-4">
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/" className="text-2xl font-bold">
                    Kiki's Greek Tavern                
                </Link>
                <ul className='flex space-x-4'>
                    <li>
                        <a href="#home" className='hover:text-gray-400'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#menu" className='hover:text-gray-400'>
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#about" className='hover:text-gray-400'>
                            About
                        </a>
                    </li>   
                    <li>
                        <a href="#contact" className='hover:text-gray-400'>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}