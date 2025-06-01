import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronLeft, ChevronRight, ArrowRight, Mail, BookOpen, Cpu, Lightbulb, Code2, ChevronDown, Brain, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react'; // Import useRef
import { motion, AnimatePresence } from 'framer-motion';
import bg7 from '@/assets/bg10.png'; // Ensure this path is correct for your project structure
import { Link } from 'react-router-dom';
import blog2 from '@/assets/blog2.png';
import img3 from '@/assets/img3.png';
import blogs4 from '@/assets/blogs4.png';
import blogs5 from '@/assets/blogs5.png';
import blogs6 from '@/assets/blogs6.png';
import blogs7 from '@/assets/blogs7.png';
import blogs8 from '@/assets/blogs8.png';
import blogs1 from '@/assets/blogs_1.1.png';    
import blogs2_5 from '@/assets/blogs2_5.png';
import blogs2_4 from '@/assets/blogs2_4.png';
import blogs2_3 from '@/assets/blogs2_3.png';
import blogs3_1 from '@/assets/blogs3_1.png';
import blogs3_2 from '@/assets/blogs3_2.png';
import blogs3_3 from '@/assets/blogs3_3.png';
import blogs3_4 from '@/assets/blogs3_4.png';
import blogs4_1 from '@/assets/blogs4_1.png';
import blogs4_2 from '@/assets/blogs4_2.png';
import blogs4_3 from '@/assets/blogs4_3.png';
import blogs4_4 from '@/assets/blogs4_4.png';
import blogs5_1 from '@/assets/blogs5_1.png';
import blogs5_2 from '@/assets/blogs5_2.png';
import blogs5_3 from '@/assets/blogs5_3.png';
import blogs5_4 from '@/assets/blogs5_4.png';


const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [openArticle, setOpenArticle] = useState(null); // Modal state
  const [articlesToShow, setArticlesToShow] = useState(6); // State for "Load More" functionality

  // All articles organized by category
  // IMPORTANT: You need to add 'fullContent' for each article for the modal to display it.
  // I've added an example for the first article.
  const allArticles = {
    'AI Trends': [
      {
        id: 1,
        date: 'May 20, 2025',
        title: 'NVIDIA 800 V HVDC Architecture Will Power the Next Generation of AI',
        excerpt: 'The exponential growth of AI workloads is increasing data center power demands. Traditional 54 V architectures are being replaced with more efficient 800 V systems.',
        fullContent: `
          <p>The demand for computational power in AI data centers is skyrocketing, driving innovations in every layer of the infrastructure stack. One of the most significant shifts on the horizon is the move towards higher voltage architectures, specifically 800 V High Voltage Direct Current (HVDC) systems, which NVIDIA is championing.</p>
          <p>Traditionally, data centers have relied on 54 V power delivery. While effective for previous generations of hardware, the sheer scale and power consumption of modern AI accelerators like NVIDIA's Blackwell and subsequent architectures make lower voltages increasingly inefficient. Higher currents lead to greater resistive losses (I²R losses) in power distribution, translating to wasted energy and increased cooling requirements.</p>
          <h3>Why 800 V HVDC?</h3>
          <ul>
            <li><strong>Increased Efficiency:</strong> By stepping up the voltage, the current required to deliver the same power is significantly reduced. This directly lowers I²R losses, leading to more power reaching the GPUs and less dissipated as heat.</li>
            <li><strong>Reduced Cabling Requirements:</strong> Lower currents mean thinner, lighter, and less expensive cabling can be used, simplifying infrastructure deployment and reducing material costs.</li>
            <li><strong>Enhanced Power Density:</strong> Higher efficiency allows for more computing power to be packed into the same physical footprint, maximizing the utilization of valuable data center space.</li>
            <li><strong>Scalability:</strong> The 800 V architecture is designed to be more scalable for future generations of AI hardware, which are expected to consume even more power per rack.</li>
          </ul>
          <p>NVIDIA's focus on an end-to-end 800 V HVDC solution from the power distribution unit (PDU) to the chip itself ensures optimal power delivery and minimal conversion losses. This integrated approach is critical for hyperscale AI deployments where every watt counts.</p>
          <p>This transition will require significant investment in new power supply units, busbars, and internal server components designed to handle the higher voltage. However, the long-term benefits in terms of operational efficiency, cost savings, and the ability to scale AI compute resources are compelling. Data centers built on this new architecture will be more environmentally friendly and economically viable for the demanding AI workloads of tomorrow.</p>
        `,
        readTime: '8 MIN READ',
        category: 'AI Trends',
        image: blog2
      },
      {
        id: 2,
        date: 'June 5, 2025',
        title: 'The Rise of Multimodal Foundation Models in 2025',
        excerpt: 'How combining vision, language, and audio modalities is creating more versatile AI systems that understand context like ever before.',
        fullContent: 'Full content for The Rise of Multimodal Foundation Models...',
        readTime: '6 MIN READ',
        category: 'AI Trends',
        image: img3
      },
      {
        id: 3,
        date: 'June 12, 2025',
        title: 'Edge AI: Bringing Intelligence to IoT Devices',
        excerpt: 'The latest breakthroughs in tinyML are enabling powerful AI models to run on microcontrollers with less than 1MB of memory.',
        fullContent: 'Full content for Edge AI...',
        readTime: '7 MIN READ',
        category: 'AI Trends',
        image: blogs4
      },
      {
        id: 4,
        date: 'June 18, 2025',
        title: 'Generative AI in Creative Industries: Beyond Hype',
        excerpt: 'How studios and agencies are actually implementing generative tools in their workflows, with measurable productivity gains.',
        fullContent: 'Full content for Generative AI in Creative Industries...',
        readTime: '9 MIN READ',
        category: 'AI Trends',
        image: blogs5
      },
      {
        id: 21,
        date: 'July 1, 2025',
        title: 'The Future of AI in Healthcare',
        excerpt: 'Exploring how AI is revolutionizing diagnostics, drug discovery, and personalized medicine.',
        fullContent: 'Full content for The Future of AI in Healthcare...',
        readTime: '10 MIN READ',
        category: 'AI Trends',
        image: blogs6 // Assuming you have more images
      },
      {
        id: 22,
        date: 'July 8, 2025',
        title: 'Quantum Computing Meets AI: A New Frontier',
        excerpt: 'How quantum algorithms could supercharge machine learning in the coming decades.',
        fullContent: 'Full content for Quantum Computing Meets AI...',
        readTime: '11 MIN READ',
        category: 'AI Trends',
        image: blogs7
      },
      {
        id: 23,
        date: 'July 15, 2025',
        title: 'AI Ethics and Governance: Navigating the Complexities',
        excerpt: 'Discussing the frameworks and policies needed to ensure responsible AI development and deployment.',
        fullContent: 'Full content for AI Ethics and Governance...',
        readTime: '9 MIN READ',
        category: 'AI Trends',
        image: blogs8
      }
    ],
    'Technical Explainers': [
      {
        id: 5,
        date: 'May 23, 2025',
        title: 'Understanding Mixture of Experts Architecture',
        excerpt: 'Deep dive into how MoE models like Google\'s Switch Transformer achieve better performance with lower compute costs.',
        fullContent: 'Full content for Understanding Mixture of Experts...',
        readTime: '12 MIN READ',
        category: 'Technical Explainers',
        image: blogs1
      },
      {
        id: 6,
        date: 'May 28, 2025',
        title: 'The Math Behind Diffusion Models',
        excerpt: 'From stochastic differential equations to practical implementations, we break down the theory powering image generation models.',
        fullContent: 'Full content for The Math Behind Diffusion Models...',
        readTime: '15 MIN READ',
        category: 'Technical Explainers',
        image: blogs2_5
      },
      {
        id: 7,
        date: 'June 3, 2025',
        title: 'Optimizing Transformer Inference: Key Techniques',
        excerpt: 'Practical guide to reducing latency and memory usage for production LLM deployments.',
        fullContent: 'Full content for Optimizing Transformer Inference...',
        readTime: '10 MIN READ',
        category: 'Technical Explainers',
        image: blogs2_4
      },
      {
        id: 8,
        date: 'June 10, 2025',
        title: 'Quantization: From FP32 to INT4 Without Losing Accuracy',
        excerpt: 'Comprehensive look at modern quantization approaches that maintain model quality while drastically reducing size.',
        fullContent: 'Full content for Quantization...',
        readTime: '11 MIN READ',
        category: 'Technical Explainers',
        image: blogs2_3
      }
    ],
    'Use Cases': [
      {
        id: 9,
        date: 'May 25, 2025',
        title: 'AI-Powered Drug Discovery at AstraZeneca',
        excerpt: 'Case study on how machine learning accelerated their small molecule discovery pipeline by 40%.',
        fullContent: 'Full content for AI-Powered Drug Discovery...',
        readTime: '8 MIN READ',
        category: 'Use Cases',
        image: blogs3_1
      },
      {
        id: 10,
        date: 'May 30, 2025',
        title: 'Automating Financial Reporting with LLMs',
        excerpt: 'How JP Morgan reduced quarterly report preparation time from 2 weeks to 3 days.',
        fullContent: 'Full content for Automating Financial Reporting...',
        readTime: '7 MIN READ',
        category: 'Use Cases',
        image: blogs3_2
      },
      {
        id: 11,
        date: 'June 7, 2025',
        title: 'Computer Vision in Precision Agriculture',
        excerpt: 'Monitoring crop health and predicting yields with drone imagery and deep learning.',
        fullContent: 'Full content for Computer Vision in Precision Agriculture...',
        readTime: '9 MIN READ',
        category: 'Use Cases',
        image: blogs3_3
      },
      {
        id: 12,
        date: 'June 15, 2025',
        title: 'AI for Personalized Education',
        excerpt: 'How Khan Academy\'s AI tutor adapts to individual learning styles in real-time.',
        fullContent: 'Full content for AI for Personalized Education...',
        readTime: '10 MIN READ',
        category: 'Use Cases',
        image: blogs3_4
      }
    ],
    'Thought Leadership': [
      {
        id: 13,
        date: 'May 27, 2025',
        title: 'The Ethical Imperative of Explainable AI',
        excerpt: 'Why interpretability isn\'t just nice-to-have but essential for responsible deployment.',
        fullContent: 'Full content for The Ethical Imperative...',
        readTime: '8 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_1
      },
      {
        id: 14,
        date: 'June 1, 2025',
        title: 'Preparing for Artificial General Intelligence',
        excerpt: 'A framework for gradual, safe development of more capable AI systems.',
        fullContent: 'Full content for Preparing for AGI...',
        readTime: '12 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_2
      },
      {
        id: 15,
        date: 'June 8, 2025',
        title: 'The Future of Human-AI Collaboration',
        excerpt: 'Moving beyond tools to true partners: how AI will augment human capabilities.',
        fullContent: 'Full content for The Future of Human-AI Collaboration...',
        readTime: '9 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_3
      },
      {
        id: 16,
        date: 'June 17, 2025',
        title: 'Regulating AI Without Stifling Innovation',
        excerpt: 'A balanced approach to governance that protects society while allowing progress.',
        fullContent: 'Full content for Regulating AI...',
        readTime: '10 MIN READ',
        category: 'Thought Leadership',
        image: blogs4_4
      }
    ],
    'How We Built It': [
      {
        id: 17,
        date: 'May 29, 2025',
        title: 'Building Our Real-Time Video Analysis Pipeline',
        excerpt: 'Architecture deep dive into our distributed system processing 1K+ video streams daily.',
        fullContent: 'Full content for Building Our Real-Time Video Analysis Pipeline...',
        readTime: '14 MIN READ',
        category: 'How We Built It',
        image: blogs5_1
      },
      {
        id: 18,
        date: 'June 4, 2025',
        title: 'Scaling Our Recommendation System to 10K+ Users',
        excerpt: 'Lessons learned from evolving our architecture to handle exponential growth.',
        fullContent: 'Full content for Scaling Our Recommendation System...',
        readTime: '11 MIN READ',
        category: 'How We Built It',
        image: blogs5_2
      },
      {
        id: 19,
        date: 'June 9, 2025',
        title: 'Migrating Our ML Platform to Kubernetes',
        excerpt: 'The good, the bad, and the ugly of containerizing our machine learning workloads.',
        fullContent: 'Full content for Migrating Our ML Platform...',
        readTime: '13 MIN READ',
        category: 'How We Built It',
        image: blogs5_3
      },
      {
        id: 20,
        date: 'June 20, 2025',
        title: 'Implementing Continuous Training for Our Fraud Detection Models',
        excerpt: 'How we reduced false positives by 30% with automated model retraining.',
        fullContent: 'Full content for Implementing Continuous Training...',
        readTime: '10 MIN READ',
        category: 'How We Built It',
        image: blogs5_4
      }
    ]
  };

  const categories = Object.keys(allArticles);
  const [selectedCategory, setSelectedCategory] = useState('AI Trends'); // Default to AI Trends
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  // Expanded taglines for the hero section
  const taglines = [
    "Unleash the Power of AI: Deep Dive into the Future.",
    "Mastering Machine Learning: Technical Explainers & Practical Insights.",
    "Real-World AI: Discover Transformative Use Cases & Solutions.",
    "Shaping Tomorrow: Thought Leadership in Artificial Intelligence.",
    "Engineered for Excellence: Behind the Scenes of Our AI Innovations."
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
    const slideInterval = setInterval(nextSlide, 8000); // Rotate featured articles
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex(prev => (prev + 1) % taglines.length);
    }, 3500); // Rotate taglines
    return () => {
      clearInterval(slideInterval);
      clearInterval(taglineInterval);
    };
  }, [currentSlide, filteredArticles.length, taglines.length]);

  // Get 3 latest articles from all categories for the sidebar
  const latestArticles = Object.values(allArticles)
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Effect to reset articlesToShow when category changes
  useEffect(() => {
    setArticlesToShow(6); // Reset to initial 6 articles when category changes
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a12] text-white">
      <Navbar />

      <main className="flex-grow pt-16"> {/* Adjust pt- to account for fixed navbar height */}

        {/* Hero Section */}
        <div className="relative py-24 overflow-hidden">
  {/* Background with smoother gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#12121e] to-[#1a1a2e]"></div>
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
              className="text-5xl md:text-6xl font-bold pb-3 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-400"
            >
              AI Insights Hub
            </motion.h1>
            <div className="h-24 flex items-center justify-center"> {/* Increased height for more tagline space */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTaglineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-purple-400 font-extrabold max-w-2xl mx-auto"
                >
                  {taglines[currentTaglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed mt-4"
            >
              Dive deep into expert analysis on cutting-edge artificial intelligence technologies, real-world applications, and their transformative impact on businesses and society.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              {/* Primary Call to Action - Scrolls to latest articles */}
              <button
                onClick={() => {
                  document.getElementById('latest-articles-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-lg shadow-purple-500/40 hover:from-purple-700 hover:to-violet-600 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Explore Insights <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Featured Articles Slider */}
        <section id="featured-section" className="bg-gradient-to-b from-[#1a1a2e] via-[#161627] to-[#12121e] py-16 relative overflow-hidden">          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-[length:300px_300px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex justify-between items-center mb-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-purple-300"
              >
                {/* Icons based on selected category for Featured section */}
                {selectedCategory === 'AI Trends' && <Lightbulb className="w-7 h-7 text-purple-400" />}
                {selectedCategory === 'Technical Explainers' && <Cpu className="w-7 h-7 text-purple-400" />}
                {selectedCategory === 'Use Cases' && <BookOpen className="w-7 h-7 text-purple-400" />}
                {selectedCategory === 'Thought Leadership' && <Brain className="w-7 h-7 text-purple-400" />}
                {selectedCategory === 'How We Built It' && <Settings className="w-7 h-7 text-purple-400" />}
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
                  className="p-3 rounded-full hover:bg-[#2d2d42] transition-colors hover:shadow-md"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full hover:bg-[#2d2d42] transition-colors hover:shadow-md"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
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
                {filteredArticles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-2">
                    <motion.div
                      className="border border-[#3a3a57] rounded-xl overflow-hidden hover:shadow-xl transition-all bg-[#1e1e2e] h-full relative group"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="h-48 bg-[#2d2d42] relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          // Consider using Next.js <Image> component for optimization:
                          // import Image from 'next/image'; <Image src={article.image} ... />
                          className="absolute inset-0 object-cover w-full h-full opacity-80 transform transition-transform duration-300 group-hover:scale-105"
                        />
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
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2 text-purple-200">{article.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">{article.readTime}</span>
                          <button
                            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                            onClick={() => setOpenArticle(article)}
                          >
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
              <section className="md:col-span-3" id="latest-articles-section">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-300">Latest Articles</h2>
                  {/* Category selection is now handled by Navbar, so removed the select dropdown here */}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.slice(0, articlesToShow).map((article, index) => (
                    <motion.article
                      key={article.id}
                      className="border border-[#3a3a57] rounded-xl overflow-hidden bg-[#1e1e2e] hover:shadow-lg transition-all relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <div className="h-48 bg-[#2d2d42] relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="absolute inset-0 object-cover w-full h-full opacity-80 transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1e1e2e] to-transparent"></div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs text-purple-400 font-medium">{article.category}</span>
                          <span className="text-xs text-gray-400">{article.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-purple-200">{article.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-400">{article.readTime}</span>
                          <button
                            className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                            onClick={() => setOpenArticle(article)}
                          >
                            Read More <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
                {articlesToShow < filteredArticles.length && (
                  <div className="mt-10 flex justify-center">
                    <button
                      onClick={() => setArticlesToShow(prev => prev + 6)}
                      className="px-8 py-4 rounded-full font-medium bg-gradient-to-r from-purple-600 to-violet-500 text-white hover:from-purple-700 hover:to-violet-600 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Load More Articles <ChevronDown className="w-4 h-4" /> {/* Changed icon to ChevronDown */}
                    </button>
                  </div>
                )}
              </section>
              <aside className="space-y-10">
                <motion.div
                  className="bg-[#1e1e2e] p-8 rounded-2xl border border-[#3a3a57] shadow-xl sticky top-24" // Made sticky
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl md:text-2xl mb-6 text-purple-300 flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-purple-400" /> Popular Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map(category => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between text-base md:text-lg
                            ${selectedCategory === category
                              ? 'bg-purple-600/30 text-purple-300 font-semibold'
                              : 'hover:bg-[#2d2d42] text-gray-200'
                            }`}
                        >
                          <span>{category}</span>
                          <span className="text-sm bg-[#4a4a67] px-3 py-1 rounded-full text-gray-300">
                            {allArticles[category].length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="bg-[#1e1e2e] p-8 rounded-2xl border border-[#3a3a57] shadow-xl sticky top-[calc(24px_+_300px)]" // Adjust top for sticky behavior, assuming 300px height for first sticky
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl md:text-2xl mb-6 text-purple-300 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-purple-400" /> Recently Published
                  </h3>
                  <div className="space-y-6">
                    {latestArticles.map(article => (
                      <div key={article.id} className="flex gap-4 items-start group">
                        <div className="flex-shrink-0 w-20 h-20 bg-[#2d2d42] rounded-xl overflow-hidden relative border border-[#3a3a57]">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="text-base font-medium line-clamp-2 text-purple-200 group-hover:text-purple-300 transition-colors">{article.title}</h4>
                          <p className="text-sm text-gray-400 mt-1">{article.date}</p>
                          <button
                            className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 mt-2"
                            onClick={() => setOpenArticle(article)}
                          >
                            Read <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </div>

        {/* Modal for "Read More" */}
        <AnimatePresence>
          {openArticle && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenArticle(null)}
            >
              <motion.div
                className="bg-[#1e1e2e] rounded-2xl shadow-2xl border border-[#3a3a57] max-w-3xl w-full mx-auto p-8 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
                initial={{ scale: 0.95, y: 40 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-purple-400 text-3xl font-bold z-10"
                  onClick={() => setOpenArticle(null)}
                  aria-label="Close"
                >
                  &times;
                </button>
                <img
                  src={openArticle.image}
                  alt={openArticle.title}
                  className="rounded-xl w-full h-64 object-cover mb-6 border border-[#3a3a57]"
                />
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <span className="text-sm bg-purple-600/90 text-white px-4 py-2 rounded-full font-medium">{openArticle.category}</span>
                  <span className="text-sm text-gray-400">{openArticle.date} • {openArticle.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-200">{openArticle.title}</h2>
                {/*
                  IMPORTANT: openArticle.fullContent is where your full article text should be.
                  Ensure it's populated in your allArticles data.
                  Use dangerouslySetInnerHTML with caution and only with trusted content.
                */}
                <div
                  className="text-gray-300 text-base leading-relaxed space-y-4 prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: openArticle.fullContent }}
                />
                {/* You might want to style the 'prose' class from @tailwindcss/typography plugin for better content formatting */}
                <div className="mt-8 pt-6 border-t border-[#3a3a57] text-center">
                  <p className="text-gray-400 text-lg mb-3">Found this insightful? Share it!</p>
                  {/* Add social sharing icons here (e.g., Twitter, LinkedIn) */}
                  <div className="flex justify-center gap-4">
                    {/* Example placeholder for sharing icons */}
                    <button className="p-3 rounded-full bg-[#2d2d42] hover:bg-[#3a3a57] transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.55-298.55 298.55-59.452 0-114.68-17.219-161.17-47.106 8.447.974 16.568 1.299 25.34 1.299 49.025 0 94.521-16.558 130.165-44.207-46.32-.975-89.309-31.103-103.149-72.731 6.798.974 12.93 1.624 19.812 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.217 12.67 47.436 13.319-28.913-19.277-47.925-51.88-47.925-88.638 0-19.546 5.199-38.127 14.167-54.01 51.072 62.24 127.476 103.573 213.074 109.998-2.618-13.928-4.24-28.697-4.24-43.645 0-105.828 85.987-191.816 191.816-191.816 55.469 0 105.626 23.235 140.347 60.177 15.118-2.903 29.794-8.672 43.165-16.039-4.78 15.892-15.013 29.288-29.073 37.882 13.465-1.956 26.66-4.925 39.317-10.793-9.988 16.059-22.339 29.883-36.878 41.157z"></path></svg></button>
                    <button className="p-3 rounded-full bg-[#2d2d42] hover:bg-[#3a3a57] transition-colors"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zM132.8 384H80V176h52.8zm-.8-208.8c-15.6 0-28.3-12.7-28.3-28.3 0-15.6 12.7-28.3 28.3-28.3 15.6 0 28.3 12.7 28.3 28.3 0 15.6-12.7 28.3-28.3 28.3zm204 208.8h-52.8V290c0-26.4-9.3-44.6-33.1-44.6-18.1 0-28.8 12.1-33.6 23.9-1.7 4.2-2.2 10-2.2 15.9v99.7h-52.8s.7-133 0-147.2h52.8v22.8c-2.3-10.1-4.7-16.4-4.7-16.4l-.3.3-33.6-23.9c-24.8-17.6-61.9-20.7-77.9-2.7-10.4 11.6-14.7 27.2-14.7 42.9 0 79.4 0 119.5 0 119.5z"></path></svg></button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-800/60 to-violet-800/60 py-20 relative overflow-hidden rounded-xl mx-auto max-w-6xl mt-16 shadow-2xl mb-16">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:60px_60px]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              Never Miss an AI Breakthrough.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-200 mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
            >
              Subscribe to our newsletter for exclusive articles, cutting-edge research summaries, and expert insights delivered directly to your inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
            >
             <Link to="/contact"> 
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white py-3 px-8 rounded-xl transition-all font-bold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Subscribe Now <Mail className="w-5 h-5" />
              </button></Link> 
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;