# Proposta comercial (modelo Siknode Digital)

Modelo oficial das propostas para clientes cujo site de prospecção **já está pronto**:
página única A4, "Site Estruturado com SEO", com o mesmo texto, seções e preço do modelo aprovado.

- `template.html`: layout e textos fixos do modelo (com `{{campos}}`)
- `clientes/<cliente>.json`: o que muda por cliente (nome, cidade, dor, preço, link do site pronto)
- `siknode-logo.png`: logo embutido no arquivo, para não aparecer quebrado
- `saida/`: HTML e PDF gerados

Gerar:

```bash
NODE_PATH=/opt/node-tools/node_modules node proposta/gerar.mjs proposta/clientes/espaco-reabilitar.json
```

O campo `validade` é a data até quando o preço vale (escassez real: honre a data). Para um novo cliente, copie o JSON, troque os campos e gere de novo. O campo `site_pronto_url` adiciona
o link do site pronto logo abaixo do texto de abertura; deixe vazio para ficar idêntico ao modelo.
