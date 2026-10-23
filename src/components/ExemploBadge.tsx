import { Sparkles } from 'lucide-react';

// Marca as seções que mostram possibilidades do site (prospecção da Siknode Digital).
// O conteúdo dessas seções é ilustrativo até a clínica enviar o material real.
export default function ExemploBadge({ children = 'Exemplo de seção' }: { children?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase tracking-wider">
      <Sparkles className="w-3 h-3" />
      {children}
    </span>
  );
}
