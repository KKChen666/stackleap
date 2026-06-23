import { Search, X } from 'lucide-react';
import { useFilterStore } from '@/stores/filterStore';

export default function SearchBox() {
  const { searchQuery, setSearchQuery } = useFilterStore();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-light/50" />
      <input
        type="text"
        placeholder="搜索项目名称、技术栈..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-10 py-3 bg-space-700/50 border border-white/10 rounded-lg text-sm text-slate-bright placeholder:text-slate-light/40 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300 font-body"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-light/50 hover:text-slate-bright transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
