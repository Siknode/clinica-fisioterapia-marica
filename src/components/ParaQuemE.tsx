'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Activity, Heart, Dumbbell, Brain, Baby, Sparkles, Smile, Footprints } from 'lucide-react';

// Situações citadas nos posts do Instagram da clínica
const CONDICOES = [
  {
    title: 'Dores na coluna',
    description: 'Dores e tensões nas costas e no pescoço que atrapalham a rotina e o sono.',
    icon: ShieldAlert,
  },
  {
    title: 'Dores no joelho',
    description: 'Avaliação e fortalecimento da musculatura que dá suporte ao joelho, com orientação profissional.',
    icon: Footprints,
  },
  {
    title: 'Recuperação de movimentos',
    description: 'Reabilitação para voltar a caminhar sem dor e reconquistar independência e mobilidade.',
    icon: Activity,
  },
  {
    title: 'Postura e mobilidade',
    description: 'Pilates e alongamento para melhorar postura, flexibilidade, equilíbrio e consciência corporal.',
    icon: Sparkles,
  },
  {
    title: 'Estresse e tensão muscular',
    description: 'Massoterapia para desacelerar, aliviar tensões e favorecer a qualidade do sono.',
    icon: Heart,
  },
  {
    title: 'Saúde emocional',
    description: 'Atendimento psicológico com acolhimento para você e orientação para a família.',
    icon: Brain,
  },
  {
    title: 'TDAH e aprendizagem',
    description: 'Psicopedagogia e reforço escolar com acompanhamento individualizado para crianças.',
    icon: Smile,
  },
  {
    title: 'Desenvolvimento infantil',
    description: 'Jiu-jitsu baby e kids para coordenação motora, disciplina, confiança e socialização.',
    icon: Baby,
  },
  {
    title: 'Mais qualidade de vida',
    description: 'Força, alimentação equilibrada e movimento com acompanhamento, em todas as idades.',
    icon: Dumbbell,
  },
];

export default function ParaQuemE() {
  return (
    <section id="para-quem" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-brand-green uppercase"
          >
            Para quem é indicado?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            Cuidado para cada fase da vida
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Seja para aliviar uma dor, recuperar movimentos, cuidar da mente ou acompanhar o desenvolvimento dos pequenos, tem atendimento para você e sua família.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {CONDICOES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-4 sm:p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 flex items-start gap-4 md:gap-5 group"
              >
                {/* Icon Badge */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white border border-slate-200/50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                {/* Content */}
                <div className="space-y-1 md:space-y-2">
                  <h3 className="font-space font-bold text-base md:text-lg text-brand-blue group-hover:text-brand-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
