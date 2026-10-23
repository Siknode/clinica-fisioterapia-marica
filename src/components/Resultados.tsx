'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, ChevronLeft, ChevronRight, UserRound } from 'lucide-react';
import ExemploBadge from '@/components/ExemploBadge';

// Seção de possibilidade: mostra como os depoimentos reais (ex.: avaliações do Google) vão aparecer.
// Os textos abaixo são ilustrativos e não atribuídos a pessoas reais.
const TESTIMONIALS = [
  {
    name: 'Depoimento de aluno(a)',
    treatment: 'Pilates',
    text: 'Aqui aparece o depoimento de um aluno de Pilates contando como as aulas com acompanhamento de fisioterapeuta ajudaram na postura e nas dores do dia a dia.',
    rating: 5,
  },
  {
    name: 'Depoimento de paciente',
    treatment: 'Fisioterapia',
    text: 'Aqui aparece o relato de um paciente sobre a recuperação dos movimentos e a volta às atividades com mais independência e menos dor.',
    rating: 5,
  },
  {
    name: 'Depoimento de família',
    treatment: 'Jiu-jitsu Kids e Psicopedagogia',
    text: 'Aqui aparece a opinião de uma família sobre o desenvolvimento das crianças nas aulas e no acompanhamento do Espaço Reabilitar.',
    rating: 5,
  },
];

export default function Resultados() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((activeIdx + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((activeIdx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="resultados" className="py-16 md:py-24 bg-brand-light relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-brand-green/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Google Reviews summary */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <ExemploBadge>Exemplo: depoimentos dos pacientes</ExemploBadge>
            <span className="text-xs font-bold tracking-widest text-brand-green uppercase">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight leading-tight">
            Quem passa por aqui, recomenda
          </h2>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed max-w-md mx-auto lg:mx-0">
            Nesta seção entram as avaliações reais dos pacientes, que ajudam novas famílias a escolherem o Espaço Reabilitar com confiança.
          </p>

          {/* Google Review Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-100 shadow-md inline-block max-w-sm w-full text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-space font-bold text-brand-blue">Google</span>
                <span className="text-xs font-bold text-brand-muted">Avaliações</span>
              </div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="pt-4 text-xs text-brand-muted leading-relaxed">
              As avaliações do Google da clínica podem ser exibidas aqui automaticamente, com nota média e comentários.
            </p>
          </div>
        </div>

        {/* Right Column: Sliding Testimonials */}
        <div className="lg:col-span-7 relative w-full flex flex-col items-center">
          <div className="relative w-full max-w-xl min-h-[340px] sm:min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) handleNext();
                  else if (info.offset.x > 60) handlePrev();
                }}
                className="touch-pan-y cursor-grab active:cursor-grabbing w-full bg-white p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2rem] border border-slate-100 shadow-xl flex flex-col justify-between space-y-6"
              >
                {/* Quote details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>
                    <MessageSquare className="w-8 h-8 text-brand-green/20" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans italic">
                    &ldquo;{TESTIMONIALS[activeIdx].text}&rdquo;
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full shrink-0 bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
                    <UserRound className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-sm text-brand-blue">{TESTIMONIALS[activeIdx].name}</h4>
                    <div className="text-[10px] text-brand-muted mt-0.5">
                      {TESTIMONIALS[activeIdx].treatment}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial navigation arrows */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-slate-200 text-brand-blue hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="p-1.5 cursor-pointer"
                  aria-label={`Ir para slide ${i + 1}`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      i === activeIdx ? 'w-6 bg-brand-green' : 'w-2 bg-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-200 text-brand-blue hover:bg-slate-50 transition-all cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
