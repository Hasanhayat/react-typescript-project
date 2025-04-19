import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Image from "next/image";

const events = [
  {
    id: 1,
    title: "Weekly Tournament",
    date: "Every Saturday",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop",
    participants: "100+"
  },
  {
    id: 2,
    title: "Developer Q&A",
    date: "Next Friday",
    time: "6:00 PM",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    participants: "50+"
  },
  {
    id: 3,
    title: "Community Meetup",
    date: "Next Month",
    time: "2:00 PM",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    participants: "200+"
  }
];

const forums = [
  {
    id: 1,
    title: "Game Discussions",
    posts: 1250,
    topics: 45,
    lastPost: "2 hours ago"
  },
  {
    id: 2,
    title: "Technical Support",
    posts: 850,
    topics: 30,
    lastPost: "1 hour ago"
  },
  {
    id: 3,
    title: "Community Events",
    posts: 450,
    topics: 20,
    lastPost: "3 hours ago"
  }
];

export default function Community() {
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
          <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
          <p className="text-gray-400">Connect with fellow gamers and share your experiences</p>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="h-48 relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="text-gray-400 space-y-1">
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Participants: {event.participants}</p>
                  </div>
                  <button className="mt-4 bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    Join Event
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Forums Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-8">Community Forums</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-gray-700 font-semibold">
              <div>Forum</div>
              <div className="text-center">Topics</div>
              <div className="text-center">Posts</div>
              <div className="text-center">Last Post</div>
            </div>
            {forums.map((forum) => (
              <div key={forum.id} className="grid grid-cols-4 gap-4 p-4 border-t border-gray-700">
                <div className="font-semibold">{forum.title}</div>
                <div className="text-center text-gray-400">{forum.topics}</div>
                <div className="text-center text-gray-400">{forum.posts}</div>
                <div className="text-center text-gray-400">{forum.lastPost}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
} 