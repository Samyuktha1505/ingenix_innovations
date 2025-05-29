
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: {
    name: string;
    icon: React.ComponentType<any>;
    description: string;
    color: string;
    iconColor: string;
    gradient: string;
    genAI: string;
  } | null;
}

const IndustryModal = ({ isOpen, onClose, industry }: IndustryModalProps) => {
  if (!industry) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a2e] rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`h-3 bg-gradient-to-r ${industry.gradient} rounded-t-2xl`}></div>
              
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>

                {/* Industry Icon and Name */}
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center p-4 ${industry.color} rounded-xl mr-4`}>
                    <industry.icon className={`h-8 w-8 ${industry.iconColor}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{industry.description}</p>
                </div>

                {/* Generative AI Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-6 w-6 text-[#8B5CF6]" />
                    <h3 className="text-xl font-semibold text-[#8B5CF6]">Generative AI Solutions</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{industry.genAI}</p>
                </div>

                {/* Key Benefits */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#8B5CF6] mt-2"></span>
                      <span>Increased operational efficiency and automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#8B5CF6] mt-2"></span>
                      <span>Enhanced decision-making with data-driven insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#8B5CF6] mt-2"></span>
                      <span>Reduced costs and improved ROI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#8B5CF6] mt-2"></span>
                      <span>Scalable solutions that grow with your business</span>
                    </li>
                  </ul>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-700 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <span className="h-3 w-3 rounded-full bg-[#8B5CF6]"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-700"></span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    sector_{industry.name.toLowerCase().replace(/\s+/g, '_')}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IndustryModal;
