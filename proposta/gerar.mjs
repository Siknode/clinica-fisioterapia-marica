// Gera a proposta comercial (HTML + PDF A4) de um cliente a partir de template.html.
// Uso: node proposta/gerar.mjs proposta/clientes/espaco-reabilitar.json
// Requer o pacote "playwright" com Chromium (no ambiente da Siknode: NODE_PATH=/opt/node-tools/node_modules).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const dadosPath = process.argv[2];
if (!dadosPath) {
  console.error('Uso: node proposta/gerar.mjs proposta/clientes/<cliente>.json');
  process.exit(1);
}

// Valores padrão do modelo Siknode; o JSON do cliente só sobrescreve se precisar de algo diferente
const PADRAO = {
  servico: 'Site Estruturado com SEO',
  prazo: '5 dias úteis',
  preco: 'R$ 600,00',
  preco_referencia: 'R$ 997,00',
  parcelas: 3, // sempre no cartão
  item_site: '<strong>Site de uma página estruturado:</strong> Seções, títulos e perguntas frequentes focadas no Google.',
  whatsapp: '(21) 96605-2646',
  whatsapp_e164: '5521966052646',
};

const dados = { ...PADRAO, ...JSON.parse(readFileSync(dadosPath, 'utf8')) };

// Validade: se o JSON não fixar uma data, vale por DIAS_VALIDADE a partir do dia em que a proposta é gerada
// (a proposta é enviada depois da reunião, então gere no dia do envio)
const DIAS_VALIDADE = 7;
if (!dados.validade) {
  const limite = new Date();
  limite.setDate(limite.getDate() + DIAS_VALIDADE);
  dados.validade = limite.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}
const logo = `data:image/png;base64,${readFileSync(join(here, 'siknode-logo.png')).toString('base64')}`;

// Link do site pronto (opcional): deixe "site_pronto_url" vazio para seguir o modelo sem esse bloco
const blocoSite = dados.site_pronto_url
  ? `<div class="site"><strong>Seu site já está pronto para você ver:</strong> <a href="${dados.site_pronto_url}">${dados.site_pronto_url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a> (abra pelo celular)</div>`
  : '';

// "R$ 1.000,00" -> 1000; a parcela é calculada a partir do preço
const precoNumero = Number(dados.preco.replace(/[^\d,]/g, '').replace(',', '.'));
const valorParcela = (precoNumero / dados.parcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const valores = {
  ...dados,
  valor_parcela: valorParcela.replace(/\u00a0/g, ' '),
  bloco_referencia: dados.preco_referencia ? `<span class="ref">Valor de referência: ${dados.preco_referencia}</span>` : '',
  logo,
  bloco_site: blocoSite,
  whatsapp_url: `https://wa.me/${dados.whatsapp_e164}`,
};

const html = readFileSync(join(here, 'template.html'), 'utf8').replace(/\{\{(\w+)\}\}/g, (_, chave) => {
  if (!(chave in valores)) throw new Error(`Campo "${chave}" faltando em ${dadosPath}`);
  return valores[chave];
});

const saida = join(here, 'saida');
mkdirSync(saida, { recursive: true });
const htmlPath = join(saida, `${dados.arquivo}.html`);
const pdfPath = join(saida, `${dados.arquivo}.pdf`);
writeFileSync(htmlPath, html);

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
await browser.close();

console.log(`HTML: ${htmlPath}\nPDF:  ${pdfPath}`);
