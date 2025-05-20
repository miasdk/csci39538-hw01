// components/MenuItemWithHook.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'react-feather';
import { useCart } from '../context/CartContext';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuItem({ name, description, price, image }: MenuItemProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  const [notification, setNotification] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  
  // Find if this item is already in cart and get its quantity
  const itemInCart = cart.find(item => item.name === name);
  const quantityInCart = itemInCart ? itemInCart.quantity : 0;
  const itemIndex = cart.findIndex(item => item.name === name);
  
  const handleAddToCart = () => {
    addToCart({ name, price, image });
    
    // Show animation
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 300);
    
    // Show notification
    setNotification(`${name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };
  
  const handleIncrement = () => {
    if (itemIndex === -1) {
      // Item not in cart yet, add it
      addToCart({ name, price, image });
    } else {
      // Item already in cart, increase quantity
      updateQuantity(itemIndex, quantityInCart + 1);
    }
    
    // Show notification
    setNotification(`${name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };
  
  const handleDecrement = () => {
    if (itemIndex !== -1 && quantityInCart > 0) {
      updateQuantity(itemIndex, quantityInCart - 1);
      
      // Show notification
      setNotification(`Removed one ${name} from cart`);
      setTimeout(() => setNotification(null), 3000);
    }
  };
  
  return (
    <div className={`menu-item bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${isAdding ? 'scale-105' : ''}`}>
      <div className='relative h-48 mb-4'>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
        {quantityInCart > 0 && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            {quantityInCart} in cart
          </div>
        )}
      </div>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-xl font-bold mb-2 item-name'>{name}</h3>
        <span className='reviews flex items-center space-x-1'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 0 1 .77.36l2.83
            3.55 5.5.8a1 1 0 0 1 .55 1.7l-4.1 4.03 1
            5.8a1 1 0 0 1-1.45 1.05L10
            16.39l-5.4 2.84a1 1 0 0 1-1.45-1.05l1-5.8-4.1-4.03a1
            1 0 0 1 .55-1.7l5.5-.8 2.83-3.55A1 1 0 0 1 10 2z"/>
          </svg>
          <span className='text-gray-600'>4.5</span>
        </span>
      </div>
      <p className='text-gray-600 mb-4'>{description}</p>
      
      {/* Price and Quantity controls */}
      <div className='flex items-center justify-between mb-4'>
        <p className='text-gray-800 font-bold text-lg'>${price.toFixed(2)}</p>
        
        {/* Only show quantity controls if the item is in the cart */}
        {quantityInCart > 0 ? (
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleDecrement}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              <Minus size={16} />
            </button>
            
            <span className="w-6 text-center">{quantityInCart}</span>
            
            <button 
              onClick={handleIncrement}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : null}
      </div>
      
      {/* Add to Cart button */}
      <button 
        className='w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300'
        onClick={handleAddToCart}
      >
        <ShoppingCart size={16} />
        {quantityInCart > 0 ? 'Add More' : 'Add to Cart'}
      </button>
      
      {/* Notification */}
      {notification && (
        <div className="fixed top-20 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg z-50 animate-fadeIn">
          {notification}
        </div>
      )}
    </div>
  );
}