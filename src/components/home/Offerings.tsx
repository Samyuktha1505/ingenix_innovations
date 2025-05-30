import { Users, Mic, TrendingUp, Sparkles, Settings, Brain } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Hoisted lerpColor function
function lerpColor(a, b, t) {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg_val = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg_val - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `rgb(${rr},${rg},${rb})`;
}

const offerings = [
  {
    title: 'AI Consulting',
    description: 'Strategic roadmaps, use case identification, and technology selection tailored to your business objectives.',
    icon: Brain,
    slides: [
      { title: 'Strategic Roadmaps', content: 'Comprehensive AI strategy development aligned with your business goals and digital transformation journey. We analyze your current infrastructure, identify opportunities, and create actionable plans for AI implementation that deliver measurable ROI.' },
      { title: 'Use Case Identification', content: 'Expert analysis to identify high-impact AI opportunities specific to your industry and business model. Our team conducts thorough assessments to pinpoint areas where AI can drive efficiency, reduce costs, and create competitive advantages.' },
      { title: 'Technology Selection', content: 'Guidance on choosing the right AI technologies, platforms, and tools for your specific requirements. We evaluate market solutions, assess compatibility with your systems, and recommend the optimal tech stack for your AI initiatives.' }
    ]
  },
  {
    title: 'AI Agents',
    description: 'Advanced agent orchestration and collaboration enabling complex workflows and automated decision making.',
    icon: Users,
    slides: [
      { title: 'Agent Orchestration', content: 'Design and implement intelligent agent systems that coordinate complex business processes autonomously. Our agents can handle multiple tasks simultaneously, make informed decisions, and adapt to changing business conditions in real-time.' },
      { title: 'Multi-Agent Collaboration', content: 'Build collaborative AI systems where multiple agents work together to solve complex problems. Each agent specializes in specific domains while communicating and coordinating with others to achieve common business objectives.' },
      { title: 'Workflow Automation', content: 'Automate end-to-end business workflows with intelligent decision-making capabilities. Our systems can handle exceptions, escalate issues appropriately, and continuously learn from interactions to improve performance over time.' }
    ]
  },
  {
    title: 'Voice AI',
    description: 'Natural language customer support with multilingual capabilities and seamless call center integration.',
    icon: Mic,
    slides: [
        { title: 'Natural Language Processing', content: 'Advanced NLP capabilities for understanding and processing human speech with high accuracy. Our systems can interpret context, sentiment, and intent to provide natural, human-like interactions that enhance customer satisfaction.' },
        { title: 'Multilingual Support', content: 'Support for multiple languages and dialects to serve diverse customer bases globally. Real-time translation and cultural adaptation ensure consistent service quality across different markets and regions.' },
        { title: 'Call Center Integration', content: 'Seamless integration with existing call center infrastructure and customer service platforms. Our voice AI can handle routine inquiries, route complex issues to human agents, and provide real-time assistance to support staff.' }
    ]
  },
  {
    title: 'Predictive Analytics',
    description: 'Business forecasting, customer churn models, and risk scoring engines powered by machine learning.',
    icon: TrendingUp,
    slides: [
        { title: 'Business Forecasting', content: 'Accurate prediction of business metrics, sales trends, and market opportunities using advanced ML models. Our forecasting solutions help you make data-driven decisions, optimize inventory, and plan resources effectively for future growth.' },
        { title: 'Customer Churn Models', content: 'Identify at-risk customers and implement retention strategies with predictive churn analysis. Our models analyze behavioral patterns, transaction history, and engagement metrics to predict churn probability and recommend targeted interventions.' },
        { title: 'Risk Scoring', content: 'Comprehensive risk assessment engines for financial, operational, and strategic decision making. Our systems evaluate multiple risk factors in real-time to provide accurate scoring that helps minimize losses and optimize business opportunities.' }
    ]
  },
  {
    title: 'Generative AI Solutions',
    description: 'Custom AI integration, content generation, avatar synthesis, and video generation capabilities.',
    icon: Sparkles,
    slides: [
        { title: 'Content Generation', content: 'AI-powered content creation for marketing, documentation, and creative applications. Our systems can generate high-quality text, images, and multimedia content tailored to your brand voice and specific requirements at scale.' },
        { title: 'Avatar Synthesis', content: 'Create realistic digital avatars and virtual representatives for customer interactions. Our technology enables personalized, engaging experiences through lifelike avatars that can communicate in multiple languages and adapt to user preferences.' },
        { title: 'Video Generation', content: 'Automated video creation and editing using cutting-edge generative AI technologies. From promotional content to training materials, our systems can produce professional-quality videos with minimal human intervention.' }
    ]
  },
  {
    title: 'Process Automation',
    description: 'End-to-end workflow automation with human-in-the-loop optimization and document processing.',
    icon: Settings,
    slides: [
        { title: 'Workflow Automation', content: 'Automate complex business processes while maintaining quality and compliance standards. Our solutions streamline operations, reduce manual errors, and free up your team to focus on high-value strategic activities.' },
        { title: 'Human-in-the-Loop', content: 'Intelligent automation that knows when to involve human expertise for optimal results. Our systems can escalate complex decisions, request approvals, and learn from human feedback to continuously improve their performance.' },
        { title: 'Document Processing', content: 'Advanced OCR and document understanding for automated data extraction and processing. Handle invoices, contracts, forms, and other documents with high accuracy while maintaining data security and compliance requirements.' }
    ]
  },
];

const Offerings = () => {
  const numSteps = offerings.length;
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const stepSize = 1 / numSteps;
  const getActiveIndex = (v) => Math.max(0, Math.min(numSteps - 1, Math.floor(v / stepSize)));

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const totalScroll = windowHeight + sectionHeight;
      const scrolled = windowHeight - rect.top;
      const rawProgress = scrolled / totalScroll;
      setProgress(Math.max(0, Math.min(1, rawProgress)));
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const activeOfferingIndex = getActiveIndex(progress);
  const stickyBgColor = activeOfferingIndex % 2 === 0 ? '#0A0A12' : '#151522';

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20"
      style={{ minHeight: `${numSteps * 160}vh`, background: '#0A0A12' }}
    >
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Our <span className="text-purple-400">AI Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Cutting-edge artificial intelligence technologies designed to transform your business operations and drive innovation.
        </p>
      </div>

      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center px-4"
        style={{ background: stickyBgColor }}
      >
        <CardIcon 
          offering={offerings[activeOfferingIndex]} 
          progress={progress} 
          stepSize={stepSize} 
          index={activeOfferingIndex} 
        />
        <CardContent
          offering={{ ...offerings[activeOfferingIndex], index: activeOfferingIndex }}
          progress={progress}
          stepSize={stepSize}
          numSteps={numSteps}
          alignment={activeOfferingIndex % 2 === 0 ? 'left' : 'right'}
        />
      </motion.div>
    </section>
  );
};

function CardIcon({ offering, progress, stepSize, index }) {
  const start = index * stepSize;
  const localProgress = Math.max(0, Math.min(1, (progress - start) / stepSize));
  const Icon = offering.icon;
  const rotateY = localProgress * 180;
  const shadowPulse = 0.5 + 0.2 * Math.abs(Math.sin(localProgress * Math.PI));

  const purpleColor = '#c084fc'; // Tailwind purple-400
  const lighterPurpleColor = '#d8b4fe'; // Tailwind purple-300
  const darkAnchorColor = '#23234a'; // Dark anchor for the gradient

  let dynamicFrom, dynamicVia;

  if (localProgress < 0.5) {
    dynamicFrom = lerpColor(purpleColor, lighterPurpleColor, localProgress * 2);
    dynamicVia = lerpColor(lighterPurpleColor, purpleColor, localProgress * 2);
  } else {
    dynamicFrom = lerpColor(lighterPurpleColor, purpleColor, (localProgress - 0.5) * 2);
    dynamicVia = lerpColor(purpleColor, lighterPurpleColor, (localProgress - 0.5) * 2);
  }

  return (
    <motion.div
      className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center shrink-0"
      style={{
        rotateY,
        perspective: 800,
        transformStyle: 'preserve-3d',
        transformOrigin: '50% 50%',
        filter: `drop-shadow(0 0 ${8 * shadowPulse}px #8B5CF6)`
      }}
    >
      <div 
        className="rounded-full shadow-lg w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex items-center justify-center"
        style={{ 
          background: `linear-gradient(to bottom right, ${dynamicFrom}, ${dynamicVia}, ${darkAnchorColor})` 
        }}
      >
        <Icon 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-white"
        />
      </div>
    </motion.div>
  );
}

function CardContent({ offering, progress, stepSize, numSteps, alignment }) {
  const index = offering.index ?? 0;
  const start = index * stepSize;
  let localProgress = Math.max(0, Math.min(1, (progress - start) / stepSize));

  const entryDuration = 0.15;
  const exitStart = 0.85;

  let y = 0;
  if (localProgress < entryDuration) {
    const t = localProgress / entryDuration;
    y = 100 * (1 - t);
  } else if (localProgress < exitStart) {
    y = 0;
  } else {
    const t = (localProgress - exitStart) / (1 - exitStart);
    y = -100 * t;
  }

  let calculatedOpacity = 0;
  if (localProgress < entryDuration) {
    calculatedOpacity = localProgress / entryDuration;
  } else if (localProgress < exitStart) {
    calculatedOpacity = 1;
  } else if (localProgress <= 1.0) {
    calculatedOpacity = (1.0 - localProgress) / (1.0 - exitStart);
  }
  const contentOpacity = Math.max(0, Math.min(1, calculatedOpacity));

  let calculatedScale = 0.95;
  if (localProgress < entryDuration) {
    calculatedScale = 0.95 + 0.05 * (localProgress / entryDuration);
  } else if (localProgress < exitStart) {
    calculatedScale = 1;
  } else if (localProgress <= 1.0) {
    calculatedScale = 1 - 0.05 * ((localProgress - exitStart) / (1 - exitStart));
  }
  const scale = calculatedScale;
  
  const showContent = contentOpacity > 0.01;

  const iconCenterToEdgeOffset = '4.5rem'; 
  const gapBetweenIconAndContent = '3rem';
  const contentStartsFromScreenCenter = `calc(${iconCenterToEdgeOffset} + ${gapBetweenIconAndContent})`;

  const positionStyle: React.CSSProperties = {
    position: 'absolute',
    top: 'calc(50% + 30px)',
    transform: 'translateY(-50%)',
    maxWidth: '448px',
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
  };

  if (alignment === 'left') {
    positionStyle.right = `calc(50% + ${contentStartsFromScreenCenter})`;
    positionStyle.textAlign = 'right';
  } else { // alignment === 'right'
    positionStyle.left = `calc(50% + ${contentStartsFromScreenCenter})`;
    positionStyle.textAlign = 'left';
  }

  return (
    <div style={positionStyle}>
      {showContent && (
        <motion.div
          className="pointer-events-auto" 
          style={{
            y: `${y}%`,
            opacity: contentOpacity,
            scale,
          }}
        >
          <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-2 text-purple-400">{offering.title}</h3>
          {offering.description && (
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
              {offering.description}
            </p>
          )}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {offering.slides.map((slide, idx) => (
              <div key={idx}>
                <h4 className="text-base sm:text-lg font-semibold text-[#8B5CF6] mb-1">{slide.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{slide.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Offerings;