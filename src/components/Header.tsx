'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Para Quem', href: '#para-quem' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'IA Triagem', href: '#triagem-ia' },
  { label: 'Conhecimento', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-1 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'py-2.5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group font-space"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Espaço Reabilitar"
            className="h-[95px] md:h-[115px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const textFallback = document.getElementById('logo-text-fallback');
              if (textFallback) {
                textFallback.classList.remove('hidden');
                textFallback.classList.add('flex');
              }
            }}
          />
          <div id="logo-text-fallback" className="hidden items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
              <Activity className="w-5 h-5" />
            </div>
            <span className="flex flex-col leading-none">
              <span className="font-space font-bold tracking-wide text-brand-blue text-lg">REABILITAR</span>
              <span className="text-[9px] tracking-[0.2em] font-sans font-bold text-brand-purple mt-0.5">ESPAÇO</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/40 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 relative ${
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
        <div className="hidden lg:flex items-center gap-4">
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
          className="lg:hidden p-2 text-slate-700 hover:text-brand-purple focus:outline-none transition-colors"
          aria-label="Toggle Menu"
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
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl lg:hidden flex flex-col p-6 gap-4"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-brand-purple hover:bg-slate-50 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <hr className="border-slate-100 my-2" />
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
