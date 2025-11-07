import { Building2, Hammer, Zap } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Montagem de Estruturas Metálicas",
    description: "Execução especializada de montagens de estruturas metálicas para galpões industriais, edifícios comerciais e infraestrutura de grande porte.",
  },
  {
    icon: Hammer,
    title: "Construção Civil",
    description: "Obras civis completas com foco em qualidade, segurança e prazos. Fundações, estruturas de concreto e acabamentos industriais.",
  },
  {
    icon: Zap,
    title: "Instalações Elétricas e Hidráulicas",
    description: "Projetos e execução de instalações elétricas e hidráulicas industriais, seguindo normas técnicas e padrões de segurança.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="geometric-border inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Nossos Serviços
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expertise em Engenharia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para projetos industriais e de infraestrutura na Amazônia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-sm border-2 border-border hover:border-primary transition-smooth shadow-card hover:shadow-strong animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-smooth">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
