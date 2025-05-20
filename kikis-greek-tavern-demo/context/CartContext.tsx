// contexts/CartContext.tsx
'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  total: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (index: number, quantity: number) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
        calculateTotal(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
    setIsInitialized(true);
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, isInitialized]);

  const calculateTotal = (items: CartItem[]) => {
    const newTotal = items.reduce(
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
    calculateTotal(newCart);
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) {
      // Remove item if quantity is less than 1
      removeItem(index);
      return;
    }
    
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    
    setCart(newCart);
    calculateTotal(newCart);
  };

  const removeItem = (index: number) => {
    const newCart = cart.filter((_, i) => i !== index);
    
    setCart(newCart);
    calculateTotal(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const value = {
    cart,
    total,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    isCartOpen,
    setIsCartOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}