import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactButton() {
  return (
    <motion.a
      href="mailto:contact@neofactory.com"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm border border-white/20 text-white hover:bg-opacity-20 transition-colors"
    >
      <Mail className="w-5 h-5 mr-2" />
      <span>contact@neofactory.com</span>
    </motion.a>
  );
}