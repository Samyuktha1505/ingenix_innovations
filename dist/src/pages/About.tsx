import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import AboutUsBackground from '@/images/image.png'; // Update this path to your image location

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section with Image Background */}
        <div className="relative py-32 overflow-hidden">
          {/* Image Background with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={AboutUsBackground} 
              alt="About Us Background"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12121e] via-[#12121e]/90 to-[#12121e]/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#12121e]/80 to-[#12121e]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">Us</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ingenix Innovations is India's leading AI solutions provider, focused on delivering cutting-edge technology to solve real-world business challenges.
            </motion.p>
            
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
            
            </motion.div>
            

<motion.h1
  className="text-4xl md:text-6xl font-bold mb-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Typewriter
    words={['About Us', 'Who We Are', 'Ingenix Innovations']}
    loop={0}
    cursor
    cursorStyle='_'
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</motion.h1>
          </div>
        </div>

        {/* Mission & Vision Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Mission Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative bg-[#1a1a2e] rounded-xl p-8 h-full border border-gray-800 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#6E59A5]/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-[#6E59A5] mr-3"></div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300">
                    To accelerate digital transformation by enabling enterprises to solve real-world challenges using artificial intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative bg-[#1a1a2e] rounded-xl p-8 h-full border border-gray-800 overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#8B5CF6]/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-[#8B5CF6] mr-3"></div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5]">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300">
                    To be India's most trusted partner in AI-driven innovation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Heading */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5
                }
              }}
              viewport={{ once: true }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] via-[#8B5CF6] to-[#6E59A5] animate-text-shine">
                Accelerating the future through AI innovations
              </span>
            </motion.h2>
            <motion.div
              className="mx-auto h-1 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>

        

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            {/* Floating elements in background */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#6E59A5]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#8B5CF6]/10 rounded-full filter blur-3xl"></div>
            
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
                    Why Choose Ingenix
                  </span>
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  We combine cutting-edge technology with deep industry expertise to deliver transformative AI solutions.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-[#1a1a2e] p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-[#6E59A5]/20 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6E59A5]/0 via-[#6E59A5]/5 to-[#6E59A5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[#6E59A5] to-[#8B5CF6] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Deep Domain Expertise</h3>
                    <p className="text-gray-400">
                      Our team brings together experts in machine learning, deep learning, NLP, and computer vision with years of experience in enterprise solutions.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  className="relative bg-[#1a1a2e] p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-[#6E59A5]/20 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6E59A5]/0 via-[#6E59A5]/5 to-[#6E59A5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[#6E59A5] to-[#8B5CF6] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Research-Backed Solutions</h3>
                    <p className="text-gray-400">
                      We stay at the cutting edge of AI research, translating the latest breakthroughs into practical applications for businesses.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  className="relative bg-[#1a1a2e] p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-[#6E59A5]/20 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6E59A5]/0 via-[#6E59A5]/5 to-[#6E59A5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[#6E59A5] to-[#8B5CF6] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Agile Implementation</h3>
                    <p className="text-gray-400">
                      Our methodology ensures quick deployment of AI solutions that can grow and adapt with your business needs.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Stats Section */}
              <div className="mt-20 grid md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-2">50+</div>
                  <div className="text-gray-400">Successful Projects</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-2">30+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-2">15+</div>
                  <div className="text-gray-400">Industry Awards</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

