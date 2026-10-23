// Dados centrais do site. Tudo aqui foi conferido no Instagram @espacoreabilitarmarica
// (bio, legendas dos posts e foto da fachada). Não acrescente informação que não esteja
// no Instagram ou que não tenha sido confirmada pela clínica.

export const site = {
  // Site de prospecção da Siknode Digital: enquanto true, pede aos buscadores para não indexar.
  // Mude para false quando a clínica contratar e o site for para o domínio definitivo.
  preview: true,
  name: "Espaço Reabilitar",
  slogan: "Saúde completa para toda família",
  responsavel: "Dra. Fernanda Coutinho",
  phoneDisplay: "(21) 96899-3480",
  phoneE164: "5521968993480",
  phone2Display: "(21) 98743-4973",
  phone2E164: "5521987434973",
  instagram: "espacoreabilitarmarica",
  instagramUrl: "https://www.instagram.com/espacoreabilitarmarica/",
  agendamentoOnlineUrl: "https://online.maapp.com.br/reabilitacts",
  parceiro: "CTS Cordeirinho",
  address: {
    street: "Av. Maysa, entre a rua 87 e 88",
    district: "Cordeirinho",
    city: "Maricá",
    state: "RJ",
    postalCode: "24921-456",
  },
};

export function whatsappLink(message = "Olá! Vim pelo site e gostaria de agendar no Espaço Reabilitar.") {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}

export const instagramPost = (shortCode: string) => `https://www.instagram.com/p/${shortCode}/`;
