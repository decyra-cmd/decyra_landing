import { Layers, Archive, Clock, EyeOff } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pains = [
  {
    icon: Layers,
    title: "Silos de información",
    description: "SCADA, MES, ERP, hojas de cálculo... Tu información vive en silos imposibles de cruzar.",
  },
  {
    icon: Archive,
    title: "Datos sin explotar",
    description: "73% de los datos industriales jamás se analiza.",
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
  const gridRef = useScrollAnimation();

  return (
    <section id="problema" className="relative py-16 md:py-[95px]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">El problema</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            La fábrica genera datos.<br />
            <span className="text-muted-foreground">Pero no decisiones.</span>
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={i}
              data-animate
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border hover:border-destructive/40 transition-smooth opacity-0"
              style={{ animationDelay: `${i * 0.1}s` }}
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
