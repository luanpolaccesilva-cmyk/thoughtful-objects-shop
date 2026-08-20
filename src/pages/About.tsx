import { Layout } from "@/components/Layout";
import { game, features, modes } from "@/data/game";
import heroImage from "@/assets/hero.jpg";

const About = () => (
  <Layout>
    <section className="relative border-b border-border">
      <img
        src={heroImage}
        alt="Cenário urbano de OVERSTRIKE"
        width={1920}
        height={1088}
        className="h-[42vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="container-full absolute inset-x-0 bottom-8">
        <p className="eyebrow">O Jogo</p>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl">Dentro de {game.name}</h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-narrow grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl">A premissa</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Em 2091, seis conglomerados dividem o controle das megacidades. Quando o Protocolo Overstrike vaza,
            cada corporação passa a recrutar operadores independentes para tomar os nós de energia da cidade
            antes que o rival o faça.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Você comanda um desses operadores. Sem heróis, sem magia: só leitura de mapa, economia de rodada e
            comunicação com quatro pessoas que dependem de você.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-2xl">Ficha técnica</h2>
          <dl className="mt-4 divide-y divide-border border-y border-border text-sm">
            {[
              ["Gênero", "FPS tático competitivo"],
              ["Formato", "5v5 · 12 rodadas"],
              ["Lançamento", game.releaseDate],
              ["Preço", game.price],
              ["Plataformas", game.platforms.join(", ")],
              ["Idiomas", "Português (BR), Inglês, Espanhol"],
            ].map(([term, value]) => (
              <div key={term} className="flex justify-between gap-6 py-3">
                <dt className="uppercase tracking-editorial text-muted-foreground text-[11px]">{term}</dt>
                <dd className="text-right text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <section className="surface-grid border-y border-border py-16 md:py-24">
      <div className="container-full">
        <h2 className="font-serif text-3xl md:text-4xl">Pilares de design</h2>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background p-7">
              <h3 className="font-serif text-lg">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-full grid gap-8 md:grid-cols-2">
        {modes.map((mode) => (
          <article key={mode.id} className="clip-angle border border-border bg-card">
            <div className="image-reveal aspect-video">
              <img
                src={mode.image}
                alt={`Modo ${mode.name}`}
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
    </section>
  </Layout>
);

export default About;
