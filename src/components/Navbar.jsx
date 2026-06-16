import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-50 transition-all duration-300">
      {/* GIGW Top Bar */}
      <div className="bg-primary text-white text-[11px] sm:text-xs py-1.5 px-4 md:px-8 flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <a href="#main-content" className="hover:underline focus:underline focus:outline-none">Skip to Main Content</a>
          <div className="w-px h-3 bg-white/30 hidden sm:block"></div>
          <a href="#screen-reader" className="hover:underline focus:underline focus:outline-none hidden sm:block">Screen Reader Access</a>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <button className="hover:bg-white/20 px-1.5 py-0.5 rounded transition-colors">A-</button>
            <button className="hover:bg-white/20 px-1.5 py-0.5 rounded transition-colors font-bold">A</button>
            <button className="hover:bg-white/20 px-1.5 py-0.5 rounded transition-colors">A+</button>
          </div>
          <div className="w-px h-3 bg-white/30"></div>
          <div className="flex items-center gap-2">
            <button className="w-4 h-4 rounded-full bg-white border border-gray-300 focus:outline-none ring-1 ring-offset-1 ring-primary" aria-label="Light Theme"></button>
            <button className="w-4 h-4 rounded-full bg-black border border-gray-600 focus:outline-none" aria-label="Dark Theme"></button>
          </div>
          <div className="w-px h-3 bg-white/30 hidden sm:block"></div>
          <select className="bg-transparent border-none outline-none text-white cursor-pointer hidden sm:block">
            <option className="text-black" value="en">English</option>
            <option className="text-black" value="hi">हिन्दी</option>
          </select>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center w-full px-4 md:px-8 mx-auto h-20">
        <div className="flex items-center gap-4">
          <img alt="NCCR Logo" className="h-12 w-auto object-contain" src="/assets/logo.png" />
        </div>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 flex-wrap">
          <NavLink to="/" className={({ isActive }) => `font-label-md text-label-md whitespace-nowrap transition-colors ${isActive ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>Home</NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => `font-label-md text-label-md whitespace-nowrap transition-colors ${isActive ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>About Us</NavLink>
          <NavLink to="/activity" className={({ isActive }) => `font-label-md text-label-md whitespace-nowrap transition-colors ${isActive ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>Activities</NavLink>
          <NavLink to="/publications" className={({ isActive }) => `font-label-md text-label-md whitespace-nowrap transition-colors ${isActive ? 'text-secondary border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-primary'}`}>Publications</NavLink>
          <NavLink to="#" >Tender</NavLink>
          <NavLink to="#" >Recruitment</NavLink>
          <NavLink to="#" >RTI</NavLink>
          <NavLink to="#" >Events</NavLink>
          <NavLink to="#" >Gallery</NavLink>
          <NavLink to="#" >ICC</NavLink>
          <NavLink to="#" >Contact Us</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined p-2 hover:bg-surface-container-low rounded-full transition-colors hidden sm:block">search</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
