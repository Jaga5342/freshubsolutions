import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Award, Briefcase, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Team Members', value: '10+', icon: Users },
    { label: 'Years Experience', value: '1+', icon: Award },
    { label: 'Projects Completed', value: '50+', icon: Briefcase },
    { label: 'Students Trained', value: '100+', icon: BookOpen },
  ];

  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Comprehensive training programs to upskill professionals and students in latest technologies.',
      features: ['Full Stack Development', 'Mobile Development', 'Data Science', 'DevOps']
    },
    {
      icon: Users,
      title: 'Internship Programs',
      description: 'Hands-on internship opportunities for college students to gain real-world experience.',
      features: ['Mentorship', 'Real Projects', 'Certification', 'Job Placement']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="text-teal-300"> Digital Vision</span>
                <br />
                Into Reality
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Leading IT software development and training company empowering businesses and students with innovative technology solutions since 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold text-blue-900 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-09-20 at 13.21.09_7cc2ab7b.jpg" 
                  alt="Freshub Solutions Logo" 
                  className="h-32 w-32 mx-auto mb-6 object-contain"
                />
                <h3 className="text-2xl font-bold text-center mb-4">Freshub Solutions</h3>
                <p className="text-center text-blue-100">
                  Your trusted partner in digital transformation and professional development
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions and training programs to help businesses grow and individuals succeed in the digital world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-teal-600 text-white rounded-full mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <Zap className="h-4 w-4 text-teal-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Whether you're a business looking for software solutions or a student seeking internship opportunities, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold text-blue-900 bg-white hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/career"
                className="inline-flex items-center px-8 py-3 rounded-full text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Explore Careers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;