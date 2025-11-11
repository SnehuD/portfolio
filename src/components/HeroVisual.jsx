import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useMediaQuery';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaAws,
  FaDatabase,
  FaJs
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiDjango,
  SiKubernetes,
  SiPostgresql,
  SiRedis,
  SiTypescript
} from 'react-icons/si';

const HeroVisual = () => {
  const isMobile = useIsMobile();

  const techStack = [
    { name: 'React', Icon: FaReact, color: '#61DAFB', size: 50 },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933', size: 50 },
    { name: 'Python', Icon: FaPython, color: '#3776AB', size: 45 },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED', size: 50 },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', size: 45 },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', size: 45 },
    { name: 'Django', Icon: SiDjango, color: '#092E20', size: 45 },
    { name: 'Express', Icon: SiExpress, color: '#000000', size: 45 },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4', size: 45 },
    { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5', size: 45 },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', size: 45 },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032', size: 45 },
    { name: 'AWS', Icon: FaAws, color: '#FF9900', size: 45 },
    { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E', size: 45 },
    { name: 'Redis', Icon: SiRedis, color: '#DC382D', size: 45 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full"
    >
      {/* Main Container */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
        
        {/* Animated Background Gradients */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-3xl"
        />

        {/* Center Glow Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
        />

        {/* Orbiting Tech Icons */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Center Core */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="text-white text-3xl sm:text-5xl font-bold"
            >
              <FaReact className="text-white" />
            </motion.div>
          </motion.div>

          {/* Orbiting Icons - Inner Circle */}
          {techStack.slice(0, 5).map((tech, i) => {
            const angle = (i * 360) / 5;
            const radius = isMobile ? 100 : 150;
            
            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: [angle, angle + 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  style={{
                    x: radius * Math.cos((angle * Math.PI) / 180) - (tech.size / 2),
                    y: radius * Math.sin((angle * Math.PI) / 180) - (tech.size / 2),
                    background: `${tech.color}20`,
                    borderColor: `${tech.color}40`,
                  }}
                  animate={{
                    rotate: [0, -360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  whileHover={{
                    scale: 1.5,
                    zIndex: 50,
                    transition: { duration: 0.2 },
                  }}
                  className="glass-effect rounded-2xl p-3 sm:p-4 backdrop-blur-md cursor-pointer group relative shadow-lg hover:shadow-2xl transition-shadow"
                  
                >
                  <tech.Icon
                    size={isMobile ? tech.size * 0.6 : tech.size * 0.8}
                    style={{ color: tech.color }}
                  />
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-xl pointer-events-none z-50"
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Orbiting Icons - Outer Circle */}
          {techStack.slice(5, 10).map((tech, i) => {
            const angle = (i * 360) / 5 + 36;
            const radius = isMobile ? 160 : 240;
            
            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: [angle, angle - 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  style={{
                    x: radius * Math.cos((angle * Math.PI) / 180) - (tech.size / 2),
                    y: radius * Math.sin((angle * Math.PI) / 180) - (tech.size / 2),
                    background: `${tech.color}20`,
                    borderColor: `${tech.color}40`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    },
                  }}
                  whileHover={{
                    scale: 1.5,
                    zIndex: 50,
                    transition: { duration: 0.2 },
                  }}
                  className="glass-effect rounded-2xl p-3 sm:p-4 backdrop-blur-md cursor-pointer group relative shadow-lg hover:shadow-2xl transition-shadow"
                  
                >
                  <tech.Icon
                    size={isMobile ? tech.size * 0.6 : tech.size * 0.8}
                    style={{ color: tech.color }}
                  />
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-xl pointer-events-none z-50"
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating Icons - Random Positions */}
          {techStack.slice(10).map((tech, i) => (
            <motion.div
              key={tech.name}
              className="absolute glass-effect rounded-xl p-2 sm:p-3 backdrop-blur-md cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow"
              style={{
                left: `${15 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 30}%`,
                background: `${tech.color}20`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.3,
                zIndex: 50,
              }}
            >
              <tech.Icon
                size={isMobile ? tech.size * 0.5 : tech.size * 0.7}
                style={{ color: tech.color }}
              />
              
              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-xl pointer-events-none z-50">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Particle Effects */}
        <Particles />
      </div>
    </motion.div>
  );
};

// Particle Effects Component
const Particles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default HeroVisual;
