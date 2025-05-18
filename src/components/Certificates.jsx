import { motion } from 'framer-motion';

const Certificates = () => {
  // You can add your certificates data here
  const certificates = [
    {
      id: 1,
      title: "Data Structure and Algorithms using Java",
      issuer: "NPTEL",
      imageUrl: "/nptel.png", // Replace with your certificate image path
      link: "https://ik.imagekit.io/59p9nt5fp/Data%20Structure%20and%20Algorithms%20using%20Java%20(1)_page-0001.jpg?updatedAt=1747559377374", // Replace with your certificate verification link
    },
    {
      id: 2,
      title: "Introduction to Programming in C",
      issuer: "NPTEL",
      imageUrl: "/nptel.png", // Replace with your certificate image path
      link: "https://ik.imagekit.io/59p9nt5fp/Introduction%20to%20programming%20in%20C%20(1)_page-0001.jpg?updatedAt=1747559867472", // Replace with your certificate verification link
    },
    {
      id: 3,
      title: "Odoo X MSU Hackathon",
      issuer: "Odoo",
      imageUrl: "/odoo.png", // Replace with your certificate image path
      link: "https://ik.imagekit.io/59p9nt5fp/odoo%20certificate.jpeg?updatedAt=1747560081446", // Replace with your certificate verification link
    },
    {
      id: 4,
      title: "Datacamp Introduction to Python",
      issuer: "Datacamp",
      imageUrl: "/datacamp.png", // Replace with your certificate image path
      link: "https://ik.imagekit.io/59p9nt5fp/datacamp%20intro%20of%20python.jpg?updatedAt=1747560297764", // Replace with your certificate verification link
    },
    {
      id: 5,
      title: "Datacamp Intermediate Python",
      issuer: "Datacamp",
      imageUrl: "/datacamp.png", // Replace with your certificate image path
      link: "https://ik.imagekit.io/59p9nt5fp/datacamp%20intermidete%20python.jpg?updatedAt=1747560377183", // Replace with your certificate verification link
    },
  ];

  return (
    <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {certificate.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {certificate.date}
                </p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 