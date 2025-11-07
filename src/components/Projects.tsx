import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    image: project1,
    title: "Galpão Industrial Metálico",
    description: "Estrutura metálica completa para armazenamento logístico",
    category: "Estruturas Metálicas",
  },
  {
    image: project2,
    title: "Construção Industrial",
    description: "Obra civil de grande porte com estruturas de aço",
    category: "Construção Civil",
  },
  {
    image: project3,
    title: "Instalações Técnicas",
    description: "Sistema elétrico e hidráulico industrial complexo",
    category: "Instalações",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="geometric-border inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Nossos Projetos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Excelência em Execução
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projetos industriais de referência na região amazônica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm shadow-card hover:shadow-strong transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-smooth">
                <span className="text-primary text-sm font-bold uppercase tracking-wide mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/90">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
