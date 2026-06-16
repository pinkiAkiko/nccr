import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        // Setup scripts here
    }, []);

    return (
        <div className="bg-background text-on-background font-body-md antialiased">
            <Navbar />
            {/* HTML goes here */}

            {/*  Top Navigation Bar  */}

            {/*  Hero Section  */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img alt="Coastal Research Hero" className="w-full h-full object-cover" src="/assets/hero_banner.png" />
                    <div className="absolute inset-0 gradient-overlay"></div>
                </div>
                <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full text-white">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 bg-secondary text-white text-label-md font-label-md rounded mb-6">Ministry of Earth Sciences, Govt. of India</span>
                        <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Advancing Science for Coastal Resilience</h1>
                        <p className="font-body-lg text-body-lg text-surface-variant mb-8 leading-relaxed">
                            Dedicated to monitoring and managing India's vast coastline through integrated coastal and marine area management. Since 1998, we lead the nation's efforts in coastal processes, water quality, and marine biology.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-secondary text-white px-8 py-4 rounded font-label-md text-label-md flex items-center gap-2 hover:bg-on-secondary-container transition-all">
                                Explore Our Research <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded font-label-md text-label-md hover:bg-white/20 transition-all">
                                Technical Reports
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Stats Ribbon  */}
            <div className="bg-primary-container text-white py-12 relative overflow-hidden">
                <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter text-center">
                    <div className="flex flex-col gap-2">
                        <span className="font-headline-lg text-headline-lg">25+</span>
                        <span className="text-on-primary-container font-label-md text-label-md uppercase tracking-wider">Years of Research</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-headline-lg text-headline-lg">150+</span>
                        <span className="text-on-primary-container font-label-md text-label-md uppercase tracking-wider">Scientific Staff</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-headline-lg text-headline-lg">500+</span>
                        <span className="text-on-primary-container font-label-md text-label-md uppercase tracking-wider">Technical Reports</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-headline-lg text-headline-lg">7516</span>
                        <span className="text-on-primary-container font-label-md text-label-md uppercase tracking-wider">KM Coastline Managed</span>
                    </div>
                </div>
            </div>
            {/*  Research Highlights  */}
            <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Research Highlights</h2>
                        <div className="w-20 h-1 bg-secondary"></div>
                    </div>
                    <a className="text-secondary font-label-md text-label-md flex items-center gap-1 hover:underline" href="/">View All Research <span className="material-symbols-outlined text-sm">open_in_new</span></a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                    {/*  Research Item 1  */}
                    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 card-shadow">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img alt="Physical-Biogeochemical Simulations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/research_highlights/img1.png" />
                        </div>
                        <div className="p-stack-lg">
                            <span className="inline-block px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase mb-4">Ecosystem Response</span>
                            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Physical-Biogeochemical Simulations of Upwelling</h3>
                            <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">Analyzing ecological responses to fresh water influx using coupled numerical modeling for enhanced coastal management.</p>
                            <a className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-3 transition-all" href="/">
                                Read Publication <span className="material-symbols-outlined">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                    {/*  Research Item 2  */}
                    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 card-shadow">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img alt="Numerical Analysis of Wave Climate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/research_highlights/img2.png" />
                        </div>
                        <div className="p-stack-lg">
                            <span className="inline-block px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase mb-4">Coastal Morphodynamics</span>
                            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Wave Climate Driven Sediment Transport</h3>
                            <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">Longshore sediment transport variations along the Mahabalipuram coast analyzed through advanced numerical climate models.</p>
                            <a className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-3 transition-all" href="/">
                                Read Publication <span className="material-symbols-outlined">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                    {/*  Research Item 3  */}
                    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 card-shadow">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img alt="Coastal Water Analysis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/assets/research_highlights/img3.png" />
                        </div>
                        <div className="p-stack-lg">
                            <span className="inline-block px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase mb-4">Water Quality</span>
                            <h3 className="font-headline-sm text-headline-sm mb-4 leading-snug group-hover:text-secondary transition-colors">Seasonal Variations in Puducherry Waters</h3>
                            <p className="text-on-surface-variant text-body-md line-clamp-3 mb-6">A deep dive into physicochemical and biological parameters using statistical analysis for coastal water quality monitoring.</p>
                            <a className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-3 transition-all" href="/">
                                Read Publication <span className="material-symbols-outlined">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Mid Section: News & Reports  */}
            <section className="bg-surface-container-low py-section-gap">
                <div className="max-w-container-max mx-auto px-margin-desktop">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/*  Technical Reports  */}
                        <div className="lg:col-span-2">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="font-headline-md text-headline-md text-primary">Technical Reports</h2>
                                <a className="text-secondary text-label-md font-label-md uppercase tracking-wider hover:underline" href="/">View All</a>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded border border-outline-variant/30 flex items-start gap-6 hover:border-secondary transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-container transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container">description</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-headline-sm text-headline-sm text-primary mb-1">Seaweed Farming Practices for India's Blue Economy</h4>
                                        <p className="text-on-surface-variant text-body-md mb-4">Strategic framework for sustainable seaweed cultivation and blue growth in Indian coastal regions.</p>
                                        <div className="flex items-center gap-4 text-label-md font-label-md text-on-surface-variant">
                                            <span>PDF (4.2 MB)</span>
                                            <span>•</span>
                                            <span>Published: May 2026</span>
                                        </div>
                                    </div>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-secondary">download</button>
                                </div>
                                <div className="bg-white p-6 rounded border border-outline-variant/30 flex items-start gap-6 hover:border-secondary transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-container transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container">policy</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-headline-sm text-headline-sm text-primary mb-1">A Blueprint for National Marine Litter Policy</h4>
                                        <p className="text-on-surface-variant text-body-md mb-4">Comprehensive policy recommendations for addressing plastic pollution and marine debris in Indian waters.</p>
                                        <div className="flex items-center gap-4 text-label-md font-label-md text-on-surface-variant">
                                            <span>PDF (3.8 MB)</span>
                                            <span>•</span>
                                            <span>Published: June 2026</span>
                                        </div>
                                    </div>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-secondary">download</button>
                                </div>
                                <div className="bg-white p-6 rounded border border-outline-variant/30 flex items-start gap-6 hover:border-secondary transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-container transition-colors">
                                        <span className="material-symbols-outlined text-primary group-hover:text-on-secondary-container">map</span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-headline-sm text-headline-sm text-primary mb-1">Shoreline Change Atlas (1990-2022) for Lakshadweep</h4>
                                        <p className="text-on-surface-variant text-body-md mb-4">Multi-decadal shoreline change assessment and erosion trends for the Lakshadweep archipelago.</p>
                                        <div className="flex items-center gap-4 text-label-md font-label-md text-on-surface-variant">
                                            <span>PDF (12.5 MB)</span>
                                            <span>•</span>
                                            <span>Published: March 2026</span>
                                        </div>
                                    </div>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-secondary">download</button>
                                </div>
                            </div>
                        </div>
                        {/*  News & Announcements  */}
                        <div className="bg-primary text-white p-stack-lg rounded-xl flex flex-col h-full">
                            <h2 className="font-headline-md text-headline-md mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary">notifications_active</span>
                                Latest News
                            </h2>
                            <div className="space-y-8 flex-grow">
                                <div className="group cursor-pointer">
                                    <span className="text-[10px] uppercase font-bold text-secondary-fixed mb-2 block tracking-widest">Academic</span>
                                    <h4 className="text-label-md font-label-md leading-relaxed group-hover:text-secondary-fixed transition-colors">Students shortlisted for Internship / Dissertation Programme for June 2026</h4>
                                    <p className="text-sm text-surface-variant/70 mt-2">16 June, 2026</p>
                                </div>
                                <div className="group cursor-pointer">
                                    <span className="text-[10px] uppercase font-bold text-secondary-fixed mb-2 block tracking-widest">Opportunities</span>
                                    <h4 className="text-label-md font-label-md leading-relaxed group-hover:text-secondary-fixed transition-colors">Engagement of 03 consultants on contract basis - Apply Now</h4>
                                    <p className="text-sm text-surface-variant/70 mt-2">14 June, 2026</p>
                                </div>
                                <div className="group cursor-pointer">
                                    <span className="text-[10px] uppercase font-bold text-secondary-fixed mb-2 block tracking-widest">Tenders</span>
                                    <h4 className="text-label-md font-label-md leading-relaxed group-hover:text-secondary-fixed transition-colors">Expression of Interest (EoI) For Installation of ABMS at Five Coastal Locations</h4>
                                    <p className="text-sm text-surface-variant/70 mt-2">10 June, 2026</p>
                                </div>
                                <div className="group cursor-pointer">
                                    <span className="text-[10px] uppercase font-bold text-secondary-fixed mb-2 block tracking-widest">Notice</span>
                                    <h4 className="text-label-md font-label-md leading-relaxed group-hover:text-secondary-fixed transition-colors">Public Consultation on the BBNJ Bill 2026 - Invitation for Inputs</h4>
                                    <p className="text-sm text-surface-variant/70 mt-2">02 June, 2026</p>
                                </div>
                            </div>
                            <a className="mt-8 pt-8 border-t border-white/10 text-secondary-fixed font-label-md text-label-md flex items-center justify-between group" href="/">
                                View All News
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Photo Gallery Carousel  */}
            <section className="py-section-gap overflow-hidden bg-white">
                <div className="max-w-container-max mx-auto px-margin-desktop mb-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-primary">Photo Gallery</h2>
                            <p className="text-on-surface-variant mt-2 font-body-md">Glimpses of our field activities and research expeditions.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all" id="prevGallery">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all" id="nextGallery">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-container-max mx-auto px-margin-desktop">
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x" id="galleryContainer">
                        <div className="flex-shrink-0 w-[400px] aspect-[16/10] snap-start rounded-lg overflow-hidden group relative">
                            <img alt="NCCR Field Activity 1" className="w-full h-full object-cover" src="/assets/photo_gallery/img1.png" />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white text-label-md font-label-md">Coastal Monitoring Expedition</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-[400px] aspect-[16/10] snap-start rounded-lg overflow-hidden group relative">
                            <img alt="Coral Species Research" className="w-full h-full object-cover" src="/assets/photo_gallery/img2.png" />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white text-label-md font-label-md">Coral Reef Ecosystem Studies</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-[400px] aspect-[16/10] snap-start rounded-lg overflow-hidden group relative">
                            <img alt="NCCR Technical Facility" className="w-full h-full object-cover" src="/assets/photo_gallery/img3.png" />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white text-label-md font-label-md">Advanced Marine Laboratory</p>
                            </div>
                        </div>
                        <div className="flex-shrink-0 w-[400px] aspect-[16/10] snap-start rounded-lg overflow-hidden group relative">
                            <img alt="Field Training" className="w-full h-full object-cover" src="/assets/photo_gallery/img4.png" />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white text-label-md font-label-md">Capacity Building Workshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Institutional Partners  */}
            <div className="py-12 border-t border-outline-variant/30 bg-surface-bright">
                <div className="max-w-container-max mx-auto px-margin-desktop overflow-hidden">
                    <div className="flex items-center gap-12 animate-scroll whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                        {/*  Simple list as per reference, using text labels since icons aren't in shared images  */}
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">MoES</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">NCESS</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">IMD</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">NCMRWF</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">NIOT</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">INCOIS</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">IITM</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">NCPOR</span>
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary">CMLRE</span>
                    </div>
                </div>
            </div>
            {/*  Footer  */}



            <Footer />
        </div>
    );
};

export default Home;
