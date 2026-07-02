'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Roberto Souza',
    location: 'Maricá, RJ',
    treatment: 'Fisioterapia para Dor Lombar',
    text: 'Cheguei à clínica quase sem conseguir andar devido a uma crise forte de hérnia de disco. O atendimento do Dr. Thiago foi excepcional. Em poucas sessões eu já não sentia dor e agora faço Pilates para manutenção. Excelente equipe!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Ana Carolina Mendes',
    location: 'Maricá, RJ',
    treatment: 'Pilates Clínico e Postura',
    text: 'O estúdio de Pilates é maravilhoso, com aparelhos novos e iluminação incrível. As instrutoras são super atenciosas e acompanham cada movimento de perto para garantir que eu faça o exercício correto. Minha postura melhorou 100%.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop'
  },
  {
    name: 'Carlos Eduardo Santos',
    location: 'Maricá, RJ',
    treatment: 'Reabilitação de Joelho (Pós-Operatório)',
    text: 'Fiz minha reabilitação pós-cirurgia de ligamento cruzado do joelho na Espaço Reabilitar. A infraestrutura é completa e a integração com o nutricionista me ajudou demais a recuperar massa magra. Voltei a correr antes do tempo previsto!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
  }
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
    <section id="resultados" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-brand-green/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 rounded-full bg-brand-blue/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Google Reviews summary */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase">Resultados Reais</span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight leading-tight">
            A opinião de quem confia em nosso trabalho
          </h2>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed max-w-md mx-auto lg:mx-0">
            A nossa maior recompensa é ver a evolução, superação e o sorriso de quem passa pela nossa clínica todos os dias.
          </p>

          {/* Google Review Card */}
          <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-md inline-block max-w-sm w-full">
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
            <div className="pt-4 flex items-center justify-between">
              <div>
                <div className="text-3xl font-space font-bold text-brand-blue">5.0</div>
                <div className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mt-0.5">Nota média geral</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-brand-green flex items-center justify-end gap-1">
                  <Check className="w-4 h-4" /> Avaliações Reais
                </div>
                <div className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mt-0.5">
                  Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sliding Testimonials */}
        <div className="lg:col-span-7 relative w-full flex flex-col items-center">
          <div className="relative w-full max-w-xl aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl flex flex-col justify-between space-y-6"
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
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-sans italic">
                    &ldquo;{TESTIMONIALS[activeIdx].text}&rdquo;
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={TESTIMONIALS[activeIdx].avatar}
                      alt={TESTIMONIALS[activeIdx].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-space font-bold text-sm text-brand-blue">{TESTIMONIALS[activeIdx].name}</h4>
                    <div className="text-[10px] text-brand-muted mt-0.5">
                      {TESTIMONIALS[activeIdx].treatment} &bull; {TESTIMONIALS[activeIdx].location}
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
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIdx ? 'w-6 bg-brand-green' : 'bg-slate-300'
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
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
