# Proposta comercial (modelo Siknode Digital)

Modelo oficial das propostas para clientes cujo site de prospecção **já está pronto**:
página única A4, "Site Estruturado com SEO", com o mesmo texto, seções e preço do modelo aprovado.

- `template.html`: layout e textos fixos do modelo (com `{{campos}}`)
- `gerar.mjs`: gerador; traz os valores padrão do modelo (preço **R$ 600,00 em até 3x no cartão**, referência
  R$ 997,00, prazo de 5 dias úteis, WhatsApp da Siknode). A parcela é calculada a partir do preço.
- `clientes/<cliente>.json`: o que muda por cliente (nome, cidade, dor, validade, link do site pronto); só
  inclua `preco` ou `prazo` se aquele cliente tiver condição diferente do padrão
- `siknode-logo.png`: logo embutido no arquivo, para não aparecer quebrado
- `saida/`: HTML e PDF gerados

Gerar:

```bash
NODE_PATH=/opt/node-tools/node_modules node proposta/gerar.mjs proposta/clientes/espaco-reabilitar.json
```

A proposta é enviada **depois da reunião de fechamento**: gere o PDF no dia do envio. A validade é calculada
sozinha (7 dias a partir da geração); só use o campo `validade` no JSON para fixar outra data. Honre a data. **Exceção:** site com várias páginas (ex.: Centro Clínico Boaçu) custa **R$ 1.000,00 em até 4x no cartão**, com referência R$ 1.997,00 e prazo
de 7 dias úteis (`preco`, `preco_referencia`, `parcelas`, `prazo` e `item_site` no JSON do cliente; `preco_referencia` vazio esconde o valor riscado).

Para um novo cliente, copie o JSON, troque os campos e gere de novo. O campo `site_pronto_url` adiciona
o link do site pronto logo abaixo do texto de abertura; deixe vazio para ficar idêntico ao modelo.
