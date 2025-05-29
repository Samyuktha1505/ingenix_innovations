
import { Heart, DollarSign, ShoppingCart, Truck, GraduationCap, BarChart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IndustryModal from './IndustryModal';

const industries = [
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnosis, medical imaging analysis, and intelligent patient interaction systems.',
    color: 'bg-red-100',
    iconColor: 'text-red-500',
    gradient: 'from-red-500/20 to-red-300/10',
    genAI: 'Medical report generation, Virtual health assistants'
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Advanced risk scoring, fraud detection systems, and AI-powered robo-advisors.',
    color: 'bg-green-100',
    iconColor: 'text-green-500',
    gradient: 'from-green-500/20 to-green-300/10',
    genAI: 'Financial document analysis, Market trend prediction'
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Personalized recommendation engines, chatbots, and customer experience optimization.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-500',
    gradient: 'from-blue-500/20 to-blue-300/10',
    genAI: 'Product description generation, Virtual product showcasing'
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Intelligent route optimization, warehouse automation, and supply chain enhancement.',
    color: 'bg-amber-100',
    iconColor: 'text-amber-500',
    gradient: 'from-amber-500/20 to-amber-300/10',
    genAI: 'Supply chain scenario generation, Shipping documentation automation'
  },
  {
    name: 'EdTech',
    icon: GraduationCap,
    description: 'Personalized learning systems, test analysis, and virtual teaching assistants.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-500',
    gradient: 'from-purple-500/20 to-purple-300/10',
    genAI: 'Personalized learning content, Interactive tutoring dialogue'
  },
  {
    name: 'Digital Marketing',
    icon: BarChart,
    description: 'AI-driven campaign optimization, customer segmentation, and predictive analytics for marketers.',
    color: 'bg-sky-100',
    iconColor: 'text-sky-500',
    gradient: 'from-sky-500/20 to-sky-300/10',
    genAI: 'Ad copy generation, Content creation and optimization'
  },
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (industry) => {
    setSelectedIndustry(industry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndustry(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0c0c14] to-[#060609] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#6E59A5]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#8B5CF6]/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold sm:text-4xl mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">Serve</span>
          </motion.h2>
          <motion.p 
            className="max-w-2xl text-xl text-gray-400 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We deliver specialized AI solutions across multiple sectors, tailored to your industry's unique challenges.
          </motion.p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-800 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleLearnMore(industry)}
            >
              <div className={`h-2 bg-gradient-to-r ${industry.gradient}`}></div>
              <div className="p-6">
                <div className={`inline-flex items-center justify-center p-3 ${industry.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className={`h-6 w-6 ${industry.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400 mb-4 text-sm">{industry.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-3.5 w-3.5 text-[#8B5CF6]" />
                    <span className="text-[#8B5CF6] font-medium">Generative AI:</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1 ml-5">{industry.genAI}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                  <div className="flex space-x-1">
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-700"></span>
                  </div>
                  <motion.button 
                    className="text-xs bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] text-white px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <IndustryModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        industry={selectedIndustry}
      />
    </section>
  );
};

export default Industries;
