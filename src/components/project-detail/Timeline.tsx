import { motion } from 'framer-motion';
import type { TimelineItem } from '@/data/projects';

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/50 via-neon-purple/50 to-transparent" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
              <span className="text-xs font-mono text-neon-blue">{item.date}</span>
              <h4 className="text-lg font-heading font-semibold text-slate-bright mt-1">{item.title}</h4>
              <p className="text-sm text-slate-light mt-1">{item.description}</p>
            </div>
            
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-blue border-2 border-space-900 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
            
            <div className="hidden md:block flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
