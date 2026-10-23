'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const STATS = [
  { label: 'Equipe especializada', value: 15, suffix: '+', desc: 'Profissionais pós-graduados', icon: Users },
  { label: 'Atendimento humanizado', value: 98, suffix: '%', desc: 'Satisfação de pacientes', icon: CheckCircle2 },
  { label: 'Estrutura moderna', value: 350, suffix: 'm²', desc: 'Espaço planejado e climatizado', icon: ShieldCheck },
];

export default function Hero() {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setCounts(
        STATS.map((stat) => {
          const target = stat.value;
          const current = Math.round((target / steps) * currentStep);
          return current > target ? target : current;
        })
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

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
            Clínica de Fisioterapia e Pilates em Maricá
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
            Especialistas em fisioterapia baseada em evidência, pilates clínico, reabilitação e bem-estar para todas as fases da vida. Sua recuperação começa com um diagnóstico preciso e atendimento humanizado.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://wa.me/5521968993480?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20no%20Espaço%20Reabilitar."
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
              <span>Conheça nossos Serviços</span>
            </a>
          </motion.div>

          {/* Interactive animated stat indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0"
          >
            {STATS.map((stat, idx) => {
              return (
                <div key={idx} className="text-center lg:text-left space-y-1">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 text-brand-blue font-space font-bold text-xl md:text-2xl">
                    <span>{counts[idx]}</span>
                    <span className="text-brand-purple">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] md:text-xs font-bold tracking-wide text-brand-blue uppercase leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-brand-muted hidden sm:block">
                    {stat.desc}
                  </div>
                </div>
              );
            })}
          </motion.div>
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
              src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1200&auto=format&fit=crop"
              alt="Pilates Clínico e Reabilitação em Maricá"
              fill
              preload
              sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, 384px"
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
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-space font-bold text-sm text-brand-blue">Espaço Pilates Premium</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5 leading-relaxed">
                    Equipamentos alemães de última geração e ambiente climatizado com luz natural para sua total segurança.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Play Indicator Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center animate-ping absolute" />
              <button
                className="w-16 h-16 rounded-full bg-white hover:bg-brand-purple text-brand-blue hover:text-white shadow-xl flex items-center justify-center transition-all duration-300 pointer-events-auto"
                aria-label="Ver vídeo corporativo"
                onClick={() => {
                  alert("Vídeo institucional em produção. Em breve novidades!");
                }}
              >
                <Play className="w-5 h-5 fill-current ml-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
