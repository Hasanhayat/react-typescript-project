import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const GameCard = ({ id, title, description, image, category }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <Link href={`/games/${id}`}>
        <div className="h-48 bg-gray-700 relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-2 right-2 bg-purple-600 px-2 py-1 rounded-full text-sm">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard; 