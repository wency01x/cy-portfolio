import SplitText from "./SplitText";


export default function Header() {
    // MODIFIED: Added handler to log when animation finishes
  const handleAnimationComplete = () => {
    console.log('Animation finished!');
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
      <img 
        src="/public/hero-profile.jpg" 
        alt="Profile" 
        className="w-32 h-32 rounded-xl object-cover"
      />
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          {/* MODIFIED: Replaced static H1 with SplitText component */}
        <SplitText
        text="Wency Casiño"
        className="text-3xl font-bold"
        delay={50}
        duration={1.25}
        ease="power3.out"
        tag="h1" 
        onLetterAnimationComplete={handleAnimationComplete}
      />
          <span className="text-blue-500 text-xl">✓</span>
        </div>
        <p className="text-gray-500 mt-1">📍 Cagayan de Oro City</p>
        <p className="text-gray-600 font-medium mt-2">Fullstack Developer</p>
        
        <div className="flex gap-3 mt-4 justify-center md:justify-start">
          <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
            <span>📥</span> Download Resume
          </button>
          <button className="border border-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-gray-50">
            <span>✉️</span> Send Email
          </button>
        </div>
      </div>
    </div>
  );
}