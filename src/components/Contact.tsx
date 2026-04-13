import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.name}.\nE-mail: ${form.email}\nWhatsApp: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/5521980151662?text=${msg}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-steel-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-ember uppercase tracking-[0.25em] text-sm font-semibold mb-2">
              Contato
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-secondary-foreground/60 mb-10 max-w-md">
              Estamos prontos para te atender com as melhores soluções em portas de aço.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-ember/10 flex items-center justify-center">
                  <Phone className="text-ember" size={20} />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm">Telefone / WhatsApp</p>
                  <p className="text-primary-foreground font-medium">(21) 98015-1662</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-ember/10 flex items-center justify-center">
                  <Mail className="text-ember" size={20} />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm">E-mail</p>
                  <p className="text-primary-foreground font-medium">tecnoportasrj@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-md bg-ember/10 flex items-center justify-center">
                  <MapPin className="text-ember" size={20} />
                </div>
                <div>
                  <p className="text-secondary-foreground/50 text-sm">Localização</p>
                  <p className="text-primary-foreground font-medium">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-steel/30 rounded-lg p-8 space-y-5"
          >
            <input
              required
              placeholder="Nome Completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-steel-dark/60 border border-steel-light/20 rounded-md px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ember transition-colors"
            />
            <input
              required
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-steel-dark/60 border border-steel-light/20 rounded-md px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ember transition-colors"
            />
            <input
              required
              placeholder="WhatsApp"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-steel-dark/60 border border-steel-light/20 rounded-md px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ember transition-colors"
            />
            <textarea
              required
              rows={4}
              placeholder="Mensagem"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-steel-dark/60 border border-steel-light/20 rounded-md px-4 py-3 text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-ember transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground font-semibold py-4 rounded-md transition-colors"
            >
              <Send size={16} />
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
