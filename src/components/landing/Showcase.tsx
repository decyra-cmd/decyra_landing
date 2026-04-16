import { CheckCircle2 } from "lucide-react";
import reportImg from "@/assets/decyra-report.png";

const highlights = [
  "OEE, rendimiento, disponibilidad y calidad en una sola vista",
  "Síntesis automática del turno generada por IA",
  "Recomendaciones y acciones inmediatas accionables",
  "Detección de desviaciones críticas con contexto operativo",
];

const Showcase = () => {
  return (
    <section id="showcase" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-glow opacity-30 blur-3xl" />
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Producto real
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
              El <span className="text-gradient">Resumen Ejecutivo</span> de tu planta, cada día
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Inteligencia DECYRA condensa miles de eventos en un informe claro:
              qué pasó, por qué, y qué hacer ahora.
            </p>
            <ul className="mt-8 space-y-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-foreground/90">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant glow-border bg-background">
              <img
                src={reportImg}
                alt="Resumen Ejecutivo de Planta de DECYRA con KPIs OEE, rendimiento, disponibilidad y calidad"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
