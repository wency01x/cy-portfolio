// src/App.jsx
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import LogoLoop from './components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiMysql, SiPostgresql, SiGithub } from 'react-icons/si';
import StarBorder from './components/StarBorder';
import { GitHubCalendar } from 'react-github-calendar';

const techLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com/wency01x" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <About />
            <TechStack />

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Technologies in Motion</h2>
              <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={40}
                gap={50}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#ffffff"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Timeline title="Experience" type="experience" />
            <Timeline title="Education" type="education" />
          </div>
        </div>

        {/* GitHub Telemetry Section - Moved inside max-w-5xl to match the UI alignment */}
        <section className="w-full flex flex-col items-center justify-center py-10 bg-[#ffffff] text-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="w-full px-10">
            <h2 className="flex flex-col-reverse text-gray-800">
            </h2>

            {/* Wrapper to allow sideways scrolling on mobile without breaking the UI */}
            <div className="p-6 bg-[#0d1117] rounded-2xl overflow-x-auto">
              <GitHubCalendar
                username="wency01x"
                blockSize={12}
                blockMargin={4}
                fontSize={14}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
                showWeekdayLabels={true}
                labels={{ totalCount: '{{count}} contributions in the last year' }}
              />

              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <span>Learn how we count contributions</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-[#161b22] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#0e4429] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#006d32] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#26a641] rounded-sm"></div>
                    <div className="w-3 h-3 bg-[#39d353] rounded-sm"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;