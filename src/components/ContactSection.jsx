import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, User, Sparkles } from 'lucide-react';
import { useState, useCallback, useMemo, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  // Validation functions
  const validateEmail = useCallback((email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateEmail]);

  // Handle input changes with validation
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.compwallah.com/api/f/aPlxWQzDXg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again later.',
      });

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }
  }, [formData, validateForm]);

  // Memoized contact info
  const contactInfo = useMemo(() => [
    {
      icon: Mail,
      text: 'snehaldahake19@gmail.com',
      href: 'mailto:snehaldahake19@gmail.com',
      label: 'Email',
      color: 'from-blue-500 to-cyan-500',
      ariaLabel: 'Send email to snehaldahake19@gmail.com',
    },
    {
      icon: Phone,
      text: '+91 9860684680',
      href: 'tel:+919860684680',
      label: 'Phone',
      color: 'from-green-500 to-emerald-500',
      ariaLabel: 'Call +91 9860684680',
    },
    {
      icon: MapPin,
      text: 'Pune, Maharashtra',
      href: null,
      label: 'Location',
      color: 'from-purple-500 to-pink-500',
      ariaLabel: 'Location: Pune, Maharashtra',
    },
  ], []);

  const socialLinks = useMemo(() => [
    { icon: FaGithub, url: 'https://github.com/snehud', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/snehal-dahake', label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
  ], []);

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
      aria-label="Contact Information"
    >
      {/* Background Decorations - FIXED: Removed multiple keyframes with spring */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{
            scale: 1.1,
            rotate: 45,
          }}
          transition={{
            scale: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: 1.15,
            rotate: -45,
          }}
          transition={{
            scale: {
              duration: 25,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
            rotate: {
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4"
          >
            <Sparkles size={18} className="text-primary-600" />
            <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="card-glass rounded-2xl p-6 hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className={`p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg flex-shrink-0`}
                      >
                        <info.icon className="text-white" size={24} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-base font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                            aria-label={info.ariaLabel}
                          >
                            {info.text}
                          </a>
                        ) : (
                          <span className="text-base font-medium text-gray-900 dark:text-white">
                            {info.text}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10`}
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="card-glass rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition-all ${social.color}`}
                    aria-label={`Visit my ${social.label} profile`}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge - FIXED: Only 2 keyframes for scale and boxShadow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="card-glass rounded-2xl p-6 border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: 1.2,
                  }}
                  transition={{
                    scale: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    },
                  }}
                  className="w-3 h-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Available for Work</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Open to new opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card-glass rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-2xl space-y-6 relative overflow-hidden"
              noValidate
              aria-label="Contact form"
            >
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 pl-12 rounded-xl bg-white dark:bg-gray-800 border-2 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-700 focus:border-primary-600'
                    } focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400`}
                    required
                    disabled={status.submitting}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  <User
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                      errors.name ? 'text-red-500' : 'text-gray-400'
                    }`}
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      role="alert"
                    >
                      <AlertCircle size={14} />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email Address <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-6 py-4 pl-12 rounded-xl bg-white dark:bg-gray-800 border-2 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-700 focus:border-primary-600'
                    } focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400`}
                    required
                    disabled={status.submitting}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  <Mail
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                      errors.email ? 'text-red-500' : 'text-gray-400'
                    }`}
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      role="alert"
                    >
                      <AlertCircle size={14} />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:border-primary-600'
                  } focus:outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400`}
                  required
                  disabled={status.submitting}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                      role="alert"
                    >
                      <AlertCircle size={14} />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button - FIXED: Changed shimmer animation to use duration instead of spring */}
              <motion.button
                type="submit"
                disabled={status.submitting}
                whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 shadow-xl transition-all relative overflow-hidden ${
                  status.submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 hover:shadow-2xl'
                }`}
                aria-live="polite"
              >
                {/* Button Shimmer Effect - FIXED: Using duration instead of spring for multiple keyframes */}
                {!status.submitting && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['0%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    aria-hidden="true"
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  {status.submitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-3xl"
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="text-center p-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Thank you for reaching out. I'll get back to you soon!
                      </p>
                    </div>
                  </motion.div>
                )}

                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="text-red-500 flex-shrink-0" size={24} />
                    <p className="text-red-700 dark:text-red-400 font-medium">
                      {status.error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
