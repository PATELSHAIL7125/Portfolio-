import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'HTML/CSS', icon: FaReact, level: 95 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs, level: 85 },
      { name: 'Express', icon: SiExpress, level: 80 },
      { name: 'MongoDB', icon: SiMongodb, level: 75 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', icon: FaGitAlt, level: 85 },
      { name: 'Docker', icon: FaDocker, level: 70 },
      { name: 'AWS', icon: FaAws, level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <skill.icon className="w-6 h-6 text-blue-600 mr-2" />
                          <span className="text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Agile Methodologies',
                'UI/UX Design',
                'Technical Writing',
                'Code Review',
                'Performance Optimization',
                'Security Best Practices',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 