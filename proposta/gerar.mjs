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

const dados = JSON.parse(readFileSync(dadosPath, 'utf8'));
const logo = `data:image/png;base64,${readFileSync(join(here, 'siknode-logo.png')).toString('base64')}`;

// Link do site pronto (opcional): deixe "site_pronto_url" vazio para seguir o modelo sem esse bloco
const blocoSite = dados.site_pronto_url
  ? `<div class="site"><strong>Seu site já está pronto para você ver:</strong> <a href="${dados.site_pronto_url}">${dados.site_pronto_url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a> (abra pelo celular)</div>`
  : '';

const valores = {
  ...dados,
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
