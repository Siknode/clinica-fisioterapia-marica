'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#especialidades' },
  { label: 'Para Quem', href: '#para-quem' },
  { label: 'Espaço', href: '#estrutura' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#resultados' },
  { label: 'Dicas', href: '#blog' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Se o topo da seção estiver na metade superior da tela
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // A rolagem suave até a âncora fica a cargo do LenisProvider (ou do
  // scroll-padding nativo); aqui só fechamos o menu mobile.
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'py-1.5 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'py-2.5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group font-space"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Espaço Reabilitar"
            width={240}
            height={240}
            preload
            sizes="(min-width: 1280px) 96px, (min-width: 640px) 80px, 64px"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-102 ${
              isScrolled ? 'h-14 sm:h-16 xl:h-20' : 'h-16 sm:h-20 xl:h-24'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/40 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`px-3.5 py-2 text-xs font-semibold rounded-full transition-all duration-300 relative ${
                  isActive
                    ? 'text-brand-purple bg-white shadow-sm'
                    : 'text-slate-600 hover:text-brand-blue hover:bg-white/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="https://wa.me/5521968993480?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20no%20Espaço%20Reabilitar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-md shadow-brand-blue/10 hover:shadow-lg hover:shadow-brand-blue/20 group transition-all duration-300"
          >
            <span>Agendar Avaliação</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2.5 -mr-2 rounded-xl text-slate-700 hover:text-brand-purple hover:bg-slate-100/70 transition-colors"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            data-lenis-prevent
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl xl:hidden flex flex-col px-4 sm:px-6 pt-2 pb-6 gap-3 max-h-[calc(100dvh-5rem)] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-brand-purple hover:bg-slate-50 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <hr className="border-slate-100 my-1" />
            <a
              href="https://wa.me/5521968993480?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20no%20Espaço%20Reabilitar."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white px-5 py-4 rounded-xl text-sm font-bold shadow-md shadow-brand-purple/10 group transition-all duration-300"
            >
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
