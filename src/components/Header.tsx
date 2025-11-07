import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSmInova from "@/assets/logo-sm-inova.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoSmInova} 
              alt="SM INOVA - Estruturas Metálicas e Engenharia" 
              className="h-16 md:h-20 w-auto transition-smooth hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth font-medium text-left py-2"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
