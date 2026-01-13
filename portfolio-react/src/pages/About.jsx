import { motion } from 'motion/react';
import { useGlobal } from '../context/GlobalContext';

const About = () => {
  const { t } = useGlobal();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-teal-400 mb-8 border-b border-gray-700 pb-2">
        {t.about.title}
      </h2>

      <div className="space-y-12 text-gray-300">
        <section>
          <h3 className="text-xl font-semibold text-white mb-3">{t.about.summary_title}</h3>

          <ul className="mb-4 list-disc list-inside space-y-2 text-gray-300">
            {t.about.summary_points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          {t.about.summary_text.map((para, i) => (
            <p key={i} className="leading-relaxed text-gray-400">
              {para}
              {i === 0 && <><br /><br /></>}
            </p>
          ))}
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-3">{t.about.edu_title}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {t.about.edu_list.map((edu, i) => (
              <li key={i}>
                <strong>{edu.degree}</strong> - {edu.school}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-3">{t.about.exp_title}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            {t.about.exp_list.map((exp, i) => (
              <li key={i}>
                <strong>{exp.role}</strong> - {exp.company}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-white mb-3">{t.about.plus_title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold text-teal-300">{t.about.values.val1_title}</h4>
              <p className="text-sm mt-2">{t.about.values.val1_desc}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold text-teal-300">{t.about.values.val2_title}</h4>
              <p className="text-sm mt-2">{t.about.values.val2_desc}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h4 className="font-bold text-teal-300">{t.about.values.val3_title}</h4>
              <p className="text-sm mt-2">{t.about.values.val3_desc}</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
