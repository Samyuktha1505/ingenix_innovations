
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] to-[#24243e]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6E59A5]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Floating AI Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit-like patterns */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#8B5CF6] rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#6E59A5] rounded-full"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#8B5CF6] rounded-full"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Neural network lines */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#6E59A5]/30 to-transparent rotate-45"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Data flow visualization */}
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/20 to-transparent"
          animate={{
            x: [-100, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6E59A5]/15 to-transparent"
          animate={{
            x: [100, -100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/6 right-1/5 w-8 h-8 border border-[#8B5CF6]/30 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-1/6 w-6 h-6 border border-[#6E59A5]/25 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="mx-auto max-w-2xl bg-[#1a1a2e]/90 backdrop-blur-sm border border-gray-800 shadow-xl p-10 rounded-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card internal animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6E59A5]/5 to-[#8B5CF6]/5"></div>
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]"
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-gray-300 mb-6">
              Our team of experts is ready to help you navigate the complexity of AI implementation and create custom solutions tailored to your unique business needs.
            </p>
            
            <Link to="/contact" className="inline-block w-full">
              <Button 
                className="w-full bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5] transition-all duration-300 py-6 text-base relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                  animate={{
                    x: [-100, 300],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
                "Try the Future"
              </p>
              <p className="text-white/80 text-sm mt-1">by Ingenix Innovations</p>
              <motion.p 
                className="text-gray-400 text-xs mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                sales@ingenixinnovations.com • Leela Palace Road, Bangalore 560008
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
