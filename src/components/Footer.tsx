import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { openModal } = useModal();

  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/nexvoragrowthofficials/" },
    { Icon: Facebook, href: "https://www.facebook.com/nexvoragrowth/" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: MessageCircle, href: "https://wa.me/+923145074443" },
  ];

  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <Link to="/" className="flex items-center gap-2">
                <span className="text-2xl font-black uppercase tracking-tighter">
                  Nexvora <span className="text-neon">Growth</span>
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-gray-400">
                Accelerating business scale through data-driven performance marketing and aggressive growth strategies.
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-neon hover:text-neon"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-neon transition-colors">About Us</Link></li>
                <li><Link to="/case-studies" className="hover:text-neon transition-colors">Case Studies</Link></li>
                <li><Link to="/contact" className="hover:text-neon transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-neon transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white">Services</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/services" className="hover:text-neon transition-colors">SEO</Link></li>
                <li><Link to="/services" className="hover:text-neon transition-colors">PPC Ads</Link></li>
                <li><Link to="/services" className="hover:text-neon transition-colors">Social Media Marketing</Link></li>
                <li><Link to="/services" className="hover:text-neon transition-colors">Email Marketing</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="mb-6 font-bold uppercase tracking-widest text-white">Let's Grow</h4>
              <button
                onClick={openModal}
                className="group flex items-center gap-2 font-bold text-neon transition-all hover:gap-3"
              >
                <span>Free Strategy Audit</span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-white/10 pt-10 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 Nexvora Growth Marketing Agency. All rights reserved.</p>
          <div className="mt-4 flex gap-8 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
