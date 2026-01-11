
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { Sparkles, Terminal, Activity, BrainCircuit, RefreshCw, AlertCircle } from 'lucide-react';
import { Insight } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const Dashboard: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInsights = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Generate 6 distinct, creative, and realistic futuristic technology insights or societal predictions for the year 2050. Focus on areas like bio-tech, AI integration, climate solutions, and space travel.',
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                summary: { type: Type.STRING },
                category: { type: Type.STRING, enum: ['Tech', 'Science', 'Future', 'Society'] },
                confidence: { type: Type.NUMBER },
              },
              required: ['title', 'summary', 'category', 'confidence'],
            },
          },
        },
      });

      const data = JSON.parse(response.text);
      setInsights(data);
    } catch (err) {
      console.error('Error fetching insights:', err);
      setError('Neural link unstable. Failed to synchronize with the future stream.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-sm uppercase tracking-widest">
            <Activity size={16} />
            Data Stream: Alpha-Nine
          </div>
          <h2 className="text-4xl font-heading font-bold text-white">Neural Insights</h2>
          <p className="text-gray-400 max-w-xl">
            Synthesizing tomorrow's reality through the lens of modern generative intelligence. 
            Below are speculative projections based on current technological trajectories.
          </p>
        </div>
        <button 
          onClick={fetchInsights}
          disabled={loading}
          className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-white font-bold flex items-center gap-3 transition-all active:scale-95 disabled:opacity-50"
        >
          {loading ? <RefreshCw className="animate-spin" size={18} /> : <RefreshCw size={18} />}
          Synchronize Stream
        </button>
      </header>

      {error && (
        <div className="glass-panel p-8 flex flex-col items-center justify-center text-center gap-4 border-red-500/20 mb-12">
          <AlertCircle size={48} className="text-red-500 mb-2" />
          <h3 className="text-xl font-bold text-white">Synchronization Error</h3>
          <p className="text-gray-400 max-w-sm">{error}</p>
          <button onClick={fetchInsights} className="text-blue-400 underline underline-offset-4 hover:text-blue-300">Attempt Re-link</button>
        </div>
      )}

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="glass-panel p-8 h-64 animate-pulse flex flex-col gap-4">
              <div className="w-1/3 h-4 bg-white/10 rounded"></div>
              <div className="w-full h-8 bg-white/10 rounded"></div>
              <div className="w-full h-24 bg-white/10 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, idx) => (
            <div 
              key={idx} 
              className="glass-panel group p-8 hover:bg-white/[0.05] transition-all duration-500 cursor-default border-transparent hover:border-blue-500/30 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  insight.category === 'Tech' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  insight.category === 'Science' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  insight.category === 'Future' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                  'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {insight.category}
                </span>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-500">CONFIDENCE</span>
                    <span className="text-xs font-mono text-white">{(insight.confidence * 100).toFixed(0)}%</span>
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {insight.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {insight.summary}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                    <BrainCircuit size={16} className="text-blue-400/50" />
                    <span className="text-[10px] text-gray-500 font-mono">NEURAL_DECODE</span>
                </div>
                <button className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <Terminal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Tool Section */}
      <section className="mt-24 glass-panel p-1 border border-white/5 overflow-hidden">
        <div className="bg-[#0a0a0c] rounded-[22px] p-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
                    <Sparkles className="text-white" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white">Become an Architect of the Future</h3>
                <p className="text-gray-400">Join our collaborative network of futurists and AI researchers. Contribute your own projections and get reward in NovaTokens for accurate long-term predictions.</p>
                <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white text-black font-bold rounded-xl shadow-xl shadow-white/5 transition-transform active:scale-95">Start Contributing</button>
                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all">Learn Governance</button>
                </div>
            </div>
            <div className="flex-1 w-full max-w-sm relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                    src="https://picsum.photos/seed/future-city/600/600" 
                    alt="Futuristic Cityscape" 
                    className="relative rounded-3xl w-full h-80 object-cover border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
