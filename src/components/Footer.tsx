import { Link } from "react-router-dom";
import { game } from "@/data/game";

export const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container-full grid gap-10 py-14 md:grid-cols-4">
      <div className="md:col-span-2">
        <p className="font-serif text-2xl font-bold tracking-[0.18em]">
          {game.name.slice(0, 4)}
          <span className="text-primary">{game.name.slice(4)}</span>
        </p>
        <p className="mt-3 max-w-sm text-sm text-muted-foreground">{game.tagline}</p>
        <p className="mt-6 text-xs uppercase tracking-editorial text-muted-foreground">
          {game.platforms.join(" · ")}
        </p>
      </div>

      <div>
        <h2 className="mb-4 text-xs tracking-editorial text-foreground">Navegar</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/jogo" className="hover:text-primary">O Jogo</Link></li>
          <li><Link to="/agentes" className="hover:text-primary">Agentes</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="mb-4 text-xs tracking-editorial text-foreground">Comunidade</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><a href="#download" className="hover:text-primary">Download</a></li>
          <li><a href="#requisitos" className="hover:text-primary">Requisitos</a></li>
          <li><a href="#circuito" className="hover:text-primary">Circuito Pro</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border py-6">
      <p className="container-full text-xs text-muted-foreground">
        © {new Date().getFullYear()} {game.name} Studios. Jogo fictício criado para demonstração.
      </p>
    </div>
  </footer>
);
