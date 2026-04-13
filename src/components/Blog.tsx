import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import door1 from "@/assets/door1.jpg";
import door3 from "@/assets/door3.jpg";
import door4 from "@/assets/door4.jpg";

const posts = [
  {
    img: door1,
    title: "Serviço de Emergência 24h",
    date: "13/04/2026",
  },
  {
    img: door3,
    title: "Manutenção Preventiva: Evite Gastos",
    date: "13/04/2026",
  },
  {
    img: door4,
    title: "Vantagens da Automação de Portas",
    date: "13/04/2026",
  },
];

const Blog = () => (
  <section id="blog" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <p className="text-ember uppercase tracking-[0.25em] text-sm font-semibold text-center mb-2">
        Blog
      </p>
      <h2 className="font-heading text-4xl md:text-5xl text-center text-card-foreground mb-4">
        Dicas e Novidades
      </h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
        Dicas e novidades para você
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group bg-background rounded-lg overflow-hidden border border-border hover:border-ember/30 transition-colors"
          >
            <div className="overflow-hidden h-48">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="text-xs text-muted-foreground">{p.date}</span>
              <h3 className="font-heading text-xl text-foreground mt-1 mb-3">{p.title}</h3>
              <span className="inline-flex items-center gap-1 text-ember text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                Ler Artigo <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
