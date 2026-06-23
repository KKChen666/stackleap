import { AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import { projects } from '@/data/projects';
import { useFilterStore } from '@/stores/filterStore';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const { searchQuery, selectedTechStack, selectedCategory } = useFilterStore();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        !searchQuery ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTechStack =
        selectedTechStack.length === 0 ||
        selectedTechStack.some((tech) => project.techStack.includes(tech));

      const matchesCategory =
        selectedCategory === '全部' || project.category === selectedCategory;

      return matchesSearch && matchesTechStack && matchesCategory;
    });
  }, [searchQuery, selectedTechStack, selectedCategory]);

  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-light text-lg">没有找到匹配的项目</p>
        <p className="text-slate-light/50 text-sm mt-2">尝试调整筛选条件或搜索关键词</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
}
