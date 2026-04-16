import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles, AlertTriangle } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.jpg";

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
          <Button variant="hero" size="xl" asChild>
            <a href="#cta">
              Solicitar demo <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="outlineGlow" size="xl" asChild>
            <a href="#funcionalidades">
              <PlayCircle className="w-5 h-5" /> Ver cómo funciona
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-muted-foreground tracking-wide uppercase animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Sin compromiso · Demo personalizada en 24h
        </p>

        {/* Dashboard mockup */}
        <div className="mt-16 relative max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl rounded-3xl" />
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant glow-border">
            <img
              src={dashboardHero}
              alt="Dashboard industrial DECYRA mostrando KPIs en tiempo real"
              width={1600}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          {/* Floating stat cards */}
          <div className="hidden md:block absolute -left-8 top-1/4 bg-gradient-card border border-border rounded-xl p-4 shadow-card animate-float backdrop-blur-md">
            <div className="text-xs text-muted-foreground">OEE Planta</div>
            <div className="text-2xl font-display font-bold text-primary">+18.4%</div>
          </div>
          <div className="hidden md:block absolute -right-8 bottom-1/4 bg-gradient-card border border-border rounded-xl p-4 shadow-card animate-float backdrop-blur-md" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-xs text-muted-foreground">Tiempo real</span>
            </div>
            <div className="text-2xl font-display font-bold text-foreground">2.341 ev/s</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
