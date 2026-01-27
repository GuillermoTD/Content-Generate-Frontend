// src/store/useSidebarStore.js
import { create } from 'zustand';

export const useSidebarStore = create((set) => ({
  isOpen: false,
  toggle: () => set((state: { isOpen: boolean; }) => ({ isOpen: !state.isOpen })),
}));