import { motion } from 'framer-motion';
import ProfileCard from '@/components/about/ProfileCard';
import SkillChart from '@/components/about/SkillChart';

const experiences = [
  { year: '2024', title: 'AI 智能分析平台', desc: '完成基于机器学习的实时数据可视化平台开发' },
  { year: '2024', title: 'CloudDeploy 云原生平台', desc: '开发一键部署容器化应用的云原生平台' },
  { year: '2023', title: 'ShopFlow 电商平台', desc: '全栈电商解决方案，集成推荐算法与多支付渠道' },
  { year: '2023', title: '团队成立', desc: 'StackLeap 技术团队正式组建' },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-bright mb-4">关于我</h1>
          <p className="text-slate-light max-w-2xl mx-auto">
            了解更多关于我们的技术团队和项目经验
          </p>
        </motion.div>

        <div className="space-y-12">
          <ProfileCard />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SkillChart />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-heading font-semibold text-slate-bright mb-6">项目经历</h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <span className="text-sm font-mono text-neon-blue shrink-0 pt-1">{exp.year}</span>
                    <div>
                      <h4 className="font-heading font-semibold text-slate-bright text-sm">{exp.title}</h4>
                      <p className="text-sm text-slate-light mt-1">{exp.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
