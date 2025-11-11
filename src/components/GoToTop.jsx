import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, Rocket } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optimized scroll handler with throttling
  useEffect(() => {
    let timeoutId = null;
    let ticking = false;

    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      setIsVisible(scrolled > 300);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(toggleVisibility);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Memoized scroll function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Animation variants for cleaner code
  const buttonVariants = useMemo(() => ({
    hidden: { 
      opacity: 0, 
      y: 100, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      y: 100, 
      scale: 0,
      rotate: 180,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }), []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ 
            scale: 1.1,
            rotate: -10,
          }}
          whileTap={{ 
            scale: 0.85,
            rotate: 0,
          }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Outer Glow Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 blur-xl opacity-40 group-hover:opacity-60"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Main Button Container */}
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            {/* Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-gray-300 dark:text-gray-700"
                opacity="0.3"
              />
              
              {/* Animated Progress Circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary-500"
                style={{
                  pathLength: scaleX,
                  stroke: "url(#gradient)",
                }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(var(--color-primary-500))" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Button */}
            <motion.div 
              className="absolute inset-2 rounded-full bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 shadow-2xl flex items-center justify-center overflow-hidden"
              whileHover={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              {/* Animated Background Shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Icon with Animation */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <ArrowUp 
                  className="text-white drop-shadow-lg" 
                  size={20}
                  strokeWidth={3}
                />
              </motion.div>

              {/* Rocket Icon on Hover (Alternative) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Rocket 
                  className="text-white drop-shadow-lg" 
                  size={20}
                  strokeWidth={3}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
          >
            <div className="px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold rounded-lg shadow-xl">
              Back to Top
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-100" />
            </div>
          </motion.div>

          {/* Ripple Effect on Click */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white"
            initial={{ scale: 0, opacity: 0.5 }}
            whileTap={{
              scale: 2,
              opacity: 0,
              transition: { duration: 0.4 }
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
