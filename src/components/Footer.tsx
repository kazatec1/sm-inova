import logoSmInova from "@/assets/logo-sm-inova.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} SM INOVA — Todos os direitos reservados
          </div>
          
          <div className="flex items-center">
            <img 
              src={logoSmInova} 
              alt="SM INOVA" 
              className="h-10 w-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
