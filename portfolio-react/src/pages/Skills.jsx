import { skills } from '../data/skills';
import { motion } from 'motion/react';
import { useGlobal } from '../context/GlobalContext';

const Skills = () => {
  const { t } = useGlobal();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">{t.skills.title}</h2>
      {t.skills.subtitle && <p className="text-center text-gray-400 mb-12">{t.skills.subtitle}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Frontend Section */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Frontend</h3>
          <div className="space-y-3">
            {skills.frontend.map((skill, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{skill.name}</span>
                <span className="text-teal-400 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Backend</h3>
          <div className="space-y-3">
            {skills.backend.map((skill, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{skill.name}</span>
                <span className="text-teal-400 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">{t.skills.tools_title}</h3>
          
          <div className="space-y-3">
            {skills.tools.map((skill, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{skill.name}</span>
                <span className="text-teal-400 text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;