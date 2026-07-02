'use client';

import { Activity, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-slate-100 border-t border-brand-blue-dark/50">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Espaço Reabilitar"
              className="h-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const textFallback = document.getElementById('footer-logo-text-fallback');
                if (textFallback) {
                  textFallback.classList.remove('hidden');
                  textFallback.classList.add('flex');
                }
              }}
            />
            <div id="footer-logo-text-fallback" className="hidden items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform duration-300">
                <Activity className="w-5 h-5 text-brand-purple" />
              </div>
              <span className="flex flex-col leading-none">
                <span className="font-space font-bold tracking-wide text-white text-lg">REABILITAR</span>
                <span className="text-[9px] tracking-[0.2em] font-sans font-bold text-brand-purple mt-0.5">ESPAÇO</span>
              </span>
            </div>
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
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-purple shrink-0" />
              <a href="mailto:contato@espacoreabilitarmarica.com.br" className="text-slate-300 hover:text-white transition-colors">
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
      <div className="border-t border-white/5 bg-brand-blue-dark/30 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
