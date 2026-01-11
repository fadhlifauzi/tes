
import React from 'react';
import { ArrowRight, Cpu, Globe, Rocket, Sparkles } from 'lucide-react';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
          <Sparkles size={14} />
          Quantum Engine V3.0 is Live
        </div>
        
        <h1 className="text-5xl lg:text-8xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 leading-tight mb-8">
          The Intelligence <br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
            Nexus of Tomorrow
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-10">
          Unlock profound futuristic insights with our neural-powered engine. NovaSphere leverages deep generative intelligence to visualize the trajectory of human progress.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onGetStarted}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/40 group hover:scale-105 active:scale-95"
          >
            Launch Interface
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold backdrop-blur-md transition-all">
            View Protocol
          </button>
        </div>

        {/* Abstract Terminal UI Mock */}
        <div className="mt-24 w-full glass-panel overflow-hidden border border-white/10 relative p-1 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <div className="bg-[#030014] rounded-[22px] overflow-hidden">
             <div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                <div className="ml-4 text-[10px] text-gray-500 font-mono tracking-widest uppercase">System Core // Active</div>
             </div>
             <div className="p-8 grid md:grid-cols-2 gap-12 text-left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-white flex items-center gap-3">
                      <Cpu size={20} className="text-blue-400" />
                      Neural Synapse Processing
                    </h3>
                    <p className="text-gray-500 text-sm">Real-time data ingestion through multiple quantum layers ensures zero-latency reasoning.</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-white flex items-center gap-3">
                      <Globe size={20} className="text-purple-400" />
                      Global Contextual awareness
                    </h3>
                    <p className="text-gray-500 text-sm">Deep indexing of global trends, research, and cultural shifts for accurate long-term forecasting.</p>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/tech/800/450')] opacity-30 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"></div>
                    <div className="relative p-6 glass-panel text-center">
                        <Rocket size={32} className="mx-auto text-blue-400 mb-2" />
                        <span className="text-xs font-mono text-blue-300">SYSTEM_READY</span>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-[#030014]/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem label="Quantum Ops / Sec" value="4.8 PB" />
            <StatItem label="Active Nodes" value="12,402" />
            <StatItem label="Safety Rating" value="99.99%" />
            <StatItem label="Human Alignment" value="Perfect" />
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center space-y-1">
    <div className="text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tighter">{value}</div>
    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">{label}</div>
  </div>
);

export default Home;
