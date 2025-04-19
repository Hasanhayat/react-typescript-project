import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          <Link href="/">GameVerse</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-6 items-center"
        >
          <Link 
            href="/games" 
            className={`hover:text-purple-400 transition-colors ${router.pathname === '/games' ? 'text-purple-400' : ''}`}
          >
            Games
          </Link>
          <Link 
            href="/community" 
            className={`hover:text-purple-400 transition-colors ${router.pathname === '/community' ? 'text-purple-400' : ''}`}
          >
            Community
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-purple-400 transition-colors ${router.pathname === '/about' ? 'text-purple-400' : ''}`}
          >
            About
          </Link>
          <button className="bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Sign In
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 