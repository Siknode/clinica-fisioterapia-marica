'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

// Botão fixo de WhatsApp: aparece depois que o visitante passa do Hero,
// para que o agendamento fique sempre a um toque no celular.
export default function WhatsAppFlutuante() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5521968993480?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20no%20Espaço%20Reabilitar."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className={`fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-6 md:bottom-6 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 pl-4 pr-5 py-3.5 text-sm font-bold transition-all duration-300 hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Agendar</span>
    </a>
  );
}
