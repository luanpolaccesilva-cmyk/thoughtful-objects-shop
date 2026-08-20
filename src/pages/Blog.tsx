import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { posts } from "@/data/game";

const Blog = () => (
  <Layout>
    <section className="border-b border-border py-16">
      <div className="container-full">
        <p className="eyebrow">Blog oficial</p>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl">Notícias & Patch Notes</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Atualizações de balanceamento, novidades do Circuito Pro e guias direto do time de desenvolvimento.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-full grid gap-10">
        {posts.map((post) => (
          <article key={post.slug} className="hover-lift clip-angle grid gap-6 border border-border bg-card md:grid-cols-[320px_1fr]">
            <Link to={`/blog/${post.slug}`} className="image-reveal aspect-video md:aspect-auto">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover"
              />
            </Link>
            <div className="p-6 md:py-8 md:pr-8">
              <p className="text-[11px] uppercase tracking-editorial text-primary">
                {post.category} · {post.date}
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug">
                <Link to={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="link-underline mt-5 inline-block font-serif text-xs font-semibold uppercase tracking-editorial text-primary"
              >
                Ler post
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
