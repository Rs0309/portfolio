export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Project 2",
      description: "Description of your second project",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Project 3",
      description: "Description of your third project",
      technologies: ["Next.js", "Tailwind", "Firebase"],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
