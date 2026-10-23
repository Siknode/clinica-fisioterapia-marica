'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Respostas baseadas no que a clínica publica no Instagram. Valores, convênios e horários
// não foram divulgados, então as respostas direcionam para o WhatsApp.
const FAQS = [
  {
    question: 'O Pilates tem acompanhamento de fisioterapeuta?',
    answer: 'Sim! No Espaço Reabilitar, cada exercício de Pilates é orientado por um fisioterapeuta, respeitando as necessidades e os limites de cada pessoa.',
  },
  {
    question: 'Quais serviços vocês oferecem?',
    answer: 'Pilates, fisioterapia e reabilitação, massoterapia, psicologia, nutrição, psicopedagogia e reforço escolar, jiu-jitsu baby e kids e musculação, junto com o CTS Cordeirinho.',
  },
  {
    question: 'Como faço para agendar?',
    answer: 'É só chamar no WhatsApp (21) 96899-3480 ou usar o agendamento online. A equipe confirma o melhor dia e horário para você.',
  },
  {
    question: 'Vocês atendem crianças?',
    answer: 'Sim. Temos jiu-jitsu baby e kids, psicopedagogia, reforço escolar e psicologia, com orientação e apoio para toda a família.',
  },
  {
    question: 'Existem pacotes ou promoções?',
    answer: 'De tempos em tempos a clínica monta combinações especiais, como Pilates 2x na semana com consulta nutricional e massagem relaxante. Consulte valores e disponibilidade pelo WhatsApp.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 md:mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-green uppercase">Dúvidas Frequentes</span>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre os atendimentos e o agendamento. Não achou o que procurava? Fale com a gente no WhatsApp.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-3 md:space-y-4">
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
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 p-5 md:p-6 text-left font-space font-bold text-sm md:text-base text-brand-blue focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className={`shrink-0 p-1.5 rounded-xl bg-white border border-slate-200/50 text-brand-blue transition-transform duration-300 ${
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
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-brand-muted leading-relaxed font-sans border-t border-slate-100/50 pt-4">
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
