import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <Layout>
    <section className="py-24 md:py-32">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-serif text-8xl font-bold text-primary/30">404</p>
          <h1 className="mt-4 font-serif text-3xl md:text-4xl">Sinal perdido</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Esta página saiu do mapa. Volte para a base e escolha outra rota.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild className="clip-angle-sm font-serif uppercase tracking-editorial">
              <Link to="/">Voltar ao início</Link>
            </Button>
            <Button asChild variant="outline" className="clip-angle-sm font-serif uppercase tracking-editorial">
              <Link to="/agentes">Ver agentes</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default NotFound;
