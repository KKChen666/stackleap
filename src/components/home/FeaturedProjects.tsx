import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-bright mb-4">
            精选项目
          </h2>
          <p className="text-slate-light max-w-2xl mx-auto">
            以下是我们最具代表性的项目作品，展示了我们在不同领域的技术实力
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link to={`/projects/${project.id}`} className="block group">
                <div className="bg-space-700/50 rounded-xl overflow-hidden border border-white/5 card-hover hover:border-neon-blue/30">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-heading font-semibold text-slate-bright mb-2 group-hover:text-neon-blue transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-light line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded bg-neon-blue/10 text-neon-blue/80 border border-neon-blue/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-slate-light/60">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.projectUrl && (
                        <ExternalLink className="w-4 h-4 text-slate-light/50 group-hover:text-neon-blue transition-colors" />
                      )}
                      {project.githubUrl && (
                        <Github className="w-4 h-4 text-slate-light/50 group-hover:text-neon-blue transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-medium text-sm border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
          >
            查看全部项目
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
