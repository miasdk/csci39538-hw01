// components/Cart.tsx
'use client';
import { useCart } from '../hooks/useCart';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
    const { cart, total, updateQuantity, removeItem } = useCart();
    
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
            
            {cart.length === 0 ? (
                <div className="text-center">
                    <p className="text-xl mb-6">Your cart is empty</p>
                    <Link href="/menu" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
                        Browse Menu
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center border-b border-gray-200 py-4 last:border-0">
                                <div className="relative h-20 w-20 flex-shrink-0">
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
                                        className="bg-gray-200 px-3 py-1 rounded-l-md"
                                        onClick={() => updateQuantity(index, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                                    <button 
                                        className="bg-gray-200 px-3 py-1 rounded-r-md"
                                        onClick={() => updateQuantity(index, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="ml-4 text-right">
                                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button 
                                        className="text-red-500 text-sm mt-1"
                                        onClick={() => removeItem(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6">
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
                        <button className="w-full bg-orange-500 text-white mt-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}