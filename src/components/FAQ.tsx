'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'Preciso de encaminhamento médico para começar a Fisioterapia ou Pilates?',
    answer: 'Não! Nossos fisioterapeutas são profissionais de primeiro contato. Realizamos uma avaliação física e clínica minuciosa no primeiro dia para traçar seu diagnóstico cinético-funcional e prescrever o tratamento ideal, seja fisioterapia, pilates ou encaminhamento médico se necessário.',
  },
  {
    question: 'Como funciona a primeira consulta / avaliação?',
    answer: 'A avaliação dura aproximadamente 1 hora. Nela, o especialista conversa sobre seus sintomas, histórico clínico, analisa exames de imagem (se houver) e realiza testes físicos de mobilidade, força, postura e dor. Com base nisso, traçamos seu plano terapêutico personalizado com prazos e metas claras.',
  },
  {
    question: 'Vocês atendem planos de saúde / convênios?',
    answer: 'Trabalhamos na modalidade de atendimento particular e emitimos recibo completo/nota fiscal com toda a documentação clínica necessária (laudos, evolução) para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde de forma simples e rápida.',
  },
  {
    question: 'Qual a duração das sessões e qual a frequência ideal?',
    answer: 'As sessões de fisioterapia clínica e as aulas de Pilates duram cerca de 50 a 60 minutos. A frequência ideal varia entre 1 a 3 vezes por semana, dependendo do seu quadro álgico (dor) e dos objetivos definidos na avaliação inicial.',
  },
  {
    question: 'A clínica possui estacionamento próprio e acessibilidade para pessoas com mobilidade reduzida?',
    answer: 'Sim! Nossa clínica em Maricá conta com estacionamento fácil no local, rampa de acesso, portas largas, banheiros adaptados e consultórios no andar térreo para garantir o total conforto, segurança e acessibilidade de todos os nossos pacientes.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Perguntas mais comuns sobre nossa clínica
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Esclareça suas principais dúvidas sobre o funcionamento dos atendimentos, agendamento de consultas e reembolsos.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-100 hover:border-brand-green/20 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 overflow-hidden"
              >
                {/* Accordion trigger button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-space font-bold text-sm md:text-base text-brand-blue focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`p-1.5 rounded-xl bg-white border border-slate-200/50 text-brand-blue transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-green text-white border-transparent' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion content with Framer Motion height transition */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-brand-muted leading-relaxed font-sans border-t border-slate-100/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
