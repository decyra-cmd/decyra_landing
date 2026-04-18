import { Mail } from "lucide-react";
import decyraLogo from "@/assets/decyra-logo-full.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4" aria-label="DECYRA inicio">
              <img
                src={decyraLogo}
                alt="Logo DECYRA"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Decisión y Era. La plataforma de toma de decisiones industriales basada en datos en tiempo real.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:hola@decyra.es" aria-label="Email" className="w-9 h-9 grid place-items-center rounded-lg border border-border hover:border-primary hover:text-primary transition-smooth">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#funcionalidades" className="hover:text-foreground transition-smooth">Funcionalidades</a></li>
              <li><a href="#beneficios" className="hover:text-foreground transition-smooth">Beneficios</a></li>
              <li><a href="#cta" className="hover:text-foreground transition-smooth">Solicitar demo</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Integraciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hola@decyra.es</li>
              <li>+34 690 135 219</li>
              <li>Madrid · Córdoba</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DECYRA. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-smooth">Privacidad</a>
            <a href="#" className="hover:text-foreground transition-smooth">Términos</a>
            <a href="#" className="hover:text-foreground transition-smooth">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
