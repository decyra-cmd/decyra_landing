import { LayoutDashboard, FileBarChart, GitBranch, Sparkles } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Centro de Decisión",
    description: "Convierte datos en decisiones accionables, priorizadas por impacto económico en tiempo real.",
    tag: "Dashboard",
  },
  {
    icon: FileBarChart,
    title: "Informes Inteligentes",
    description: "Reportes automáticos por turno, línea o producto. Sin Excel, sin esperas.",
    tag: "Automatización",
  },
  {
    icon: GitBranch,
    title: "Modelador de Reglas",
    description: "Diseña la lógica de tu negocio sin código. Si pasa X, dispara Y, notifica a Z.",
    tag: "No-code",
  },
  {
    icon: Sparkles,
    title: "Sugerencias IA",
    description: "Recomendaciones concretas para reducir paradas, mermas y desviaciones de OEE.",
    tag: "Inteligencia Artificial",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="relative py-16 md:py-[95px]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Funcionalidades</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Cuatro módulos.<br />Un objetivo: <span className="text-gradient">decidir mejor.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-smooth overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-glow opacity-0 group-hover:opacity-100 blur-2xl transition-smooth" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 grid place-items-center group-hover:bg-primary/20 transition-smooth">
                    <f.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-primary/80 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
