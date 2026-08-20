import { Layout } from "@/components/Layout";
import { AgentCard } from "@/components/AgentCard";
import { agents } from "@/data/game";

const Agents = () => (
  <Layout>
    <section className="border-b border-border py-16">
      <div className="container-full">
        <p className="eyebrow">Operadores</p>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl">Agentes</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Três funções, um objetivo. Cada operador tem uma habilidade tática única e um estilo de jogo próprio —
          o time vence quando as funções se completam.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-full grid gap-8 md:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Agents;
