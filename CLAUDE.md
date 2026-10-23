@AGENTS.md

# Contexto do projeto (leia antes de mexer)

Este é um **site de prospecção da Siknode Digital** para o **Espaço Reabilitar** (Cordeirinho, Maricá – RJ),
uma clínica que **ainda não tem site**. O link é enviado à clínica; se gostarem, contratam a Siknode Digital.
Segue o mesmo padrão dos outros sites de prospecção da Siknode (ex.: `Siknode/Siknode-vanessa-vital`).

Regras:

- **Fonte da verdade: o Instagram [@espacoreabilitarmarica](https://www.instagram.com/espacoreabilitarmarica/)**
  (bio, legendas, foto da fachada). Dados centrais ficam em `src/lib/site.ts`.
- **Não inventar fatos sobre a clínica**: nada de profissionais com nome/foto falsos, avaliações ou notas do
  Google, números (m², % de satisfação), serviços que ela não oferece, e-mail, horário ou convênios.
- **Possibilidades são bem-vindas**, mas como exemplo assumido: seções que a clínica ainda não tem (equipe,
  depoimentos, atendimento automático) usam `<ExemploBadge>` e conteúdo neutro, sem atribuir a pessoas reais.
- **Fotos**: só as reais da clínica (`public/images/clinic_*`). Evite fotos de crianças identificáveis.
  `recepcao_1.jpg` / `recepcao_2.jpg` são fotos genéricas e não devem ser usadas.
- **Fora do Google** enquanto `site.preview` for `true` (robots + metadata). Mude para `false` quando a
  clínica contratar e o site for para o domínio definitivo.
- **Links públicos**: a proteção de deploy da Vercel (Vercel Authentication/senha) fica **desligada** neste
  projeto, para que o cliente abra o link sem login.
- Mobile first: a maioria dos clientes abre o link pelo celular (WhatsApp).

Dados conferidos no Instagram: serviços (Pilates com fisioterapeuta, fisioterapia/reabilitação, massoterapia,
psicologia, nutrição, psicopedagogia/reforço escolar, jiu-jitsu baby e kids, musculação com o CTS Cordeirinho),
telefones (21) 96899-3480 e (21) 98743-4973, agendamento online (maapp), responsável Dra. Fernanda Coutinho
(logo). Ainda a confirmar com a clínica: horário de funcionamento, e-mail, valores, convênios e se aceita Mumbuca
(aparece na bio).
