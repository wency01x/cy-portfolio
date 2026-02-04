import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <About />
            <TechStack />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Timeline title="Experience" type="experience" />
            <Timeline title="Education" type="education" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;