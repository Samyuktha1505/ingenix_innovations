
import { Users, Mic, TrendingUp, Sparkles, Settings, Brain, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'AI Consulting',
    description: 'Strategic roadmaps, use case identification, and technology selection tailored to your business objectives.',
    icon: Brain,
    slides: [
      {
        title: 'Strategic Roadmaps',
        content: 'Comprehensive AI strategy development aligned with your business goals and digital transformation journey. We analyze your current infrastructure, identify opportunities, and create actionable plans for AI implementation that deliver measurable ROI.'
      },
      {
        title: 'Use Case Identification',
        content: 'Expert analysis to identify high-impact AI opportunities specific to your industry and business model. Our team conducts thorough assessments to pinpoint areas where AI can drive efficiency, reduce costs, and create competitive advantages.'
      },
      {
        title: 'Technology Selection',
        content: 'Guidance on choosing the right AI technologies, platforms, and tools for your specific requirements. We evaluate market solutions, assess compatibility with your systems, and recommend the optimal tech stack for your AI initiatives.'
      }
    ]
  },
  {
    title: 'AI Agents & Multi-Agent Systems',
    description: 'Advanced agent orchestration and collaboration enabling complex workflows and automated decision making.',
    icon: Users,
    slides: [
      {
        title: 'Agent Orchestration',
        content: 'Design and implement intelligent agent systems that coordinate complex business processes autonomously. Our agents can handle multiple tasks simultaneously, make informed decisions, and adapt to changing business conditions in real-time.'
      },
      {
        title: 'Multi-Agent Collaboration',
        content: 'Build collaborative AI systems where multiple agents work together to solve complex problems. Each agent specializes in specific domains while communicating and coordinating with others to achieve common business objectives.'
      },
      {
        title: 'Workflow Automation',
        content: 'Automate end-to-end business workflows with intelligent decision-making capabilities. Our systems can handle exceptions, escalate issues appropriately, and continuously learn from interactions to improve performance over time.'
      }
    ]
  },
  {
    title: 'Voice AI',
    description: 'Natural language customer support with multilingual capabilities and seamless call center integration.',
    icon: Mic,
    slides: [
      {
        title: 'Natural Language Processing',
        content: 'Advanced NLP capabilities for understanding and processing human speech with high accuracy. Our systems can interpret context, sentiment, and intent to provide natural, human-like interactions that enhance customer satisfaction.'
      },
      {
        title: 'Multilingual Support',
        content: 'Support for multiple languages and dialects to serve diverse customer bases globally. Real-time translation and cultural adaptation ensure consistent service quality across different markets and regions.'
      },
      {
        title: 'Call Center Integration',
        content: 'Seamless integration with existing call center infrastructure and customer service platforms. Our voice AI can handle routine inquiries, route complex issues to human agents, and provide real-time assistance to support staff.'
      }
    ]
  },
  {
    title: 'Predictive Analytics',
    description: 'Business forecasting, customer churn models, and risk scoring engines powered by machine learning.',
    icon: TrendingUp,
    slides: [
      {
        title: 'Business Forecasting',
        content: 'Accurate prediction of business metrics, sales trends, and market opportunities using advanced ML models. Our forecasting solutions help you make data-driven decisions, optimize inventory, and plan resources effectively for future growth.'
      },
      {
        title: 'Customer Churn Models',
        content: 'Identify at-risk customers and implement retention strategies with predictive churn analysis. Our models analyze behavioral patterns, transaction history, and engagement metrics to predict churn probability and recommend targeted interventions.'
      },
      {
        title: 'Risk Scoring',
        content: 'Comprehensive risk assessment engines for financial, operational, and strategic decision making. Our systems evaluate multiple risk factors in real-time to provide accurate scoring that helps minimize losses and optimize business opportunities.'
      }
    ]
  },
  {
    title: 'Generative AI Solutions',
    description: 'Custom AI integration, content generation, avatar synthesis, and video generation capabilities.',
    icon: Sparkles,
    slides: [
      {
        title: 'Content Generation',
        content: 'AI-powered content creation for marketing, documentation, and creative applications. Our systems can generate high-quality text, images, and multimedia content tailored to your brand voice and specific requirements at scale.'
      },
      {
        title: 'Avatar Synthesis',
        content: 'Create realistic digital avatars and virtual representatives for customer interactions. Our technology enables personalized, engaging experiences through lifelike avatars that can communicate in multiple languages and adapt to user preferences.'
      },
      {
        title: 'Video Generation',
        content: 'Automated video creation and editing using cutting-edge generative AI technologies. From promotional content to training materials, our systems can produce professional-quality videos with minimal human intervention.'
      }
    ]
  },
  {
    title: 'Process Automation',
    description: 'End-to-end workflow automation with human-in-the-loop optimization and document processing.',
    icon: Settings,
    slides: [
      {
        title: 'Workflow Automation',
        content: 'Automate complex business processes while maintaining quality and compliance standards. Our solutions streamline operations, reduce manual errors, and free up your team to focus on high-value strategic activities.'
      },
      {
        title: 'Human-in-the-Loop',
        content: 'Intelligent automation that knows when to involve human expertise for optimal results. Our systems can escalate complex decisions, request approvals, and learn from human feedback to continuously improve their performance.'
      },
      {
        title: 'Document Processing',
        content: 'Advanced OCR and document understanding for automated data extraction and processing. Handle invoices, contracts, forms, and other documents with high accuracy while maintaining data security and compliance requirements.'
      }
    ]
  },
];

const Offerings = () => {
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const intervalRefs = useRef<{ [key: number]: NodeJS.Timeout }>({});
  
  const nextSlide = (offeringIndex: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [offeringIndex]: ((prev[offeringIndex] || 0) + 1) % 3
    }));
  };

  const prevSlide = (offeringIndex: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [offeringIndex]: ((prev[offeringIndex] || 0) - 1 + 3) % 3
    }));
  };

  const setSlide = (offeringIndex: number, slideIndex: number) => {
    setActiveSlides(prev => ({
      ...prev,
      [offeringIndex]: slideIndex
    }));
  };

  const startAutoSlide = (offeringIndex: number) => {
    if (intervalRefs.current[offeringIndex]) {
      clearInterval(intervalRefs.current[offeringIndex]);
    }
    
    intervalRefs.current[offeringIndex] = setInterval(() => {
      if (hoveredCard !== offeringIndex) {
        nextSlide(offeringIndex);
      }
    }, 4000);
  };

  const stopAutoSlide = (offeringIndex: number) => {
    if (intervalRefs.current[offeringIndex]) {
      clearInterval(intervalRefs.current[offeringIndex]);
    }
  };

  useEffect(() => {
    // Start auto-slide for all cards
    offerings.forEach((_, index) => {
      startAutoSlide(index);
    });

    return () => {
      // Cleanup intervals
      Object.values(intervalRefs.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, [hoveredCard]);

  const handleCardMouseEnter = (index: number) => {
    setHoveredCard(index);
    stopAutoSlide(index);
  };

  const handleCardMouseLeave = (index: number) => {
    setHoveredCard(null);
    startAutoSlide(index);
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-[#12121e] to-[#0c0c14] text-white relative overflow-hidden">
      {/* Background code pattern effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">AI Solutions</span>
          </h2>
          <p className="max-w-2xl text-xl text-gray-400 mx-auto leading-relaxed">
            Cutting-edge artificial intelligence technologies designed to transform your business operations and drive innovation.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering, index) => {
            const currentSlide = activeSlides[index] || 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#1a1a2e] rounded-xl overflow-hidden border border-gray-700 hover:border-[#6E59A5] group relative"
                onMouseEnter={() => handleCardMouseEnter(index)}
                onMouseLeave={() => handleCardMouseLeave(index)}
              >
                <div className="p-2">
                  <div className="h-2 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-[#6E59A5]/20 to-[#8B5CF6]/20 rounded-lg mb-5 group-hover:from-[#6E59A5]/30 group-hover:to-[#8B5CF6]/30 transition-colors duration-500">
                    <offering.icon className="h-7 w-7 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{offering.title}</h3>
                  
                  {/* Slider Content */}
                  <div className="mb-6 min-h-[160px]">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-[#8B5CF6] font-medium mb-3">{offering.slides[currentSlide].title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{offering.slides[currentSlide].content}</p>
                    </motion.div>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center justify-between mb-4">
                    <button 
                      onClick={() => prevSlide(index)}
                      className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4 text-gray-400" />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="flex space-x-2">
                      {[0, 1, 2].map((dot) => (
                        <button
                          key={dot}
                          onClick={() => setSlide(index, dot)}
                          className={`h-2 w-2 rounded-full transition-colors ${
                            currentSlide === dot ? 'bg-[#8B5CF6]' : 'bg-gray-700'
                          }`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={() => nextSlide(index)}
                      className="p-1 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
