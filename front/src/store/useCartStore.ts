import { create } from 'zustand'
import { Item } from '../interfaces/item';

interface CartState {
  cart: Item[];
  addToCart: (item: Omit<Item, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  addToCart: (item) => set((state) => {
    const cart = [...state.cart]
    const existingItemIndex = cart.findIndex(i => i.id === item.id)
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1
    } else {
      cart.push({ ...item, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    return { cart }
  }),
  removeFromCart: (id) => set((state) => {
    const cart = state.cart.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(cart))
    return { cart }
  }),
  incrementQuantity: (id) => set((state) => {
    const cart = state.cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    localStorage.setItem('cart', JSON.stringify(cart))
    return { cart }
  }),
  decrementQuantity: (id) => set((state) => {
    const cart = state.cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0)
    localStorage.setItem('cart', JSON.stringify(cart))
    return { cart }
  })
}))