import { Layers, Zap, BrainCircuit } from "lucide-react";

const steps = [
  {
    icon: Layers,
    title: "Centralización",
    description: "Conecta SCADA, MES, sensores y ERP en una sola capa de datos coherente.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Informes, alertas y reglas de negocio que se ejecutan solas, 24/7.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia aplicada",
    description: "La IA detecta patrones y sugiere acciones específicas para tu proceso.",
  },
];

const Solution = () => {
  return (
    <section id="solucion" className="relative py-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow opacity-40 blur-3xl" />
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">La solución</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Un único sistema operativo<br />para tu <span className="text-gradient">toma de decisiones</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold text-sm shadow-glow z-10">
                {i + 1}
              </div>
              <div className="p-8 pt-10 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-smooth h-full glow-border">
                <step.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
