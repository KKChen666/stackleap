import { motion } from 'framer-motion';
import { useFilterStore } from '@/stores/filterStore';
import { categories } from '@/data/projects';

export default function FilterBar() {
  const { selectedCategory, setSelectedCategory } = useFilterStore();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-space-900 shadow-lg shadow-neon-blue/20'
              : 'bg-space-700/50 text-slate-light border border-white/10 hover:border-neon-blue/30 hover:text-slate-bright'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}
