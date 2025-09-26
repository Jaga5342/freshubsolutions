import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Clock, MapPin, Send, CheckCircle, Code, Briefcase } from 'lucide-react';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    skills: '',
    experience: '',
    portfolio: '',
    motivation: '',
    position: 'internship'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `${formData.position === 'internship' ? 'Internship' : 'Job'} Application - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.college ? `College: ${formData.college}` : ''}
${formData.course ? `Course: ${formData.course}` : ''}
${formData.year ? `Year of Study: ${formData.year}` : ''}
Position Applied: ${formData.position}
Skills: ${formData.skills}
Experience: ${formData.experience}
${formData.portfolio ? `Portfolio/GitHub: ${formData.portfolio}` : ''}

Motivation:
${formData.motivation}
    `;
    
    const mailtoLink = `mailto:freshubtechsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        course: '',
        year: '',
        skills: '',
        experience: '',
        portfolio: '',
        motivation: '',
        position: 'internship'
      });
    }, 3000);
  };

  const internshipPrograms = [
    {
      title: 'Full Stack Development',
      duration: '3-6 months',
      description: 'Learn modern web development with React, Node.js, and databases.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs']
    },
    {
      title: 'Mobile App Development',
      duration: '3-6 months',
      description: 'Build mobile applications using React Native and Flutter.',
      skills: ['React Native', 'Flutter', 'Dart', 'Mobile UI/UX', 'API Integration']
    },
    {
      title: 'UI/UX Design',
      duration: '2-4 months',
      description: 'Master design principles and create stunning user interfaces.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      title: 'Data Science & Analytics',
      duration: '4-6 months',
      description: 'Dive into data analysis, machine learning, and visualization.',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Data Visualization', 'SQL']
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: 'Hands-on Learning',
      description: 'Work on real projects and gain practical experience'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Get guidance from experienced professionals'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Receive completion certificates and recommendations'
    },
    {
      icon: Briefcase,
      title: 'Job Placement',
      description: 'Assistance with job placement after completion'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Start your career in technology with our comprehensive internship programs and exciting job opportunities. Learn from industry experts and work on cutting-edge projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold text-blue-900 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </a>
              <a
                href="#programs"
                className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                View Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Programs */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Internship Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of internship programs designed to give you real-world experience and industry-relevant skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                  <div className="flex items-center text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">{program.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Intern With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our internship program is designed to provide maximum value and prepare you for a successful career in technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-teal-600 text-white rounded-full mb-6">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Apply Now</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Ready to start your journey with us? Fill out the application form below and we'll get back to you soon.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                <p className="text-gray-600">Your email client should open shortly. We'll review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXXX-XXX-XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position Type *
                    </label>
                    <select
                      name="position"
                      id="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="internship">Internship</option>
                      <option value="junior">Junior Developer</option>
                      <option value="senior">Senior Developer</option>
                      <option value="trainer">Training Position</option>
                    </select>
                  </div>
                </div>

                {formData.position === 'internship' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                        College/University
                      </label>
                      <input
                        type="text"
                        name="college"
                        id="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your college name"
                      />
                    </div>
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                        Course/Degree
                      </label>
                      <input
                        type="text"
                        name="course"
                        id="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="B.Tech, MCA, etc."
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                        Year of Study
                      </label>
                      <select
                        name="year"
                        id="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select Year</option>
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                        <option value="4th">4th Year</option>
                        <option value="final">Final Year</option>
                        <option value="graduate">Graduate</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                      Technical Skills *
                    </label>
                    <input
                      type="text"
                      name="skills"
                      id="skills"
                      required
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="React, Node.js, Python, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/GitHub URL
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Experience
                  </label>
                  <textarea
                    name="experience"
                    id="experience"
                    rows={3}
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Describe any relevant projects, internships, or experience..."
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join Freshub Solutions? *
                  </label>
                  <textarea
                    name="motivation"
                    id="motivation"
                    rows={4}
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your motivation and career goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-900 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-teal-500 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Submit Application
                  <Send className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;