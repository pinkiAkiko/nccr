import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Publications = () => {
    useEffect(() => {
        // Setup scripts here
    }, []);

    return (
        <div className="bg-background text-on-background font-body-md antialiased">
            <Navbar />
            {/* HTML goes here */}
            
{/*  TopNavBar Implementation from JSON  */}

<main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
{/*  Hero / Header Section  */}
<section className="mb-section-gap">
<div className="flex flex-col md:flex-row justify-between items-end gap-gutter mb-stack-lg">
<div className="max-w-2xl">
<span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-base block">Scholarly Database</span>
<h1 className="text-display-lg font-display-lg text-primary mb-stack-sm">Research Publications</h1>
<p className="text-body-lg font-body-lg text-on-surface-variant">Access our extensive collection of peer-reviewed research, technical methodologies, and coastal management frameworks.</p>
</div>
<div className="flex flex-col gap-2 w-full md:w-auto">
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full md:w-80 pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none" placeholder="Search publications..." type="text"/>
</div>
</div>
</div>
{/*  Filters Bar  */}
<div className="flex flex-wrap items-center gap-gutter p-stack-md bg-surface-container-low rounded-xl mb-stack-lg">
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                    All Publications
                </button>
<button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg text-label-md font-label-md transition-colors">
                    Technical Reports
                </button>
<button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg text-label-md font-label-md transition-colors">
                    Books &amp; Brochures
                </button>
<button className="flex items-center gap-2 px-4 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg text-label-md font-label-md transition-colors">
                    Manuals
                </button>
<div className="ml-auto hidden md:block">
<span className="text-label-md font-label-md text-outline">Showing 24 of 1,204 results</span>
</div>
</div>
</section>
{/*  Featured Section: Technical Reports  */}
<section className="mb-section-gap">
<div className="flex items-center justify-between mb-stack-md">
<h2 className="text-headline-lg font-headline-lg text-primary">Featured Technical Reports</h2>
<a className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:underline" href="/">
                    View All Reports <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-white p-gutter rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
<div className="md:col-span-5 relative group overflow-hidden rounded-lg">
<img alt="Technical Report Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/screen.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
</div>
<div className="md:col-span-7 flex flex-col justify-center space-y-stack-md">
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase rounded">New Release</span>
<span className="text-outline text-label-md font-label-md">June 2026</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary">Shoreline Change Atlas (1990-2022) for Lakshadweep</h3>
<p className="text-body-md font-body-md text-on-surface-variant">A comprehensive multi-decadal analysis of shoreline dynamics across the Lakshadweep archipelago, utilizing high-resolution satellite imagery and advanced numerical modeling to assess vulnerability and coastal erosion patterns.</p>
<div className="flex flex-wrap gap-stack-sm">
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[12px] rounded-full border border-outline-variant/30">Coastal Dynamics</span>
<span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[12px] rounded-full border border-outline-variant/30">Remote Sensing</span>
</div>
<div className="pt-base flex gap-gutter">
<button className="bg-primary text-white px-8 py-3 rounded-lg text-label-md font-label-md flex items-center gap-2 hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
                            Download PDF (24.5 MB)
                        </button>
<button className="border border-outline text-primary px-8 py-3 rounded-lg text-label-md font-label-md hover:bg-surface-container transition-colors">
                            Full Abstract
                        </button>
</div>
</div>
</div>
</section>
{/*  Publication Feed: Bento Style Grid  */}
<section className="mb-section-gap">
<h2 className="text-headline-lg font-headline-lg text-primary mb-stack-lg">Latest Publications</h2>
<div className="publication-grid">
{/*  Card 1  */}
<div className="glass-card p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-all group">
<div className="flex items-start justify-between mb-stack-md">
<div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">science</span>
</div>
<span className="text-label-md font-label-md text-outline">Jan 2026</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary mb-stack-sm group-hover:text-secondary transition-colors">Coupled physical-biogeochemical simulations of upwelling</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-lg line-clamp-3">Ecological response to fresh water input in the coastal zones. A detailed study of seasonal variations and biological responses.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-stack-md">
<span className="text-label-md font-label-md text-outline">Research Article</span>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-label-md text-label-md" href="/">
                            Details <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Card 2  */}
<div className="glass-card p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-all group">
<div className="flex items-start justify-between mb-stack-md">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined">water</span>
</div>
<span className="text-label-md font-label-md text-outline">Dec 2025</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary mb-stack-sm group-hover:text-secondary transition-colors">Seaweed Farming Practices for India's Blue Economy</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-lg line-clamp-3">Methodologies and sustainable practices for large-scale seaweed cultivation along the Indian coastline for economic empowerment.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-stack-md">
<span className="text-label-md font-label-md text-outline">Technical Manual</span>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-label-md text-label-md" href="/">
                            Details <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Card 3  */}
<div className="glass-card p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-all group">
<div className="flex items-start justify-between mb-stack-md">
<div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center text-error">
<span className="material-symbols-outlined">policy</span>
</div>
<span className="text-label-md font-label-md text-outline">Oct 2025</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary mb-stack-sm group-hover:text-secondary transition-colors">A Blueprint for National Marine Litter Policy</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-lg line-clamp-3">Strategic framework and policy recommendations for managing plastic and microplastic pollution in India's marine environment.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-stack-md">
<span className="text-label-md font-label-md text-outline">Policy Paper</span>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-label-md text-label-md" href="/">
                            Details <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Card 4  */}
<div className="glass-card p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-all group">
<div className="flex items-start justify-between mb-stack-md">
<div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">analytics</span>
</div>
<span className="text-label-md font-label-md text-outline">Sept 2025</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary mb-stack-sm group-hover:text-secondary transition-colors">Numerical analysis of wave climate variations</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-lg line-clamp-3">Focusing on Mahabalipuram coast, exploring sediment transport driven by seasonal wave climate changes.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-stack-md">
<span className="text-label-md font-label-md text-outline">Journal Article</span>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-label-md text-label-md" href="/">
                            Details <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Card 5  */}
<div className="glass-card p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-all group">
<div className="flex items-start justify-between mb-stack-md">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined">biotech</span>
</div>
<span className="text-label-md font-label-md text-outline">July 2025</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary mb-stack-sm group-hover:text-secondary transition-colors">Enzyme activities and histopathological responses</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-lg line-clamp-3">Effect of selenium on Penaeus monodon and Perna viridis. A toxicology study on coastal marine organisms.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-stack-md">
<span className="text-label-md font-label-md text-outline">Research Report</span>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-label-md text-label-md" href="/">
                            Details <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Card 6  */}
<div className="glass-card p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-all group">
<div className="flex items-start justify-between mb-stack-md">
<div className="w-12 h-12 bg-surface-tint/10 rounded-lg flex items-center justify-center text-surface-tint">
<span className="material-symbols-outlined">tsunami</span>
</div>
<span className="text-label-md font-label-md text-outline">May 2025</span>
</div>
<h4 className="text-headline-sm font-headline-sm text-primary mb-stack-sm group-hover:text-secondary transition-colors">Evaluation of tsunami inundation using SAR data</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-lg line-clamp-3">Utilizing synthetic aperture radar and numerical modeling for hazard assessment and disaster mitigation.</p>
<div className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-stack-md">
<span className="text-label-md font-label-md text-outline">Technical Brief</span>
<a className="text-primary hover:text-secondary flex items-center gap-1 font-label-md text-label-md" href="/">
                            Details <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
</div>
<div className="mt-section-gap flex justify-center">

</div>
</section>
{/*  Newsletter Subscription  */}
<section className="bg-primary-container rounded-2xl p-margin-desktop text-center relative overflow-hidden">

<div className="relative z-10 max-w-xl mx-auto">
<h3 className="text-headline-lg font-headline-lg text-white mb-stack-sm">Stay Updated</h3>
<p className="text-on-primary-container font-body-md mb-stack-lg">Receive the latest technical reports and coastal research findings directly in your inbox.</p>
<div className="flex flex-col sm:flex-row gap-stack-sm">
<input className="flex-grow px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary" placeholder="Your academic email address" type="email"/>
<button className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-label-md hover:brightness-110 transition-all">Subscribe Now</button>
</div>
</div>
</section>
</main>
{/*  Footer Implementation from JSON  */}



            <Footer />
        </div>
    );
};

export default Publications;
