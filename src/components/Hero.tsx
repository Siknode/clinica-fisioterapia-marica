'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, HeartHandshake, MapPin, Stethoscope } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

// Destaques reais tirados do Instagram da clínica (sem números inventados)
const HIGHLIGHTS = [
  { label: 'Equipe multidisciplinar', icon: Stethoscope },
  { label: 'Saúde para toda família', icon: HeartHandshake },
  { label: 'Cordeirinho, Maricá', icon: MapPin },
];

export default function Hero() {
  return (
    <section className="relative lg:min-h-screen flex items-center justify-center pt-28 sm:pt-32 lg:pt-40 pb-12 md:pb-16 overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-blue-light/20">
      {/* Decorative background blurs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-[10px] sm:text-xs font-bold tracking-wide uppercase"
          >
            <span className="w-2 h-2 shrink-0 rounded-full bg-brand-purple animate-ping" />
            Pilates • Fisioterapia • Bem-estar em Maricá
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[2.5rem] sm:text-5xl lg:text-6xl font-space font-bold text-brand-blue leading-[1.1] tracking-tight"
          >
            Movimento é <br className="hidden md:inline" />
            <span className="gradient-text bg-gradient-to-r from-brand-blue to-brand-purple">qualidade de vida.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-lg text-brand-muted font-sans font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Pilates com acompanhamento de fisioterapeuta, fisioterapia, massoterapia, psicologia, nutrição, psicopedagogia e jiu-jitsu kids no mesmo lugar. Cuidado de verdade para cada fase da vida da sua família.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-4 rounded-full text-sm font-bold shadow-lg shadow-brand-purple/10 hover:shadow-xl hover:shadow-brand-purple/20 hover:scale-102 transition-all duration-300 group"
            >
              <span>Agendar Avaliação</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#especialidades"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-blue px-8 py-4 rounded-full text-sm font-bold shadow-sm hover:shadow transition-all duration-300"
            >
              <span>Conheça nossos serviços</span>
            </a>
          </motion.div>

          {/* Destaques */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-3 pt-6 border-t border-slate-200/60"
          >
            {HIGHLIGHTS.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-blue">
                <span className="w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right Visual Image Container */}
        <div className="lg:col-span-5 relative z-10 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Elegant Background Image */}
            <Image
              src="/images/clinic_10.jpg"
              alt="Aluna fazendo Pilates no Espaço Reabilitar, em Cordeirinho"
              fill
              preload
              sizes="(min-width: 640px) 448px, 384px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-transparent to-transparent" />

            {/* Floating Premium Card 1 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl glass shadow-lg text-left"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-brand-purple/10 text-brand-purple">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space font-bold text-sm text-brand-blue">Pilates com fisioterapeuta</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5 leading-relaxed">
                    Cada exercício é orientado por um fisioterapeuta, respeitando as necessidades e os limites de cada pessoa.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
