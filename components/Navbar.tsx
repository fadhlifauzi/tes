
import React from 'react';
import { LayoutGrid, Home, Zap, ShieldCheck, Menu } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between glass-panel px-6 py-3 pointer-events-auto shadow-2xl">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate(Page.Home)}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-9 h-9 bg-[#0a0a0a] rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all">
              <Zap className="w-5 h-5 text-blue-400 fill-blue-400" />
            </div>
          </div>
          <span className="text-white font-heading font-bold text-xl tracking-tight">
            NOVASPHERE
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <NavLink 
            active={activePage === Page.Home} 
            onClick={() => onNavigate(Page.Home)} 
            icon={<Home size={18} />}
            label="Overview" 
          />
          <NavLink 
            active={activePage === Page.Dashboard} 
            onClick={() => onNavigate(Page.Dashboard)} 
            icon={<LayoutGrid size={18} />}
            label="Insights" 
          />
          <NavLink 
            active={false} 
            onClick={() => {}} 
            icon={<ShieldCheck size={18} />}
            label="Infrastructure" 
          />
        </div>

        <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Join Beta
        </button>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
      active 
      ? 'bg-white/10 text-white shadow-inner' 
      : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default Navbar;
