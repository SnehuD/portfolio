import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Code2, Database, Cloud, Terminal, Zap, Palette } from 'lucide-react';

const HeroSection = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/snehud', label: 'GitHub', name: 'GitHub Profile' },
        { icon: Linkedin, href: 'https://linkedin.com/in/snehal-dahake', label: 'LinkedIn', name: 'LinkedIn Profile' },
        { icon: Mail, href: 'mailto:snehal.dahake@dypic.in', label: 'Email', name: 'Email Contact' },
    ];

    const techStack = [
        { name: 'React', icon: Code2, color: '#61DAFB', angle: 0 },
        { name: 'Node.js', icon: Terminal, color: '#339933', angle: 60 },
        { name: 'MongoDB', icon: Database, color: '#47A248', angle: 120 },
        { name: 'Tailwind', icon: Palette, color: '#06B6D4', angle: 180 },
        { name: 'Laravel', icon: Zap, color: '#FF2D20', angle: 240 },
        { name: 'Firebase', icon: Cloud, color: '#FFCA28', angle: 300 },
    ];

    return (
        <section
            id="home"
            className="min-h-screen relative overflow-hidden flex items-center pt-20"
            aria-label="Hero Section"
        >
            {/* SEO-friendly heading for screen readers */}
            <h1 className="sr-only">
                Snehal Dahake - Full Stack Developer and Founder of CompWallah
            </h1>

            {/* Animated Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full blur-3xl opacity-20"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20"
                />
            </div>

            <div className="section-container relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                                Hi, I'm{' '}
                                <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                                    Snehal Dahake
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium"
                        >
                            Full Stack Developer & Founder
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                            Passionate about building user-friendly, secure, and high-performance applications.
                            Founder of <strong className="text-primary-600 font-semibold">CompWallah</strong>, delivering real-world software solutions.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary"
                                aria-label="Get in touch with Snehal Dahake"
                            >
                                Get In Touch
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary"
                                aria-label="View Snehal's projects"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                href="/Snehal_Resume.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-secondary flex items-center gap-2"
                                aria-label="Download Snehal Dahake's resume"
                            >
                                <Download size={20} aria-hidden="true" />
                                Resume
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex gap-4 pt-4"
                            role="list"
                            aria-label="Social media links"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 + index * 0.1 }}
                                    className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                                    aria-label={social.name}
                                    role="listitem"
                                >
                                    <social.icon size={24} aria-hidden="true" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Hero Illustration - Fixed & Optimized */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                        aria-label="Interactive developer illustration"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                            className="relative w-full aspect-square max-w-lg mx-auto"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Animated Background Orbs */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"
                                aria-hidden="true"
                            />

                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [360, 180, 0],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                className="absolute inset-0 bg-gradient-to-l from-blue-500 via-cyan-500 to-teal-500 rounded-full blur-2xl opacity-15"
                                aria-hidden="true"
                            />

                            {/* Tech Stack Orbital Icons - FIXED */}
                            <div className="absolute inset-0" aria-label="Technology stack">
                                {techStack.map((tech, index) => {
                                    const radius = 200; // Increased radius for better visibility
                                    const angle = (tech.angle * Math.PI) / 180;
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;

                                    return (
                                        <motion.div
                                            key={tech.name}
                                            className="absolute"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                marginLeft: `${x}px`,
                                                marginTop: `${y}px`,
                                                transform: 'translate(-50%, -50%)',
                                                willChange: 'transform',
                                            }}
                                            animate={{
                                                rotate: [0, 360],
                                            }}
                                            transition={{
                                                rotate: {
                                                    duration: 20,
                                                    repeat: Infinity,
                                                    ease: 'linear',
                                                },
                                            }}
                                        >
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.3,
                                                    rotate: 360,
                                                    transition: { duration: 0.3 },
                                                }}
                                                className="relative group cursor-pointer"
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{
                                                    scale: {
                                                        duration: 2 + index * 0.5,
                                                        repeat: Infinity,
                                                        repeatType: 'reverse',
                                                    },
                                                }}
                                            >
                                                {/* Glow effect */}
                                                <div
                                                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                                                    style={{ backgroundColor: tech.color }}
                                                    aria-hidden="true"
                                                />

                                                {/* Icon Card */}
                                                <div
                                                    className="relative bg-white dark:bg-gray-800 p-3 md:p-4 rounded-2xl shadow-2xl border-2 transition-all duration-300"
                                                    style={{
                                                        borderColor: tech.color,
                                                        borderWidth: '2px',
                                                    }}
                                                >
                                                    <tech.icon
                                                        size={24}
                                                        style={{ color: tech.color }}
                                                        className="drop-shadow-lg"
                                                        aria-label={tech.name}
                                                    />
                                                </div>

                                                {/* Tooltip */}
                                                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    <span
                                                        className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                                                        style={{ backgroundColor: tech.color }}
                                                    >
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Center Profile with 3D Effect - FIXED */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="relative group"
                                >
                                    {/* Animated Rings */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="absolute -inset-4 rounded-full border-4 border-dashed border-primary-500/30"
                                        aria-hidden="true"
                                    />

                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{
                                            duration: 12,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="absolute -inset-8 rounded-full border-2 border-dotted border-purple-500/20"
                                        aria-hidden="true"
                                    />

                                    {/* Profile Container */}
                                    <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600 z-0" />

                                        {/* Profile Image */}
                                        {/* Profile Image */}
                                        <motion.img
                                            src="/profile.png"
                                            alt="Snehal Dahake"
                                            className="relative z-60 w-full h-full object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Shine Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 z-20 pointer-events-none"
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                repeatDelay: 2,
                                            }}
                                            aria-hidden="true"
                                        />

                                        {/* Glow Border */}
                                        <motion.div
                                            className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-75 blur-md -z-10"
                                            animate={{ rotate: [0, 360] }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'linear',
                                            }}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    {/* Floating Code Brackets */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                        }}
                                        className="absolute -left-8 top-1/4 text-primary-600 dark:text-primary-400 font-bold text-6xl opacity-50 pointer-events-none"
                                        aria-hidden="true"
                                    >
                                        {'<'}
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, -5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: 'reverse',
                                            delay: 0.5,
                                        }}
                                        className="absolute -right-8 top-1/4 text-purple-600 dark:text-purple-400 font-bold text-6xl opacity-50 pointer-events-none"
                                        aria-hidden="true"
                                    >
                                        {'>'}
                                    </motion.div>

                                    {/* Status Badge */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1, type: 'spring' }}
                                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                                    >
                                        <motion.div
                                            animate={{
                                                boxShadow: [
                                                    '0 0 20px rgba(16, 185, 129, 0.5)',
                                                    '0 0 30px rgba(16, 185, 129, 0.8)',
                                                    '0 0 20px rgba(16, 185, 129, 0.5)',
                                                ],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                            className="bg-white dark:bg-gray-800 px-6 py-2 rounded-full border-2 border-green-500 flex items-center gap-2"
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                }}
                                                className="w-3 h-3 bg-green-500 rounded-full"
                                                aria-hidden="true"
                                            />
                                            <span className="text-sm font-bold text-gray-900 dark:text-white">
                                                Available for Work
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Particle Effects - Reduced for performance */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-primary-500 rounded-full pointer-events-none"
                                    animate={{
                                        x: [
                                            Math.random() * 300 - 150,
                                            Math.random() * 300 - 150,
                                        ],
                                        y: [
                                            Math.random() * 300 - 150,
                                            Math.random() * 300 - 150,
                                        ],
                                        opacity: [0, 1, 0],
                                        scale: [0, 1.5, 0],
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                    }}
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    aria-hidden="true"
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                aria-label="Scroll down indicator"
            >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-primary-600 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
