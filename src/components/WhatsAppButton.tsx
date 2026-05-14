import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/+923145074443";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 1 }}
      whileHover={{ scale: 1.15 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle fill="currentColor" className="h-8 w-8 text-white" />
    </motion.a>
  );
}
