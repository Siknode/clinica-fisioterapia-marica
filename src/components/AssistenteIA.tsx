'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, RefreshCw, MessageSquareCode, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'patient' | 'ia';
  text: string;
  timestamp: string;
}

const CHAT_FLOW = [
  { sender: 'patient', text: 'Tenho dores na coluna.' },
  { sender: 'ia', text: 'Vou ajudá-lo com isso. Há quanto tempo você sente essa dor?' },
  { sender: 'patient', text: 'Há três semanas.' },
  { sender: 'ia', text: 'Entendi. Dores na coluna por mais de duas semanas merecem atenção. Nossa equipe multidisciplinar poderá direcionar você para o profissional e tratamento ideal (como fisioterapia ou pilates).' },
  { sender: 'ia', text: 'Deseja agendar sua avaliação física agora mesmo?' }
];

export default function AssistenteIA() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentStep < CHAT_FLOW.length) {
      const nextMsg = CHAT_FLOW[currentStep];

      if (nextMsg.sender === 'ia') {
        setIsTyping(true);
        // Simulates typewriter/thinking delay
        const timer = setTimeout(() => {
          setIsTyping(false);
          addMessage('ia', nextMsg.text);
          setCurrentStep(currentStep + 1);
        }, 1800);
        return () => clearTimeout(timer);
      } else {
        // Patient message
        const timer = setTimeout(() => {
          addMessage('patient', nextMsg.text);
          setCurrentStep(currentStep + 1);
        }, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, [currentStep]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addMessage = (sender: 'patient' | 'ia', text: string) => {
    const newMsg: Message = {
      id: Math.random().toString(),
      sender,
      text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
  };

  const handleReset = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsTyping(false);
  };

  return (
    <section id="triagem-ia" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative cyber grid or lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest">
            <MessageSquareCode className="w-3.5 h-3.5" />
            Inovação Tecnológica
          </div>
          <h2 className="text-3xl md:text-4xl font-space font-bold text-brand-blue tracking-tight leading-tight">
            Assistente Inteligente para Triagem Rápida
          </h2>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed font-sans">
            Desenvolvemos um sistema inteligente de triagem que analisa seus sintomas iniciais e direciona você diretamente para a especialidade correta de nossa clínica.
          </p>
          <div className="space-y-3 hidden lg:block">
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple" />
              <span>Redução do tempo de espera</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple" />
              <span>Direcionamento clínico preciso</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-purple" />
              <span>Integração imediata com nosso WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Chat Simulator */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-lg aspect-[9/13] md:aspect-[9/11] rounded-[2.5rem] bg-brand-dark/95 border-4 border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden relative"
          >
            {/* Chat header */}
            <div className="bg-brand-dark px-6 py-4 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple relative">
                  <Bot className="w-5 h-5" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-brand-dark absolute bottom-0 right-0 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-space font-bold text-sm text-white leading-none">Triagem Virtual Espaço Reabilitar</h3>
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
            <div className="flex-1 overflow-y-auto p-6 space-y-4 max-h-[350px]">
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
                    <div className={`max-w-[75%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'patient'
                        ? 'bg-brand-purple text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/30'
                    }`}>
                      <p className="font-sans">{msg.text}</p>
                      <span className={`text-[8px] mt-1 block text-right ${
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
              <div ref={chatEndRef} />
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
                    <span>Recomeçar Triagem Simulada</span>
                  </button>
                </motion.div>
              ) : (
                <div className="flex items-center justify-between text-xs text-slate-500 font-sans px-2">
                  <span>Chatbot simulando triagem automática...</span>
                  <div className="flex items-center gap-1.5">
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
