import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link to={`/projects/${project.id}`} className="block group">
        <div className="bg-space-700/50 rounded-xl overflow-hidden border border-white/5 card-hover hover:border-neon-blue/30 h-full">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />
            <span className="absolute top-4 right-4 px-3 py-1 text-xs font-mono rounded-full bg-space-900/80 text-neon-blue border border-neon-blue/20 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-heading font-semibold text-slate-bright mb-2 group-hover:text-neon-blue transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-slate-light line-clamp-2 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono rounded bg-neon-blue/10 text-neon-blue/80 border border-neon-blue/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              {project.projectUrl && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-light/60 group-hover:text-neon-blue transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" /> 在线预览
                </span>
              )}
              {project.githubUrl && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-light/60 group-hover:text-neon-blue transition-colors">
                  <Github className="w-3.5 h-3.5" /> 源代码
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
