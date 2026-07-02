'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Activity, Heart, HelpCircle, Dumbbell, Star, Baby, Sparkles, Smile } from 'lucide-react';

const CONDICOES = [
  {
    title: 'Dor Lombar',
    description: 'Tratamento de lombalgias agudas e crônicas com foco no fortalecimento de core e reeducação mecânica.',
    icon: ShieldAlert,
  },
  {
    title: 'Dor Cervical',
    description: 'Alívio de tensões no pescoço, torcicolos e cefaleias tencionais através de terapia manual e ergonomia.',
    icon: Sparkles,
  },
  {
    title: 'Hérnia de Disco',
    description: 'Tratamento conservador de ponta para descompressão discal e controle da dor sem necessidade de cirurgia.',
    icon: Activity,
  },
  {
    title: 'Artrose e Desgastes',
    description: 'Preservação da mobilidade articular e fortalecimento periarticular para controle do desgaste natural.',
    icon: Heart,
  },
  {
    title: 'Pós-Operatório',
    description: 'Reabilitação acelerada pós-cirurgia de joelho, quadril, ombro e coluna, visando a completa cicatrização e força.',
    icon: Dumbbell,
  },
  {
    title: 'Atletas',
    description: 'Prevenção de lesões desportivas, melhora do gesto esportivo e recuperação muscular acelerada (recovery).',
    icon: Star,
  },
  {
    title: 'Idosos (Longevidade)',
    description: 'Exercícios focados em equilíbrio, força funcional e autonomia nas atividades diárias do dia a dia.',
    icon: Smile,
  },
  {
    title: 'Gestantes (Pré e Pós-parto)',
    description: 'Fortalecimento do assoalho pélvico, alívio de dores nas costas e preparação física para o parto.',
    icon: Heart,
  },
  {
    title: 'Crianças e Adolescentes',
    description: 'Avaliação e correção postural do crescimento, tratamento de desvios da coluna (escoliose) e lesões infantis.',
    icon: Baby,
  },
];

export default function ParaQuemE() {
  return (
    <section id="para-quem" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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
            Soluções completas para todas as idades e sintomas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Seja para aliviar uma dor crônica, se recuperar de uma lesão ou melhorar sua postura e bem-estar, nossa clínica possui especialistas prontos para ajudar você.
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CONDICOES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 md:p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-brand-green/20 hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-300 flex items-start gap-5 group"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>

                {/* Content */}
                <div className="space-y-2">
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
