
import { Sparkles, Rocket, Zap, Code, Database, Bot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import AnimatedWaves from './AnimatedWaves';

const WhatWeDo = () => {
  const features = [
    {
      title: "Innovation Focused",
      description: "We harness the latest breakthroughs in AI research and translate them into practical, scalable solutions for real-world challenges.",
      icon: Sparkles,
      delay: 0,
      image: "/src/images/img1.jpg"
    },
    {
      title: "Custom Solutions",
      description: "We build tailored AI systems that integrate seamlessly with your existing infrastructure while solving your unique business challenges.",
      icon: Rocket,
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Rapid Implementation",
      description: "Our agile methodology ensures quick deployment of AI solutions that start delivering value from day one, with continuous improvement.",
      icon: Zap,
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Development",
      description: "We develop state-of-the-art AI models using cutting-edge frameworks and techniques to solve complex business problems.",
      icon: Code,
      delay: 0.3,
      image: "https://media.istockphoto.com/id/2012883461/photo/ai-data-analysis-business-people-use-ai-to-analyze-financial-related-data-big-data-complex.jpg?s=1024x1024&w=is&k=20&c=ztgU0XEkYbUqBsQ8G-nWaPeZCapBac6qQanbXoinTxc="
    },
    {
      title: "Data Engineering",
      description: "Our expert data engineers build robust pipelines to collect, process, and transform your data into AI-ready formats.",
      icon: Database,
      delay: 0.4,
      image: "https://plus.unsplash.com/premium_photo-1661454577337-7738fd3dd478?q=80&w=3092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "AI Agents",
      description: "We create autonomous AI agents that can perform complex tasks, make decisions, and integrate with your existing workflows.",
      icon: Bot,
      delay: 0.5,
      image: "/public/imgs/img3.png"
    },
  ];

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Waves Background */}
      <AnimatedWaves />
      
      {/* Code pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/50 to-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.12'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>
      
      {/* Matrix-like raining code effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-green-500 font-mono text-opacity-70 whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: -100,
              fontSize: `${Math.random() * 10 + 10}px`,
              animation: `fall ${Math.random() * 15 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {[...Array(20)].map((_, j) => (
              <span key={j}>
                {String.fromCharCode(Math.floor(Math.random() * 74) + 48)}
              </span>
            ))}
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="inline-block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ingenix-primary to-ingenix-highlight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Engineering Excellence
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            At Ingenix Innovations, we merge cutting-edge artificial intelligence with strategic business insights to transform how enterprises operate, innovate, and grow.
          </motion.p>
        </div>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <motion.div 
                className="lg:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6E59A5]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-2xl border border-gray-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121e]/50 to-transparent rounded-2xl z-20"></div>
                  <div className="absolute bottom-4 left-4 z-30">
                    <div className="bg-gradient-to-br from-[#6E59A5]/20 to-[#8B5CF6]/20 backdrop-blur-sm rounded-lg p-3 border border-[#6E59A5]/30">
                      <feature.icon className="h-8 w-8 text-[#8B5CF6]" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-[#6E59A5] transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="mb-6 inline-flex items-center justify-center p-4 bg-gradient-to-br from-[#6E59A5]/20 to-[#8B5CF6]/20 rounded-xl">
                      <feature.icon className="h-8 w-8 text-[#6E59A5]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-100">{feature.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">{feature.description}</p>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <div className="flex space-x-2">
                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                        <span className="h-3 w-3 rounded-full bg-[#8B5CF6]"></span>
                        <span className="h-3 w-3 rounded-full bg-gray-700"></span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">
                        {`feature_${feature.title.toLowerCase().replace(' ', '_')}`}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
