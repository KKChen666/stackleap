import { Code2, Github, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-space-900/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-neon-blue" />
              <span className="text-lg font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                StackLeap
              </span>
            </div>
            <p className="text-slate-light text-sm leading-relaxed">
              专注技术创新，打造卓越产品体验。
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-slate-bright mb-4">快速链接</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-slate-light hover:text-neon-blue transition-colors">首页</Link>
              <Link to="/projects" className="text-sm text-slate-light hover:text-neon-blue transition-colors">项目列表</Link>
              <Link to="/about" className="text-sm text-slate-light hover:text-neon-blue transition-colors">关于我</Link>
              <Link to="/contact" className="text-sm text-slate-light hover:text-neon-blue transition-colors">联系我们</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-slate-bright mb-4">社交链接</h4>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-neon-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@example.com" className="text-slate-light hover:text-neon-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-neon-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-light/60">
            &copy; {new Date().getFullYear()} StackLeap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
