import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-steel-dark/95 backdrop-blur-md border-b border-steel/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#inicio" className="font-heading text-2xl tracking-wider text-primary-foreground">
          TEC <span className="text-ember">Portas de Aço</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-secondary-foreground/80 hover:text-ember transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5521980151662"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-colors"
          >
            <Phone size={14} />
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-steel-dark overflow-hidden"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-secondary-foreground/80 hover:text-ember transition-colors uppercase tracking-wider text-sm"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/5521980151662"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-ember text-primary-foreground px-5 py-2 rounded-md text-sm font-semibold"
              >
                <Phone size={14} />
                Fale Conosco
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
