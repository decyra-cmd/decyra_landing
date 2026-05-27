import { useState } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";

interface DemoRequestDialogProps {
  trigger: React.ReactNode;
}

const sectores = [
  "Alimentación y bebidas",
  "Automoción",
  "Química y farmacéutica",
  "Metalurgia y siderurgia",
  "Energía y utilities",
  "Cemento y materiales",
  "Papel y celulosa",
  "Textil",
  "Otro",
];

const empleadosRangos = [
  "1-50",
  "51-200",
  "201-500",
  "501-1.000",
  "1.001-5.000",
  "+5.000",
];

const formSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(100),
  email: z.string().trim().email("Email no válido").max(255),
  empresa: z.string().trim().min(1, "La empresa es obligatoria").max(150),
  cargo: z.string().trim().min(1, "El cargo es obligatorio").max(100),
  sector: z.string().min(1, "Selecciona un sector"),
  empleados: z.string().min(1, "Selecciona el nº de empleados"),
  mensaje: z.string().trim().max(1000).optional(),
});

const initialState = {
  nombre: "",
  email: "",
  empresa: "",
  cargo: "",
  sector: "",
  empleados: "",
  mensaje: "",
};

const DemoRequestDialog = ({ trigger }: DemoRequestDialogProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialState);
  const { toast } = useToast();

  const handleChange = (field: keyof typeof initialState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = formSchema.safeParse(form);
    if (!parsed.success) {
      const firstError = parsed.error.errors[0]?.message ?? "Revisa los campos";
      toast({ title: "Datos incompletos", description: firstError, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xnjrlvkr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) throw new Error();

      toast({
        title: "Solicitud recibida",
        description: "Gracias, te contactaremos en menos de 24h para agendar tu demo.",
      });
      setForm(initialState);
      setOpen(false);
    } catch (err) {
      toast({
        title: "Error al enviar",
        description: "Inténtalo de nuevo en unos minutos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Solicita tu demo personalizada</DialogTitle>
          <DialogDescription>
            Cuéntanos sobre tu planta y te mostraremos DECYRA con datos similares a los tuyos.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input id="nombre" value={form.nombre} onChange={(e) => handleChange("nombre", e.target.value)} maxLength={100} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email corporativo *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={255} required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="empresa">Empresa *</Label>
              <Input id="empresa" value={form.empresa} onChange={(e) => handleChange("empresa", e.target.value)} maxLength={150} required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cargo">Cargo *</Label>
              <Input id="cargo" value={form.cargo} onChange={(e) => handleChange("cargo", e.target.value)} maxLength={100} required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="sector">Sector industrial *</Label>
              <Select value={form.sector} onValueChange={(v) => handleChange("sector", v)}>
                <SelectTrigger id="sector"><SelectValue placeholder="Selecciona" /></SelectTrigger>
                <SelectContent>
                  {sectores.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="empleados">Nº empleados *</Label>
              <Select value={form.empleados} onValueChange={(v) => handleChange("empleados", v)}>
                <SelectTrigger id="empleados"><SelectValue placeholder="Selecciona" /></SelectTrigger>
                <SelectContent>
                  {empleadosRangos.map((r) => (<SelectItem key={r} value={r}>{r}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="mensaje">Mensaje (opcional)</Label>
            <Textarea
              id="mensaje"
              value={form.mensaje}
              onChange={(e) => handleChange("mensaje", e.target.value)}
              maxLength={1000}
              rows={4}
              placeholder="Cuéntanos brevemente tu reto: SCADA/MES actuales, KPIs prioritarios, etc."
            />
          </div>

          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? (<><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</>) : (<>Enviar solicitud <ArrowRight className="w-4 h-4" /></>)}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Al enviar aceptas nuestra política de privacidad. No spam, lo prometemos.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestDialog;
