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
              <div className="w-48 h-48 rounded-full overflow-hidden">
                <img
                  src="/your-profile-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Content */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">About Me</h1>
                <p className="text-gray-600 mb-6">
                  I am a passionate Full Stack Developer with expertise in building modern web applications.
                  With a strong foundation in both frontend and backend technologies, I create seamless
                  user experiences and robust server-side solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  My journey in web development started [Your Story]. I love solving complex problems
                  and turning ideas into reality through elegant code.
                </p>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-blue-600" />
                    <span className="text-gray-600">your.email@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-blue-600" />
                    <span className="text-gray-600">+1 234 567 890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span className="text-gray-600">Your Location</span>
                  </div>
                </div>

                {/* Resume Download Button */}
                <motion.a
                  href="/your-resume.pdf"
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
            <div className="space-y-8">
              {/* Experience items will go here */}
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
            <div className="space-y-8">
              {/* Education items will go here */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 