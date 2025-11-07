'use client';
import { create } from 'zustand';

const useStore = create((set) => ({
  theme: 'light',
  statsType: 'total',
  selectedCounty: 'Marsabit',
  setTheme: (theme) => set({ theme }),
  setStatsType: (statsType) => set({ statsType }),
  setSelectedCounty: (county) => set({ selectedCounty: county })
}));

export default useStore;