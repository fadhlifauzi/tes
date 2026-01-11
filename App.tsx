
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import BackgroundEffects from './components/BackgroundEffects';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  // Transition scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <Home onGetStarted={() => setActivePage(Page.Dashboard)} />;
      case Page.Dashboard:
        return <Dashboard />;
      default:
        return <Home onGetStarted={() => setActivePage(Page.Dashboard)} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#030014]">
      <BackgroundEffects />
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="relative z-10 pt-20">
        {renderPage()}
      </main>
      <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#030014]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">NS</span>
            </div>
            <span className="text-white font-semibold font-heading text-xl tracking-wider">NOVASPHERE</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Legal</a>
          </div>
          <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
            © 2024 NovaSphere Intelligence Group
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
