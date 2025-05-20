// components/Navbar.tsx
'use client'; 
import { useState } from 'react';
import { ShoppingCart, Menu, X} from 'react-feather';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';

export default function Navbar(){ 
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useCart();
    
    const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <nav className="bg-gray-800 text-white p-4">
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/" className="text-2xl font-bold">
                    Kiki's Greek Tavern                
                </Link>
                <button
                    onClick={toggleMenu}
                    className='md:hidden focus:outline-none'
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <ul className='hidden md:flex space-x-4 items-center'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/menu'>Menu</Link>
                    </li>
                    <li>
                        <Link href='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/cart' className="nav-cart-icon relative">
                            <ShoppingCart />
                            {cartItemCount > 0 && (
                                <span 
                                    className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                >
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} bg-gray-800 mt-4`}>
                <ul className="flex flex-col space-y-4 p-4">
                    <li>
                        <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu" className="hover:text-gray-400" onClick={toggleMenu}>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link href="/gallery" className="hover:text-gray-400" onClick={toggleMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-gray-400" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link href='/cart' className="relative" onClick={toggleMenu}>
                            <ShoppingCart />
                            {cartItemCount > 0 && (
                                <span 
                                    className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                                >
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </li>   
                </ul>
            </div>
        </nav>
    );
}