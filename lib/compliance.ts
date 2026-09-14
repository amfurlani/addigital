export const complianceRules = [
  { pattern:/garant(ia|imos|ido)|resultado garantido/i, label:'Possível promessa de resultado', level:'alto' },
  { pattern:/taxa de sucesso|\b100%\b.*(êxito|sucesso)/i, label:'Percentual/alegação de sucesso', level:'alto' },
  { pattern:/recuperamos|obtivemos|ganhamos|indenizaç(ão|ões).*R\$/i, label:'Possível divulgação de resultado concreto', level:'alto' },
  { pattern:/melhor escritório|número 1|líder absoluto|referência nacional/i, label:'Possível autoengrandecimento/comparação', level:'alto' },
  { pattern:/consulta grátis|desconto|promoção|oferta/i, label:'Possível mercantilização/captação', level:'alto' },
  { pattern:/cliente[s]?\s+(como|incluem)|nossos clientes/i, label:'Revisar eventual lista/identificação de clientes', level:'médio' },
  { pattern:/especialista[s]? em/i, label:'Verificar título ou notória especialização', level:'médio' },
];

export function checkCompliance(text:string) {
  return complianceRules.filter(rule => rule.pattern.test(text));
}
