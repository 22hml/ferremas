import { create } from 'zustand'

type Store = {
  carro: any
  inc: () => void
}

export const useCartStore = create<Store>()((set) => ({
  carro: {},
  setCarro: () => set((state) => {{carr}})
}))