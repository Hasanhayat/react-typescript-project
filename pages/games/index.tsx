import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import GameCard from "../../components/ui/GameCard";

const games = [
  {
    id: 1,
    title: "Cyber Warriors",
    description: "Futuristic battle royale with advanced weaponry",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    category: "Action"
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Epic fantasy adventure in magical lands",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    category: "RPG"
  },
  {
    id: 3,
    title: "Space Odyssey",
    description: "Intergalactic exploration and combat",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop",
    category: "Adventure"
  },
  {
    id: 4,
    title: "Neon Racer",
    description: "High-speed racing in futuristic cities",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    category: "Racing"
  },
  {
    id: 5,
    title: "Dragon's Legacy",
    description: "Epic fantasy RPG with dragons",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop",
    category: "RPG"
  },
  {
    id: 6,
    title: "Zombie Apocalypse",
    description: "Survive in a world overrun by zombies",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    category: "Survival"
  }
];

export default function Games() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Games</h1>
          <p className="text-gray-400">Discover our collection of amazing games</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
} 