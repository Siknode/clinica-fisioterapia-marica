'use client';

import { motion } from 'framer-motion';
import { Users, UserCheck, Layout, Cpu, Heart, ShieldAlert } from 'lucide-react';

const DIFERENCIAIS = [
  {
    icon: Users,
    title: 'Equipe Multidisciplinar',
    description: 'Fisioterapeutas, educadores físicos e nutricionistas trabalhando juntos no seu plano terapêutico.',
  },
  {
    icon: UserCheck,
    title: 'Atendimento Personalizado',
    description: 'Sessões individuais focadas no seu diagnóstico específico e evolução contínua.',
  },
  {
    icon: Layout,
    title: 'Estrutura Premium',
    description: 'Consultórios privativos, estúdio de Pilates completo e ambiente planejado para o seu conforto.',
  },
  {
    icon: Cpu,
    title: 'Tecnologia em Reabilitação',
    description: 'Equipamentos de fotobiomodulação, biofeedback e termografia para otimizar seus resultados.',
  },
  {
    icon: Heart,
    title: 'Ambiente Acolhedor',
    description: 'Espaço humanizado com foco no bem-estar físico e mental, proporcionando uma experiência leve.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-green-light/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-blue-light/10 blur-3xl -z-10" />

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
            Por que escolher o Espaço Reabilitar?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            A excelência que o seu corpo merece
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Combinamos ciência médica, cuidado humanizado e infraestrutura de ponta para proporcionar uma jornada de reabilitação inovadora e altamente eficaz.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFERENCIAIS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-sm shadow-brand-green/5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-space font-bold text-lg text-brand-blue group-hover:text-brand-green transition-colors duration-300">
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
