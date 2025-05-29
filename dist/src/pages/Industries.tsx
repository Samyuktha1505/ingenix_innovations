
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, DollarSign, ShoppingCart, Truck, GraduationCap, BarChart, Sparkles } from 'lucide-react';

const industryDetails = [
  {
    name: 'Healthcare',
    icon: Heart,
    description: 'AI-powered diagnosis, medical imaging analysis, and intelligent patient interaction systems.',
    color: 'bg-red-100',
    iconColor: 'text-red-500',
    useCases: [
      'Early disease detection and diagnosis',
      'Medical image analysis and classification',
      'Patient monitoring and remote care',
      'Clinical decision support systems',
      'Healthcare operations optimization'
    ],
    technologies: ['Computer Vision', 'NLP', 'Predictive Analytics', 'Multi-Agent Systems', 'Generative AI'],
    genAIApplications: [
      'Medical report generation',
      'Personalized treatment plans',
      'Synthetic medical imaging data',
      'Virtual health assistants'
    ]
  },
  {
    name: 'Finance',
    icon: DollarSign,
    description: 'Advanced risk scoring, fraud detection systems, and AI-powered robo-advisors.',
    color: 'bg-green-100',
    iconColor: 'text-green-500',
    useCases: [
      'Fraud detection and prevention',
      'Algorithmic trading',
      'Credit risk assessment',
      'Customer segmentation',
      'Personalized financial advising'
    ],
    technologies: ['Time Series Analysis', 'Anomaly Detection', 'NLP', 'Reinforcement Learning', 'Generative AI'],
    genAIApplications: [
      'Financial document analysis',
      'Market trend prediction',
      'Investment portfolio suggestions',
      'Automated financial reporting'
    ]
  },
  {
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description: 'Personalized recommendation engines, chatbots, and customer experience optimization.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-500',
    useCases: [
      'Personalized recommendation systems',
      'Demand forecasting',
      'Inventory optimization',
      'Virtual try-on solutions',
      'Customer sentiment analysis'
    ],
    technologies: ['Recommendation Systems', 'Computer Vision', 'NLP', 'Predictive Analytics', 'Generative AI'],
    genAIApplications: [
      'Product description generation',
      'Personalized marketing content',
      'Virtual product showcasing',
      'Customer review analysis'
    ]
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Intelligent route optimization, warehouse automation, and supply chain enhancement.',
    color: 'bg-amber-100',
    iconColor: 'text-amber-500',
    useCases: [
      'Route optimization',
      'Warehouse automation',
      'Supply chain visibility',
      'Demand forecasting',
      'Preventive maintenance'
    ],
    technologies: ['Optimization Algorithms', 'IoT', 'Computer Vision', 'Digital Twins', 'Generative AI'],
    genAIApplications: [
      'Supply chain scenario generation',
      'Predictive maintenance reports',
      'Autonomous logistics planning',
      'Shipping documentation automation'
    ]
  },
  {
    name: 'EdTech',
    icon: GraduationCap,
    description: 'Personalized learning systems, test analysis, and virtual teaching assistants.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-500',
    useCases: [
      'Adaptive learning platforms',
      'Automated assessment and grading',
      'Virtual tutors and assistants',
      'Student engagement analytics',
      'Course recommendation engines'
    ],
    technologies: ['NLP', 'Reinforcement Learning', 'Knowledge Graphs', 'Sentiment Analysis', 'Generative AI'],
    genAIApplications: [
      'Personalized learning content',
      'Automated quiz generation',
      'Study material summarization',
      'Interactive tutoring dialogue'
    ]
  },
  {
    name: 'Digital Marketing',
    icon: BarChart,
    description: 'AI-driven campaign optimization, customer segmentation, and predictive analytics for marketers.',
    color: 'bg-sky-100',
    iconColor: 'text-sky-500',
    useCases: [
      'Customer segmentation and targeting',
      'Campaign performance prediction',
      'Content generation and optimization',
      'Customer journey analysis',
      'Churn prediction and prevention'
    ],
    technologies: ['NLP', 'Generative AI', 'Predictive Analytics', 'Recommendation Systems'],
    genAIApplications: [
      'Ad copy generation',
      'Image and video content creation',
      'Personalized email campaigns',
      'Social media post optimization'
    ]
  }
];

const Industries = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-r from-[#1a1a2e] to-[#0c0c14] py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#6E59A5]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#8B5CF6]/10 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">Serve</span>
            </motion.h1>
            <motion.p 
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We deliver specialized AI solutions across multiple sectors, tailored to your industry's unique challenges.
            </motion.p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {industryDetails.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} md:flex gap-8 items-center`}
            >
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className={`p-8 rounded-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-[#1a1a2e] to-[#262640]' : 'bg-gradient-to-bl from-[#1a1a2e] to-[#262640]'} border border-gray-800 flex flex-col items-center text-center`}>
                  <div className={`inline-flex items-center justify-center p-6 rounded-full mb-6 ${index % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'} from-[#6E59A5]/30 to-[#8B5CF6]/20`}>
                    <industry.icon className="h-16 w-16 text-[#8B5CF6]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">{industry.name}</h2>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold mb-4 text-[#8B5CF6]">Industry-Specific Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Our AI solutions for the {industry.name.toLowerCase()} industry are designed to address the unique challenges and opportunities in this sector. We combine industry expertise with cutting-edge AI technologies to deliver transformative results.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-white">Key Use Cases</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {industry.useCases.map((useCase, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="text-[#8B5CF6] mr-2">•</span>
                        <span className="text-gray-300">{useCase}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-white">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className={`${tech === 'Generative AI' ? 'bg-[#6E59A5]/30 border-[#8B5CF6]' : 'bg-[#1a1a2e] border-gray-700'} border text-gray-300 text-sm px-3 py-1 rounded-full`}
                      >
                        {tech === 'Generative AI' ? (
                          <span className="flex items-center">
                            <Sparkles className="h-3 w-3 mr-1 text-[#8B5CF6]" />
                            {tech}
                          </span>
                        ) : (
                          tech
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 flex items-center text-white">
                    <Sparkles className="h-4 w-4 mr-2 text-[#8B5CF6]" />
                    Generative AI Applications
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                    {industry.genAIApplications.map((app, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="text-[#8B5CF6] mr-2">✨</span>
                        <span className="text-gray-300">{app}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6 px-4 py-3 bg-[#1a1a2e] border border-gray-800 rounded-lg">
                  <div className="flex items-center text-gray-400">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-xs font-mono">ai_solution_{industry.name.toLowerCase().replace(/\s+/g, '_')}_active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a2e] rounded-xl p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
              Custom Solutions for Your Industry
            </h3>
            <p className="text-gray-300 mb-6">
              Don't see your industry listed? Our team has experience working across many sectors, and we specialize in developing custom AI solutions for unique business challenges.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-[#12121e] rounded-lg border border-gray-800">
                <h4 className="text-lg font-medium mb-2 text-white">Needs Assessment</h4>
                <p className="text-gray-400">We begin with a thorough analysis of your industry's specific challenges and opportunities.</p>
              </div>
              <div className="p-5 bg-[#12121e] rounded-lg border border-gray-800">
                <h4 className="text-lg font-medium mb-2 text-white">Custom Solution Design</h4>
                <p className="text-gray-400">Our experts craft AI solutions tailored to the unique requirements of your business sector.</p>
              </div>
              <div className="p-5 bg-[#12121e] rounded-lg border border-gray-800">
                <h4 className="text-lg font-medium mb-2 text-white">Iterative Implementation</h4>
                <p className="text-gray-400">We build, test, and refine your solution to ensure it addresses your specific industry needs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;

