const stacks = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Python', 'MySQL', 'PostgreSQL'],
  tools: ['GitHub', 'Git', 'Vite'] 
};

export default function TechStack() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold flex items-center gap-2">Tech Stack</h2>
      </div>
      
      {Object.entries(stacks).map(([key, items]) => (
        <div key={key} className="mb-6">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{key}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map(item => (
              <span key={item} className="bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm flex items-center gap-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}