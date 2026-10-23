'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Bot, User, RefreshCw, CheckCircle2 } from 'lucide-react';
import ExemploBadge from '@/components/ExemploBadge';

interface Message {
  id: string;
  sender: 'patient' | 'ia';
  text: string;
  timestamp: string;
}

const CHAT_FLOW: { sender: 'patient' | 'ia'; text: string }[] = [
  { sender: 'patient', text: 'Tenho dores na coluna.' },
  { sender: 'ia', text: 'Vou ajudá-lo com isso. Há quanto tempo você sente essa dor?' },
  { sender: 'patient', text: 'Há três semanas.' },
  { sender: 'ia', text: 'Entendi. Dores na coluna por mais de duas semanas merecem atenção. Nossos fisioterapeutas podem avaliar você e indicar o melhor caminho, como fisioterapia ou Pilates.' },
  { sender: 'ia', text: 'Deseja agendar sua avaliação física agora mesmo?' }
];

const createMessage = (sender: Message['sender'], text: string): Message => ({
  id: `${Date.now()}-${Math.random()}`,
  sender,
  text,
  timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
});

export default function AssistenteIA() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  // A simulação só começa quando o chat aparece na tela
  const started = useInView(chatRef, { once: true, amount: 0.4 });

  const isTyping = started && currentStep < CHAT_FLOW.length && CHAT_FLOW[currentStep].sender === 'ia';

  useEffect(() => {
    if (!started || currentStep >= CHAT_FLOW.length) return;
    const nextMsg = CHAT_FLOW[currentStep];
    // IA "pensa" um pouco mais que o paciente para simular digitação
    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, createMessage(nextMsg.sender, nextMsg.text)]);
      setCurrentStep((step) => step + 1);
    }, nextMsg.sender === 'ia' ? 1800 : 1200);
    return () => clearTimeout(timer);
  }, [started, currentStep]);

  // Rola apenas o painel do chat (scrollIntoView puxava a página inteira)
  useEffect(() => {
    const panel = panelRef.current;
    if (panel) panel.scrollTo({ top: panel.scrollHeight, behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleReset = () => {
    setMessages([]);
    setCurrentStep(0);
  };

  return (
    <section id="triagem-ia" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative cyber grid or lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <ExemploBadge>Exemplo: atendimento automático</ExemploBadge>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight leading-tight">
            Atendimento rápido, até fora do horário
          </h2>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans">
            Um assistente no WhatsApp pode tirar as primeiras dúvidas, entender o que a pessoa procura e encaminhar para o serviço certo, sem deixar ninguém esperando.
          </p>
          <div className="space-y-3 hidden lg:block">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple" />
              <span>Resposta imediata, a qualquer hora</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple" />
              <span>Encaminha para o serviço certo</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple" />
              <span>Continua a conversa no WhatsApp da clínica</span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Chat Simulator */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-lg h-[500px] sm:h-[560px] rounded-[2rem] sm:rounded-[2.5rem] bg-brand-dark/95 border-4 border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* Chat header */}
            <div className="bg-brand-dark px-4 sm:px-6 py-4 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 shrink-0 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple relative">
                  <Bot className="w-5 h-5" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-brand-dark absolute bottom-0 right-0 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-space font-bold text-[13px] sm:text-sm text-white leading-tight truncate">Assistente Espaço Reabilitar</h3>
                  <span className="text-[10px] text-slate-400 font-sans mt-1 inline-block">Online &bull; Responde instantaneamente</span>
                </div>
              </div>

              {currentStep >= CHAT_FLOW.length && (
                <button
                  onClick={handleReset}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Reiniciar Simulação"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Chat Messages Panel */}
            <div ref={panelRef} data-lenis-prevent className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center text-center text-slate-500 space-y-2">
                  <Bot className="w-8 h-8 text-brand-purple/40" />
                  <p className="text-xs max-w-[200px]">Simulação da nossa triagem inteligente iniciando...</p>
                </div>
              )}

              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-2.5 ${msg.sender === 'patient' ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 text-xs ${
                      msg.sender === 'patient' ? 'bg-brand-purple' : 'bg-brand-blue border border-brand-blue-light/10'
                    }`}>
                      {msg.sender === 'patient' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    {/* Balloon */}
                    <div className={`max-w-[80%] sm:max-w-[75%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'patient'
                        ? 'bg-brand-purple text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/30'
                    }`}>
                      <p className="font-sans">{msg.text}</p>
                      <span className={`text-[9px] mt-1 block text-right ${
                        msg.sender === 'patient' ? 'text-white/60' : 'text-slate-400'
                      }`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-blue border border-brand-blue-light/10 flex items-center justify-center text-white shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800 border border-slate-700/30 p-3.5 rounded-2xl rounded-tl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Chat interactive footer buttons */}
            <div className="p-4 bg-slate-900 border-t border-slate-800/80">
              {currentStep >= CHAT_FLOW.length ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-2"
                >
                  <a
                    href="https://wa.me/5521968993480?text=Olá!%20Fiz%20a%20triagem%20virtual.%20Tenho%20dores%20na%20coluna%20há%203%20semanas%20e%20gostaria%20de%20agendar%20uma%20avaliação."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white py-3.5 rounded-2xl text-xs font-bold transition-all shadow-md shadow-brand-purple/10"
                  >
                    <span>Sim, agendar avaliação no WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 py-3.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Ver a simulação de novo</span>
                  </button>
                </motion.div>
              ) : (
                <div className="flex items-center justify-between gap-3 text-xs text-slate-500 font-sans px-2">
                  <span className="truncate">Simulação de atendimento...</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
                    <span>Interativo</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
