import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import AboutUsBackground from '@/images/image.png'; // Update this path to your image location
import { useEffect } from 'react';
import { Target, Eye, Brain, FlaskConical, Zap } from 'lucide-react'; // Importing necessary icons from lucide-react

// --- AnimatedNumber Component ---
// This component animates a number from 0 to its given value.
const AnimatedNumber = ({ value }) => {
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 20
  });
  const display = useTransform(spring, (current) => Math.round(current));
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  return <motion.span>{display}</motion.span>;
};

// --- Data for "Why Choose Us" Widgets ---
// Centralized data for easy management and dynamic rendering of the feature cards.
const whyChooseUsData = [
  {
    icon: Brain, // Lucide React icon for "Deep Domain Expertise"
    title: 'Deep Domain Expertise',
    description: 'Our team brings together experts in machine learning, deep learning, NLP, and computer vision with years of experience in enterprise solutions.',
  },
  {
    icon: FlaskConical, // Lucide React icon for "Research-Backed Solutions"
    title: 'Research-Backed Solutions',
    description: 'We stay at the cutting edge of AI research, translating the latest breakthroughs into practical applications for businesses.',
  },
  {
    icon: Zap, // Lucide React icon for "Agile Implementation"
    title: 'Agile Implementation',
    description: 'Our methodology ensures quick deployment of AI solutions that can grow and adapt with your business needs.',
  },
];

// --- About Component ---
const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white">
      <Navbar />
      <main className="flex-grow pt-20">

        {/* Hero Section with Image Background and Typewriter Effect */}
        <div className="relative py-32 overflow-hidden">
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
            <motion.p
              className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ingenix Innovations is India's leading AI solutions provider, focused on delivering cutting-edge technology to solve real-world business challenges.
            </motion.p>
          </div>
        </div>

        {/* Mission & Vision Section with Slide-in Animations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative bg-[#1a1a2e] rounded-xl p-8 h-full border border-gray-800 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#6E59A5]/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Target className="h-8 w-8 text-[#6E59A5] mr-3" />
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300">
                    To accelerate digital transformation by enabling enterprises to solve real-world challenges using artificial intelligence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5] rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
              <div className="relative bg-[#1a1a2e] rounded-xl p-8 h-full border border-gray-800 overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#8B5CF6]/10 rounded-full filter blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Eye className="h-8 w-8 text-[#8B5CF6] mr-3" />
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#6E59A5]">
                      Our Vision
                    </h2>
                  </div>
                  <p className="text-lg text-gray-300">
                    To be India's most trusted partner in AI-driven innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Animated Heading: "Accelerating the future through AI innovations" */}
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

        {/* Why Choose Us Section with Dynamic Widgets and Animations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            {/* Floating background elements for visual flair */}
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

              {/* Dynamic rendering of "Why Choose Us" widgets */}
              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUsData.map((item, index) => (
                  <motion.div
                    key={index}
                    // Initial slide-in animation (runs once when in view)
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30, // Added damping for a smoother entry spring
                      delay: index * 0.1 + 0.1,
                    }}
                    viewport={{ once: true }}

                    // Continuous "toggling" (vertical sway) for the entire card
                    // This animation will start AFTER the initial whileInView animation
                    animate={{
                      y: [0, -15, 0], // Sway up by 15px and back to original position
                      transition: {
                        y: {
                          duration: 3.5, // Total duration for one full sway cycle (3-4 seconds as requested)
                          repeat: Infinity, // Repeat indefinitely
                          repeatType: "mirror", // Animates forward then backward
                          ease: "easeInOut"
                        }
                      }
                    }}

                    // Pause and slightly lift on hover
                    // `whileHover` takes precedence, interrupting `animate`
                    whileHover={{
                      y: -5 // Lifts the card slightly up on hover
                    }}
                    // Transition for the hover effect (smooth lift/return)
                    transition={{
                      y: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }
                    }}
                    // whileTap={{ scale: 0.98 }} // Re-add if you still want a tap effect (will combine with other transitions)
                    className="relative bg-[#1a1a2e] p-8 rounded-xl border border-gray-800 shadow-lg hover:shadow-[#6E59A5]/20 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6E59A5]/0 via-[#6E59A5]/5 to-[#6E59A5]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-[#6E59A5] to-[#8B5CF6] flex items-center justify-center">
                        {/* Wrapper for the icon to apply toggling animation */}
                        <motion.div
                          initial={{ scale: 1, rotate: 0 }}
                          whileInView={{
                            scale: [1, 1.2, 1], // More pronounced pulse
                            rotate: [0, 3, -3, 0], // Subtle wobble
                            transition: {
                              scale: {
                                duration: 1.2,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                                delay: index * 0.1 + 0.5
                              },
                              rotate: {
                                duration: 2.5,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                                delay: index * 0.1 + 0.5
                              }
                            }
                          }}
                          viewport={{ once: true }}
                        >
                          <item.icon className="h-8 w-8 text-white" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats Section with Animated Numbers */}
              <div className="mt-20 grid md:grid-cols-3 gap-8">
                {/* Successful Projects Stat */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-2">
                    <AnimatedNumber value={50} />+
                  </div>
                  <div className="text-gray-400">Successful Projects</div>
                </motion.div>
                {/* Happy Clients Stat */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-2">
                    <AnimatedNumber value={30} />+
                  </div>
                  <div className="text-gray-400">Happy Clients</div>
                </motion.div>
                {/* Industry Awards Stat */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-2">
                    <AnimatedNumber value={15} />+
                  </div>
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