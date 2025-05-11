import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const projects = [
  {
    title: 'Nutrition Planner',
    description: 'A platform that generates healthy, personalized meal plans with AI-powered recommendations and nutrition insights.',
    link: 'https://github.com/Manthann07/MSU-FootPrint',
    tags: ['React', 'Node.js', 'MongoDB', 'AI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1740560052706-fd75ee856b44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'PDF/PPT Insights',
    description: 'A web app to extract insights from PDF and PPT files using React, Supabase, and Gemini API.',
    link: 'https://pdfinsights-blue.vercel.app/',
    tags: ['React', 'Supabase', 'Gemini API', 'AI'],
    image: 'https://images.unsplash.com/photo-1579397256979-cc326aefe273?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <span className="text-2xl font-bold text-blue-600">
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
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-blue-200 hover:scale-[1.025] transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 