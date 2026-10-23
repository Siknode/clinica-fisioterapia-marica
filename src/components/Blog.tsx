'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowUpRight, Instagram } from 'lucide-react';
import { instagramPost, site } from '@/lib/site';

const CATEGORIES = ['Todos', 'Pilates', 'Fisioterapia', 'Bem-estar', 'Família'];

// Posts reais do Instagram @espacoreabilitarmarica (resumo da legenda + link para o post)
const ARTICLES = [
  {
    category: 'Fisioterapia',
    title: '3 dicas para quem está sentindo dores no joelho',
    excerpt: 'Não ignore a dor, fortaleça a musculatura com orientação e procure um profissional: cada joelho precisa de cuidados específicos.',
    date: '21 Out, 2026',
    image: '/images/clinic_2.webp',
    shortCode: 'DewlkhrRFHB',
  },
  {
    category: 'Pilates',
    title: '5 benefícios do Pilates que vão muito além da estética',
    excerpt: 'Postura, força, mobilidade, consciência corporal e mais qualidade de vida. Pilates é sobre como o corpo funciona e como você se sente.',
    date: '05 Out, 2026',
    image: '/images/clinic_10.jpg',
    shortCode: 'DeHBr5mxOYg',
  },
  {
    category: 'Bem-estar',
    title: 'Todo dia é dia de alongar',
    excerpt: 'O alongamento melhora flexibilidade, mobilidade e amplitude dos movimentos. Não espere sentir dor para começar.',
    date: '15 Out, 2026',
    image: '/images/clinic_9.jpg',
    shortCode: 'DegyUfFRsUN',
  },
  {
    category: 'Bem-estar',
    title: 'Massoterapia: cuidado para o corpo e a mente',
    excerpt: 'Alívio de tensões, menos cansaço, melhora do sono e um momento de autocuidado. Seu corpo merece descanso.',
    date: '20 Out, 2026',
    image: '',
    shortCode: 'DespJezMx-j',
  },
  {
    category: 'Família',
    title: 'TDAH: muito além da falta de atenção',
    excerpt: 'Com acolhimento, informação e acompanhamento adequado, é possível desenvolver estratégias para os desafios do dia a dia.',
    date: '13 Out, 2026',
    image: '',
    shortCode: 'Decvt2chPGr',
  },
  {
    category: 'Família',
    title: 'Jiu-jitsu baby: pequenos no tamanho, gigantes no potencial',
    excerpt: 'Coordenação motora, disciplina, confiança, respeito e socialização, tudo de forma divertida e adequada à idade.',
    date: '20 Out, 2026',
    image: '',
    shortCode: 'Desoh-5sukS',
  },
];

export default function Blog() {
  const [selectedCat, setSelectedCat] = useState('Todos');

  const filteredArticles = selectedCat === 'Todos'
    ? ARTICLES
    : ARTICLES.filter(art => art.category === selectedCat);

  return (
    <section id="blog" className="py-16 md:py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Dicas do Instagram</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
              Conteúdo para cuidar de você
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Dicas de saúde e bem-estar publicadas pela equipe do Espaço Reabilitar no Instagram.
            </p>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-brand-blue font-bold px-6 py-3 rounded-full text-xs transition-all duration-300 shadow-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>@{site.instagram}</span>
          </a>
        </div>

        {/* Filter categories tabs bar */}
        <div className="flex md:flex-wrap items-center gap-2 mb-8 md:mb-12 border-b border-slate-200/60 pb-4 md:pb-6 overflow-x-auto scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/10'
                    : 'bg-white hover:bg-slate-50 text-brand-blue border border-slate-200/50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles List / Grid with dynamic transition */}
        <motion.div
          layout
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-4 md:pb-0 scrollbar-none"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.article
                layout
                key={article.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-[82%] sm:w-[60%] md:w-auto shrink-0 snap-start bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-purple/20 shadow-md shadow-slate-100/55 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 82vw"
                      className="object-cover transition-transform duration-750 group-hover:scale-103"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center p-8">
                      <span className="font-space font-bold text-white/90 text-lg text-center leading-snug">{article.title}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-brand-blue uppercase tracking-wider border border-slate-100">
                    {article.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 md:p-8 flex-1 flex flex-col justify-between space-y-5 md:space-y-6">
                  <div className="space-y-3">
                    {/* Date and Time */}
                    <div className="flex items-center gap-4 text-[10px] text-brand-muted font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                        <span>{article.date}</span>
                      </div>
                    </div>

                    <h3 className="font-space font-bold text-base md:text-lg text-brand-blue group-hover:text-brand-purple transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-muted leading-relaxed font-sans line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read Article CTA */}
                  <a
                    href={instagramPost(article.shortCode)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue group-hover:text-brand-purple hover:underline decoration-brand-purple transition-colors cursor-pointer"
                  >
                    <span>Ver post no Instagram</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
