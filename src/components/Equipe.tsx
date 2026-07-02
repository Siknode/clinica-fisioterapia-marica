'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, GraduationCap, CheckCircle } from 'lucide-react';

const EQUIPE = [
  {
    name: 'Dr. Thiago Silva',
    role: 'Fisioterapia Traumato-Ortopédica',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Especialista em reabilitação ortopédica ativa e desportiva com foco em técnicas baseadas em evidências.',
    education: [
      'Graduação em Fisioterapia - UFRJ',
      'Pós-Graduação em Fisioterapia Traumato-Ortopédica - USP',
      'Certificação Internacional em Quiropraxia Clínica',
      'Fisioterapeuta Convidado em Eventos de Trail Run em Maricá'
    ],
    whatsappMsg: 'Olá! Gostaria de agendar uma consulta com o Dr. Thiago Silva.'
  },
  {
    name: 'Dra. Mariana Costa',
    role: 'Pilates Clínico & RPG',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Especialista em correção postural, reabilitação da coluna e instrutora de Pilates com 8 anos de experiência.',
    education: [
      'Graduação em Fisioterapia - UFF',
      'Pós-Graduação em RPG (Reeducação Postural Global) - Instituto Philippe Souchard',
      'Certificação Completa em Pilates Clínico (Mat e Aparelhos)',
      'Especialista em Tratamento de Hérnias de Disco'
    ],
    whatsappMsg: 'Olá! Gostaria de agendar uma consulta com a Dra. Mariana Costa.'
  },
  {
    name: 'Dra. Camila Albuquerque',
    role: 'Fonoaudiologia e Fala',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Dedicada à terapia de linguagem, fonologia e motricidade orofacial para crianças e adultos.',
    education: [
      'Graduação em Fonoaudiologia - UNIRIO',
      'Especialização em Linguagem e Processamento Auditivo Central',
      'Aprimoramento em Disfagia e Voz pelo INCA',
      'Atendimento humanizado infantil e geriátrico'
    ],
    whatsappMsg: 'Olá! Gostaria de agendar uma consulta com a Dra. Camila Albuquerque.'
  },
  {
    name: 'Dr. Felipe Dantas',
    role: 'Nutrição Clínica & Esportiva',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop',
    shortDesc: 'Focado em performance saudável, reabilitação metabólica e nutrição comportamental integrativa.',
    education: [
      'Graduação em Nutrição - UERJ',
      'Pós-Graduação em Nutrição Esportiva Funcional',
      'Mestrado em Ciências da Reabilitação e Metabolismo',
      'Criador do Protocolo Nutricional de Longevidade Ativa'
    ],
    whatsappMsg: 'Olá! Gostaria de agendar uma consulta com o Dr. Felipe Dantas.'
  }
];

export default function Equipe() {
  const [selectedMembro, setSelectedMembro] = useState<typeof EQUIPE[0] | null>(null);

  return (
    <section id="equipe" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-brand-purple uppercase"
          >
            Corpo Clínico
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            Especialistas dedicados à sua recuperação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Nossa equipe conta com profissionais altamente qualificados, pós-graduados e em constante atualização científica para entregar o melhor tratamento.
          </motion.p>
        </div>

        {/* Members Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EQUIPE.map((membro, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-slate-50 border border-slate-100 hover:border-brand-purple/20 hover:bg-white rounded-[2rem] p-6 text-center shadow-md shadow-slate-100/30 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Round Photo Container */}
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={membro.image}
                    alt={membro.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
            className="fixed inset-0 bg-brand-blue/60 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedMembro(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white max-w-lg w-full rounded-[2.5rem] p-8 border border-slate-100 shadow-2xl relative space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMembro(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 hover:text-slate-800 transition-all cursor-pointer"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Bio Header */}
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedMembro.image}
                    alt={selectedMembro.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-space font-bold text-xl text-brand-blue">{selectedMembro.name}</h3>
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
                    <GraduationCap className="w-4 h-4 text-brand-purple" />
                    Formação e Especializações
                  </h4>
                  <ul className="space-y-2 text-xs text-brand-muted">
                    {selectedMembro.education.map((edu, idx) => (
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
                  href={`https://wa.me/5521968993480?text=${encodeURIComponent(selectedMembro.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white py-3.5 rounded-full text-xs font-bold transition-all shadow-md shadow-brand-purple/10"
                >
                  <span>Agendar Consulta com Especialista</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
