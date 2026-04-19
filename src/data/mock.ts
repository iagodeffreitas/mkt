export type ItemContextType = 'funnel' | 'page' | 'template' | 'automation' | 'creative' | 'copy' | 'tool' | 'spreadsheet' | 'checklist' | 'adult';

export interface AcervoItem {
  id: string;
  name: string;
  category: string;
  niche: string;
  type: ItemContextType;
  shortDesc: string;
  description: string;
  tags: string[];
  driveLink: string;
  thumbnail: string;
  isNew?: boolean;
  isPopular?: boolean;
  isAdult?: boolean;
  updatedAt: string;
}

export const CATEGORIES = [
  'Funis', 'Páginas', 'Criativos', 'Templates', 'Automações', 'Copies', 
  'Ferramentas', 'Planilhas', 'Checklists', 'Afiliados', 
  'Prestação de Serviços', 'WhatsApp e Atendimento', 'Tráfego Pago', 'Conteúdos +18'
];

export const MOCK_ITEMS: AcervoItem[] = [
  {
    id: '1',
    name: 'Funil Perpétuo VSL Conversivo',
    category: 'Funis',
    niche: 'Infoprodutos',
    type: 'funnel',
    shortDesc: 'Estrutura completa de funil de vendas com página de VSL otimizada para alta conversão.',
    description: 'Este modelo de funil foi testado em múltiplos nichos e é ideal para produtos digitais de ticket médio. Inclui páginas de captura, página de vendas com delay para botão, order bump e upsell 1-click.',
    tags: ['perpétuo', 'vsl', 'alta conversão'],
    driveLink: 'https://drive.google.com/drive/folders/mocklink-funil-vsl',
    thumbnail: 'https://picsum.photos/seed/funnelvsl/600/400',
    isPopular: true,
    updatedAt: '2026-04-10'
  },
  {
    id: '2',
    name: 'Pack Criativos Estáticos SaaS',
    category: 'Criativos',
    niche: 'Tecnologia / SaaS',
    type: 'creative',
    shortDesc: 'Pacote de 30 templates para anúncios no Facebook e Instagram focados em software.',
    description: 'Templates Figma totalmente editáveis com gatilhos mentais aplicados. Designs limpos, focados em problema e solução.',
    tags: ['figma', 'ads', 'facebook'],
    driveLink: 'https://drive.google.com/drive/folders/mocklink-creatives',
    thumbnail: 'https://picsum.photos/seed/saas/600/400',
    isNew: true,
    updatedAt: '2026-04-18'
  },
  {
    id: '3',
    name: 'Automação de Recuperação de PIX',
    category: 'Automações',
    niche: 'Geral',
    type: 'automation',
    shortDesc: 'Fluxo no Make/Integromat para enviar mensagens automáticas de recuperação de PIX no WhatsApp.',
    description: 'Blueprint completo para importar no Make. Conecta sua plataforma de checkout com disparadores de WhatsApp. Aumenta a reversão de PIX em até 35%.',
    tags: ['make', 'whatsapp', 'recuperação'],
    driveLink: 'https://drive.google.com/drive/folders/mocklink-automation',
    thumbnail: 'https://picsum.photos/seed/automation/600/400',
    updatedAt: '2026-03-25'
  },
  {
    id: '4',
    name: 'Template Advertorial Neutro',
    category: 'Páginas',
    niche: 'Saúde / Bem-estar',
    type: 'page',
    shortDesc: 'Página estilo portal de notícias (Advertorial) para aquecer tráfego frio antes da oferta.',
    description: 'Template Elementor focado em retenção de leitura e quebra de objeções iniciais.',
    tags: ['elementor', 'advertorial', 'tráfego frio'],
    driveLink: 'https://drive.google.com/drive/folders/mocklink-adv',
    thumbnail: 'https://picsum.photos/seed/health/600/400',
    updatedAt: '2026-04-01'
  },
  {
    id: '5',
    name: 'Planilha de Precificação Plr',
    category: 'Planilhas',
    niche: 'Infoprodutos',
    type: 'spreadsheet',
    shortDesc: 'Calculadora completa de ROI, margem e breakeven para produtos PLR.',
    description: 'Gerencie seus custos de tráfego, taxas de cartão e impostos para saber exatamente seu lucro líquido por venda.',
    tags: ['finanças', 'google sheets', 'roi'],
    driveLink: 'https://drive.google.com/drive/folders/mocklink-spreadsheet',
    thumbnail: 'https://picsum.photos/seed/finance/600/400',
    isPopular: true,
    updatedAt: '2025-11-10'
  },
  {
    id: '6',
    name: 'Estrutura Completa de Nicho Black',
    category: 'Conteúdos +18',
    niche: 'Relacionamento',
    type: 'adult',
    shortDesc: 'Material focado em ofertas de alta temperatura e nichos de relacionamento adulto.',
    description: 'Acesso restrito. Contém VSLs, templates de advertoriais e criativos de contingência focados em nicho black.',
    tags: ['black', 'contingência', 'vsl'],
    driveLink: 'https://drive.google.com/drive/folders/mocklink-adult',
    thumbnail: 'https://picsum.photos/seed/darkness/600/400',
    isAdult: true,
    updatedAt: '2026-02-15'
  }
];

export const formatType = (type: string) => {
  const map: Record<string, string> = {
    funnel: 'Funil',
    page: 'Página',
    template: 'Template',
    automation: 'Automação',
    creative: 'Criativo',
    copy: 'Copy',
    tool: 'Ferramenta',
    spreadsheet: 'Planilha',
    checklist: 'Checklist',
    adult: '+18'
  };
  return map[type] || type;
};
