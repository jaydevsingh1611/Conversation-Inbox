import { create } from 'zustand'
export type Filter = 'all' | 'urgent' | 'low-csat' | 'waiting' | 'unassigned'
interface UIState { selectedId: string | null; filter: Filter; search: string; toast: string | null; setSelected: (id: string | null) => void; setFilter: (filter: Filter) => void; setSearch: (search: string) => void; setToast: (toast: string | null) => void }
export const useUIStore = create<UIState>((set) => ({ selectedId: null, filter: 'all', search: '', toast: null, setSelected: (selectedId) => set({ selectedId }), setFilter: (filter) => set({ filter }), setSearch: (search) => set({ search }), setToast: (toast) => set({ toast }) }))
