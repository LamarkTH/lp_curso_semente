# Especificação Técnica de Design e Conteúdo (spec.md)
## Landing Page: Imersão Expert Integrativo

Este documento serve como diretriz estrita para o desenvolvimento front-end e implementação da Landing Page de alta conversão para a **Imersão Expert Integrativo**. Siga todas as instruções de design, UX, fluxo e implemente a copy exatamente como descrita.

---

## 1. Assets e Identidade Visual (Obrigatório)

### 1.1 Configuração do Hero Background
- **Caminho do Arquivo:** `assets/img_tia_hero.webp`
- **Comportamento CSS:** Deve ser aplicado como background da seção Hero utilizando `background-size: cover; background-position: center;`.
- **Acessibilidade/Contraste:** Implementar um overlay escuro (ex: gradiente ou camada semi-transparente preta/azul escura) sobre a imagem para garantir o contraste adequado e legibilidade do texto em white/light text.

### 1.2 Logotipo do Produto
- **Caminho do Arquivo:** `assets/logo+produto.webp`
- **Posicionamento:** Deve ser inserido no topo da seção Hero, com alinhamento **perfeitamente centralizado** horizontalmente.

### 1.3 Paleta de Cores e Dinamismo Visual
- **Base:** Utilize estritamente as tonalidades corporativas definidas previamente.
- **Ritmo Visual:** Romper o padrão monocromático atual. É **obrigatório alternar e variar as cores de fundo entre as seções consecutivas** (ex: Seção 1 escura, Seção 2 clara/tinta suave, Seção 3 escura/azulada), mapeando as variações permitidas para criar quebras visuais deliberadas que separam claramente as informações.

---

## 2. Tipografia e Espaçamento (Diretrizes de UX)

### 2.1 Dimensionamento de Fontes
- **Hierarquia:** Aumentar o tamanho de todas as fontes globais da página.
- **Títulos principais (Headlines):** Devem ser imponentes e legíveis.
- **Subheadlines e Seções:** Tamanho médio-alto.
- **Corpo de texto:** Legível e confortável para dispositivos móveis e desktop (evitar fontes miniaturizadas/microscópicas).

### 2.2 Destaques de Informações Críticas
- Elementos vitais como **alertas de datas, bônus, preços e chamadas de urgência** devem receber tratamento visual prioritário.
- **Estilo:** Aplicar `font-weight: bold;`, tamanho de fonte expandido e utilizar as cores de contraste/destaque da paleta para torná-los imediatamente evidentes na leitura rápida (scannability).

### 2.3 Compactação de Layout (Paddings e Margins)
- **Problema:** O espaçamento atual está excessivo, gerando quebras de ritmo.
- **Solução:** **Reduzir drasticamente o espaçamento vertical (paddings superiores/inferiores e margins)** entre as seções e entre os blocos internos de conteúdo. O layout deve ser compacto, fluido e sem espaços vazios desnecessários ("buracos brancos").

---

## 3. Referência de Estrutura e Design

### 3.1 Inspiração e Layout
- **Link de Referência:** [Página de Inspiração Oral Exames](https://imersao-oral-exames.lovable.app/?utm_source=FB&utm_campaign=VHY-CMP-CONVERS%C3%83O-FASE01-COLD-PV7-IMAGEM-ADV-2026-04-15%7C%7C120245857000070577&utm_medium=ADV%7C%7C120245857000200577&utm_content=ISOA-ec%7C%7C120245857000220577&utm_term=Others&xcod=FBhQwK21wXxRVHY-CMP-CONVERS%C3%83O-FASE01-COLD-PV7-IMAGEM-ADV-2026-04-15%7C%7C120245857000070577hQwK21wXxRADV%7C%7C120245857000200577hQwK21wXxRISOA-ec%7C%7C120245857000220577hQwK21wXxROthers&utm_id=120245857000070577&fbclid=PAaWdyZARrPH9leHRuA2FlbQEwAGFkaWQBqzL4W5awkXNydGMGYXBwX2lkDDI1NjI4MTA0MDU1OAABp4LJli0FgldBKDVhcFxvekJ2ahZyAyLcN74g38MM_ZELG0HbSiCamge4v1N8_aem_75tvV1RTnnAAYh8-5qFhaw)
- **Aplicação:** Siga a lógica visual, a clareza das seções e o uso estratégico de imagens/ícones de apoio observados no link. Copie a estrutura e o "feeling" de design premium, adaptando para a copy oficial e mantendo a alternância de fundos azulados/neutros.

### 3.2 Fluxograma de Navegação (Sequência da LP)
A página deve seguir estritamente o fluxo estruturado abaixo para criar uma jornada curta, direta e de alta conversão (Métodos AIDA e Matheus Dias):

1. **Alerta / Data** (Urgência Superior)
2. **Hero / Big Promise** (Atenção com CTA Inicial)
3. **Vídeo de Vendas** (Ponte de 5 minutos posicionada estrategicamente abaixo do Hero)
4. **Dor / Identificação** (Interesse através da agitação de problemas reais)
5. **Solução** (Desejo - Apresentação do Mecanismo Único Raciocínio Clínico 360°)
6. **Para quem é** (Segmentação e clareza de público)
7. **Cronograma** (Conteúdo programático dos dias 1 e 2)
8. **Depoimentos / Prova** (Validação social se disponível)
9. **Autoridade** (Apresentação da Prof. Thassia Moura)
10. **Oferta** (Ancoragem de valor, bônus e preço promocional)
11. **FAQ** (Quebra de objeções)
12. **CTA Final** (Ação definitiva e suporte via WhatsApp)

*Leitura Estratégica:* Data urgente $
ightarrow$ Promessa forte $
ightarrow$ Dor emocional $
ightarrow$ Solução técnica $
ightarrow$ Prova $
ightarrow$ Autoridade $
ightarrow$ Oferta $
ightarrow$ Objeções $
ightarrow$ Compra.

---

## 4. Conteúdo e Copy Definitiva (Siga Verbatim)

Implemente o texto abaixo exatamente como disposto, respeitando as marcações de títulos (H1, H2, H3) e sem alterar os termos da copy.

### Seção 1 — Hero / Atenção

- **Tarja superior (Alerta de Data):**
  `AO VIVO NOS DIAS 24 E 25 DE FEVEREIRO • 20H ÀS 22H • PELO GOOGLE MEET`
- **Headline (H1):**
  `Pare de acumular técnicas soltas e aprenda a montar protocolos integrativos com segurança.`
- **Subheadline (H2):**
  `Em 2 noites ao vivo, a Prof. Thassia Moura vai te mostrar como organizar Ozonioterapia, Laser, Terapia Neural, Fitoterapia, Biorressonância e outras práticas dentro de um raciocínio clínico 360°.`
- **Texto de apoio:**
  `Para profissionais da saúde que já estudaram, compraram equipamentos ou querem atuar com práticas integrativas, mas ainda sentem insegurança para estruturar protocolos e apresentar planos de tratamento.`
- **CTA Principal:**
  `QUERO PARAR DE IMPROVISAR`
- **Microcopy abaixo do botão:**
  `Vagas limitadas • 2 noites ao vivo • Certificado de 8 horas`

---

### Seção 2 — Vídeo + Dor / Interesse

- **Posicionamento do vídeo:** O player do vídeo de 5 minutos deve ficar centralizado imediatamente abaixo do bloco do Hero e antes da listagem de dores.
- **Copy acima do vídeo — Título:**
  `Assista a essa mensagem antes de garantir sua vaga.`
- **Texto de introdução ao vídeo:**
  `Em poucos minutos, a Prof. Thassia Moura vai te explicar por que muitos profissionais da saúde fazem cursos, compram equipamentos, aprendem técnicas, mas continuam inseguros na hora de montar protocolos.`
- **CTA abaixo do vídeo:**
  `ASSISTI E QUERO ENTRAR NA IMERSÃO`

- **Copy da dor — Título (H2):**
  `Você tem cursos, técnicas e equipamentos… mas ainda trava na hora de montar um plano clínico?`
- **Texto de contextualização:**
  `O problema não é falta de conhecimento. O problema é não saber organizar o que você já sabe em uma sequência lógica de atendimento, protocolo e venda.`
- **Lista de dores (Exibir em formato de tópicos com ícones de atenção/alerta):**
  - Comprou equipamento e quase não usa.
  - Fez cursos, mas ainda não sabe por onde começar.
  - Tem medo de conduzir casos com insegurança.
  - Não sabe qual técnica usar primeiro.
  - Monta protocolos sem lógica clara.
  - Tem dificuldade para apresentar planos de tratamento.
  - Vende sessões soltas, mas não consegue estruturar uma jornada terapêutica.
  - Fica confuso ao associar Ozonioterapia, Laser, Terapia Neural, Fitoterapia e outras ferramentas.
- **Frase de impacto (Destacar em caixa ou itálico evidente):**
  `Você não precisa de mais técnicas soltas. Você precisa de raciocínio clínico integrativo organizado.`

---

### Seção 3 — Solução / Desejo

- **Título (H2):**
  `Conheça o Raciocínio Clínico 360°.`
- **Subtítulo (H3):**
  `O método para sair da técnica isolada e começar a montar protocolos integrativos com lógica, segurança e estratégia.`
- **Texto explicativo:**
  `A Imersão Expert Integrativo foi criada para ajudar profissionais da saúde a organizarem suas ferramentas clínicas dentro de uma visão integrativa. Você vai aprender a conectar sinais, sintomas, objetivos terapêuticos e recursos disponíveis para tomar decisões com mais clareza.`
- **Frase de reforço:**
  `Não é sobre decorar protocolos prontos. É sobre aprender a pensar como um Expert Integrativo.`

- **Blocos de Comparação Visual (Lado a Lado ou colunas alternadas):**
  - **Antes da imersão:**
    - Técnicas soltas.
    - Equipamentos parados.
    - Dúvida na conduta.
    - Protocolos sem sequência.
    - Dificuldade para vender planos.
  - **Depois da imersão:**
    - Clareza clínica.
    - Mais segurança na conduta.
    - Protocolos com lógica.
    - Melhor apresentação dos planos.
    - Mais confiança para evoluir na prática integrativa.

- **Cronograma / O que será desenvolvido:**
  - **Dia 1 — Clareza clínica**
    - Como organizar a avaliação inicial.
    - Como definir prioridades clínicas.
    - Como evitar associações sem critério.
    - Como pensar antes de escolher a técnica.
  - **Dia 2 — Protocolos e estratégia**
    - Como associar Ozonioterapia, Laser, Terapia Neural, Fitoterapia e Biorressonância.
    - Como montar protocolos por objetivo clínico.
    - Como evitar pacotes prontos sem raciocínio.
    - Como apresentar planos com mais segurança.
- **CTA Seção 3:**
  `QUERO DESENVOLVER MEU RACIOCÍNIO 360°`

---

### Seção 4 — Benefícios + Autoridade

- **Título Benefícios (H2):**
  `O que muda quando você pensa como um Expert Integrativo?`
- **Grid de Benefícios (Título + Descrição curta):**
  - **Clareza clínica:** Você entende melhor o motivo de cada conduta.
  - **Mais segurança:** Você conduz atendimentos com mais confiança.
  - **Protocolos com lógica:** Você deixa de copiar fórmulas prontas.
  - **Maior valor percebido:** O paciente entende melhor o plano apresentado.
  - **Visão de negócio:** Você conecta técnica, atendimento, plano e crescimento profissional.

- **Seção Autoridade — Título:**
  `Com quem você vai aprender`
- **Nome do Destaque:**
  `Prof. Thassia Moura`
- **Texto de Biografia:**
  `Enfermeira, Doutora e Mestre em Saúde, professora há mais de 17 anos e referência no ensino da Ozonioterapia e das Práticas Integrativas. Ozonioterapeuta habilitada no Brasil e na Itália, especialista em Estética, Enfermagem Dermatológica, Saúde Mental, Ortomolecular, Nutracêutica e Fitoterapia. CEO da Clínica Cure e do Cure Instituto, fundadora do Método Além da Técnica e mentora de profissionais da saúde que desejam sair do acúmulo de cursos e construir uma prática clínica mais segura, estratégica e valorizada.`
- **Frase de reforço:**
  `A Prof. Thassia ensina profissionais da saúde a pensarem além da técnica.`

---

### Seção 5 — Oferta + FAQ + CTA Final / Ação

- **Título Oferta (H2):**
  `Quanto vale sair do improviso e começar a conduzir seus atendimentos com mais clareza?`
- **Ancoragem de Valor (Destacar o preço antigo riscado):**
  `Uma sessão individual de mentoria científica e de negócios poderia custar: De R$ 2.500,00`
- **Nome do Produto e Entregáveis:**
  `Imersão Expert Integrativo`
  - *Inclui:* 2 encontros ao vivo, Aula com Prof. Thassia Moura, Raciocínio Clínico 360°, Protocolos integrativos reais, Bônus exclusivos, Certificado de 8 horas.
- **Lista de Bônus Inclusos:**
  - Roteiro de Avaliação do Paciente 360°.
  - E-book: Como evitar dívidas e crescer com segurança no consultório integrativo.
  - Certificado digital de 8 horas para quem participar ao vivo dos dois dias.
- **Preço Especial de Investimento (Destaque Máximo):**
  `R$ 47,00`
- **Urgência e Notas:**
  `Valor exclusivo por tempo limitado e vagas limitadas. 10% do tempo será destinado à apresentação do projeto Além da Técnica 360.`
- **CTA Principal da Oferta:**
  `GARANTIR MINHA VAGA POR R$ 47,00`

- **Seção FAQ — Título (H2):**
  `Ainda está em dúvida?`
- **Acordeões de Perguntas e Respostas:**
  - **Pergunta 1: A imersão é para iniciantes?** *Resposta:* Sim. É para profissionais que querem organizar melhor seu raciocínio clínico e seus protocolos.
  - **Pergunta 2: Serve para quem já fez cursos?** *Resposta:* Sim. Principalmente para quem já estudou, mas ainda não consegue conectar as técnicas com segurança.
  - **Pergunta 3: Vou receber protocolos prontos?** *Resposta:* Você vai aprender a lógica de construção de protocolos reais. O foco é desenvolver raciocínio clínico, não apenas copiar receitas.
  - **Pergunta 4: Vai falar só de Ozonioterapia?** *Resposta:* Não. A proposta é integrar Ozonioterapia, Laser, Terapia Neural, Fitoterapia, Biorressonância e outras ferramentas.
  - **Pergunta 5: Terei certificado?** *Resposta:* Sim. O certificado de 8 horas será entregue para quem participar ao vivo dos dois dias.
  - **Pergunta 6: Vai tener gravação?** *Resposta:* A prioridade é a participação ao vivo. Caso haja gravação, ela poderá ser liberada por tempo limitado aos inscritos.
  - **Pergunta 7: Por que o valor é tão acessível?** *Resposta:* Porque essa é uma ação especial de apresentação da nova turma do Além da Técnica 360, com vagas limitadas.

- **Bloco de Fechamento / CTA Final — Título:**
  `Você pode continuar acumulando técnicas ou pode começar a organizar sua prática com raciocínio, segurança e estratégia.`
- **Texto de apoio:**
  `A Imersão Expert Integrativo é o primeiro passo para sair do improviso clínico e conduzir seus atendimentos com mais clareza.`
- **CTA Final Principal:**
  `SIM, QUERO GARANTIR MINHA VAGA`
- **CTA Final Secundário (Estilo Outline ou botão de suporte):**
  `FALAR COM O SUPORTE NO WHATSAPP`

- **Rodapé:**
  `Cure Instituto — Todos os direitos reservados.`

---

## 5. Checklist de Verificação Final (Garantia de Qualidade)

Antes de considerar o desenvolvimento concluído, certifique-se de validar os seguintes pontos de controle:
- [ ] O fundo da seção Hero utiliza a imagem `assets/img_tia_hero.webp` com cobertura total e contraste ajustado para leitura?
- [ ] O logotipo `assets/logo+produto.webp` está inserido no topo e perfeitamente centralizado?
- [ ] As fontes globais, títulos e descrições foram aumentados para garantir excelente legibilidade?
- [ ] As informações críticas (data do evento, bônus, preço de R$ 47,00 e gatilhos de urgência) estão com formatação bold e em cores de forte destaque?
- [ ] Os espaçamentos verticais (paddings e margins) foram significativamente reduzidos eliminando buracos vazios entre as seções?
- [ ] As cores de plano de fundo alternam-se dinamicamente entre as seções sucessivas para quebrar o layout monocromático?