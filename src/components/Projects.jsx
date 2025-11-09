import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'QR Based Ticket Entry System',
            description:
                'A complete ticketing system where visitors can register, book slots, make payments, and receive QR codes for secure entry and exit verification.',
            features: [
                'Email verification and authentication',
                'Slot booking with payment integration',
                'QR code generation for entry/exit',
                'Profile and booking history management',
            ],
            tech: ['React', 'Node.js', 'MySQL', 'QR Code API'],
            link: 'https://github.com/SnehuD/Ticketless-Entry-System-for-Museum',
        },
        {
            title: 'Resume Ranker',
            description:
                'AI-powered resume ranking system that matches job seekers with recruiters based on skill compatibility and job requirements.',
            features: [
                'Multi-resume upload for different roles',
                'AI-based matching percentage calculation',
                'Recruiter dashboard for job postings',
                'Direct messaging between recruiters and candidates',
            ],
            tech: ['Python', 'Django', 'Machine Learning', 'PostgreSQL'],
            link: 'https://github.com/PrasadDhobale/ResumeRanker-frontend',
        },
        {
            title: 'Spyinte E-commerce Website',
            description:
                'Fully functional e-commerce platform built for Teehzone Corporation with modern UI/UX and complete shopping experience.',
            features: [
                'Product catalog with search and filters',
                'Shopping cart and checkout process',
                'Responsive design for all devices',
                'Admin panel for product management',
            ],
            tech: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
            link: 'https://github.com/SnehuD/Spyinte--Ab-Har-Ghar-Hoga-Surkshit',
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Some of my recent work and accomplishments
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass glass-hover rounded-2xl p-6 flex flex-col"
                        >
                            <motion.div
                                className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center text-4xl font-bold"
                                whileHover={{ scale: 1.05 }}
                            >
                                {project.title.charAt(0)}
                            </motion.div>

                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                            <div className="mb-4">
                                <h4 className="font-semibold mb-2 text-purple-400">Key Features:</h4>
                                <ul className="space-y-1">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                                            <span className="text-purple-400">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-purple-500/20 rounded-full text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 py-2 rounded-lg font-semibold"
                                >
                                    <ExternalLink size={18} />
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">Demo</a>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 flex items-center justify-center gap-2 glass py-2 rounded-lg font-semibold"
                                >
                                    <Github size={18} />
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">Code</a>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
