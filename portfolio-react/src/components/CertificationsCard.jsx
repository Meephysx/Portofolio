import { useGlobal } from '../context/GlobalContext';

const CertificationsCard = ({ certificate }) => {
  const { t } = useGlobal();

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-all duration-300 border border-gray-700 flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{certificate.title}</h3>
        <p className="text-gray-400 mb-2">{certificate.organization} • {certificate.date}</p>

        <div className="flex-1" />

        <div className="flex gap-3 mt-auto">
          <a
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
          >
            {t.projects.btn_view}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationsCard;