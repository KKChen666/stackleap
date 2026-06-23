import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.form
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="bg-space-700/50 rounded-2xl p-8 border border-white/5"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-bright mb-2">姓名</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-lg text-sm text-slate-bright placeholder:text-slate-light/40 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300"
              placeholder="请输入您的姓名"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-bright mb-2">邮箱</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-lg text-sm text-slate-bright placeholder:text-slate-light/40 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300"
              placeholder="请输入您的邮箱"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-bright mb-2">留言</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-space-800/50 border border-white/10 rounded-lg text-sm text-slate-bright placeholder:text-slate-light/40 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
              placeholder="请输入您的留言"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold text-space-900 bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-500"
          >
            <Send className="w-4 h-4" />
            {submitted ? '已发送!' : '发送消息'}
          </motion.button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-center gap-8"
      >
        <div>
          <h3 className="text-2xl font-heading font-bold text-slate-bright mb-4">联系方式</h3>
          <p className="text-slate-light">
            如果您有任何问题或合作意向，欢迎随时联系我们。我们会在 24 小时内回复您的消息。
          </p>
        </div>

        <div className="space-y-4">
          <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-space-700/30 border border-white/5 hover:border-neon-blue/20 transition-all duration-300 group">
            <div className="p-2.5 rounded-lg bg-neon-blue/10">
              <Mail className="w-5 h-5 text-neon-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-bright group-hover:text-neon-blue transition-colors">邮箱</p>
              <p className="text-sm text-slate-light">hello@example.com</p>
            </div>
          </a>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-space-700/30 border border-white/5 hover:border-neon-blue/20 transition-all duration-300 group">
            <div className="p-2.5 rounded-lg bg-neon-purple/10">
              <Github className="w-5 h-5 text-neon-purple" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-bright group-hover:text-neon-blue transition-colors">GitHub</p>
              <p className="text-sm text-slate-light">github.com/stackleap</p>
            </div>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-space-700/30 border border-white/5 hover:border-neon-blue/20 transition-all duration-300 group">
            <div className="p-2.5 rounded-lg bg-neon-blue/10">
              <Linkedin className="w-5 h-5 text-neon-blue" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-bright group-hover:text-neon-blue transition-colors">LinkedIn</p>
              <p className="text-sm text-slate-light">linkedin.com/company/stackleap</p>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
