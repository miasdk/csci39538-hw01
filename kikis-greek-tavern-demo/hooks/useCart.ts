// hooks/useCart.ts
import { useState, useEffect } from 'react';

export interface CartItem {
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const parsedCart = JSON.parse(savedCart);
            setCart(parsedCart);
            calculateTotal(parsedCart);
        }
        
        // Listen for storage events (if cart is updated in another tab)
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'cart') {
                const newCart = e.newValue ? JSON.parse(e.newValue) : [];
                setCart(newCart);
                calculateTotal(newCart);
            }
        };
        
        window.addEventListener('storage', handleStorageChange);
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    
    const calculateTotal = (cartItems: CartItem[]) => {
        const newTotal = cartItems.reduce(
            (sum, item) => sum + (item.price * item.quantity), 
            0
        );
        setTotal(newTotal);
    };
    
    const addToCart = (item: Omit<CartItem, 'quantity'>) => {
        const existingItemIndex = cart.findIndex(i => i.name === item.name);
        
        let newCart;
        if (existingItemIndex !== -1) {
            // Item exists, increment quantity
            newCart = [...cart];
            newCart[existingItemIndex].quantity += 1;
        } else {
            // Item doesn't exist, add new item
            newCart = [...cart, { ...item, quantity: 1 }];
        }
        
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        calculateTotal(newCart);
        
        // Dispatch custom event for components to listen to
        window.dispatchEvent(new Event('cartUpdated'));
        
        return newCart;
    };
    
    const updateQuantity = (index: number, quantity: number) => {
        if (quantity < 1) return cart;
        
        const newCart = [...cart];
        newCart[index].quantity = quantity;
        
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        calculateTotal(newCart);
        
        // Dispatch custom event
        window.dispatchEvent(new Event('cartUpdated'));
        
        return newCart;
    };
    
    const removeItem = (index: number) => {
        const newCart = cart.filter((_, i) => i !== index);
        
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
        calculateTotal(newCart);
        
        // Dispatch custom event
        window.dispatchEvent(new Event('cartUpdated'));
        
        return newCart;
    };
    
    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
        setTotal(0);
        
        // Dispatch custom event
        window.dispatchEvent(new Event('cartUpdated'));
    };
    
    return {
        cart,
        total,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart
    };
}