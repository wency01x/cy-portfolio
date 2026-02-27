import SplitText from "./SplitText";
import StarBorder from "./StarBorder";
import heroProfile from "../assets/hero-profile.jpg";
// 1. Import your resume file here
import resumeFile from "../assets/resume.pdf";

export default function Header() {
  return (
    <StarBorder className="w-full">
      <div className="p-6 flex flex-col md:flex-row items-center gap-6">
        <img 
          src={heroProfile}
          alt="Profile" 
          className="w-32 h-32 rounded-xl object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <SplitText text="Wency Casiño" className="text-4xl font-bold dark:text-white" />
          </div>
          {/* Added dark mode text colors */}
          <p className="text-gray-500 dark:text-gray-400 mt-1">Cagayan de Oro City</p>
          <p className="text-gray-600 dark:text-gray-300 font-medium mt-2">Fullstack Developer</p>
          
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            
            {/* 2. Download Button converted to an <a> tag */}
            <a 
              href={resumeFile} 
              download="Wency_Casino_Resume.pdf"
              className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Download Resume
            </a>

            {/* 3. Bonus: Made the Email button functional using mailto: */}
            <a 
              href="mailto:your.email@example.com"
              className="border border-gray-200 dark:border-slate-700 dark:text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              Send Email
            </a>

          </div>
        </div>
      </div>
    </StarBorder>
  );
}