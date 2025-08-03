// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Säkerhetsblogg',
    description: 'En blogg byggd med Next.js som fokuserar på IT-säkerhetsnyheter.',
    link: '#', // Länk till projektet
    tech: ['Next.js', 'Tailwind', 'MDX']
  },
  {
    title: 'E-handelsplattform',
    description: 'En fullstack e-handelssajt med fokus på säkra betalningslösningar.',
    link: '#',
    tech: ['React', 'Node.js', 'Stripe']
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 md:px-20 lg:px-40" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center">Mina projekt</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-gray-700 rounded-full text-gray-300">{t}</span>
              ))}
            </div>
            <a href={project.link} className="text-teal-400 hover:text-teal-300 font-bold">
              Se projektet →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;