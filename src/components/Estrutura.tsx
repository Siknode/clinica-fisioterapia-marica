'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight, Images } from 'lucide-react';

// Fotos reais do Instagram da clínica
const GRID_ITEMS = [
  {
    src: '/images/clinic_7.webp',
    title: 'Pilates',
    desc: 'Aulas com acompanhamento de fisioterapeuta, respeitando o ritmo de cada aluno.',
    gridClass: 'col-span-2 md:col-span-2',
    lightboxStartIdx: 0,
  },
  {
    src: '/images/clinic_2.webp',
    title: 'Fisioterapia',
    desc: 'Atendimento individual para aliviar dores e recuperar movimentos.',
    gridClass: 'col-span-1 md:col-span-1',
    lightboxStartIdx: 1,
  },
  {
    src: '/images/clinic_1.jpg',
    title: 'Nossa fachada',
    desc: 'Espaço Reabilitar e CTS Cordeirinho, na Av. Maysa, em Cordeirinho.',
    gridClass: 'col-span-1 md:col-span-3',
    lightboxStartIdx: 4,
  },
];

const LIGHTBOX_IMAGES = [
  {
    src: '/images/clinic_7.webp',
    title: 'Pilates',
    desc: 'Aulas com acompanhamento de fisioterapeuta, respeitando o ritmo de cada aluno.',
  },
  {
    src: '/images/clinic_2.webp',
    title: 'Fisioterapia',
    desc: 'Atendimento individual para aliviar dores e recuperar movimentos.',
  },
  {
    src: '/images/clinic_10.jpg',
    title: 'Pilates nos aparelhos',
    desc: 'Exercícios orientados para força, mobilidade e consciência corporal.',
  },
  {
    src: '/images/clinic_9.jpg',
    title: 'Alongamento e mobilidade',
    desc: 'Movimento com calma e orientação, respeitando os limites do corpo.',
  },
  {
    src: '/images/clinic_1.jpg',
    title: 'Nossa fachada',
    desc: 'Espaço Reabilitar e CTS Cordeirinho, na Av. Maysa, em Cordeirinho.',
  },
];

export default function Estrutura() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const goNext = () =>
    setActiveIdx((idx) => (idx === null ? idx : (idx + 1) % LIGHTBOX_IMAGES.length));
  const goPrev = () =>
    setActiveIdx((idx) => (idx === null ? idx : (idx - 1 + LIGHTBOX_IMAGES.length) % LIGHTBOX_IMAGES.length));

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    goNext();
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goPrev();
  };

  // Teclado: Esc fecha, setas navegam
  const isOpen = activeIdx !== null;
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <section id="estrutura" className="py-16 md:py-24 bg-brand-light relative">
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
            Nossa Estrutura
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            Conheça o nosso espaço
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Um ambiente limpo, organizado e acolhedor, preparado com carinho para receber alunos, pacientes e suas famílias.
          </motion.p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-[170px] sm:auto-rows-[240px] md:auto-rows-[300px]">
          {GRID_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden group cursor-pointer border border-slate-100 bg-white shadow-md ${item.gridClass}`}
              onClick={() => setActiveIdx(item.lightboxStartIdx)}
            >
              {/* Single Image Layout */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes={idx === 2 ? '(min-width: 768px) 1200px, 50vw' : idx === 0 ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                className="object-cover transition-transform duration-750 group-hover:scale-103"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

              {/* Bottom text info */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1 transform md:translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                <h3 className="font-space font-bold text-sm sm:text-lg leading-tight">{item.title}</h3>
                <p className="hidden sm:block text-[11px] text-slate-200 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Maximize Icon */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Maximize2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:mt-10 flex justify-center">
          <button
            onClick={() => setActiveIdx(0)}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-blue font-bold px-6 py-3 rounded-full text-xs transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Images className="w-4 h-4" />
            <span>Ver todas as fotos ({LIGHTBOX_IMAGES.length})</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 bg-brand-blue/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute z-10 left-4 bottom-4 md:bottom-auto md:left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) goNext();
                else if (info.offset.x > 60) goPrev();
              }}
              className="max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center space-y-4 touch-pan-y"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LIGHTBOX_IMAGES[activeIdx].src}
                alt={LIGHTBOX_IMAGES[activeIdx].title}
                className="max-w-full max-h-[65vh] md:max-h-[70vh] rounded-2xl md:rounded-3xl object-contain border border-white/10 shadow-2xl select-none pointer-events-none"
                draggable={false}
              />
              <div className="text-center text-white space-y-1 px-4">
                <h3 className="font-space font-bold text-lg md:text-xl">{LIGHTBOX_IMAGES[activeIdx].title}</h3>
                <p className="text-xs text-slate-300 max-w-xl mx-auto">{LIGHTBOX_IMAGES[activeIdx].desc}</p>
              </div>
            </motion.div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute z-10 right-4 bottom-4 md:bottom-auto md:right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counters */}
            <div className="absolute bottom-7 md:bottom-6 text-xs text-slate-400 font-semibold tracking-widest">
              {activeIdx + 1} / {LIGHTBOX_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
