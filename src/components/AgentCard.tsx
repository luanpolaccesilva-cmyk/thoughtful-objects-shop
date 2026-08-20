import { agents } from "@/data/game";

type Agent = (typeof agents)[number];

export const AgentCard = ({ agent }: { agent: Agent }) => (
  <article className="group hover-lift clip-angle border border-border bg-card">
    <div className="image-reveal relative aspect-portrait">
      <img
        src={agent.image}
        alt={`Operador ${agent.name}, especialista em ${agent.role}`}
        loading="lazy"
        width={1024}
        height={1280}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
      <span className="absolute left-4 top-4 clip-angle-sm bg-primary px-2 py-1 font-serif text-[10px] font-bold uppercase tracking-editorial text-primary-foreground">
        {agent.role}
      </span>
    </div>

    <div className="relative -mt-12 p-5">
      <h3 className="font-serif text-2xl font-bold">{agent.name}</h3>
      <p className="mt-1 text-xs uppercase tracking-editorial text-primary">{agent.ability}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{agent.description}</p>

      <dl className="mt-5 space-y-2">
        {Object.entries(agent.stats).map(([label, value]) => (
          <div key={label} className="flex items-center gap-3">
            <dt className="w-24 text-[11px] uppercase tracking-editorial text-muted-foreground">{label}</dt>
            <dd className="h-1.5 flex-1 bg-secondary">
              <span className="block h-full bg-primary" style={{ width: `${value}%` }} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </article>
);
