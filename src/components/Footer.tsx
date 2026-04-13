import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div>
          <h3 className="font-heading text-2xl text-primary-foreground mb-3">
            TEC <span className="text-ember">Portas de Aço</span>
          </h3>
          <p className="text-secondary-foreground/50 text-sm leading-relaxed">
            Especialistas em oferecer as melhores soluções em portas de aço para você e sua empresa.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">Links</h4>
          <nav className="flex flex-col gap-2">
            {["Início", "Serviços", "Portfólio", "Blog", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-secondary-foreground/50 hover:text-ember text-sm transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg text-primary-foreground mb-4">Contato</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-secondary-foreground/50 text-sm">
              <Phone size={14} className="text-ember" />
              (21) 98015-1662
            </div>
            <div className="flex items-center gap-2 text-secondary-foreground/50 text-sm">
              <Mail size={14} className="text-ember" />
              tecnoportasrj@gmail.com
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-steel/30 pt-6 text-center">
        <p className="text-secondary-foreground/40 text-xs">
          © 2025 TEC Portas de Aço. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
