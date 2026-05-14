import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import StrategyForm from './StrategyForm';
import { cn } from '../lib/utils';

export default function AuditModal() {
  const { isOpen, closeModal } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden bg-[#0B0B0B] shadow-[0_0_50px_rgba(198,255,0,0.15)]",
              "border-2 border-neon flex flex-col"
            )}
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-50 text-gray-400 transition-colors hover:text-neon"
            >
              <X className="h-6 w-6" />
            </button>

            <StrategyForm 
              className="p-10"
              title="FREE STRATEGY"
              subtitle="LOCK IN YOUR GROWTH ROADMAP"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
