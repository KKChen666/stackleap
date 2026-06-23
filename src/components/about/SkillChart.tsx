import { motion } from 'framer-motion';

const skills = [
  { name: 'React / Vue', level: 95 },
  { name: 'TypeScript', level: 92 },
  { name: 'Node.js / Go', level: 88 },
  { name: 'Python / AI', level: 85 },
  { name: 'Docker / K8s', level: 82 },
  { name: 'UI/UX 设计', level: 78 },
];

export default function SkillChart() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-heading font-semibold text-slate-bright">技术能力</h3>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex justify-between mb-2">
            <span className="text-sm font-mono text-slate-bright">{skill.name}</span>
            <span className="text-sm font-mono text-neon-blue">{skill.level}%</span>
          </div>
          <div className="h-2 bg-space-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
