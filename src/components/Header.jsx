import SplitText from "./SplitText";
import StarBorder from "./StarBorder";
import heroProfile from "../assets/hero-profile.jpg";

export default function Header() {
  return (
    <StarBorder className="w-full">
      {/* Removed bg-white and border classes here because StarBorder handles it */}
      <div className="p-6 flex flex-col md:flex-row items-center gap-6">
        <img 
          src={heroProfile}
          alt="Profile" 
          className="w-32 h-32 rounded-xl object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <SplitText text="Wency Casiño" className="text-4xl font-bold" />
          </div>
          <p className="text-gray-500 mt-1">Cagayan de Oro City</p>
          <p className="text-gray-600 font-medium mt-2">Fullstack Developer</p>
          
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
              Download Resume
            </button>
            <button className="border border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </StarBorder>
  );
}