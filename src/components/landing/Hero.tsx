import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles, AlertTriangle } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";
import factoryBg from "@/assets/factory-bg.jpg";
import DemoRequestDialog from "./DemoRequestDialog";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      {/* Glow orbs */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-gradient-glow opacity-60 blur-3xl" />
      <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-electric/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium tracking-wide text-foreground/90">
            Inteligencia industrial impulsada por IA
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Convierte tus datos industriales en{" "}
          <span className="text-gradient">decisiones inteligentes</span>{" "}
          en tiempo real
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          DECYRA centraliza tu SCADA, MES y sensores en un único Centro de Decisión.
          Menos hojas de cálculo, más impacto operativo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <DemoRequestDialog
            trigger={
              <Button variant="hero" size="xl">
                Solicitar demo <ArrowRight className="w-5 h-5" />
              </Button>
            }
          />
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="#funcionalidades">
              <PlayCircle className="w-5 h-5" /> Ver cómo funciona
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground tracking-wide uppercase animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Sin compromiso · Demo personalizada en 24h
        </p>

        {/* Factory background + Dashboard window mockup */}
        <div className="mt-16 relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {/* Factory backdrop */}
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
            <img
              src={factoryBg}
              alt="Planta industrial con líneas de producción automatizadas"
              width={1600}
              height={1024}
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-electric/10" />

            {/* macOS-style window with dashboard */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] md:w-[78%] animate-float">
              <div className="absolute -inset-6 bg-gradient-primary opacity-40 blur-3xl rounded-3xl" />
              <div className="relative rounded-xl overflow-hidden border border-border/80 shadow-elegant glow-border bg-card">
                {/* macOS title bar */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/40 backdrop-blur-md border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-destructive/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-primary/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-3 py-0.5 rounded-md bg-background/60 text-[10px] text-muted-foreground font-mono tracking-wide">
                      decyra.app / centro-de-decisión
                    </div>
                  </div>
                  <div className="w-12" />
                </div>
                {/* Dashboard image */}
                <img
                  src={dashboardHero}
                  alt="Dashboard industrial DECYRA mostrando KPIs en tiempo real"
                  width={1600}
                  height={1024}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="hidden md:block absolute -left-6 top-[18%] bg-gradient-card border border-border rounded-xl p-4 shadow-card animate-float backdrop-blur-md z-10">
            <div className="text-xs text-muted-foreground">OEE Planta</div>
            <div className="text-2xl font-display font-bold text-primary">+18.4%</div>
          </div>
          <div className="hidden md:block absolute -right-6 bottom-[18%] bg-gradient-card border border-border rounded-xl p-4 shadow-card animate-float backdrop-blur-md z-10" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs text-muted-foreground">Tiempo real</span>
            </div>
            <div className="text-2xl font-display font-bold text-foreground">2.341 ev/s</div>
          </div>
          {/* Floating alert (top-right of window) */}
          <div className="hidden md:flex absolute right-[8%] top-[8%] bg-gradient-card border border-destructive/40 rounded-xl px-4 py-3 shadow-elegant animate-float backdrop-blur-md items-center gap-3 z-10" style={{ animationDelay: '0.8s' }}>
            <div className="w-9 h-9 rounded-lg bg-destructive/15 grid place-items-center">
              <AlertTriangle className="w-4 h-4 text-destructive" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Alerta IA</div>
              <div className="text-sm font-display font-bold text-foreground whitespace-nowrap">+3σ desviación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
