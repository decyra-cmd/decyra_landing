import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = ["Demo personalizada", "Sin compromiso", "Setup en días, no meses"];

const CTA = () => {
  return (
    <section id="cta" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-card border border-primary/30 p-12 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-glow opacity-70 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Empieza a tomar decisiones<br />
              <span className="text-gradient">con datos hoy</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Reserva una demo guiada con un experto industrial. Te mostramos DECYRA con datos similares a los de tu planta.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Solicitar demo <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outlineGlow" size="xl">
                Hablar con ventas
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
