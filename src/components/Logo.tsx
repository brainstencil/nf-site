import { Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center"
    >
      <Factory className="w-12 h-12 text-white mr-4" />
      <h1 className="text-6xl sm:text-7xl font-bold text-white tracking-tight text-shadow">
        neofactory
      </h1>
    </motion.div>
  );
}