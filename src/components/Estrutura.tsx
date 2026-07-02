'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const GRID_ITEMS = [
  {
    src: '/images/clinic_1.jpg',
    title: 'Estúdio de Pilates Clínico',
    desc: 'Equipamentos modernos e espaços amplos com iluminação natural para o seu treino.',
    gridClass: 'md:col-span-2 md:row-span-1',
    lightboxStartIdx: 0,
  },
  {
    src: '/images/clinic_2.webp',
    title: 'Consultórios Privativos',
    desc: 'Salas individuais para avaliação física e sessões de fisioterapia especializada.',
    gridClass: 'md:col-span-1 md:row-span-1',
    lightboxStartIdx: 1,
  },
  {
    src: '/images/clinic_3.jpg',
    title: 'Área de Reabilitação Física',
    desc: 'Espaço equipado para cinesioterapia e recondicionamento motor de alta performance.',
    gridClass: 'md:col-span-3 md:row-span-1',
    lightboxStartIdx: 2,
  },
];

const LIGHTBOX_IMAGES = [
  {
    src: '/images/clinic_1.jpg',
    title: 'Estúdio de Pilates Clínico',
    desc: 'Equipamentos modernos e espaços amplos com iluminação natural para o seu treino.',
  },
  {
    src: '/images/clinic_2.webp',
    title: 'Consultórios Privativos',
    desc: 'Salas individuais para avaliação física e sessões de fisioterapia especializada.',
  },
  {
    src: '/images/clinic_3.jpg',
    title: 'Área de Reabilitação Física',
    desc: 'Espaço equipado para cinesioterapia e recondicionamento motor de alta performance.',
  },
  {
    src: '/images/clinic_4.webp',
    title: 'Pilates Clínico e Reabilitação',
    desc: 'Ambiente aconchegante focado na melhora da mobilidade e alívio de dores.',
  },
  {
    src: '/images/clinic_5.webp',
    title: 'Equipamentos de Pilates',
    desc: 'Estrutura completa com aparelhos modernos para exercícios de fortalecimento e flexibilidade.',
  },
  {
    src: '/images/clinic_6.jpg',
    title: 'Atendimento Personalizado',
    desc: 'Fisioterapeutas especializados que acompanham cada movimento da sua evolução.',
  },
  {
    src: '/images/clinic_7.webp',
    title: 'Sala de Fisioterapia e RPG',
    desc: 'Salas equipadas para correção postural, RPG e cinesioterapia individualizada.',
  },
  {
    src: '/images/clinic_8.webp',
    title: 'Recepção e Acolhimento',
    desc: 'Ambiente climatizado e confortável preparado para receber você com toda a atenção.',
  },
];

export default function Estrutura() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % LIGHTBOX_IMAGES.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + LIGHTBOX_IMAGES.length) % LIGHTBOX_IMAGES.length);
    }
  };

  return (
    <section id="estrutura" className="py-24 bg-brand-light relative">
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
            Nossa Estrutura
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight"
          >
            Espaço de saúde projetado para o seu bem-estar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed"
          >
            Oferecemos uma infraestrutura de ponta, climatizada, com iluminação natural planejada e equipamentos modernos para garantir sua segurança e conforto.
          </motion.p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {GRID_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative rounded-[2rem] overflow-hidden group cursor-pointer border border-slate-100 bg-white shadow-md ${item.gridClass}`}
              onClick={() => setActiveIdx(item.lightboxStartIdx)}
            >
              {/* Single Image Layout */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

              {/* Bottom text info */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                <h3 className="font-space font-bold text-lg">{item.title}</h3>
                <p className="text-[11px] text-slate-200 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Maximize Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Maximize2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-blue/95 backdrop-blur-md z-50 flex items-center justify-center p-6"
            onClick={() => setActiveIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
              aria-label="Fechar galeria"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer hidden md:block"
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
              className="max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LIGHTBOX_IMAGES[activeIdx].src}
                alt={LIGHTBOX_IMAGES[activeIdx].title}
                className="max-w-full max-h-[70vh] rounded-3xl object-contain border border-white/10 shadow-2xl"
              />
              <div className="text-center text-white space-y-1 px-4">
                <h3 className="font-space font-bold text-xl">{LIGHTBOX_IMAGES[activeIdx].title}</h3>
                <p className="text-xs text-slate-300 max-w-xl mx-auto">{LIGHTBOX_IMAGES[activeIdx].desc}</p>
              </div>
            </motion.div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer hidden md:block"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counters */}
            <div className="absolute bottom-6 text-xs text-slate-400 font-semibold tracking-widest">
              {activeIdx + 1} / {LIGHTBOX_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
