import { useGlobal } from '../context/GlobalContext';

const ProjectCard = ({ project }) => {
  const { t, language } = useGlobal();
  const description = typeof project.description === 'object'
    ? project.description[language] || project.description.en || ''
    : project.description;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-300 border border-gray-700 flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-1">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-2 py-1 text-xs font-semibold bg-gray-700 text-teal-300 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-md bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors"
          >
            {t.projects.btn_github}
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
          >
            {t.projects.btn_demo}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;