// components/Navbar.tsx
'use client'; 
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'react-feather';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';

export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  const { cart, isCartOpen, setIsCartOpen } = useCart();
  
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
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
              <Link href='/' className="hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link href='/menu' className="hover:text-gray-300 transition-colors">Menu</Link>
            </li>
            <li>
              <Link href='/gallery' className="hover:text-gray-300 transition-colors">Gallery</Link>
            </li>
            <li>
              <Link href='/contact' className="hover:text-gray-300 transition-colors">Contact</Link>
            </li>
            <li>
              <Link href='/about' className="hover:text-gray-300 transition-colors">About</Link>
            </li>
            <li>
              <button 
                onClick={toggleCart} 
                className="nav-cart-icon relative hover:text-gray-300 transition-colors"
              >
                <ShoppingCart />
                {cartItemCount > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} bg-gray-800 mt-4`}>
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/" className="hover:text-gray-400 transition-colors" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-gray-400 transition-colors" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gray-400 transition-colors" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 transition-colors" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleMenu();
                  toggleCart();
                }}
                className="relative hover:text-gray-400 transition-colors"
              >
                <ShoppingCart />
                {cartItemCount > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>
            </li>   
          </ul>
        </div>
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} showBackdrop={false} />
    </>
  );
}