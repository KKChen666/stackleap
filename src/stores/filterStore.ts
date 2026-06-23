import { create } from 'zustand';

interface FilterState {
  searchQuery: string;
  selectedTechStack: string[];
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  toggleTechStack: (tech: string) => void;
  setSelectedCategory: (category: string) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: '',
  selectedTechStack: [],
  selectedCategory: '全部',
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleTechStack: (tech) =>
    set((state) => ({
      selectedTechStack: state.selectedTechStack.includes(tech)
        ? state.selectedTechStack.filter((t) => t !== tech)
        : [...state.selectedTechStack, tech],
    })),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  clearFilters: () => set({ searchQuery: '', selectedTechStack: [], selectedCategory: '全部' }),
}));
