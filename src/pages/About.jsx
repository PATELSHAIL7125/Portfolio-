import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8 sm:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                <img
                  src="/Shail image .jpg"
                  alt="Shail Patel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Content */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
                <p className="text-xl text-gray-800 mb-4">
                  👋 Hello, I'm <span className="font-semibold text-blue-600">Shail Patel</span><br/>
                  Web Developer | Tech Enthusiast | Data Science & AI/ML Explorer
                </p>
                <p className="text-gray-700 mb-4">
                  I specialize in both front-end and back-end development, working with technologies like React, Express.js, Node.js, and more. I focus on creating seamless user experiences and building high-performance, scalable applications.
                </p>
                <p className="text-gray-700 mb-4">
                  I'm currently exploring the fields of Data Science and Artificial Intelligence/Machine Learning, with a keen interest in leveraging data to build smart, efficient solutions.
                </p>
                <p className="text-gray-700 mb-6">
                  From time to time, I also enjoy writing technical blogs to share my learning journey with the developer community.
                </p>
                <p className="text-gray-700 mb-6">
                  🚀 Let's connect, collaborate, and create something meaningful together!
                </p>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-600" />
                    <span className="text-gray-600">shailpatel7125@gmail.com</span>
                  </div>
                </div>

                {/* Resume Download Button */}
                <motion.a
                  href="/Shail%20Resume%20Final%201.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="mr-2" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
            {/* Timeline */}
            <div className="relative border-l-4 border-blue-200 pl-8 space-y-10">
              {/* Internship */}
              <div className="flex items-start gap-4 group">
                <div className="w-5 h-5 bg-blue-400 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                <div>
                  <h3 className="text-lg font-bold text-blue-600">Data Science Intern</h3>
                  <p className="text-gray-700">2nd year summer internship at <span className="font-semibold">Prodigy Technology</span></p>
                  <span className="text-sm text-gray-500">2nd Year Summer Vacation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
            {/* Timeline */}
            <div className="relative border-l-4 border-blue-200 pl-8 space-y-10">
              {/* University */}
              <div className="flex items-start gap-4 group">
                <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform"></div>
                <div>
                  <h3 className="text-lg font-bold text-blue-700">Charotar University of Science and Technology</h3>
                  <p className="text-gray-700">B.Tech in Information Technology</p>
                  <span className="text-sm text-gray-500">2023 - 2027</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 