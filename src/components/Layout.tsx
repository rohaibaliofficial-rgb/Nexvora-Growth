import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AuditModal from './AuditModal';
import WhatsAppButton from './WhatsAppButton';
import { useEffect } from 'react';
import { useModal } from '../context/ModalContext';

export default function Layout() {
  const { openModal } = useModal();

  useEffect(() => {
    // Exit-intent simulation
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // Checking if we already showed it this session could be added
        const hasShown = sessionStorage.getItem('exit-popup-shown');
        if (!hasShown) {
          openModal();
          sessionStorage.setItem('exit-popup-shown', 'true');
        }
      }
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => document.removeEventListener('mouseout', handleMouseOut);
  }, [openModal]);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-neon selection:text-black">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <AuditModal />
      <WhatsAppButton />
    </div>
  );
}
