import { Timer, TrendingUp, Target, Maximize2 } from "lucide-react";

const benefits = [
  { icon: Timer, value: "−40%", label: "Tiempo de análisis", description: "Menos horas en reportes, más en mejorar el proceso." },
  { icon: TrendingUp, value: "+22%", label: "Eficiencia OEE", description: "Detecta cuellos de botella antes de que cuesten dinero." },
  { icon: Target, value: "100%", label: "Decisiones con datos", description: "Adiós a la intuición. Hola a la evidencia." },
  { icon: Maximize2, value: "∞", label: "Escalable a N plantas", description: "Despliega en una línea o en toda tu red industrial." },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative py-0 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Beneficios</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Resultados que se notan en <span className="text-gradient">semanas</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-smooth"
            >
              <b.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
              <div className="font-display text-4xl font-bold text-gradient mb-1">{b.value}</div>
              <div className="font-semibold text-foreground mb-2">{b.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
