'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ClipboardList, CheckCircle, ArrowRight, UserRound } from 'lucide-react';
import ExemploBadge from '@/components/ExemploBadge';
import { site, whatsappLink } from '@/lib/site';

// Seção de possibilidade: a Dra. Fernanda Coutinho aparece no logo da clínica; os demais cards
// mostram as áreas atendidas e são substituídos pela foto e apresentação real de cada profissional.
const EQUIPE = [
  {
    name: site.responsavel,
    role: 'Espaço Reabilitar',
    initials: 'FC',
    shortDesc: 'À frente do Espaço Reabilitar, com uma equipe dedicada à saúde completa de toda a família.',
    items: [
      'Aqui entra a formação e as especializações da Dra. Fernanda',
      'Tempo de experiência e áreas de atuação',
      'Uma mensagem pessoal para os pacientes',
    ],
    whatsappMsg: `Olá! Gostaria de agendar um atendimento com a ${site.responsavel}.`,
  },
  {
    name: 'Fisioterapia e Pilates',
    role: 'Fisioterapeutas',
    initials: '',
    shortDesc: 'Profissionais que acompanham cada aluno no Pilates e conduzem a reabilitação.',
    items: ['Pilates com acompanhamento individual', 'Fisioterapia e reabilitação', 'Foto e apresentação de cada fisioterapeuta'],
    whatsappMsg: 'Olá! Gostaria de agendar Pilates ou fisioterapia no Espaço Reabilitar.',
  },
  {
    name: 'Psicologia e Psicopedagogia',
    role: 'Saúde emocional e aprendizagem',
    initials: '',
    shortDesc: 'Acolhimento, escuta e acompanhamento individualizado, com orientação à família.',
    items: ['Atendimento psicológico', 'Psicopedagogia e reforço escolar', 'Foto e apresentação de cada profissional'],
    whatsappMsg: 'Olá! Gostaria de saber sobre psicologia e psicopedagogia no Espaço Reabilitar.',
  },
  {
    name: 'Nutrição e Massoterapia',
    role: 'Bem-estar',
    initials: '',
    shortDesc: 'Orientação alimentar e momentos de relaxamento para cuidar de você por inteiro.',
    items: ['Consulta nutricional', 'Massoterapia e massagem relaxante', 'Foto e apresentação de cada profissional'],
    whatsappMsg: 'Olá! Gostaria de saber sobre nutrição e massoterapia no Espaço Reabilitar.',
  },
];

export default function Equipe() {
  const [selectedMembro, setSelectedMembro] = useState<typeof EQUIPE[0] | null>(null);

  useEffect(() => {
    if (!selectedMembro) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedMembro(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedMembro]);

  return (
    <section id="equipe" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 md:mb-16">
          <div className="flex flex-col items-center gap-3">
            <ExemploBadge>Exemplo: fotos e apresentações da equipe</ExemploBadge>
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Nossa equipe</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            Quem cuida de você
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Uma equipe multidisciplinar para cuidar do corpo e da mente, em cada fase da vida.
          </motion.p>
        </div>

        <p className="sm:hidden -mt-4 mb-4 text-[11px] font-semibold text-brand-muted flex items-center justify-center gap-1.5">
          Arraste para o lado para conhecer a equipe <ArrowRight className="w-3.5 h-3.5" />
        </p>

        {/* Carrossel no mobile, grade a partir de 640px */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0 scrollbar-none">
          {EQUIPE.map((membro, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="w-[78%] sm:w-auto shrink-0 snap-center bg-slate-50 border border-slate-100 hover:border-brand-purple/20 hover:bg-white rounded-[2rem] p-6 text-center shadow-md shadow-slate-100/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Round Photo Container */}
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white">
                  {membro.initials ? (
                    <span className="font-space font-bold text-3xl">{membro.initials}</span>
                  ) : (
                    <UserRound className="w-12 h-12 text-white/70" />
                  )}
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <h3 className="font-space font-bold text-base md:text-lg text-brand-blue group-hover:text-brand-purple transition-colors duration-300">
                    {membro.name}
                  </h3>
                  <div className="text-[10px] md:text-xs font-bold tracking-wider text-brand-purple uppercase">
                    {membro.role}
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans line-clamp-3">
                    {membro.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => setSelectedMembro(membro)}
                  className="w-full bg-white hover:bg-brand-blue text-brand-blue hover:text-white border border-slate-200 hover:border-transparent py-2.5 rounded-full text-xs font-bold transition-all duration-300 shadow-sm cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMembro !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-blue/60 backdrop-blur-md z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
            onClick={() => setSelectedMembro(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              data-lenis-prevent
              role="dialog"
              aria-modal="true"
              className="bg-white max-w-lg w-full max-h-[90dvh] overflow-y-auto rounded-t-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 border border-slate-100 shadow-2xl relative space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMembro(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-800 transition-all cursor-pointer"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Bio Header */}
              <div className="flex items-center gap-4 sm:gap-5 pr-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-slate-100 shrink-0 bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white">
                  {selectedMembro.initials ? (
                    <span className="font-space font-bold text-2xl">{selectedMembro.initials}</span>
                  ) : (
                    <UserRound className="w-8 h-8 text-white/70" />
                  )}
                </div>
                <div>
                  <h3 className="font-space font-bold text-lg sm:text-xl text-brand-blue">{selectedMembro.name}</h3>
                  <div className="text-xs font-bold text-brand-purple uppercase tracking-wide mt-1">
                    {selectedMembro.role}
                  </div>
                </div>
              </div>

              {/* Bio Body */}
              <div className="space-y-4">
                <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans italic">
                  &ldquo;{selectedMembro.shortDesc}&rdquo;
                </p>
                <hr className="border-slate-100" />
                <div className="space-y-3">
                  <h4 className="font-space font-bold text-sm text-brand-blue flex items-center gap-1.5">
                    <ClipboardList className="w-4 h-4 text-brand-purple" />
                    O que vai aparecer aqui
                  </h4>
                  <ul className="space-y-2 text-xs text-brand-muted">
                    {selectedMembro.items.map((edu, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Whatsapp CTA */}
              <div className="pt-2">
                <a
                  href={whatsappLink(selectedMembro.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white py-3.5 rounded-full text-xs font-bold transition-all shadow-md shadow-brand-purple/10"
                >
                  <span>Agendar pelo WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
