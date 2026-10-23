'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, Apple, Brain, BookOpen, Dumbbell, Hand, Heart, Shield, ArrowRight, type LucideIcon } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

type Especialidade = {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  ctaText: string;
  whatsappMessage: string;
};

// Serviços listados na bio, nas legendas e na fachada da clínica (Instagram @espacoreabilitarmarica).
// Sem foto real do serviço, o card mostra o ícone sobre o degradê da marca.
const ESPECIALIDADES: Especialidade[] = [
  {
    title: 'Pilates',
    description: 'Fortalecimento, postura, mobilidade e alívio de tensões, com exercícios adaptados e acompanhamento de fisioterapeuta.',
    icon: Heart,
    image: '/images/clinic_7.webp',
    ctaText: 'Agendar aula de Pilates',
    whatsappMessage: 'Olá! Gostaria de agendar uma aula de Pilates no Espaço Reabilitar.',
  },
  {
    title: 'Fisioterapia e Reabilitação',
    description: 'Avaliação e tratamento para recuperar movimentos, aliviar dores e voltar a fazer as tarefas do dia a dia com independência.',
    icon: Activity,
    image: '/images/clinic_2.webp',
    ctaText: 'Agendar avaliação',
    whatsappMessage: 'Olá! Gostaria de agendar uma avaliação de fisioterapia no Espaço Reabilitar.',
  },
  {
    title: 'Massoterapia',
    description: 'Alívio de tensões musculares, menos cansaço e mais relaxamento. Um momento de autocuidado para o corpo e a mente.',
    icon: Hand,
    ctaText: 'Agendar massagem',
    whatsappMessage: 'Olá! Gostaria de agendar uma sessão de massoterapia no Espaço Reabilitar.',
  },
  {
    title: 'Nutrição',
    description: 'Consulta nutricional com orientação profissional para melhorar a alimentação e cuidar da sua saúde.',
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
    ctaText: 'Agendar consulta',
    whatsappMessage: 'Olá! Gostaria de agendar uma consulta com a nutricionista do Espaço Reabilitar.',
  },
  {
    title: 'Psicologia',
    description: 'Atendimento psicológico com acolhimento e escuta, inclusive orientação e apoio à família.',
    icon: Brain,
    ctaText: 'Falar com a psicóloga',
    whatsappMessage: 'Olá! Gostaria de agendar um atendimento com a psicóloga do Espaço Reabilitar.',
  },
  {
    title: 'Psicopedagogia e Reforço Escolar',
    description: 'Apoio à aprendizagem e ao desenvolvimento, com acompanhamento individualizado para crianças com TDAH e outras dificuldades.',
    icon: BookOpen,
    ctaText: 'Saber mais',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre psicopedagogia e reforço escolar no Espaço Reabilitar.',
  },
  {
    title: 'Jiu-jitsu Baby e Kids',
    description: 'Coordenação motora, disciplina, confiança, respeito e socialização, de forma divertida e adequada à idade.',
    icon: Shield,
    ctaText: 'Conhecer as aulas',
    whatsappMessage: 'Olá! Gostaria de saber sobre as aulas de jiu-jitsu baby e kids no Espaço Reabilitar.',
  },
  {
    title: 'Musculação',
    description: 'Treino de força para fortalecer o corpo, ganhar mobilidade e mais qualidade de vida, junto com o CTS Cordeirinho.',
    icon: Dumbbell,
    image: '/images/clinic_9.jpg',
    ctaText: 'Saber mais',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre musculação no Espaço Reabilitar / CTS Cordeirinho.',
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" className="py-16 md:py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Nossos Serviços</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
              Tudo o que sua família precisa, em um só lugar
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Do Pilates à psicologia, cada atendimento é pensado para as necessidades de quem chega até nós.
            </p>
          </div>
          <a
            href={whatsappLink('Olá! Gostaria de tirar dúvidas sobre os serviços do Espaço Reabilitar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-blue font-bold px-6 py-3 rounded-full text-xs transition-all duration-300 shadow-sm"
          >
            <span>Dúvidas sobre os serviços?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <p className="md:hidden -mt-4 mb-4 text-[11px] font-semibold text-brand-muted flex items-center gap-1.5">
          Arraste para o lado para ver mais <ArrowRight className="w-3.5 h-3.5" />
        </p>
        {/* Carrossel no mobile, grade a partir do tablet */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-none">
          {ESPECIALIDADES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="w-[82%] sm:w-[60%] md:w-auto shrink-0 snap-start bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-purple/20 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 82vw"
                      className="object-cover transition-transform duration-750 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-purple flex items-center justify-center">
                      <Icon className="w-16 h-16 text-white/25 stroke-[1.2]" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white text-brand-purple flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-8 flex-1 flex flex-col justify-between space-y-5 md:space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-space font-bold text-lg text-brand-blue group-hover:text-brand-purple transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA button */}
                  <a
                    href={whatsappLink(item.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-purple hover:underline decoration-brand-purple transition-all group-hover:translate-x-1 duration-300"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
