import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Download, ChevronRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { AgentCard } from "@/components/AgentCard";
import { Button } from "@/components/ui/button";
import { game, agents, modes, features, posts } from "@/data/game";
import heroImage from "@/assets/hero.jpg";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Operador de OVERSTRIKE ajoelhado em rua neon destruída"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container-full relative py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">{game.price} · {game.releaseDate}</p>
          <h1 className="mt-4 font-serif text-5xl font-bold leading-[0.95] md:text-7xl">
            {game.name.slice(0, 4)}
            <span className="text-primary">{game.name.slice(4)}</span>
          </h1>
          <p className="mt-4 font-serif text-xl uppercase tracking-editorial text-foreground/90">
            {game.tagline}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {game.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="clip-angle-sm glow-crimson font-serif uppercase tracking-[0.14em]">
              <a href="#download">
                <Download className="mr-2 h-4 w-4" /> Baixar agora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="clip-angle-sm border-border bg-background/40 font-serif uppercase tracking-[0.14em]"
            >
              <a href="#modos">
                <Play className="mr-2 h-4 w-4" /> Ver gameplay
              </a>
            </Button>
          </div>

          <p className="mt-8 text-xs uppercase tracking-editorial text-muted-foreground">
            {game.platforms.join(" · ")}
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats marquee */}
    <section className="border-y border-border bg-card">
      <div className="container-full grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {[
          { value: "128", label: "Tick rate" },
          { value: "14M", label: "Jogadores" },
          { value: "12", label: "Mapas" },
          { value: "US$ 2M", label: "Premiação" },
        ].map((stat) => (
          <div key={stat.label} className="px-2 py-8 text-center">
            <p className="font-serif text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-editorial text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Modos */}
    <section id="modos" className="py-20 md:py-28">
      <div className="container-full">
        <p className="eyebrow">Modos de jogo</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl md:text-5xl">
          Do ranked solo ao <span className="text-primary">palco mundial</span>
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {modes.map((mode) => (
            <article key={mode.id} id={mode.id === "circuito" ? "circuito" : undefined} className="hover-lift clip-angle border border-border bg-card">
              <div className="image-reveal aspect-video">
                <img
                  src={mode.image}
                  alt={`Modo ${mode.name} de ${game.name}`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-editorial text-primary">{mode.format}</p>
                <h3 className="mt-2 font-serif text-2xl">{mode.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mode.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Agentes */}
    <section className="surface-grid border-y border-border py-20 md:py-28">
      <div className="container-full">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Operadores</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Escolha seu papel</h2>
          </div>
          <Link
            to="/agentes"
            className="link-underline font-serif text-sm font-semibold uppercase tracking-editorial text-primary"
          >
            Ver todos
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 md:py-28">
      <div className="container-full grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow">Por dentro</p>
          <h2 className="mt-3 font-serif text-3xl md:text-5xl">
            Competitivo <span className="text-primary">de verdade</span>
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Cada sistema foi construído para que a vitória dependa de leitura de jogo e execução — nunca de sorte.
          </p>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {features.map((feature, i) => (
            <div key={feature.title} className="bg-background p-7">
              <span className="font-serif text-xs font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog */}
    <section className="border-t border-border bg-card py-20 md:py-28">
      <div className="container-full">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Blog</p>
            <h2 className="mt-3 font-serif text-3xl md:text-5xl">Últimas notícias</h2>
          </div>
          <Link
            to="/blog"
            className="link-underline font-serif text-sm font-semibold uppercase tracking-editorial text-primary"
          >
            Todos os posts
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="hover-lift clip-angle border border-border bg-background">
              <Link to={`/blog/${post.slug}`}>
                <div className="image-reveal aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-editorial text-primary">
                    {post.category} · {post.date}
                  </p>
                  <h3 className="mt-2 font-serif text-lg leading-snug">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Download */}
    <section id="download" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-25">
        <img src={heroImage} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background" />

      <div className="container-narrow relative text-center">
        <p className="eyebrow">Entre em campo</p>
        <h2 className="mt-3 font-serif text-4xl md:text-6xl">
          Baixe <span className="text-primary">grátis</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
          Disponível em {game.platforms.join(", ")}. Crossplay completo e progressão compartilhada entre plataformas.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {game.platforms.map((platform) => (
            <Button
              key={platform}
              variant="outline"
              className="clip-angle-sm border-border font-serif uppercase tracking-[0.12em]"
            >
              {platform} <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ))}
        </div>

        <div id="requisitos" className="mt-16 grid gap-px bg-border text-left sm:grid-cols-2">
          <div className="bg-card p-7">
            <h3 className="font-serif text-sm tracking-editorial text-primary">Mínimo</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <li>Windows 10 64-bit</li>
              <li>Intel i5-6500 / Ryzen 5 1600</li>
              <li>8 GB RAM · GTX 1050 Ti</li>
              <li>40 GB SSD</li>
            </ul>
          </div>
          <div className="bg-card p-7">
            <h3 className="font-serif text-sm tracking-editorial text-primary">Recomendado</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <li>Windows 11 64-bit</li>
              <li>Intel i7-12700 / Ryzen 7 5800X</li>
              <li>16 GB RAM · RTX 3060</li>
              <li>40 GB NVMe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
