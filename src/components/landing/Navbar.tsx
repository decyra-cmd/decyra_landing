import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
            <Activity className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            DECYRA
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-smooth">Problema</a>
          <a href="#solucion" className="hover:text-foreground transition-smooth">Solución</a>
          <a href="#funcionalidades" className="hover:text-foreground transition-smooth">Funcionalidades</a>
          <a href="#beneficios" className="hover:text-foreground transition-smooth">Beneficios</a>
        </div>

        <Button variant="hero" size="sm" asChild>
          <a href="#cta">Solicitar demo</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
