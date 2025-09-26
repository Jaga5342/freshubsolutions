import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality services that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    }
  ];

  const team = [
    'Software Developers',
    'UI/UX Designers',
    'Project Managers',
    'Training Specialists',
    'Quality Assurance Engineers',
    'Business Analysts'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Freshub Solutions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering businesses and individuals through innovative technology solutions and comprehensive training programs since 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2025, Freshub Solutions emerged with a vision to bridge the gap between innovative technology solutions and practical business needs. We started as a small team of passionate developers and trainers who believed in the power of technology to transform businesses and lives.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we are a team of 10 dedicated professionals who continue to deliver cutting-edge software development services while nurturing the next generation of tech talent through our comprehensive training and internship programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, innovation, and education has made us a trusted partner for businesses and a preferred destination for aspiring developers and IT professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg">
                <img 
                  src="/WhatsApp Image 2025-09-20 at 13.21.09_7cc2ab7b.jpg" 
                  alt="Freshub Solutions Logo" 
                  className="h-24 w-24 mx-auto mb-6 object-contain"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Established 2025</h3>
                  <p className="text-gray-600">
                    Building the future of technology, one solution at a time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, reliable, and scalable technology solutions that help businesses thrive in the digital age while fostering the next generation of IT professionals through quality education and practical training.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a leading technology partner recognized for delivering exceptional software solutions and training programs that create lasting value for businesses and empower individuals to achieve their career goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our company culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-900 to-teal-600 text-white rounded-full mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              10 passionate professionals working together to deliver exceptional results
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {team.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4"
                >
                  <p className="font-semibold">{role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;