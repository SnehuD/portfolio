import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Moon, Sun, Palette, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme, accentColor, setAccentColor } = useTheme();
    const { scrollY } = useScroll();

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    const colorOptions = [
        { name: 'Blue', hex: '#0ea5e9' },
        { name: 'Purple', hex: '#8b5cf6' },
        { name: 'Pink', hex: '#ec4899' },
        { name: 'Orange', hex: '#f59e0b' },
        { name: 'Green', hex: '#10b981' },
        { name: 'Red', hex: '#ef4444' },
    ];

    // Hide navbar on scroll down, show on scroll up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Track scroll position and active section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "visible" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-800/50'
                    : 'bg-transparent'
            }`}
        >
            {/* Animated gradient line at top */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 origin-left"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo with glow effect */}
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                        />
                        <div className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            <motion.span
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                style={{ backgroundSize: '200% auto' }}
                            >
                                SD
                            </motion.span>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-1 -right-2"
                            >
                                <Sparkles size={16} className="text-primary-600" />
                            </motion.div>
                        </div>
                    </motion.a>

                    {/* Desktop Menu with active indicator */}
                    <div className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full px-2 py-2 backdrop-blur-sm">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative px-4 py-2 rounded-full font-medium text-sm transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${
                                        isActive 
                                            ? 'text-white' 
                                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                                    }`}>
                                        {item.name}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Theme & Color Controls */}
                    <div className="hidden md:flex items-center space-x-3">
                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"
                            />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        {/* Color Picker */}
                        <div className="relative">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setShowColorPicker(!showColorPicker)}
                                className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity"
                                />
                                <motion.div
                                    animate={{ rotate: showColorPicker ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Palette size={20} />
                                </motion.div>
                            </motion.button>

                            <AnimatePresence>
                                {showColorPicker && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                        transition={{ type: "spring", bounce: 0.3 }}
                                        className="absolute right-0 mt-3 p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 min-w-[200px]"
                                    >
                                        <p className="text-xs font-bold mb-3 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                            <Sparkles size={14} className="text-primary-600" />
                                            Choose Theme Color
                                        </p>
                                        <div className="grid grid-cols-3 gap-3">
                                            {colorOptions.map((color, index) => (
                                                <motion.button
                                                    key={color.hex}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => {
                                                        setAccentColor(color.hex);
                                                        setShowColorPicker(false);
                                                    }}
                                                    className="relative w-10 h-10 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                                                    style={{
                                                        backgroundColor: color.hex,
                                                        border: accentColor === color.hex ? '3px solid white' : 'none',
                                                        boxShadow: accentColor === color.hex 
                                                            ? `0 0 0 2px ${color.hex}, 0 4px 12px ${color.hex}80`
                                                            : undefined,
                                                    }}
                                                    title={color.name}
                                                >
                                                    <AnimatePresence>
                                                        {accentColor === color.hex && (
                                                            <motion.div
                                                                initial={{ scale: 0, rotate: -180 }}
                                                                animate={{ scale: 1, rotate: 0 }}
                                                                exit={{ scale: 0, rotate: 180 }}
                                                                transition={{ type: "spring", bounce: 0.5 }}
                                                                className="absolute inset-0 flex items-center justify-center"
                                                            >
                                                                <motion.span
                                                                    animate={{ scale: [1, 1.2, 1] }}
                                                                    transition={{ duration: 0.5, repeat: Infinity }}
                                                                    className="text-white text-xl font-bold drop-shadow-lg"
                                                                >
                                                                    ✓
                                                                </motion.span>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-lg"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-lg"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                                        activeSection === item.href.substring(1)
                                            ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                            
                            {/* Mobile Color Picker */}
                            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-xs font-bold mb-3 text-gray-600 dark:text-gray-400 px-4">
                                    Theme Colors
                                </p>
                                <div className="grid grid-cols-6 gap-3 px-4">
                                    {colorOptions.map((color, index) => (
                                        <motion.button
                                            key={color.hex}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setAccentColor(color.hex)}
                                            className="w-10 h-10 rounded-full shadow-lg"
                                            style={{
                                                backgroundColor: color.hex,
                                                border: accentColor === color.hex ? '3px solid white' : 'none',
                                                boxShadow: accentColor === color.hex 
                                                    ? `0 0 0 2px ${color.hex}`
                                                    : undefined,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
