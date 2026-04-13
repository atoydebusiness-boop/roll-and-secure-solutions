import { motion } from "framer-motion";
import door1 from "@/assets/door1.jpg";
import door2 from "@/assets/door2.jpg";
import door3 from "@/assets/door3.jpg";
import door4 from "@/assets/door4.jpg";
import door5 from "@/assets/door5.jpg";

const images = [
  { src: door1, alt: "Porta de aço comercial instalada" },
  { src: door2, alt: "Portão de aço industrial" },
  { src: door3, alt: "Instalação de porta de enrolar" },
  { src: door4, alt: "Porta de aço automatizada" },
  { src: door5, alt: "Porta de enrolar industrial" },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-steel-dark">
    <div className="container mx-auto px-4">
      <p className="text-ember uppercase tracking-[0.25em] text-sm font-semibold text-center mb-2">
        Portfólio
      </p>
      <h2 className="font-heading text-4xl md:text-5xl text-center text-primary-foreground mb-4">
        Nossos Projetos
      </h2>
      <p className="text-secondary-foreground/60 text-center max-w-lg mx-auto mb-16">
        Confira alguns dos nossos projetos realizados
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`overflow-hidden rounded-lg ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
