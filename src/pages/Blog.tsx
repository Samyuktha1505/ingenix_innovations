import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const articles = [
    {
      date: 'May 20, 2025',
      title: 'NVIDIA 800 V HVDC Architecture Will Power the Next Generation of AI',
      excerpt: 'The exponential growth of AI workloads is increasing data center power demands. Traditional 54 V architectures are being replaced with more efficient 800 V systems.',
      readTime: '8 MIN READ',
      category: 'AI Infrastructure'
    },
    {
      date: 'Nov 7, 2024',
      title: 'Building Custom Robot Simulations with Wandelbots NOVA',
      excerpt: 'Programming robots for real-world success requires training processes that account for unpredictable environments through advanced simulation techniques.',
      readTime: '7 MIN READ',
      category: 'Robotics'
    },
    {
      date: 'May 23, 2025',
      title: 'Blackwell Breaks the 1,000 TPS/User Barrier With Meta\'s Llama 4',
      excerpt: 'NVIDIA achieves world-record LLM inference speeds, enabling unprecedented throughput for enterprise AI applications.',
      readTime: '9 MIN READ',
      category: 'AI Performance'
    },
    {
      date: 'May 23, 2025',
      title: 'Stream Smarter: NVIDIA NeMo Guardrails Enhance AI Safety',
      excerpt: 'LLM streaming delivers responses incrementally while maintaining safety guardrails for enterprise deployment.',
      readTime: '8 MIN READ',
      category: 'AI Safety'
    }
  ];

  const categories = ['All', ...new Set(articles.map(article => article.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const taglines = [
    "AI Innovation",
    "Technical Insights", 
    "Industry Trends",
    "Research Breakthroughs"
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

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
    const slideInterval = setInterval(nextSlide, 5000);
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex(prev => (prev + 1) % taglines.length);
    }, 3000);
    return () => {
      clearInterval(slideInterval);
      clearInterval(taglineInterval);
    };
  }, [currentSlide, filteredArticles.length]);

  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#12121e] to-[#1a1a2e] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Blog & Insights</h1>
            
            <div className="h-20 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTaglineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl text-purple-400"
                >
                  {taglines[currentTaglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, insights, and use cases from our experts.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-[#1a1a2e] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentSlide(0);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-[#2d2d42] text-gray-300 hover:bg-[#3a3a57]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Articles Slider */}
        <div className="bg-gradient-to-b from-[#1a1a2e] to-[#12121e] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {selectedCategory === 'All' ? 'Featured Articles' : selectedCategory}
              </h2>
              <div className="flex space-x-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-[#2d2d42] transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-[#2d2d42] transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {filteredArticles.map((article, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div 
                      className="border border-[#3a3a57] rounded-xl p-6 hover:shadow-lg transition-all bg-[#1e1e2e]"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-purple-400">{article.category}</span>
                        <span className="text-sm text-gray-400">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                      <p className="text-gray-300 mb-4">{article.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{article.readTime}</span>
                        <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                          Read More →
                        </button>
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-purple-500' : 'bg-[#3a3a57]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Blog Content Sections */}
        <div className="bg-[#12121e] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <section className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                <div className="space-y-6">
                  {articles.map((article, index) => (
                    <motion.article 
                      key={index}
                      className="border-b border-[#3a3a57] pb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-sm text-purple-400">{article.category}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">{article.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{article.date} · {article.readTime}</p>
                      <p className="text-gray-300 mb-4">{article.excerpt}</p>
                      <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                        Continue Reading →
                      </button>
                    </motion.article>
                  ))}
                </div>
              </section>

              <aside className="space-y-8">
                <div className="bg-[#1e1e2e] p-6 rounded-xl border border-[#3a3a57]">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <button 
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded transition-colors ${
                            selectedCategory === category
                              ? 'bg-purple-600/20 text-purple-400'
                              : 'hover:bg-[#2d2d42] text-gray-300'
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#1e1e2e] p-6 rounded-xl border border-[#3a3a57]">
                  <h3 className="font-bold text-lg mb-4">Subscribe</h3>
                  <p className="text-gray-300 mb-4">Get the latest articles delivered to your inbox</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full px-4 py-2 rounded bg-[#2d2d42] border border-[#3a3a57] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button 
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;