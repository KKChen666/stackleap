import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-bright mb-4">联系我们</h1>
          <p className="text-slate-light max-w-2xl mx-auto">
            有任何问题或合作意向？欢迎随时与我们联系
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </div>
  );
}
