const logos = ["INDUSTRIA NOVA", "METALTEK", "FÁBRICA 4.0", "PROCESA", "AURION", "VOLTRIX"];

const testimonials = [
  {
    quote: "Pasamos de reuniones de 2 horas revisando Excels a tomar decisiones en 10 minutos con datos reales.",
    author: "María Sánchez",
    role: "Directora de Operaciones",
    company: "Industria Nova",
  },
  {
    quote: "El modelador de reglas nos permitió automatizar alertas que antes requerían un técnico monitorizando.",
    author: "Carlos Ruiz",
    role: "Responsable de Mejora Continua",
    company: "Metaltek",
  },
  {
    quote: "Las sugerencias de IA detectaron una desviación que nos ahorró 80.000€ en su primer mes.",
    author: "Laura Méndez",
    role: "Ingeniera Industrial",
    company: "Procesa",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">
          Equipos industriales que ya deciden con DECYRA
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-5xl mx-auto mb-20 opacity-60">
          {logos.map((l) => (
            <div key={l} className="text-center font-display text-sm font-bold tracking-widest text-muted-foreground hover:text-foreground transition-smooth">
              {l}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="p-7 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-smooth"
            >
              <div className="text-primary text-3xl font-display leading-none mb-3">"</div>
              <blockquote className="text-foreground/90 leading-relaxed mb-6">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
