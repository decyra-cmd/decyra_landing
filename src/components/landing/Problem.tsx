import { Database, Clock, EyeOff } from "lucide-react";

const pains = [
  {
    icon: Database,
    title: "Datos dispersos",
    description: "SCADA, MES, ERP, hojas de cálculo... Tu información vive en silos imposibles de cruzar.",
  },
  {
    icon: Clock,
    title: "Decisiones lentas",
    description: "Cuando detectas el problema, ya es tarde. Reportes manuales que llegan días después.",
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    description: "Sin trazabilidad real, dependes de la intuición en lugar de evidencia operativa.",
  },
];

const Problem = () => {
  return (
    <section id="problema" className="relative py-0">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">El problema</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            La fábrica genera datos.<br />
            <span className="text-muted-foreground">Pero no decisiones.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-destructive/40 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 border border-destructive/30 grid place-items-center mb-5 group-hover:scale-110 transition-bounce">
                <pain.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{pain.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
