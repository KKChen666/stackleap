import { motion } from 'framer-motion';
import { Code2, MapPin, Calendar } from 'lucide-react';

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-space-700/50 rounded-2xl p-8 border border-white/5"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-0.5">
            <div className="w-full h-full rounded-full bg-space-800 flex items-center justify-center">
              <Code2 className="w-12 h-12 text-neon-blue" />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-space-800" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-slate-bright mb-2">StackLeap 团队</h2>
          <p className="text-slate-light mb-4 max-w-lg">
            一支专注于全栈开发的技术团队，擅长 Web 应用、移动应用、云原生架构与人工智能领域。
            我们致力于用技术解决实际问题，为用户创造卓越的产品体验。
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-light/70">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> 中国
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> 2020 年成立
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
