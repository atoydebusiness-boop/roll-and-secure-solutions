import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt="Portas de aço comerciais"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-steel-dark/75" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-ember uppercase tracking-[0.3em] text-sm font-semibold mb-4"
      >
        Mais de 10 anos de tradição
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-none mb-6"
      >
        Especialista em Portas
        <br />
        <span className="text-ember">Automáticas & Manuais</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-2xl mx-auto text-secondary-foreground/70 text-lg mb-10 font-light"
      >
        Fabricação, reparos e instalação de portas de aço comerciais.
        Atendimento de emergência 24 horas para sua total tranquilidade.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="https://wa.me/5521980151662"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg transition-colors"
        >
          <Phone size={18} />
          Fale Conosco Agora
        </a>
        <a
          href="#servicos"
          className="flex items-center gap-2 border border-secondary-foreground/30 text-secondary-foreground/80 hover:border-ember hover:text-ember px-8 py-4 rounded-md font-semibold transition-colors"
        >
          Nossos Serviços
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary-foreground/40"
    >
      <ArrowDown size={24} />
    </motion.div>
  </section>
);

export default Hero;
