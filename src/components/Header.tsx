import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { game } from "@/data/game";

const links = [
  { to: "/", label: "Início" },
  { to: "/jogo", label: "O Jogo" },
  { to: "/agentes", label: "Agentes" },
  { to: "/blog", label: "Blog" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-full flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-xl font-bold tracking-[0.18em] text-foreground">
          {game.name.slice(0, 4)}
          <span className="text-primary">{game.name.slice(4)}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="link-underline font-serif text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              activeClassName="text-foreground"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="clip-angle-sm font-serif uppercase tracking-[0.14em]">
            <a href="#download">Jogar grátis</a>
          </Button>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-full flex flex-col gap-1 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-2 font-serif text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="mt-3 clip-angle-sm font-serif uppercase tracking-[0.14em]">
              <a href="#download" onClick={() => setOpen(false)}>Jogar grátis</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
