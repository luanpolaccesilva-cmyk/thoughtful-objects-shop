import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/game";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <section className="container-narrow py-24 text-center">
          <h1 className="font-serif text-3xl">Post não encontrado</h1>
          <Button asChild className="mt-6 clip-angle-sm font-serif uppercase tracking-editorial">
            <Link to="/blog">Voltar para o blog</Link>
          </Button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article>
        <div className="relative border-b border-border">
          <img
            src={post.image}
            alt={post.title}
            width={1280}
            height={800}
            className="h-[40vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="container-narrow absolute inset-x-0 bottom-8">
            <p className="eyebrow">{post.category} · {post.date}</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl md:text-5xl">{post.title}</h1>
          </div>
        </div>

        <div className="container-narrow py-14">
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link
            to="/blog"
            className="mt-12 inline-flex items-center gap-2 font-serif text-xs font-semibold uppercase tracking-editorial text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar para o blog
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
