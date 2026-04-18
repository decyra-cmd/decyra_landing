import { useEffect, useRef, useState } from "react";
import { LayoutDashboard, FileBarChart, GitBranch, Sparkles, CheckCircle2 } from "lucide-react";
import dashboardImg from "@/assets/showcase-dashboard.jpg";
import reportsImg from "@/assets/showcase-reports.jpg";
import rulesImg from "@/assets/showcase-rules.jpg";
import aiImg from "@/assets/showcase-ai.jpg";

const slides = [
  {
    icon: LayoutDashboard,
    tag: "Dashboard",
    title: "Centro de Decisión",
    headline: (
      <>
        El <span className="text-gradient">pulso</span> de tu planta, en una pantalla
      </>
    ),
    description:
      "Visualiza KPIs críticos en tiempo real con dashboards configurables por rol. OEE, disponibilidad, rendimiento y calidad sin esperas.",
    highlights: [
      "OEE, rendimiento, disponibilidad y calidad en una sola vista",
      "Vistas configurables por rol y línea",
      "Datos refrescados al instante desde planta",
      "Alertas visuales sobre desviaciones críticas",
    ],
    image: dashboardImg,
  },
  {
    icon: FileBarChart,
    tag: "Automatización",
    title: "Informes Inteligentes",
    headline: (
      <>
        El <span className="text-gradient">Resumen Ejecutivo</span> de tu planta, cada día
      </>
    ),
    description:
      "Reportes automáticos por turno, línea o producto. La IA condensa miles de eventos en un informe claro: qué pasó, por qué y qué hacer ahora.",
    highlights: [
      "Síntesis automática del turno generada por IA",
      "Reportes por turno, línea o producto",
      "Comparativas históricas y tendencias",
      "Sin Excel, sin esperas, sin retrabajo",
    ],
    image: reportsImg,
  },
  {
    icon: GitBranch,
    tag: "No-code",
    title: "Modelador de Reglas",
    headline: (
      <>
        Diseña tu lógica de negocio <span className="text-gradient">sin escribir código</span>
      </>
    ),
    description:
      "Si pasa X, dispara Y, notifica a Z. Crea flujos de automatización industriales con un editor visual potente y accesible para todo el equipo.",
    highlights: [
      "Editor visual con nodos y conexiones",
      "Disparadores por evento, umbral o tiempo",
      "Acciones, notificaciones y escalado automáticos",
      "Versionado y pruebas antes de producción",
    ],
    image: rulesImg,
  },
  {
    icon: Sparkles,
    tag: "Inteligencia Artificial",
    title: "Sugerencias IA",
    headline: (
      <>
        Recomendaciones que <span className="text-gradient">accionan resultados</span>
      </>
    ),
    description:
      "La IA analiza tu operación y propone acciones concretas para reducir paradas, mermas y desviaciones de OEE. Decide con contexto, no por intuición.",
    highlights: [
      "Detección de patrones y causas raíz",
      "Recomendaciones priorizadas por impacto",
      "Contexto operativo para cada sugerencia",
      "Aprendizaje continuo con tus propios datos",
    ],
    image: aiImg,
  },
];

const Showcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Total scrollable distance inside the section (height - viewport)
      const total = section.offsetHeight - viewportH;
      // Progress: how far we've scrolled into the sticky section (0 → 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;

      // Map progress to slide index
      const idx = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      setActiveIndex(idx);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative"
      style={{ height: `${slides.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-glow opacity-30 blur-3xl pointer-events-none" />

        <div className="container relative mx-auto px-6">
          {/* Section header */}
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Producto real
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: text content (crossfades) */}
            <div className="lg:col-span-5 relative min-h-[460px]">
              {slides.map((slide, i) => {
                const Icon = slide.icon;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 grid place-items-center">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                      </div>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-primary/80 px-2.5 py-1 rounded-full border border-primary/30 bg-primary/5">
                        {slide.tag}
                      </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                      {slide.headline}
                    </h2>
                    <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                      {slide.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {slide.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 text-primary mt-0.5 shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-foreground/90">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* Progress indicator */}
              <div className="absolute -bottom-2 left-0 flex gap-2">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeIndex ? "w-10 bg-primary" : "w-6 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: image (crossfades) */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-elegant glow-border bg-background">
                {slides.map((slide, i) => (
                  <img
                    key={i}
                    src={slide.image}
                    alt={`${slide.title} — ${slide.tag}`}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                      i === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={i !== activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
