import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectBanner from '@/components/project-detail/ProjectBanner';
import TechStack from '@/components/project-detail/TechStack';
import Timeline from '@/components/project-detail/Timeline';
import SceneBackground from '@/components/three/SceneBackground';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-slate-bright mb-4">项目未找到</h1>
          <Link to="/projects" className="text-neon-blue hover:underline">返回项目列表</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ProjectBanner project={project} />
      
      <div className="relative">
        <SceneBackground className="opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-light hover:text-neon-blue transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> 返回项目列表
            </Link>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-neon-blue to-neon-purple text-space-900 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" /> 在线预览
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-white/20 text-slate-bright hover:border-neon-blue/30 hover:text-neon-blue transition-all duration-300"
                >
                  <Github className="w-4 h-4" /> 源代码
                </a>
              )}
            </div>

            <section className="mb-12">
              <h2 className="text-xl font-heading font-semibold text-slate-bright mb-4">项目简介</h2>
              <p className="text-slate-light leading-relaxed">{project.longDescription}</p>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-heading font-semibold text-slate-bright mb-4">技术栈</h2>
              <TechStack techs={project.techStack} />
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-heading font-semibold text-slate-bright mb-6">项目亮点</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-space-700/30 border border-white/5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 shrink-0" />
                    <span className="text-sm text-slate-light">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {project.timeline.length > 0 && (
              <section>
                <h2 className="text-xl font-heading font-semibold text-slate-bright mb-8">开发历程</h2>
                <Timeline items={project.timeline} />
              </section>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
