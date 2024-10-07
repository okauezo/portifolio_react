import { Link } from 'react-router-dom';

const projects = [
    { id: 1, title: 'App de Finanças', description: 'Aplicativo para controle financeiro pessoal.', technologies: ['React', 'Redux', 'Tailwind'] },
    { id: 2, title: 'E-commerce', description: 'Plataforma de comércio eletrônico focada em pequenas empresas.', technologies: ['Next.js', 'Firebase'] },
];

const ProjectList = () => (
    <div className="flex flex-col items-center justify-center p-8 ml-56">
        <h1 className="text-4xl font-bold mb-6 text-green-700">Projetos de Kauê</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map(project => (
                <Link to={`/projects/${project.id}`} key={project.id} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs">
                    <h2 className="text-xl font-bold text-green-700">{project.title}</h2>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <p className="text-sm text-green-500 mt-1">Tecnologias: {project.technologies.join(', ')}</p>
                </Link>
            ))}
        </div>
    </div>
);

export default ProjectList;
