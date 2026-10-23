'use client';

import Image from 'next/image';
import { Instagram, MapPin, Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { site, whatsappLink } from '@/lib/site';

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
            Pilates, fisioterapia, massoterapia, psicologia, nutrição, psicopedagogia e jiu-jitsu kids em Cordeirinho, Maricá. Saúde completa para toda família.
          </p>
          <div className="flex gap-4">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-purple/30 hover:bg-brand-purple/10 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={whatsappLink()}
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
              <a href="#especialidades" className="text-slate-300 hover:text-white transition-colors duration-200">Serviços</a>
            </li>
            <li>
              <a href="#para-quem" className="text-slate-300 hover:text-white transition-colors duration-200">Para Quem é</a>
            </li>
            <li>
              <a href="#estrutura" className="text-slate-300 hover:text-white transition-colors duration-200">Nosso espaço</a>
            </li>
            <li>
              <a href="#blog" className="text-slate-300 hover:text-white transition-colors duration-200">Dicas</a>
            </li>
            <li>
              <a href="#contato" className="text-slate-300 hover:text-white transition-colors duration-200">Contato</a>
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
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
              <span className="flex flex-col gap-1">
                <a href={`tel:+${site.phoneE164}`} className="text-slate-300 hover:text-white transition-colors">{site.phoneDisplay}</a>
                <a href={`tel:+${site.phone2E164}`} className="text-slate-300 hover:text-white transition-colors">{site.phone2Display}</a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="w-4 h-4 text-brand-purple shrink-0" />
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                @{site.instagram}
              </a>
            </li>
          </ul>
        </div>

        {/* Agendamento Column */}
        <div>
          <h3 className="text-sm font-space font-bold tracking-wider text-brand-purple uppercase mb-6">Agende</h3>
          <div className="space-y-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-brand-blue hover:bg-slate-100 py-3 rounded-full text-sm font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={site.agendamentoOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 py-3 rounded-full text-sm font-bold transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              Agendamento online
            </a>
          </div>
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
