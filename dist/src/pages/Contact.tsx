import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import impImage from '@/images/imp.png';

const Toast = ({ title, description, type, onClose }) => {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white ${bgColor} z-50`}>
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <button onClick={onClose} className="absolute top-1 right-2 text-white text-lg">&times;</button>
    </div>
  );
};

const Contact = () => {
  const { toast, toastState, setToastState } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    purpose: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/sales@ingenixinnovations.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: 'Message sent!',
        description: 'Your inquiry has been sent to our team at sales@ingenixinnovations.com',
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        purpose: 'General Inquiry',
        message: ''
      });
      form.reset();
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong. Try again later.', type: 'error' });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#12121e] text-white font-inter">
      <Navbar />
      <main className="flex-grow pt-20 relative overflow-hidden">
        {/* Hero Section */}
        <div className="py-20 relative z-10 overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${impImage})`,
              opacity: 0.15,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5 }}
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6]">Us</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to transform your business with AI? Get in touch with our team of experts.
            </motion.p>
            <motion.div
              className="mt-10 mx-auto max-w-xl bg-[#1a1a2e] rounded-2xl border border-[#2c2c45] px-10 py-6 text-center shadow-xl hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl text-[#8B5CF6] mb-2 opacity-30">❝</div>
              <p className="text-lg text-gray-200 italic">"Try the Future"</p>
              <p className="text-sm text-gray-400">by Ingenix Innovations</p>
            </motion.div>
          </div>
        </div>

        {/* Main Content - Form and Contact Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://ingenixinnovations.com/thankyou" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  />
                </div>
                <div>
                  <label htmlFor="purpose" className="block text-sm font-medium text-gray-300 mb-1">Purpose</label>
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  >
                    <option>General Inquiry</option>
                    <option>Sales</option>
                    <option>Partnership</option>
                    <option>Media</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-[#1a1a2e] border border-gray-700 rounded-md text-white focus:ring-[#6E59A5] focus:border-[#6E59A5]"
                  ></textarea>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6E59A5] rounded-md"
                  >
                    {isSubmitting ? 'Sending...' : "Let's Collaborate"}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6E59A5] to-[#8B5CF6] mb-6">Connect With Us</h2>
              <div className="bg-[#1a1a2e] p-8 rounded-lg border border-gray-800 shadow-lg space-y-6">
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <Mail className="text-[#8B5CF6] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-gray-300">sales@ingenixinnovations.com</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <Phone className="text-[#8B5CF6] mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-gray-300">+91 (123) 456-7890</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <div className="text-[#8B5CF6] mr-4 mt-1">📍</div>
                  <div>
                    <h3 className="font-medium text-white">Office</h3>
                    <p className="text-gray-300">
                      Leela Palace Road,<br />
                      Bangalore, Karnataka 560008,<br />
                      India
                    </p>
                  </div>
                </motion.div>

                <div>
                  <h3 className="font-medium text-white mb-3">Social Media</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="bg-[#1D1D35] p-3 rounded-full text-[#8B5CF6] hover:bg-[#6E59A5] hover:text-white" 
                      whileHover={{ scale: 1.1 }}
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-[#1D1D35] p-3 rounded-full text-[#8B5CF6] hover:bg-[#6E59A5] hover:text-white" 
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaXTwitter size={20} />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="bg-[#1D1D35] p-3 rounded-full text-[#8B5CF6] hover:bg-[#6E59A5] hover:text-white" 
                      whileHover={{ scale: 1.1 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Background */}
        <motion.div
          className="relative z-0 pointer-events-none w-full h-[35vh] overflow-hidden mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <style>
            {`
            .waves-container-bottom {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }

            .wave-bottom {
              position: absolute;
              bottom: 0;
              width: 200%;
              height: 100%;
              background-repeat: repeat-x;
              background-position: left bottom;
              opacity: 0.4;
            }

            .wave-bottom:nth-child(1) {
              background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"><path fill="%236E59A5" fill-opacity="1" d="M0,100L48,85.3C96,70.7,192,42.7,288,42.7C384,42.7,480,70.7,576,74.7C672,78.7,768,58.7,864,58.7C960,58.7,1056,78.7,1152,77.3C1248,76,1344,69.3,1392,65.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path></svg>');
              animation: wave-animation 20s cubic-bezier(0.42, 0, 0.58, 1) infinite;
              z-index: 2;
            }

            .wave-bottom:nth-child(2) {
              background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"><path fill="%238B5CF6" fill-opacity="1" d="M0,100L48,80C96,60,192,20,288,20C384,20,480,60,576,66.7C672,73.3,768,46.7,864,46.7C960,46.7,1056,73.3,1152,80C1248,86.7,1344,73.3,1392,66.7L1440,60L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path></svg>');
              animation: wave-animation-reverse 17s cubic-bezier(0.42, 0, 0.58, 1) infinite;
              z-index: 1;
              transform: translateX(-50%);
            }

            @keyframes wave-animation {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            @keyframes wave-animation-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            `}
          </style>
          <div className="waves-container-bottom">
            <div className="wave-bottom"></div>
            <div className="wave-bottom"></div>
          </div>
        </motion.div>
      </main>
      <Footer />
      {toastState && (
        <Toast
          title={toastState.title}
          description={toastState.description}
          type={toastState.type}
          onClose={() => setToastState(null)}
        />
      )}
    </div>
  );
};

export default Contact;