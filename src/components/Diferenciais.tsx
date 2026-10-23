'use client';

import { motion } from 'framer-motion';
import { Users, Stethoscope, Sparkles, Heart, Baby } from 'lucide-react';

// Diferenciais extraídos das legendas do Instagram da clínica
const DIFERENCIAIS = [
  {
    icon: Stethoscope,
    title: 'Pilates com fisioterapeuta',
    description: 'Cada exercício é orientado por um fisioterapeuta, respeitando as necessidades e os limites de cada pessoa.',
  },
  {
    icon: Users,
    title: 'Saúde completa em um só lugar',
    description: 'Pilates, fisioterapia, massoterapia, psicologia, nutrição e psicopedagogia, sem precisar rodar a cidade.',
  },
  {
    icon: Baby,
    title: 'Para toda a família',
    description: 'Do jiu-jitsu baby e kids ao acompanhamento de adultos e idosos: cuidado para cada fase da vida.',
  },
  {
    icon: Heart,
    title: 'Atendimento individualizado',
    description: 'Cada pessoa é compreendida, respeitada e acompanhada de acordo com os seus objetivos.',
  },
  {
    icon: Sparkles,
    title: 'Ambiente acolhedor',
    description: 'Limpeza, organização e carinho em cada detalhe para receber alunos e pacientes com conforto.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-green-light/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-blue-light/10 blur-3xl -z-10" />

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
            Por que escolher o Espaço Reabilitar?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            Cuidado de verdade, para toda a família
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            No Espaço Reabilitar, em Cordeirinho, você encontra uma equipe que cuida do corpo e da mente, com acompanhamento profissional em cada etapa.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {DIFERENCIAIS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-5 sm:p-8 rounded-3xl group"
              >
                <div className="flex items-start gap-4 sm:block sm:space-y-6">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm shadow-brand-green/5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-3">
                    <h3 className="font-space font-bold text-base sm:text-lg text-brand-blue group-hover:text-brand-green transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
