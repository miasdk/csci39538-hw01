// components/CartModal.tsx
'use client';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { X } from 'react-feather';
import Link from 'next/link';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  showBackdrop?: boolean;
}

export default function CartModal({ isOpen, onClose, showBackdrop = true }: CartModalProps) {
  const { cart, total, updateQuantity, removeItem, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {showBackdrop && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Modal Content */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl overflow-y-auto cart-modal-enter">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-6">Your cart is empty</p>
              <Link 
                href="/menu" 
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                Browse Menu
              </Link>
              <p className="mt-4 text-gray-500">or</p>
              <button
                onClick={onClose}
                className="mt-2 text-gray-500 underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center border-b border-gray-200 pb-4">
                    <div className="relative h-16 w-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="font-bold">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center">
                      <button 
                        className="bg-gray-200 px-2 py-1 rounded-l-md hover:bg-gray-300 transition-colors"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-3 py-1">{item.quantity}</span>
                      <button 
                        className="bg-gray-200 px-2 py-1 rounded-r-md hover:bg-gray-300 transition-colors"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button 
                      className="ml-4 text-red-500 hover:text-red-700 transition-colors"
                      onClick={() => removeItem(index)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Delivery:</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4">
                  <span>Total:</span>
                  <span>${(total + 5).toFixed(2)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button 
                    className="bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Checkout
                  </button>
                  <button 
                    onClick={clearCart} 
                    className="border border-red-500 text-red-500 py-3 rounded-md hover:bg-red-50 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}