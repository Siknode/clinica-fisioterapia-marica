'use client';

import Image from 'next/image';
import { Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-slate-100 border-t border-brand-blue-dark/50">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group font-space"
          >
            <Image
              src="/images/logo.png"
              alt="Espaço Reabilitar"
              width={240}
              height={240}
              sizes="112px"
              className="h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>
          <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
            Especialistas em redefinir a sua saúde física por meio de fisioterapia avançada, pilates clínico e reabilitação personalizada.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/espacoreabilitarmarica"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-brand-purple/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5521968993480"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-brand-purple/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-sm font-space font-bold tracking-wider text-brand-purple uppercase mb-6">Navegação</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#diferenciais" className="text-slate-300 hover:text-white transition-colors duration-200">Diferenciais</a>
            </li>
            <li>
              <a href="#especialidades" className="text-slate-300 hover:text-white transition-colors duration-200">Especialidades</a>
            </li>
            <li>
              <a href="#para-quem" className="text-slate-300 hover:text-white transition-colors duration-200">Para Quem é</a>
            </li>
            <li>
              <a href="#estrutura" className="text-slate-300 hover:text-white transition-colors duration-200">Estrutura</a>
            </li>
            <li>
              <a href="#equipe" className="text-slate-300 hover:text-white transition-colors duration-200">Equipe</a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-sm font-space font-bold tracking-wider text-brand-purple uppercase mb-6">Contato</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">
                Av. Maysa, entre a rua 87 e 88<br />
                Cordeirinho, Maricá - RJ<br />
                CEP: 24921-456
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-purple shrink-0" />
              <a href="tel:+5521968993480" className="text-slate-300 hover:text-white transition-colors">
                (21) 96899-3480
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
              <a href="mailto:contato@espacoreabilitarmarica.com.br" className="text-slate-300 hover:text-white transition-colors break-all">
                contato@espacoreabilitarmarica.com.br
              </a>
            </li>
          </ul>
        </div>

        {/* Hours Column */}
        <div>
          <h3 className="text-sm font-space font-bold tracking-wider text-brand-purple uppercase mb-6">Funcionamento</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Segunda a Sexta</span>
              <span className="font-semibold text-white">07:00 - 21:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sábado</span>
              <span className="font-semibold text-white">08:00 - 12:00</span>
            </li>
            <li className="flex justify-between text-slate-400">
              <span>Domingo</span>
              <span className="italic">Fechado</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/5 bg-brand-blue-dark/30 pt-8 pb-24 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs text-slate-400 text-center">
          <div>
            &copy; {currentYear} Espaço Reabilitar. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido por</span>
            <a
              href="https://siknode.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-brand-purple hover:underline decoration-brand-purple transition-all"
            >
              Siknode Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
