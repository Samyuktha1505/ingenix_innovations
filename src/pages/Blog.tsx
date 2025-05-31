import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, ArrowRight, Mail, BookOpen, Cpu, Lightbulb, Code2, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bg7 from '@/images/indimages/bg7.avif';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // All articles organized by category
  const allArticles = {
    'AI Trends': [
      {
        id: 1,
        date: 'May 20, 2025',
        title: 'NVIDIA 800 V HVDC Architecture Will Power the Next Generation of AI',
        excerpt: 'The exponential growth of AI workloads is increasing data center power demands. Traditional 54 V architectures are being replaced with more efficient 800 V systems.',
        readTime: '8 MIN READ',
        category: 'AI Trends',
        image: '/ai-trends-1.jpg'
      },
      {
        id: 2,
        date: 'June 5, 2025',
        title: 'The Rise of Multimodal Foundation Models in 2025',
        excerpt: 'How combining vision, language, and audio modalities is creating more versatile AI systems that understand context like never before.',
        readTime: '6 MIN READ',
        category: 'AI Trends',
        image: '/ai-trends-2.jpg'
      },
      {
        id: 3,
        date: 'June 12, 2025',
        title: 'Edge AI: Bringing Intelligence to IoT Devices',
        excerpt: 'The latest breakthroughs in tinyML are enabling powerful AI models to run on microcontrollers with less than 1MB of memory.',
        readTime: '7 MIN READ',
        category: 'AI Trends',
        image: '/ai-trends-3.jpg'
      },
      {
        id: 4,
        date: 'June 18, 2025',
        title: 'Generative AI in Creative Industries: Beyond Hype',
        excerpt: 'How studios and agencies are actually implementing generative tools in their workflows, with measurable productivity gains.',
        readTime: '9 MIN READ',
        category: 'AI Trends',
        image: '/ai-trends-4.jpg'
      }
    ],
    'Technical Explainers': [
      {
        id: 5,
        date: 'May 23, 2025',
        title: 'Understanding Mixture of Experts Architecture',
        excerpt: 'Deep dive into how MoE models like Google\'s Switch Transformer achieve better performance with lower compute costs.',
        readTime: '12 MIN READ',
        category: 'Technical Explainers',
        image: '/tech-1.jpg'
      },
      {
        id: 6,
        date: 'May 28, 2025',
        title: 'The Math Behind Diffusion Models',
        excerpt: 'From stochastic differential equations to practical implementations, we break down the theory powering image generation models.',
        readTime: '15 MIN READ',
        category: 'Technical Explainers',
        image: '/tech-2.jpg'
      },
      {
        id: 7,
        date: 'June 3, 2025',
        title: 'Optimizing Transformer Inference: Key Techniques',
        excerpt: 'Practical guide to reducing latency and memory usage for production LLM deployments.',
        readTime: '10 MIN READ',
        category: 'Technical Explainers',
        image: '/tech-3.jpg'
      },
      {
        id: 8,
        date: 'June 10, 2025',
        title: 'Quantization: From FP32 to INT4 Without Losing Accuracy',
        excerpt: 'Comprehensive look at modern quantization approaches that maintain model quality while drastically reducing size.',
        readTime: '11 MIN READ',
        category: 'Technical Explainers',
        image: '/tech-4.jpg'
      }
    ],
    'Use Cases': [
      {
        id: 9,
        date: 'May 25, 2025',
        title: 'AI-Powered Drug Discovery at AstraZeneca',
        excerpt: 'Case study on how machine learning accelerated their small molecule discovery pipeline by 40%.',
        readTime: '8 MIN READ',
        category: 'Use Cases',
        image: '/use-case-1.jpg'
      },
      {
        id: 10,
        date: 'May 30, 2025',
        title: 'Automating Financial Reporting with LLMs',
        excerpt: 'How JP Morgan reduced quarterly report preparation time from 2 weeks to 3 days.',
        readTime: '7 MIN READ',
        category: 'Use Cases',
        image: '/use-case-2.jpg'
      },
      {
        id: 11,
        date: 'June 7, 2025',
        title: 'Computer Vision in Precision Agriculture',
        excerpt: 'Monitoring crop health and predicting yields with drone imagery and deep learning.',
        readTime: '9 MIN READ',
        category: 'Use Cases',
        image: '/use-case-3.jpg'
      },
      {
        id: 12,
        date: 'June 15, 2025',
        title: 'AI for Personalized Education',
        excerpt: 'How Khan Academy\'s AI tutor adapts to individual learning styles in real-time.',
        readTime: '10 MIN READ',
        category: 'Use Cases',
        image: '/use-case-4.jpg'
      }
    ],
    'Thought Leadership': [
      {
        id: 13,
        date: 'May 27, 2025',
        title: 'The Ethical Imperative of Explainable AI',
        excerpt: 'Why interpretability isn\'t just nice-to-have but essential for responsible deployment.',
        readTime: '8 MIN READ',
        category: 'Thought Leadership',
        image: '/thought-1.jpg'
      },
      {
        id: 14,
        date: 'June 1, 2025',
        title: 'Preparing for Artificial General Intelligence',
        excerpt: 'A framework for gradual, safe development of more capable AI systems.',
        readTime: '12 MIN READ',
        category: 'Thought Leadership',
        image: '/thought-2.jpg'
      },
      {
        id: 15,
        date: 'June 8, 2025',
        title: 'The Future of Human-AI Collaboration',
        excerpt: 'Moving beyond tools to true partners: how AI will augment human capabilities.',
        readTime: '9 MIN READ',
        category: 'Thought Leadership',
        image: '/thought-3.jpg'
      },
      {
        id: 16,
        date: 'June 17, 2025',
        title: 'Regulating AI Without Stifling Innovation',
        excerpt: 'A balanced approach to governance that protects society while allowing progress.',
        readTime: '10 MIN READ',
        category: 'Thought Leadership',
        image: '/thought-4.jpg'
      }
    ],
    'How We Built It': [
      {
        id: 17,
        date: 'May 29, 2025',
        title: 'Building Our Real-Time Video Analysis Pipeline',
        excerpt: 'Architecture deep dive into our distributed system processing 1M+ video streams daily.',
        readTime: '14 MIN READ',
        category: 'How We Built It',
        image: '/built-1.jpg'
      },
      {
        id: 18,
        date: 'June 4, 2025',
        title: 'Scaling Our Recommendation System to 100M Users',
        excerpt: 'Lessons learned from evolving our architecture to handle exponential growth.',
        readTime: '11 MIN READ',
        category: 'How We Built It',
        image: '/built-2.jpg'
      },
      {
        id: 19,
        date: 'June 9, 2025',
        title: 'Migrating Our ML Platform to Kubernetes',
        excerpt: 'The good, the bad, and the ugly of containerizing our machine learning workloads.',
        readTime: '13 MIN READ',
        category: 'How We Built It',
        image: '/built-3.jpg'
      },
      {
        id: 20,
        date: 'June 20, 2025',
        title: 'Implementing Continuous Training for Our Fraud Detection Models',
        excerpt: 'How we reduced false positives by 30% with automated model retraining.',
        readTime: '10 MIN READ',
        category: 'How We Built It',
        image: '/built-4.jpg'
      }
    ]
  };

  const categories = Object.keys(allArticles);
  const [selectedCategory, setSelectedCategory] = useState('AI Trends');
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  
  const taglines = [
    "Cutting-edge AI insights",
    "Deep technical knowledge", 
    "Practical applications",
    "Forward-thinking perspectives",
    "Behind-the-scenes engineering"
  ];

  const filteredArticles = allArticles[selectedCategory] || [];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === filteredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? filteredArticles.length - 1 : prev - 1));
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  // Auto-rotate slides and taglines
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 8000);
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex(prev => (prev + 1) % taglines.length);
    }, 3500);
    return () => {
      clearInterval(slideInterval);
      clearInterval(taglineInterval);
    };
  }, [currentSlide, filteredArticles.length]);

  // Get 3 latest articles from all categories for the sidebar
  const latestArticles = Object.values(allArticles)
  .flat()
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a12] text-white">
      <Navbar />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-[#1a1a2e] z-40 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 600, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-[#2d2d42] text-gray-300 hover:bg-[#3a3a57]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">

{/* Hero Section */}
<div className="relative bg-gradient-to-b from-[#12121e] to-[#1a1a2e] py-24 overflow-hidden">
  <div className="absolute inset-0 opacity-20">
  <div 
  className="absolute inset-0 z-0 opacity-120"
  style={{ 
    backgroundImage: `url(${bg7})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
/>
    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent"></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl font-bold pb-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-400"
    >
      AI Insights Hub
      
    </motion.h1>
    
    <div className="h-20 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentTaglineIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-purple-400 font-medium"
        >
          {taglines[currentTaglineIndex]}
        </motion.p>
      </AnimatePresence>
    </div>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="text-gray-300 max-w-3xl mx-auto text-lg"
    >
      Expert analysis on artificial intelligence technologies, applications, and their impact on business and society.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-8 flex flex-wrap justify-center gap-4"
    >
      {categories.slice(0, 3).map(category => (
        <button
          key={category}
          onClick={() => {
            setSelectedCategory(category);
            document.getElementById('featured-section').scrollIntoView({ behavior: 'smooth' });
          }}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategory === category
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
              : 'bg-[#2d2d42] text-gray-300 hover:bg-[#3a3a57] hover:shadow-md'
          }`}
        >
          {category}
        </button>
      ))}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="px-6 py-3 rounded-full font-medium bg-[#2d2d42] text-gray-300 hover:bg-[#3a3a57] hover:shadow-md transition-all flex items-center gap-2"
      >
        Explore All <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  </div>
</div>

        {/* Featured Articles Slider */}
        <section id="featured-section" className="bg-gradient-to-b from-[#1a1a2e] to-[#12121e] py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-[length:300px_300px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between items-center mb-8">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold flex items-center gap-3"
              >
                {selectedCategory === 'AI Trends' && <Lightbulb className="w-6 h-6 text-purple-400" />}
                {selectedCategory === 'Technical Explainers' && <Cpu className="w-6 h-6 text-purple-400" />}
                {selectedCategory === 'Use Cases' && <BookOpen className="w-6 h-6 text-purple-400" />}
                {selectedCategory === 'Thought Leadership' && <Lightbulb className="w-6 h-6 text-purple-400" />}
                {selectedCategory === 'How We Built It' && <Code2 className="w-6 h-6 text-purple-400" />}
                Featured {selectedCategory} Articles
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex space-x-2"
              >
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-[#2d2d42] transition-colors hover:shadow-md"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-[#2d2d42] transition-colors hover:shadow-md"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {filteredArticles.map((article, index) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-2">
                    <motion.div 
                      className="border border-[#3a3a57] rounded-xl overflow-hidden hover:shadow-xl transition-all bg-[#1e1e2e] h-full"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-48 bg-[#2d2d42] relative overflow-hidden">
                      <div className="relative h-48 w-full">
                    <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 object-cover opacity-80 w-full h-full"
                    />
                     </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1e1e2e] to-transparent"></div>
                        <div className="absolute top-4 left-4 bg-purple-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {article.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-sm text-gray-400">{article.date}</span>
                          <span className="text-sm text-gray-400">{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">{article.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">{article.readTime}</span>
                          <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1">
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {filteredArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-purple-500 w-6' : 'bg-[#3a3a57]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Content Sections */}
        <div className="bg-[#12121e] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <section className="md:col-span-3">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Latest Articles</h2>
                  <div className="relative">
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-[#2d2d42] border border-[#3a3a57] rounded-lg px-4 py-2 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => (
                    <motion.article 
                      key={article.id}
                      className="border border-[#3a3a57] rounded-xl overflow-hidden bg-[#1e1e2e] hover:shadow-lg transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-48 bg-[#2d2d42] relative overflow-hidden">
                      <div className="relative h-48 w-full">
                     <img
                     src={article.image}
                     alt={article.title}
                     className="absolute inset-0 object-cover opacity-80 w-full h-full"
                     />
                      </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1e1e2e] to-transparent"></div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs text-purple-400 font-medium">{article.category}</span>
                          <span className="text-xs text-gray-400">{article.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">{article.readTime}</span>
                          <button className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1">
                            Read More <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
                
                <div className="mt-10 flex justify-center">
                  <button className="px-6 py-3 rounded-full font-medium bg-[#2d2d42] text-gray-300 hover:bg-[#3a3a57] hover:text-white transition-all flex items-center gap-2 border border-[#3a3a57]">
                    Load More Articles
                  </button>
                </div>
              </section>

              <aside className="space-y-8">
                {/* <motion.div 
                  className="bg-[#1e1e2e] p-6 rounded-xl border border-[#3a3a57] sticky top-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-400" /> Newsletter
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Get the latest AI insights delivered straight to your inbox every week.
                  </p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full px-4 py-2 rounded bg-[#2d2d42] border border-[#3a3a57] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      required
                    />
                    <button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white py-2 px-4 rounded transition-all flex items-center justify-center gap-2"
                    >
                      Subscribe <Mail className="w-4 h-4" />
                    </button>
                  </form>
                  <p className="text-gray-400 text-xs mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </motion.div> */}

                <motion.div 
                  className="bg-[#1e1e2e] p-6 rounded-xl border border-[#3a3a57]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg mb-4">Popular Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <button 
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded transition-all flex items-center justify-between ${
                            selectedCategory === category
                              ? 'bg-purple-600/20 text-purple-400'
                              : 'hover:bg-[#2d2d42] text-gray-300'
                          }`}
                        >
                          <span>{category}</span>
                          <span className="text-xs bg-[#3a3a57] px-2 py-1 rounded-full">
                            {allArticles[category].length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-[#1e1e2e] p-6 rounded-xl border border-[#3a3a57]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-lg mb-4">Recently Published</h3>
                  <div className="space-y-4">
                    {latestArticles.map(article => (
                      <div key={article.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-16 h-16 bg-[#2d2d42] rounded-lg overflow-hidden relative">
                        <div className="relative h-48 w-full">
                        <img
                           src={article.image}
                           alt={article.title}
                           className="absolute inset-0 object-cover opacity-80 w-full h-full"
                        />
                        </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium line-clamp-2">{article.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{article.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-900/40 to-violet-900/40 py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Stay Updated with AI Advancements
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join our community of AI enthusiasts and professionals to receive curated content, research summaries, and exclusive insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg bg-[#1e1e2e] border border-[#3a3a57] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white py-3 px-6 rounded-lg transition-all font-medium"
              >
                Subscribe Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;