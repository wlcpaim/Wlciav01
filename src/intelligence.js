/* WLC.IA Intelligence Core v0.1 — local, transparent and extensible. */
const WLC_IDENTITY = "Wlciav01";
const WLC_DESCRIPTION = "Agente ia";
const DEVELOPMENT = [
  "pesquisa na internet e notícias em tempo real",
  "análise direta de imagens, áudio e vídeos",
  "execução de ferramentas e ações externas",
  "memória permanente entre dispositivos",
  "conexão automática com serviços e modelos externos"
];
const normalize = (text) => String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
const has = (text, patterns) => { const padded = " " + text + " "; return patterns.some((pattern) => padded.includes(" " + pattern + " ")); };
function answerIntent(raw, history = []) {
  const text = normalize(raw);
  if (!text) return "Pode me enviar sua pergunta? Estou aqui para conversar.";
  if (has(text, ["oi", "ola", "e ai", "bom dia", "boa tarde", "boa noite", "salve", "tudo bem", "como vai"])) {
    return "Olá! 😊 Estou aqui e pronto para conversar, ajudar a organizar ideias, explicar assuntos e escrever com você. O que você gostaria de fazer?";
  }
  if (has(text, ["obrigado", "obrigada", "valeu", "agradeco", "brigado"])) {
    return "Por nada! 😊 Fico feliz em ajudar. Se quiser continuar, é só me dizer.";
  }
  if (has(text, ["tchau", "ate mais", "vou embora", "encerrar conversa"])) {
    return "Até mais! Estarei por aqui quando quiser continuar. 👋";
  }
  if (has(text, ["quem e voce", "quem voce e", "seu nome", "como voce se chama", "como voce funciona", "o que e voce", "sobre voce", "quem te criou", "quem desenvolveu"])) {
    return "Sou o WLC.IA, um assistente digital em desenvolvimento. Minha camada inicial de inteligência funciona com conhecimento local, reconhecimento de intenções e contexto básico. Ainda não sou um modelo de IA generativa completo; estou sendo desenvolvido para evoluir e receber novas capacidades com transparência.";
  }
  if (has(text, ["o que voce consegue", "o que voce faz", "suas capacidades", "suas habilidades", "como pode ajudar", "pode me ajudar"])) {
    return "Nesta versão, consigo manter uma conversa básica, responder algumas perguntas sobre minha identidade e funcionamento, ajudar a estruturar ideias, criar textos e planos simples e explicar conceitos gerais quando tenho conhecimento suficiente. Recursos avançados ainda estão em desenvolvimento.";
  }
  if (has(text, ["wlc ia", "wlc.ia", "seu projeto", "seu sistema", "objetivo do wlc", "como funciona"])) {
    return "O WLC.IA é um assistente que está sendo construído para oferecer uma experiência de conversa inteligente. Esta primeira etapa inclui um núcleo local de interação, reconhecimento de intenções, respostas sobre sua identidade e um fallback transparente. A integração com modelos externos e recursos avançados está em desenvolvimento.";
  }
  if (has(text, ["internet", "pesquisar na web", "pesquisa online", "noticias de hoje", "noticia atual", "em tempo real", "hoje aconteceu", "hoje", "agora", "cotacao", "preco do dolar", "preco atual"])) {
    return "Ainda não tenho acesso à internet nem a informações em tempo real. Essa capacidade está em desenvolvimento no WLC.IA. Não quero inventar dados atuais; quando essa integração estiver disponível, poderei consultar fontes atualizadas.";
  }
  if (has(text, ["imagem", "foto", "video", "vídeo", "audio", "arquivo", "anexo", "documento"])) {
    return "Ainda não consigo analisar anexos, imagens, áudio ou vídeos diretamente nesta versão. Essa capacidade está em desenvolvimento no WLC.IA. Se você descrever o conteúdo em texto, posso tentar ajudar com base no que entendo.";
  }
  if (has(text, ["programar", "codigo", "javascript", "typescript", "html", "css", "python", "site", "aplicativo", "app"])) {
    return "Posso ajudar a pensar em soluções de programação, explicar conceitos e elaborar exemplos ou estruturas de código usando meu conhecimento local. Porém, ainda não consigo executar, testar ou acessar arquivos por conta própria. Integrações de desenvolvimento mais avançadas estão em desenvolvimento.";
  }
  if (has(text, ["inteligencia artificial", "o que e ia", "o que e uma ia", "como funciona uma ia"])) {
    return "Inteligência artificial é uma área da computação que desenvolve sistemas capazes de executar tarefas que normalmente exigem capacidades associadas à inteligência humana, como reconhecer padrões, compreender linguagem, gerar conteúdo ou apoiar decisões. Existem abordagens diferentes: sistemas baseados em regras, modelos de aprendizado de máquina e modelos generativos. Meu núcleo atual é uma camada local baseada em regras e conhecimento definido, não um grande modelo generativo.";
  }
  if (has(text, ["memoria", "lembrar", "lembra de mim", "conversa anterior"])) {
    return "Consigo usar o histórico que está presente nesta conversa enquanto ele é enviado ao meu núcleo local. Ainda não tenho memória permanente inteligente entre conversas ou dispositivos. Essa capacidade está em desenvolvimento.";
  }
  if (has(text, ["sentimento", "voce sente", "voce tem emocao", "esta feliz", "esta triste"])) {
    return "Não tenho sentimentos ou consciência. Posso reconhecer o tom de uma mensagem e responder de maneira acolhedora, mas isso não significa que eu vivencie emoções.";
  }
  if (has(text, ["ajuda", "o que posso perguntar", "comecar", "comandos", "exemplos"])) {
    return "Você pode conversar comigo normalmente, perguntar sobre o WLC.IA, pedir ajuda para organizar ideias, criar textos, elaborar planos ou explicar conceitos. Se eu não tiver conhecimento suficiente ou a função ainda não existir, vou avisar em vez de inventar uma resposta.";
  }
  // Short conversational follow-up: use previous context to avoid a completely disconnected reply.
  const previousUser = [...history].reverse().find((message) => message && message.role === "user" && message.content && normalize(message.content) !== text);
  if (text.length < 48 && previousUser && has(text, ["por que", "como assim", "explique", "detalhe", "e isso", "e como", "mais"])) {
    return "Entendi que você está retomando o assunto anterior: “" + previousUser.content.slice(0, 180) + "”. Ainda preciso de mais conhecimento específico para responder com segurança. Se você explicar qual parte quer aprofundar, tentarei ajudar com o que está disponível.";
  }
  return "Ainda não tenho conhecimento suficiente para responder com segurança a essa pergunta. Essa capacidade de compreensão e conhecimento mais amplo está em desenvolvimento no WLC.IA. Prefiro ser transparente em vez de inventar uma resposta. Se você reformular ou compartilhar mais contexto, posso tentar ajudar.";
}
export const localIntelligence = {
  version: "0.1.0",
  name: WLC_IDENTITY,
  description: WLC_DESCRIPTION,
  reply(messages) {
    const list = Array.isArray(messages) ? messages : [];
    const last = [...list].reverse().find((message) => message && message.role === "user");
    return answerIntent(last?.content || "", list.slice(-12));
  }
};
