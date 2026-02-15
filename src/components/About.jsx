import Lanyard from "./Lanyard";

export default function About() {
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[280px] overflow-hidden">
      
      {/* 1. THE LANYARD (Moved to z-50 to be on top of everything) */}
      <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} transparent={true} />
      </div>

      {/* 2. THE TEXT (Set to z-10 so it stays behind the lanyard) */}
      <div className="relative z-10 pr-32">
        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
          About Me
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed text-sm pointer-events-auto">
          <p>
            I am a full-stack developer specializing in developing end-to-end solutions. I work on web applications, building RESTful APIs, creating responsive front-end interfaces, and managing database systems using MySQL and Firebase.
          </p>
          <p>
            I am currently pursuing a Bachelor of Science in Computer Science at University of Science and Technology of Southern Philippines. I have professional experience working with the office of the USTP registrar, where I was one of the student who developed and full-stack infrastructure for real-time applications.
          </p>
        </div>
      </div>
    </div>
  );
}