import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { type ReactNode } from 'react';

export default function HeroSection({ children }: { children?: ReactNode }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {children}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-900/50 to-space-900 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue">
            构建未来，创造价值
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-light mb-10 font-body"
        >
          我们用技术将创意变为现实
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold text-space-900 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-500 transform hover:scale-105"
          >
            查看项目
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-light/60 font-mono">向下滚动</span>
          <ChevronDown className="w-5 h-5 text-neon-blue/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
