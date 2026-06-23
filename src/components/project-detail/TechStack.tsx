import { motion } from 'framer-motion';

export default function TechStack({ techs }: { techs: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {techs.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="px-4 py-2 text-sm font-mono rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/20 hover:bg-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
