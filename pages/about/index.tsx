import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    description: "Passionate about gaming and technology"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
    description: "Bringing creative visions to life"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop",
    description: "Building the future of gaming"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About GameVerse</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a passionate team of gamers and developers dedicated to creating unforgettable gaming experiences.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We push the boundaries of gaming technology to create unique and immersive experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-400">
                Building a strong and supportive gaming community is at the heart of everything we do.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "10K+", label: "Active Players" },
            { number: "500+", label: "Games" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Tournaments" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <h3 className="text-3xl font-bold text-purple-400">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage; 