import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicTagline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const taglines = [
    "AI Innovation",
    "Smart Automation", 
    "Intelligent Solutions",
    "Digital Transformation",
    "Future Technology"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 flex items-center justify-center">
      <span className="invisible absolute">Digital Transformation</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: -90 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] inline-block pb-2 text-2xl font-bold"
          style={{ transformOrigin: "center center" }}
        >
          {taglines[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const articles = [
    {
      date: 'May 20, 2025',
      title: 'NVIDIA 800 V HVDC Architecture Will Power the Next Generation of...',
      excerpt: 'The exponential growth of AI workloads is increasing data center power demands. Traditional 54 V L.',
      readTime: '8 MIN READ'
    },
    {
      date: 'Nov 7, 2024',
      title: 'Building Custom Robot Simulations with Wandelbots NOVA and...',
      excerpt: 'Programming robots for real-world success requires a training process that accounts for unpredictable...',
      readTime: '7 MIN READ'
    },
    {
      date: 'May 23, 2025',
      title: 'Blackwell Breaks the 1,000 TPS/User Barrier With Meta\'s Llama 4...',
      excerpt: 'NVIDIA has achieved a world-record large language model (LLM) inference speed. A single NVIDIA...',
      readTime: '9 MIN READ'
    },
    {
      date: 'May 23, 2025',
      title: 'Stream Smarter and Safer: Learn how NVIDIA NeMo Guardrails Enhance...',
      excerpt: 'LLM Streaming sends a model\'s response incrementally in real time, token by token, as it\'s being...',
      readTime: '8 MIN READ'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-ingenix-accent/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Blog & Insights</h1>
            <DynamicTagline />
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, insights, and use cases from our experts.
            </p>
          </div>
        </div>
        
        {/* Recommended For You Slider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
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
              {articles.map((article, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white">
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <p className="text-sm text-gray-500">{article.readTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-ingenix-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Blog Content Placeholder */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog coming soon</h2>
          <p className="text-gray-700">
            The Blog section will be developed with content types including:
          </p>
          <ul className="mt-6 space-y-2 text-ingenix-primary">
            <li>AI trends and innovations</li>
            <li>In-depth technical explainers</li>
            <li>Use case breakdowns</li>
            <li>Thought leadership articles</li>
            <li>"How we built it" for internal projects</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;