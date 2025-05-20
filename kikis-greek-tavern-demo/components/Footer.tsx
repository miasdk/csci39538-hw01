import { Instagram } from 'react-feather';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kiki's Greek Tavern</h3>
              <p className="text-gray-300">Authentic Greek cuisine in the heart of Lower Manhattan since 2003.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/menu" className="text-gray-300 hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/reservations" className="text-gray-300 hover:text-white transition-colors">Reservations</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to receive updates on special events and promotions.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  aria-label="Email for newsletter"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  type="submit" 
                  className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Kiki's Greek Tavern. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
            </p>
          </div>
        </div>
      </footer>
        
    )
}

