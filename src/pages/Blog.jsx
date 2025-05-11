import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendar, FaUser, FaTag } from 'react-icons/fa';

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a modern React project with TypeScript and best practices...',
    date: '2024-03-15',
    author: 'Your Name',
    category: 'Development',
    image: '/blog/react-typescript.jpg',
  },
  {
    id: 2,
    title: 'Building Scalable Node.js Applications',
    excerpt: 'Discover the best practices for building scalable and maintainable Node.js applications...',
    date: '2024-03-10',
    author: 'Your Name',
    category: 'Backend',
    image: '/blog/nodejs.jpg',
  },
  // Add more blog posts here
];

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

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blogs by title (case-insensitive)
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blogs</h1>
          <p className="text-xl text-gray-600">
            All my latest articles and project write-ups
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredBlogs.map((blog, idx) => (
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
        ) : (
          <div className="text-center text-gray-500 text-lg py-20">
            No blogs to show. Check back soon!
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog; 