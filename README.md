# Imersão Expert Integrativo - Landing Page & Meta Conversions API (CAPI)

Este repositório contém o código-fonte da landing page **Imersão Expert Integrativo**. O projeto foi estruturado utilizando tecnologias web puras (HTML5, CSS3, JavaScript Vanilla) para maximizar o desempenho e a velocidade de carregamento, contando com uma integração de alta confiabilidade de eventos junto ao **Meta Ads** utilizando rastreamento híbrido via navegador (Meta Pixel) e servidor (Netlify Serverless Functions + Meta Conversions API - CAPI) com deduplicação de eventos.

---

## 1. Visão Geral do Projeto

A landing page foi desenvolvida especificamente para campanhas de tráfego pago de alto volume. O principal objetivo técnico é o alcance de métricas ótimas de desempenho no carregamento e a consistência no rastreamento de conversões.

O uso combinado do **Meta Pixel** e da **Meta Conversions API (CAPI)** permite o envio redundante de eventos de conversão. A CAPI atua enviando sinais diretamente do servidor para contornar limitações como bloqueadores de anúncios (adblockers), restrições de rastreamento de cookies de terceiros e inconsistências de rede no navegador do cliente, aumentando sensivelmente a precisão e a qualidade das conversões no Gerenciador de Eventos da Meta.

---

## 2. Estrutura de Arquivos

Abaixo está a disposição estrutural de pastas e arquivos essenciais do projeto:

```txt
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── netlify.toml
└── netlify/
    └── functions/
        └── meta-capi.js
```

### Detalhamento das Funções de Cada Arquivo

- **`index.html`**: Contém a estrutura semântica da landing page, a copy oficial, e elementos visuais estruturados. Todos os atributos inline poluídos do Meta Pixel foram removidos e substituídos por chamadas limpas aos eventos de clique.
- **`css/styles.css`**: Concentra a folha de estilos globais, paleta de cores institucional, regras de tipografia e design responsivo otimizado para dispositivos móveis e desktops.
- **`js/main.js`**: Reúne a lógica de comportamento da landing page, como o controle do accordion de FAQ, substituição da fachada do player de vídeo, geração de identificadores de rastreamento (`event_id`), lógica do Meta Pixel, leitura de cookies de rastreamento e comunicação assíncrona com o endpoint serverless da Netlify.
- **`netlify.toml`**: Arquivo de configuração de deploys e funções da Netlify, especificando o diretório de funções serverless e configurando o bundler `esbuild` para construção rápida.
- **`netlify/functions/meta-capi.js`**: Função serverless que roda no ecossistema de infraestrutura da Netlify. É responsável por receber o payload limpo do front-end, enriquecê-lo com dados de rede (IP do cliente, User Agent) e despachá-lo de forma segura e autenticada para a Graph API da Meta.

---

## 3. Técnicas de Performance Aplicadas

A performance de carregamento web possui correlação direta com a taxa de conversão, redução do custo por clique (CPC) e retenção dos usuários vindos de campanhas de tráfego pago. Foram implementadas e recomendadas as seguintes técnicas:

- **Código Limpo Sem Frameworks (HTML/CSS/JS Puro):** Sem custos extras de inicialização (overhead) de grandes frameworks como React ou Angular.
- **Evitar Dependências e Bibliotecas Externas:** Reduz o número de requisições HTTP necessárias para iniciar a renderização da página (First Contentful Paint).
- **Assets e Imagens Otimizadas:** Uso de formatos modernos e compactados (como `.webp`) para imagens de background e fotos dos bônus.
- **Redução de Scripts Bloqueantes:** Scripts JS carregados de forma não-bloqueante (`defer`) para permitir que a renderização do HTML e do CSS aconteça primeiro.
- **Separação de Responsabilidades:** HTML lida estritamente com estrutura, CSS com design e JS com comportamento dinâmico.
- **Carregamento Condicional de Mídia (Video Facade):** O iframe pesado de vídeo só é instanciado e carregado na memória do navegador se o usuário clicar na capa do vídeo, economizando largura de banda inicial.
- **Minimização de Scripts de Terceiros:** Ferramentas de análise externa e tracking são disparadas de forma isolada para não concorrer com o carregamento visual principal.

---

## 4. Integração com Meta Pixel

O Meta Pixel roda no navegador do usuário capturando e enviando eventos acionados no lado do cliente. 

### Eventos Rastreados
- **`PageView`**: Disparado automaticamente no carregamento da página.
- **`ViewContent`**: Disparado quando o usuário clica no vídeo de vendas.
- **`Contact`**: Disparado quando o usuário inicia uma chamada de suporte ou contato por meio dos botões de WhatsApp.
- **`CheckoutClick`**: Disparado quando o usuário clica nos botões de redirecionamento para o checkout da Kiwify.

### Eventos Padrão vs. Personalizados
Para disparar eventos padrão homologados pela Meta, utilizamos a diretiva `track`. Para eventos customizados com nomes arbitrários, utilizamos `trackCustom`.
- **Eventos Padrão:**
  ```javascript
  fbq('track', 'PageView', eventData, { eventID: id });
  fbq('track', 'ViewContent', eventData, { eventID: id });
  fbq('track', 'Contact', eventData, { eventID: id });
  ```
- **Eventos Personalizados:**
  ```javascript
  fbq('trackCustom', 'CheckoutClick', eventData, { eventID: id });
  ```

---

## 5. Integração com Meta Conversions API/CAPI

A Conversions API (CAPI) estabelece uma ponte direta de servidor para servidor com os servidores da Meta. O fluxo de execução de um evento ocorre da seguinte forma:

```txt
Usuário interage com a LP (carregamento, clique em botões)
↓
JavaScript dispara o Meta Pixel no navegador do usuário
↓
JavaScript envia em paralelo os dados da ação para a Netlify Function
↓
A função serverless (meta-capi.js) extrai o IP e o User Agent do visitante
↓
A função serverless monta o payload de evento enriquecido (dados e cookies _fbp/_fbc)
↓
A função envia o payload autenticado à Graph API da Meta via POST
```

### Responsabilidades do Servidor (Netlify Function):
- Interceptar cabeçalhos de rede (`x-nf-client-connection-ip`, `x-forwarded-for` e `user-agent`).
- Consolidar parâmetros de usuário, dados customizados de valor e identificação de cookies persistidos (`fbp`/`fbc`).
- Enviar as requisições autenticadas de forma segura e assíncrona, isolando credenciais do front-end.

---

## 6. Deduplicação de Eventos

Como um mesmo evento é disparado de forma redundante (pelo navegador e pelo servidor), a Meta receberá duas cópias dele. Para evitar contabilidade duplicada e garantir a limpeza das métricas, é obrigatório usar a **Deduplicação**.

A deduplicação baseia-se no envio de um identificador compartilhado idêntico (`event_id`):

- **No Navegador (Pixel):** Enviado sob a chave `eventID` no bloco de opções:
  ```javascript
  fbq('track', 'Contact', eventData, { eventID: eventId });
  ```
- **No Servidor (CAPI):** Enviado sob o parâmetro `event_id` do payload principal:
  ```json
  {
    "event_name": "Contact",
    "event_id": eventId,
    "user_data": { ... }
  }
  ```

A função utilitária no front-end gera este código único por evento:
```javascript
function generateEventID() {
  return 'eid-' + Date.now() + '-' + Math.floor(Math.random() * 1000000);
}
```

---

## 7. Variáveis de Ambiente

Para o funcionamento correto da API de Conversões, configure as seguintes variáveis no painel da Netlify (**Site settings > Environment variables**):

```env
META_PIXEL_ID=SEU_PIXEL_ID
META_ACCESS_TOKEN=SEU_ACCESS_TOKEN_GERADO_NA_META
META_API_VERSION=v23.0
META_TEST_EVENT_CODE=
ALLOWED_ORIGIN=
```

### Significado das Variáveis:
- `META_PIXEL_ID`: O identificador do Dataset/Pixel da Meta Ads onde os eventos serão gravados.
- `META_ACCESS_TOKEN`: Token de autenticação permanente da API de Conversões gerado no Gerenciador de Eventos.
- `META_API_VERSION`: Versão ativa da Graph API da Meta (ex: `v23.0`).
- `META_TEST_EVENT_CODE`: Código temporário usado apenas para depuração de eventos em tempo real.
- `ALLOWED_ORIGIN`: Origem autorizada no CORS (Ex: `https://seu-dominio.com.br`) para restringir acessos indevidos de terceiros ao seu endpoint.

> [!CAUTION]
> **Aviso de Segurança:** Nunca armazene ou escreva o `META_ACCESS_TOKEN` diretamente no código-fonte, repositórios do GitHub, HTML ou arquivos JS públicos. Caso o token vaze acidentalmente, invalide-o imediatamente no Gerenciador de Eventos da Meta e gere um novo.

---

## 8. Função Serverless na Netlify

A lógica de processamento do servidor reside em:
`netlify/functions/meta-capi.js`

Pode ser invocada pelo cliente utilizando o path relativo:
`/.netlify/functions/meta-capi`

### Características de Invocação:
- Aceita estritamente chamadas utilizando o método `POST`.
- Responde com cabeçalhos CORS compatíveis com requisições prévias (`OPTIONS`).
- Caso seja invocada por um método incorreto (ex: abrir o link no navegador que realiza requisições `GET`), a API retornará o status `405 Method Not Allowed`:
  ```json
  {
    "success": false,
    "error": "Método não permitido. Use POST."
  }
  ```

---

## 9. Como Testar a Integração

### Teste no Navegador (DevTools)
1. Abra o site no navegador e aperte `F12`.
2. Abra a aba **Rede** (Network).
3. Clique em um botão (Checkout, WhatsApp, Vídeo).
4. Verifique a listagem e certifique-se de que a chamada `meta-capi` foi feita via método `POST`, respondendo com status HTTP `200` e um JSON de resposta que indica sucesso.

### Teste no Console do Desenvolvedor
Você pode forçar o disparo manual de um evento diretamente no console do DevTools executando o trecho abaixo:
```javascript
fetch('/.netlify/functions/meta-capi', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    event_name: 'TestEvent',
    event_id: 'test-' + Date.now(),
    event_source_url: window.location.href,
    event_data: {
      content_name: 'Teste de Funcionamento da CAPI'
    }
  })
})
.then(response => response.json())
.then(data => console.log('Sucesso CAPI:', data))
.catch(error => console.error('Erro CAPI:', error));
```

### Validação no Gerenciador de Eventos (Testar Eventos)
1. No **Gerenciador de Eventos da Meta**, vá até a aba **Testar Eventos**.
2. Copie o código de teste gerado no painel.
3. Configure a variável de ambiente `META_TEST_EVENT_CODE` na Netlify com esse código e publique um novo deploy.
4. Execute as interações na landing page.
5. Verifique se os eventos aparecem agrupados em pares no painel da Meta, com os canais **Navegador** (Browser) e **Servidor** (Server) apontando para o mesmo `event_id`.
6. Após homologar o correto funcionamento, **limpe/esvazie** a variável `META_TEST_EVENT_CODE` na Netlify e realize um novo deploy para evitar que os dados oficiais de campanhas entrem em modo de depuração.

---

## 10. Deploy

O deploy deste projeto é contínuo e integrado:
- **GitHub Integration:** Commits ou merges aceitos no branch de produção acionam o build automático na Netlify.
- **Atualização de Variáveis:** Se você alterar qualquer variável de ambiente (como trocar o token da Meta ou adicionar o código de teste), é recomendável executar um acionamento manual de deploy (Trigger Deploy) no dashboard da Netlify para forçar as funções serverless a lerem os novos valores.

---

## 11. Segurança

- **Segregação de Chaves:** O token CAPI reside estritamente em ambiente restrito de servidor (Netlify).
- **Sem Arquivo `.env` no Git:** Garanta que arquivos locais de desenvolvimento (como `.env`) estejam listados no `.gitignore` e não sejam versionados.
- **Filtro CORS:** Configure a variável `ALLOWED_ORIGIN` com a URL exata do seu domínio de produção para evitar que concorrentes e bots enviem eventos ao seu endpoint fora da página oficial.

---

## 12. Observações Importantes

- A API de Conversões **não substitui** o rastreamento do navegador; ambas as fontes atuam em conjunto, sendo a deduplicação encarregada de filtrar redundâncias.
- A estabilização de métricas e melhora de desempenho de campanhas depende do tráfego sustentado e do período de aprendizado da inteligência de anúncios (Pixel/Dataset) da Meta.
- Mantenha o `META_TEST_EVENT_CODE` desconfigurado (vazio) em produção para assegurar o fluxo normal de otimização de conversão.
