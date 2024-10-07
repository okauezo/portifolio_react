import { useParams } from 'react-router-dom';

const projectDetails = {
    1: {
        title: 'Projeto 1',
        description: 'Um sistema de controle de estoque eficiente para pequenas empresas.',
        motivation: 'Simplificar o gerenciamento de estoque com uma interface amigável.',
        challenges: 'Ajustar o sistema para suportar várias empresas sem perda de desempenho.',
    },
    2: {
        title: 'Projeto 2',
        description: 'Aplicativo de monitoramento em tempo real para eventos de corrida.',
        motivation: 'Proporcionar uma experiência interativa para os fãs de automobilismo.',
        challenges: 'Integração de sensores IoT e APIs de clima em tempo real.',
    },
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectDetails[id];

    return (
        <div className="p-4 flex flex-col items-center bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="mt-4 text-lg max-w-2xl">{project.description}</p>
            <section className="mt-8 max-w-2xl">
                <h2 className="text-2xl font-semibold">Motivação</h2>
                <p className="mt-2 text-md">{project.motivation}</p>
                <h2 className="text-2xl font-semibold mt-6">Desafios</h2>
                <p className="mt-2 text-md">{project.challenges}</p>
            </section>
        </div>
    );
};

export default ProjectDetails;
