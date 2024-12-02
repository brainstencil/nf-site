import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cog, Mail } from 'lucide-react';
import { ContactButton } from './components/ContactButton';
import { BackgroundVideo } from './components/BackgroundVideo';

function App() {
  return (
    <BackgroundVideo>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Added a spacer div at the top */}
        <div className="h-[15%]" />
        
        {/* Logo and tagline container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-[90%] px-4"
        >
          {/* Logo container - removed Factory icon */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-8 flex justify-center items-center"
          >
            <h1
              style={{ 
                fontSize: 'min(8rem, 15vw)'
              }}
              className="font-bold text-white tracking-tight"
            >
              neofactory
            </h1>
          </motion.div>

          {/* Tagline - added max-width */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-2xl sm:text-3xl md:text-4xl text-white max-w-[90%] mx-auto px-4"
          >
            because humans had their chance to manage operations
          </motion.p>
        </motion.div>

        {/* Contact Button - now in its own container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-[15%]"
        >
          <ContactButton />
        </motion.div>
      </div>
    </BackgroundVideo>
  );
}

export default App;