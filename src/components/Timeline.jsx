const data = {
  experience: [
    { year: '2025', title: 'Web Developer (Project Contributor)', desc: 'University of Science and Technology of Southern Philippines' },
    { year: '2024', title: 'Backend Developer', desc: "University of Science and Technology of Southern Philippines Registrar’s Office." },
    { year: '2023', title: 'Freelancing', desc: 'Started doing projects from clients' },
    { year: '2022', title: 'Hello World! 🤙', desc: 'Wrote my first line of code' },
  ],
  education: [
    { year: '2023 - Present', title: 'Bachelor of Science in Computer Science', desc: 'University of Science and Technology of Southern Philippines' },
  ]
};

export default function Timeline({ title, type }) {
  const items = data[type];
  const icon = title === "Experience" ? "💼" : "📖";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
        {icon} {title}
      </h2>
      <div className="relative border-l-2 border-gray-100 ml-2 space-y-8">
        {items.map((item, index) => (
          <div key={index} className="mb-4 ml-6 relative">
            {/* The Dot */}
            <div className="absolute -left-[31px] mt-1.5 w-3 h-3 bg-black rounded-full border-4 border-white shadow-sm"></div>
            
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {item.year}
            </span>
            <h3 className="text-sm font-bold text-gray-800 mt-1">{item.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}