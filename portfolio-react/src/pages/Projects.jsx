import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import CertificationsCard from '../components/CertificationsCard';
import { certifications } from '../data/Certifications';
import { motion } from 'motion/react';
import { useGlobal } from '../context/GlobalContext';

const Projects = () => {
  const { t } = useGlobal();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto px-4 py-20 space-y-20">
      <section>
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-4">{t.projects.title}</h2>
        <p className="text-center text-gray-400 mb-12">{t.projects.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-4">{t.projects.cert_title}</h2>
        <p className="text-center text-gray-400 mb-12">{t.projects.cert_subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certificate) => (
            <CertificationsCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;