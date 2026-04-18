import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const logos = ["INDUSTRIA NOVA", "METALTEK", "FÁBRICA 4.0", "PROCESA", "AURION", "VOLTRIX"];

const testimonials = [
  {
    quote: "Pasamos de reuniones de 2 horas revisando Excels a tomar decisiones en 10 minutos con datos reales.",
    author: "María Sánchez",
    role: "Directora de Operaciones",
    company: "Industria Nova",
  },
  {
    quote: "El modelador de reglas nos permitió automatizar alertas que antes requerían un técnico monitorizando.",
    author: "Carlos Ruiz",
    role: "Responsable de Mejora Continua",
    company: "Metaltek",
  },
  {
    quote: "Las sugerencias de IA detectaron una desviación que nos ahorró 80.000€ en su primer mes.",
    author: "Laura Méndez",
    role: "Ingeniera Industrial",
    company: "Procesa",
  },
  {
    quote: "Por fin tenemos una visión unificada del OEE de todas las plantas. Ha cambiado cómo gestionamos.",
    author: "Javier Torres",
    role: "Director de Planta",
    company: "Fábrica 4.0",
  },
  {
    quote: "La implantación fue mucho más rápida de lo esperado. En 3 semanas teníamos el primer dashboard productivo.",
    author: "Ana Belmonte",
    role: "IT/OT Manager",
    company: "Aurion",
  },
  {
    quote: "Los informes inteligentes ahorran al equipo de producción más de 15 horas semanales en reportes manuales.",
    author: "Sergio Vidal",
    role: "Responsable de Producción",
    company: "Voltrix",
  },
];

const SocialProof = () => {
  const autoplayLogos = useRef(Autoplay({ delay: 0, stopOnInteraction: false, stopOnMouseEnter: false }));
  const autoplayTestimonials = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <section className="py-0">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-10">
          Equipos industriales que ya deciden con DECYRA
        </p>

        <div className="relative max-w-5xl mx-auto mb-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <div
                key={`${l}-${i}`}
                className="font-display text-sm font-bold tracking-widest text-muted-foreground hover:text-foreground transition-smooth shrink-0"
              >
                {l}
              </div>
            ))}
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplayTestimonials.current]}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <figure className="h-full p-7 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-smooth">
                  <div className="text-primary text-3xl font-display leading-none mb-3">"</div>
                  <blockquote className="text-foreground/90 leading-relaxed mb-6">{t.quote}</blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.author}</div>
                      <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProof;
