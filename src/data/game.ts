import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";
import agent3 from "@/assets/agent-3.jpg";
import mode1 from "@/assets/mode-1.jpg";
import mode2 from "@/assets/mode-2.jpg";

export const game = {
  name: "OVERSTRIKE",
  tagline: "5v5 tático. Sem segunda chance.",
  description:
    "OVERSTRIKE é um shooter tático competitivo 5v5 ambientado em megacidades tomadas por corporações. Escolha seu operador, domine o recuo das armas e coordene ataques em partidas de 12 rodadas.",
  releaseDate: "12 de novembro de 2026",
  platforms: ["PC", "PlayStation 5", "Xbox Series X|S"],
  price: "Free to play",
};

export const agents = [
  {
    id: "vex",
    name: "VEX",
    role: "Assalto",
    image: agent1,
    ability: "Sobrecarga",
    description:
      "Especialista em entrada. Acelera o próprio metabolismo para invadir sites e abrir espaço para o time.",
    stats: { dano: 88, mobilidade: 76, defesa: 42 },
  },
  {
    id: "bulwark",
    name: "BULWARK",
    role: "Contenção",
    image: agent2,
    ability: "Escudo Hardlight",
    description:
      "Muro ambulante. Projeta uma barreira de energia que bloqueia linhas de tiro e trava corredores inteiros.",
    stats: { dano: 54, mobilidade: 38, defesa: 95 },
  },
  {
    id: "wraith",
    name: "WRAITH",
    role: "Reconhecimento",
    image: agent3,
    ability: "Olho Fantasma",
    description:
      "Vê antes de ser visto. Marca inimigos através de paredes por três segundos e some do radar ao recarregar.",
    stats: { dano: 92, mobilidade: 61, defesa: 33 },
  },
];

export const modes = [
  {
    id: "protocolo",
    name: "Protocolo",
    image: mode1,
    format: "5v5 · 12 rodadas",
    description:
      "O modo competitivo principal. Ataque e defesa alternados, economia por rodada e zero respawn. Aqui o ranked é decidido.",
  },
  {
    id: "circuito",
    name: "Circuito Pro",
    image: mode2,
    format: "Temporada · Palco oficial",
    description:
      "O caminho do ranked até o palco. Classificatórias abertas, playoffs regionais e a final mundial com premiação de US$ 2M.",
  },
];

export const features = [
  {
    title: "Tiro de precisão real",
    description: "Recuo determinístico, penetração por material e dano localizado. Nada de aleatoriedade escondida.",
  },
  {
    title: "Ranked justo",
    description: "MMR transparente, punição por abandono e temporadas de 8 semanas com recompensas exclusivas.",
  },
  {
    title: "Anticheat de kernel",
    description: "Detecção em tempo real com banimento de hardware. Partidas limpas do bronze ao invicto.",
  },
  {
    title: "Servidores a 128 tick",
    description: "Latência abaixo de 20 ms nas principais capitais brasileiras. Cada peek conta.",
  },
];

export const posts = [
  {
    slug: "patch-2-4-ajustes-de-armas",
    title: "Patch 2.4: ajustes de armas e nerf na Sobrecarga",
    category: "Patch Notes",
    date: "18 de agosto de 2026",
    excerpt:
      "Reduzimos a duração da Sobrecarga da VEX e revisamos o spread da carabina KR-9 em movimento. Confira a lista completa.",
    image: mode1,
    body: [
      "A meta de agosto ficou concentrada em entradas rápidas, com a VEX presente em 71% das partidas de elite. O objetivo do 2.4 é reduzir o valor de apertar o botão sem tirar a identidade da agente.",
      "Sobrecarga: duração reduzida de 6s para 4,5s. O bônus de velocidade caiu de 25% para 18%, mas o tempo de recarga da habilidade foi reduzido em uma rodada para manter o ritmo de jogo.",
      "KR-9: spread em movimento aumentado em 12%. A arma continua dominante em duelos parados, mas agora exige paradas curtas antes do disparo.",
      "Bônus: corrigimos o bug em que o Escudo Hardlight bloqueava utilidades do próprio time no mapa Refinaria.",
    ],
  },
  {
    slug: "circuito-pro-2026-classificatorias",
    title: "Circuito Pro 2026: as classificatórias abertas do Brasil",
    category: "Esports",
    date: "9 de agosto de 2026",
    excerpt:
      "Inscrições liberadas para times sem contrato. Dois slots na final regional estão em jogo e o formato é eliminação dupla.",
    image: mode2,
    body: [
      "As classificatórias abertas acontecem em três fins de semana, com chave de eliminação dupla e séries de melhor de três até as quartas.",
      "Qualquer time com cinco jogadores acima do rank Platina pode se inscrever. Não há taxa de entrada e os jogos são disputados nos servidores de São Paulo.",
      "Os dois times sobreviventes se juntam às oito organizações parceiras na final regional, transmitida direto do palco em novembro.",
    ],
  },
  {
    slug: "como-treinar-mira-30-minutos",
    title: "Como treinar mira em 30 minutos por dia",
    category: "Guias",
    date: "1 de agosto de 2026",
    excerpt:
      "Uma rotina simples de aquecimento, controle de recuo e troca de alvos que cabe antes da primeira partida ranqueada.",
    image: mode1,
    body: [
      "Dez minutos de flick estático, dez de rastreio e dez de controle de spray. A ordem importa: comece amplo e termine fino.",
      "No campo de treino, fixe a sensibilidade e use apenas duas armas por semana. Trocar de arma toda hora impede a memória muscular de se consolidar.",
      "Feche o aquecimento com uma partida de tiro livre contra bots em dificuldade máxima e só então entre no ranked.",
    ],
  },
];
