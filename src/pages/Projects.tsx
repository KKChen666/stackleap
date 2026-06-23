import { motion } from 'framer-motion';
import FilterBar from '@/components/projects/FilterBar';
import SearchBox from '@/components/projects/SearchBox';
import ProjectGrid from '@/components/projects/ProjectGrid';

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-bright mb-4">
            项目列表
          </h1>
          <p className="text-slate-light max-w-2xl mx-auto">
            探索我们的项目作品，涵盖 Web 应用、移动应用、云原生架构等多个领域
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <SearchBox />
          </div>
          <FilterBar />
        </div>

        <ProjectGrid />
      </div>
    </div>
  );
}
