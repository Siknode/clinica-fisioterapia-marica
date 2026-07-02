'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Mapa() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Av.+Maysa,+entre+a+rua+87+e+88+-+Cordeirinho,+Maric%C3%A1+-+RJ,+24921-456&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contato" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Agendamento & Localização</span>
                <h2 className="text-3xl font-space font-bold text-brand-blue tracking-tight leading-tight">
                  Venha conhecer o nosso espaço
                </h2>
                <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                  Estamos localizados em Cordeirinho, Maricá, com estacionamento privativo e total facilidade de acesso.
                </p>
              </div>

              <hr className="border-slate-100" />

              {/* Direct Info */}
              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">Endereço</h4>
                    <p className="text-xs md:text-sm text-brand-muted mt-1 leading-relaxed">
                      Av. Maysa (entre a rua 87 e 88)<br />
                      Cordeirinho, Maricá - RJ, 24921-456
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/5 border border-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">WhatsApp (Triagem rápida)</h4>
                    <a
                      href="https://wa.me/5521968993480?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-brand-purple font-bold hover:underline block mt-1"
                    >
                      (21) 96899-3480
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue">Telefone / Ligações</h4>
                    <a
                      href="tel:+5521968993480"
                      className="text-xs md:text-sm text-brand-blue font-bold hover:underline block mt-1"
                    >
                      (21) 96899-3480
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="pt-6">
              <a
                href="https://wa.me/5521968993480?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white py-4 rounded-full text-xs font-bold transition-all shadow-md shadow-brand-purple/10"
              >
                <span>Falar com Atendimento no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Frame */}
          <div className="lg:col-span-7 w-full h-[400px] lg:h-auto min-h-[450px] relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
            <iframe
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica Espaço Reabilitar em Cordeirinho, Maricá"
            />
            {/* Elegant Floating maps tag */}
            <div className="absolute top-4 left-4 p-4 rounded-2xl glass shadow-md max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-2 text-brand-blue font-space font-bold text-xs">
                <span>Cordeirinho, Maricá</span>
                <ExternalLink className="w-3 h-3 text-brand-purple" />
              </div>
              <p className="text-[10px] text-brand-muted mt-1 leading-snug">
                Estacionamento fácil e atendimento em ambiente confortável planejado para você.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
