import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GameCard from "../components/ui/GameCard";
import Image from "next/image";

const games = [
  {
    id: 1,
    title: "Cyber Warriors",
    description: "Futuristic battle royale with advanced weaponry",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    category: "Action",
    rating: 4.8,
    players: "10M+"
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Epic fantasy adventure in magical lands",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    category: "RPG",
    rating: 4.9,
    players: "8M+"
  },
  {
    id: 3,
    title: "Space Odyssey",
    description: "Intergalactic exploration and combat",
    image: "https://images.unsplash.com/photo-1506318137071-a8e063a4bc0c?auto=format&fit=crop&w=800&q=80",
    category: "Adventure",
    rating: 4.7,
    players: "12M+"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            GameVerse
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Where Gaming Dreams Come Alive
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Start Playing Now
          </motion.button>
        </motion.div>
      </div>

      {/* Featured Games Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <GameCard {...game} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400">★ {game.rating}</span>
                    <span className="text-gray-300">{game.players}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section with Interactive Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose GameVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "High Performance",
                description: "Optimized for smooth gameplay experience",
                icon: "⚡",
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Cross-Platform",
                description: "Play on any device, anywhere",
                icon: "🔄",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Active Community",
                description: "Join millions of players worldwide",
                icon: "🌍",
                color: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-r ${feature.color} p-6 rounded-lg text-center transform transition-all duration-300 hover:shadow-lg`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section with Animated Numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center"
        >
          {[
            { number: "10K+", label: "Active Players", icon: "👥" },
            { number: "500+", label: "Games", icon: "🎮" },
            { number: "24/7", label: "Support", icon: "🛡️" },
            { number: "50+", label: "Tournaments", icon: "🏆" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-purple-400">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-24 text-center bg-gradient-to-r from-purple-900 to-pink-900 p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest updates</p>
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 w-64"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
