import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Rocket } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '技术驱动',
    desc: '以先进技术为核心，持续探索创新解决方案',
  },
  {
    icon: Globe,
    title: '全球视野',
    desc: '面向国际市场的技术产品与服务',
  },
  {
    icon: Rocket,
    title: '高效交付',
    desc: '敏捷开发流程，确保项目高质量按时交付',
  },
];

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-bright mb-6">
              专注技术，<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                创造无限可能
              </span>
            </h2>
            <p className="text-slate-light mb-8 leading-relaxed">
              我们是一支充满激情的技术团队，致力于通过创新技术解决现实问题。
              从 Web 应用到物联网平台，从人工智能到云原生架构，
              我们在多个技术领域积累了丰富的项目经验。
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors duration-300 font-medium"
            >
              了解更多 <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-space-700/30 border border-white/5 hover:border-neon-blue/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-neon-blue/10">
                  <feature.icon className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-slate-bright mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-light">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
