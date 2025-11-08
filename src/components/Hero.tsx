import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estruturas metálicas industriais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="geometric-border inline-block mb-6">
          <span className="text-primary-foreground font-bold text-sm uppercase tracking-widest">
            Engenharia de Qualidade
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Soluções Integradas em<br />
          <span className="text-primary">Estruturas e Engenharia</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          A SM INOVA da Amazônia oferece serviços de montagem metálica, obras civis e industriais,
          com compromisso em qualidade, segurança e inovação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("servicos")}
          >
            Conheça Nossos Serviços
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground"
          >
            Entre em Contato
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/70" />
      </div>
    </section>
  );
};

export default Hero;
