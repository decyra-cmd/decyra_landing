import { Activity, Timer, TrendingUp, Target, Maximize2, Zap } from "lucide-react";

const benefits = [
  {
    icon: Timer,
    value: "−35–55%",
    label: "Downtime no planificado",
    description: "Anticipamos la parada antes de que ocurra. Detección temprana de fallos.",
  },
  {
    icon: TrendingUp,
    value: "+12%",
    label: "Eficiencia OEE",
    description: "Aumentamos el OEE sin CAPEX: optimizando microparadas y cambios de formato.",
  },
  {
    icon: Zap,
    value: "15%",
    label: "Reducción consumo energético",
    description: "Detección de fugas, optimización de consumo por línea y turno y reporting automático huella de carbono.",
  },
  {
    icon: Activity,
    value: "−40%",
    label: "Tiempo de análisis",
    description: "Menos horas en Excel, más valor en la operación.",
  },
  {
    icon: Target,
    value: "100%",
    label: "Decisiones con datos",
    description: "Adiós a la intuición. Hola a la evidencia.",
  },
  {
    icon: Maximize2,
    value: "∞",
    label: "Escalable a N plantas",
    description: "Despliega en una línea o en toda tu red industrial.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="relative py-16 md:py-[95px] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Beneficios</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Resultados que se notan en <span className="text-gradient">semanas</span>
          </h2>
        </div>

        <div className="grid gap-6 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
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
