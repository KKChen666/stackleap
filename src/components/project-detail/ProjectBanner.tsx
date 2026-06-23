import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

export default function ProjectBanner({ project }: { project: Project }) {
  return (
    <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img
        src={project.coverImage}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-space-900/60 to-space-900/30" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 mb-4"
        >
          {project.category}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-heading font-bold text-slate-bright mb-4"
        >
          {project.name}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-slate-light max-w-3xl"
        >
          {project.description}
        </motion.p>
      </div>
    </div>
  );
}
