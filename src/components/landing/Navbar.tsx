import { Button } from "@/components/ui/button";
import decyraLogo from "@/assets/decyra-logo-full.svg";
import DemoRequestDialog from "./DemoRequestDialog";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center gap-2 group" aria-label="DECYRA inicio">
          <img
            src={decyraLogo}
            alt="Logo DECYRA"
            width={140}
            height={36}
            className="h-9 w-auto object-contain text-foreground"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-smooth">Problema</a>
          <a href="#solucion" className="hover:text-foreground transition-smooth">Solución</a>
          <a href="#funcionalidades" className="hover:text-foreground transition-smooth">Funcionalidades</a>
          <a href="#beneficios" className="hover:text-foreground transition-smooth">Beneficios</a>
        </div>

        <DemoRequestDialog
          trigger={<Button variant="hero" size="sm">Solicitar demo</Button>}
        />
      </nav>
    </header>
  );
};

export default Navbar;
