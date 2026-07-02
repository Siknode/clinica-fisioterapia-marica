'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['Todos', 'Pilates', 'Coluna', 'Joelho', 'Idosos', 'Qualidade de Vida'];

const ARTICLES = [
  {
    category: 'Coluna',
    title: '5 hábitos diários que causam dores na coluna e como evitá-los',
    excerpt: 'Passar muitas horas sentado de forma incorreta ou levantar objetos pesados sem flexionar os joelhos pode desgastar seus discos vertebrais a longo prazo. Aprenda práticas posturais saudáveis.',
    date: '24 Jun, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Pilates',
    title: 'Pilates Clínico: O aliado número 1 no alívio de hérnia de disco',
    excerpt: 'Diferente do Pilates tradicional, a modalidade clínica é totalmente focada na estabilização segmentar e reabilitação de patologias específicas da coluna vertebral, diminuindo a compressão discal.',
    date: '18 Jun, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Joelho',
    title: 'Condromalácia patelar: Prevenção, fortalecimento e cuidados',
    excerpt: 'Saiba por que o amolecimento da cartilagem da patela acontece frequentemente em jovens ativos e atletas, e como a musculação terapêutica aliada à fisioterapia resolve a dor de forma definitiva.',
    date: '10 Jun, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Idosos',
    title: 'Mobilidade e equilíbrio: Como prevenir quedas na terceira idade',
    excerpt: 'Quedas em idosos são sérias e podem causar fraturas graves. A fisioterapia preventiva trabalha fortalecimento dos membros inferiores, propriocepção e melhora expressiva do equilíbrio funcional.',
    date: '02 Jun, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'Qualidade de Vida',
    title: 'Alimentação anti-inflamatória no processo de reabilitação muscular',
    excerpt: 'A nutrição integrativa tem um papel fundamental na dor crônica. Nutrientes e fitoquímicos específicos reduzem a inflamação sistêmica e aceleram a regeneração dos tecidos musculares pós-lesão.',
    date: '28 Mai, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop',
  },
];

export default function Blog() {
  const [selectedCat, setSelectedCat] = useState('Todos');

  const filteredArticles = selectedCat === 'Todos'
    ? ARTICLES
    : ARTICLES.filter(art => art.category === selectedCat);

  return (
    <section id="blog" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Centro de Conhecimento</span>
            <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight">
              Conteúdo científico traduzido para a sua saúde
            </h2>
            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Descubra artigos exclusivos escritos pela nossa equipe multidisciplinar, focados em prevenção, reabilitação e qualidade de vida.
            </p>
          </div>
        </div>

        {/* Filter categories tabs bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-200/60 pb-6 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.article
                layout
                key={article.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-purple/20 shadow-md shadow-slate-100/55 hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-brand-blue uppercase tracking-wider border border-slate-100">
                    {article.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Date and Time */}
                    <div className="flex items-center gap-4 text-[10px] text-brand-muted font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-purple" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-purple" />
                        <span>{article.readTime}</span>
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
                    href={`https://wa.me/5521968993480?text=${encodeURIComponent(`Olá! Gostaria de receber o artigo completo sobre "${article.title}" no meu WhatsApp.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue group-hover:text-brand-purple hover:underline decoration-brand-purple transition-colors cursor-pointer"
                  >
                    <span>Ler Artigo Completo</span>
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
