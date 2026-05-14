import { motion } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useModal } from '../context/ModalContext';
import { cn } from '../lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModal();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="text-xl font-black italic uppercase tracking-tighter sm:text-2xl">
            Nexvora <span className="text-neon">Growth</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-neon",
                  isActive ? "text-neon" : "text-gray-400"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="border-2 border-neon bg-transparent px-6 py-2 text-xs font-black uppercase tracking-widest text-neon transition-all hover:bg-neon hover:text-black cursor-pointer"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-neon" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-x-0 top-full flex flex-col gap-4 border-b border-white/10 bg-black p-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  "text-lg font-bold uppercase tracking-widest transition-colors",
                  isActive ? "text-neon" : "text-white hover:text-neon"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              cn(
                "text-lg font-bold uppercase tracking-widest transition-colors",
                isActive ? "text-neon" : "text-white hover:text-neon"
              )
            }
          >
            Contact
          </NavLink>
          <button
            onClick={() => { setIsMenuOpen(false); openModal(); }}
            className="w-full rounded-lg bg-neon py-4 font-black uppercase tracking-widest text-black neon-glow"
          >
            Get My Free Audit
          </button>
        </motion.div>
      )}
    </header>
  );
}
