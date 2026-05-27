import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  CheckCircle2,
  FileBarChart,
  GitBranch,
  LayoutDashboard,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Slide = {
  icon: LucideIcon;
  tag: string;
  title: string;
  headline: ReactNode;
  description: string;
  highlights: string[];
  media: {
    type: "image" | "video";
    src: string;
  };
};

const slides: Slide[] = [
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
      "Reportes automáticos que sintetizan la operación: qué pasó, por qué y qué hacer ahora. Menos hojas de cálculo, más tiempo en decisiones.",
    highlights: [
      "Síntesis automática de turnos, líneas y productos",
      "Análisis de desviaciones y causas raíz automático",
      "Exportación a PDF, Excel o tus sistemas integrados",
      "Historiales y tendencias para análisis profundo",
    ],
    media: {
      type: "video",
      src: "/informes-video.mp4",
    },
  },
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
      "Convierte datos en decisiones accionables, priorizadas por impacto económico en tiempo real.",
    highlights: [
      "KPIs de planta visualizados por línea, turno y producto",
      "Priorizadas por impacto económico, no por ruido de datos",
      "Búsqueda de raíces causas integrada en la UI",
      "Alertas inteligentes con contexto operativo",
    ],
    media: {
      type: "image",
      src: "/Centro-decision.png",
    },
  },
  {
    icon: GitBranch,
    tag: "No-code",
    title: "Modelador de Reglas",
    headline: (
      <>
        Define cómo debe reaccionar tu planta, <span className="text-gradient">sin código</span>
      </>
    ),
    description:
      "Crea la lógica de decisión de tu operación de forma visual. Diseña reglas que transforman datos en acciones concretas, sin depender de desarrollos técnicos.",
    highlights: [
      "Creación de reglas con drag & drop",
      "Configura condición + acción + impacto económico",
      "Activación y desactivación instantánea",
      "Vista previa del comportamiento antes de aplicar",
    ],
    media: {
      type: "image",
      src: "/modelador-reglas.png",
    },
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
    media: {
      type: "image",
      src: "/sugerencias-reglas-ia.png",
    },
  },
];

const MediaMobile = ({ slide }: { slide: Slide }) => {
  if (slide.media.type === "video") {
    return (
      <video
        src={slide.media.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-slate-100 px-4">
      <img
        src={slide.media.src}
        alt={`${slide.title} - ${slide.tag}`}
        width={1600}
        height={1000}
        loading="lazy"
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
};

const Showcase = () => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = (i: number) => {
    const section = desktopRef.current;
    if (!section) return;
    const total = section.offsetHeight - window.innerHeight;
    const target = section.offsetTop + (total * (i + 0.5)) / slides.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = desktopRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = section.offsetHeight - viewportH;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0;
      const idx = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      setActiveIndex(idx);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="showcase">
      {/* ── MOBILE ──────────────────────────────────────────── */}
      <div className="block lg:hidden py-16">
        <div className="container mx-auto px-5">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Producto real
            </span>
          </div>

          <div className="space-y-16">
            {slides.map((slide, i) => {
              const Icon = slide.icon;
              return (
                <div key={i}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                    </div>
                    <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
                      {slide.tag}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                    {slide.headline}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {slide.description}
                  </p>

                  <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-elegant glow-border">
                    <MediaMobile slide={slide} />
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {slide.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2}
                        />
                        <span className="text-sm text-foreground/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── DESKTOP STICKY SCROLL ───────────────────────────── */}
      <div
        ref={desktopRef}
        className="relative hidden lg:block"
        style={{ height: `${slides.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-gradient-glow opacity-30 blur-3xl" />

          <div className="container relative mx-auto px-6">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Producto real
              </span>
            </div>

            <nav
              aria-label="Módulos"
              className="mb-10 flex flex-wrap gap-x-1 gap-y-2 border-b border-border"
            >
              {slides.map((slide, i) => {
                const Icon = slide.icon;
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToSlide(i)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                    <span>{slide.title}</span>
                    <span
                      className={`absolute left-0 right-0 -bottom-px h-0.5 rounded-full transition-all duration-500 ${
                        isActive
                          ? "bg-primary opacity-100 shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                          : "bg-transparent opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="relative min-h-[460px] lg:col-span-5">
                {slides.map((slide, i) => {
                  const Icon = slide.icon;
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-4 opacity-0"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-lg border border-primary/30 bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                        </div>
                        <span className="rounded-full border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary/80">
                          {slide.tag}
                        </span>
                      </div>
                      <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
                        {slide.headline}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                        {slide.description}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {slide.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                              strokeWidth={2}
                            />
                            <span className="text-foreground/90">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="relative lg:col-span-7">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-3xl" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-elegant glow-border">
                  {slides.map((slide, i) => {
                    const baseOpacity = `absolute inset-0 transition-opacity duration-700 ease-out ${
                      i === activeIndex ? "opacity-100" : "opacity-0"
                    }`;

                    if (slide.media.type === "video") {
                      return (
                        <video
                          key={i}
                          src={slide.media.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className={`${baseOpacity} h-full w-full object-cover`}
                          aria-hidden={i !== activeIndex}
                        />
                      );
                    }

                    return (
                      <div
                        key={i}
                        className={`${baseOpacity} flex items-center justify-center p-5 md:p-6`}
                        aria-hidden={i !== activeIndex}
                      >
                        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-100 px-5 shadow-[0_16px_36px_rgba(15,23,42,0.08)] md:px-8">
                          <img
                            src={slide.media.src}
                            alt={`${slide.title} - ${slide.tag}`}
                            width={1600}
                            height={1000}
                            loading="lazy"
                            className="max-h-full max-w-full scale-[0.9] object-contain"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
