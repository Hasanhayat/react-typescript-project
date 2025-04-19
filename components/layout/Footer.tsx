import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-24 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GameVerse</h3>
            <p className="text-gray-400">Your ultimate gaming destination</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
              <li><Link href="/games" className="text-gray-400 hover:text-purple-400">Games</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-purple-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-purple-400">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-purple-400">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">Discord</a>
              <a href="#" className="text-gray-400 hover:text-purple-400">YouTube</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 GameVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 