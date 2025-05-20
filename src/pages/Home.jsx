import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: 'Git & GitHub: A Complete Guide',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // GitHub logo on laptop
    link: 'https://githubdetail.hashnode.dev/gitgithub-detail',
  },
  {
    title: 'Decode Tech Jargons: Simplifying the Language of Technology',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Abstract tech background
    link: 'https://githubdetail.hashnode.dev/decode-tech-jargons-simplifying-the-language-of-technology',
  },
  {
    title: 'PRD: Project Requirement Detail for a Juice Shop',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', // Technical/engineering themed image
    link: 'https://githubdetail.hashnode.dev/prdproject-requirement-detail-for-a-juice-shop',
  },
  {
    title: 'Building a PDF & PPT Insights App with React, Supabase & Gemini API',
    date: '2024',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // Coding/analytics dashboard
    link: 'https://medium.com/@23it091/building-a-pdf-ppt-insights-app-with-react-supabase-gemini-api-1edaa93d7899',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
              👋 Hello
            </h1>
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
              I'm <span className="text-blue-600">Patel Shail</span>
            </h2>
            {/* Typewriter Animation */}
            <span className="block text-2xl font-bold text-blue-600 mb-6">
              <Typewriter
                words={['Web Developer', 'Data Science']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
            {/* <h3 className="text-2xl sm:text-3xl text-gray-600 mb-8">
              Web Developer | DevOps Enthusiast | Content Creator
            </h3> */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              I'm a passionate web developer who loves building innovative web applications.
              My expertise lies in front-end and back-end development, working with modern
              technologies to create seamless user experiences.
            </p>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-6"
            >
              <motion.a
                href="https://github.com/PATELSHAIL7125"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shail-patel-46701a278"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="h-8 w-8" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center space-x-4"
            >
              <a
                href="mailto:shailpatel7125@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Me
              </a>
              <Link
                to="/projects"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <FaArrowDown className="text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Recently Uploaded Blogs Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50/60 via-white to-blue-100/60 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center mb-14 tracking-tight"
          >
            <span className="text-gray-900">Recently Uploaded </span>
            <span className="text-blue-600">Blogs</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.slice(0, 3).map((blog, idx) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="backdrop-blur-lg bg-white/70 border border-blue-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col hover:shadow-blue-200 hover:scale-[1.025] transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <span className="text-sm text-gray-500 mb-6">{blog.date}</span>
                  <a
                    href={blog.link}
                    className="mt-auto inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200 text-center animate-pulse"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-14">
            <a
              href="/Blog"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-colors duration-200 text-lg tracking-wide"
            >
              See All Blogs
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full py-8 bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Patel Shail. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home; 