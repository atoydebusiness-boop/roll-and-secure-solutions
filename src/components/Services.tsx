import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Clock } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Fabricação e Instalação",
    desc: "Produzimos portas de aço sob medida, manuais e automáticas, com tecnologia de ponta e materiais de alta resistência.",
  },
  {
    icon: Wrench,
    title: "Manutenção e Reparos",
    desc: "Serviço especializado em troca de molas, motores, lâminas e eixos para garantir o funcionamento perfeito da sua porta.",
  },
  {
    icon: Clock,
    title: "Emergência 24 Horas",
    desc: "Equipe de prontidão para resolver travamentos e problemas técnicos urgentes em portas de enrolar a qualquer momento.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const Services = () => (
  <section id="servicos" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <p className="text-ember uppercase tracking-[0.25em] text-sm font-semibold text-center mb-2">
        Nosso Trabalho
      </p>
      <h2 className="font-heading text-4xl md:text-5xl text-center text-card-foreground mb-4">
        Nossos Serviços
      </h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
        Soluções profissionais para o seu negócio
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group bg-background border border-border rounded-lg p-8 hover:border-ember/40 transition-colors"
          >
            <div className="w-14 h-14 rounded-md bg-ember/10 flex items-center justify-center mb-6 group-hover:bg-ember/20 transition-colors">
              <s.icon className="text-ember" size={28} />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
