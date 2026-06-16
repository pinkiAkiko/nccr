import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Activity = () => {
    useEffect(() => {
        // Setup scripts here
    }, []);

    return (
        <div className="bg-background text-on-background font-body-md antialiased">
            <Navbar />
            {/* HTML goes here */}
            
{/*  TopNavBar  */}

<main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
{/*  Hero Section  */}
<header className="mb-section-gap">
<div className="relative rounded-xl overflow-hidden min-h-[400px] flex items-center coastal-gradient p-stack-lg">
<div className="absolute inset-0 opacity-20">

</div>
<div className="relative z-10 max-w-3xl">
<span className="inline-block px-stack-md py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-label-md font-label-md mb-stack-md">CORE MISSION</span>
<h1 className="text-display-lg font-display-lg text-white mb-stack-md">Coastal Processes &amp; Hazards</h1>
<p className="text-body-lg font-body-lg text-surface-variant max-w-xl">
                        Advancing scientific understanding of India's shoreline dynamics through integrated monitoring, predictive modeling, and sustainable management strategies for resilient coastal communities.
                    </p>
</div>
</div>
</header>{/*  Bento Grid for Primary Activities  */}
<section className="mb-section-gap">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Shoreline Management  */}
<div className="md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant/30 hover:shadow-xl transition-all group">
<div className="flex flex-col md:flex-row gap-stack-lg">
<div className="flex-1">
<span className="material-symbols-outlined text-secondary text-4xl mb-stack-md">waves</span>
<h2 className="text-headline-md font-headline-md mb-stack-sm">Shoreline Management</h2>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                                Extensive monitoring and assessment of coastal erosion using satellite imagery and field observation. Our "Shoreline Change Atlas" provides a comprehensive look at coastal evolution from 1990 to 2022.
                            </p>
<ul className="space-y-stack-sm mb-stack-md">
<li className="flex items-center gap-2 text-label-md font-label-md"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Beach Nourishment Strategies</li>
<li className="flex items-center gap-2 text-label-md font-label-md"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Sediment Budget Analysis</li>
<li className="flex items-center gap-2 text-label-md font-label-md"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> GIS-based Shoreline Mapping</li>
</ul>
<a className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all" href="/">
                                Explore Methodology <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div className="w-full md:w-1/3 rounded-lg overflow-hidden">
<img alt="Coastal Erosion Visualization" className="w-full h-full object-cover grayscale-0 hover:grayscale transition-all duration-500" data-alt="A highly technical 2D scientific map visualization showing coastal elevation changes and potential tsunami inundation zones along a coastline. The map uses a vibrant color scale from blue to red to indicate depth and height, with sharp topographical contours and grid lines indicative of professional oceanographic modeling software output. The aesthetic is clean and academic, rendered with high-key lighting that emphasizes data clarity and scientific precision." src="/assets/activity_page_img1.png"/>
</div>
</div>
</div>
{/*  Coastal Vulnerability  */}
<div className="md:col-span-4 bg-primary text-on-primary p-stack-lg rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary-fixed text-4xl mb-stack-md">warning</span>
<h2 className="text-headline-md font-headline-md mb-stack-sm">Vulnerability Assessment</h2>
<p className="text-body-md font-body-md opacity-80 mb-stack-md">
                            Quantifying risk through the Multi-Hazard Vulnerability Index (MHVI), integrating sea-level rise, storm surges, and high tide line dynamics.
                        </p>
</div>
<div className="p-stack-md bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
<div className="flex justify-between items-center">
<span className="text-label-md font-label-md">Risk Index (2024)</span>
<span className="text-label-md font-label-md text-secondary-fixed">HIGH PRIORITY</span>
</div>
<div className="w-full bg-white/20 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-secondary-fixed h-full w-[78%]"></div>
</div>
</div>
</div>
{/*  Water Quality Monitoring  */}
<div className="md:col-span-12 lg:col-span-6 bg-surface-container-low p-stack-lg rounded-xl border border-outline-variant/30 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h2 className="text-headline-md font-headline-md mb-stack-sm">Water Quality Monitoring</h2>
<p className="text-body-md font-body-md text-on-surface-variant">
                                Real-time monitoring of 25+ parameters across critical coastal points using automated buoy networks and lab-based analysis.
                            </p>
</div>
<div className="p-stack-sm bg-white rounded-full flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">opacity</span>
</div>
</div>
<div className="grid grid-cols-3 gap-stack-md mt-stack-lg">
<div className="text-center">
<div className="text-headline-sm font-headline-sm text-primary">25+</div>
<div className="text-label-md font-label-md text-on-surface-variant">Locations</div>
</div>
<div className="text-center">
<div className="text-headline-sm font-headline-sm text-primary">Daily</div>
<div className="text-label-md font-label-md text-on-surface-variant">Updates</div>
</div>
<div className="text-center">
<div className="text-headline-sm font-headline-sm text-primary">Live</div>
<div className="text-label-md font-label-md text-on-surface-variant">Dashboard</div>
</div>
</div>
</div>
{/*  Capacity Building  */}
<div className="md:col-span-12 lg:col-span-6 border-2 border-dashed border-outline-variant p-stack-lg rounded-xl flex items-center gap-stack-lg">
<div className="flex-1">
<h2 className="text-headline-md font-headline-md mb-stack-sm">Capacity Building</h2>
<p className="text-body-md font-body-md text-on-surface-variant mb-stack-md">
                            Training the next generation of coastal scientists through internships, workshops, and technical manuals.
                        </p>
<button className="flex items-center gap-2 px-stack-md py-2 border border-primary text-primary rounded font-label-md hover:bg-primary hover:text-white transition-all">
                            View Training Calendar <span className="material-symbols-outlined text-sm">calendar_month</span>
</button>
</div>
<div className="hidden sm:block">
<span className="material-symbols-outlined text-7xl text-outline-variant opacity-30">school</span>
</div>
</div>
</div>
</section>
{/*  Marine Litter Section  */}
<section className="mb-section-gap">
<div className="bg-surface-dim/30 rounded-2xl p-stack-lg border border-outline-variant/20 overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">

</div>
<div className="relative z-10 grid md:grid-cols-2 gap-stack-lg items-center">
<div>
<span className="text-error font-label-md flex items-center gap-1 mb-stack-sm">
<span className="material-symbols-outlined text-sm">emergency</span> ENVIRONMENTAL IMPACT
                        </span>
<h2 className="text-display-lg font-display-lg text-primary mb-stack-md">Marine Litter &amp; Micro Plastics</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mb-stack-md">
                            Tracking the global challenge at a local scale. NCCR's "Swachh Sagar Surakshit Sagar" campaign involves nationwide monitoring and systematic quantification of plastic debris along the Indian coastline.
                        </p>
<div className="space-y-stack-md">
<div className="glass-panel p-stack-md rounded-lg">
<h4 className="font-headline-sm text-primary mb-1">Impact Analysis</h4>
<p className="text-body-md">Assessing histological responses in marine organisms like Penaeus monodon to heavy metals and micro-plastics.</p>
</div>
<div className="glass-panel p-stack-md rounded-lg">
<h4 className="font-headline-sm text-primary mb-1">Policy Blueprint</h4>
<p className="text-body-md">Drafting the National Marine Litter Policy framework for sustainable oceanic health.</p>
</div>
</div>
</div>
<div className="relative group">
<img alt="Marine Litter Impact" className="rounded-xl shadow-2xl transition-transform group-hover:scale-[1.02] duration-500" data-alt="A panoramic, high-resolution scientific photograph of a coastal beach segment affected by marine debris and micro-plastics. The image captures a detailed cross-section of sand intermixed with colorful plastic fragments and weathered oceanic waste, juxtaposed against a clean, serene blue sea in the background. The lighting is natural and bright, highlighting the textural contrast between organic shore material and synthetic pollutants, presented in a documentary and professional style typical of environmental research archives." src="/assets/about_page_img2.png"/>
<div className="absolute -bottom-4 -right-4 bg-primary text-white p-stack-md rounded-lg shadow-lg max-w-[200px]">
<p className="text-label-md italic font-light opacity-80">"Monitoring over 75 coastal locations across 7,500 km."</p>
</div>
</div>
</div>
</div>
</section>
{/*  Resource Hub / Grid  */}
<section className="mb-section-gap">
<div className="flex justify-between items-end mb-stack-lg">
<div>
<h2 className="text-headline-lg font-headline-lg text-primary">Technical Resources</h2>
<p className="text-body-md text-on-surface-variant">Access our latest findings and implementation manuals.</p>
</div>
<button className="text-primary font-label-md flex items-center gap-1 hover:underline">
                    VIEW ALL PUBLICATIONS <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="bg-white p-stack-md rounded-xl border border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-secondary mb-stack-sm">description</span>
<h3 className="text-headline-sm font-headline-sm mb-2 group-hover:text-secondary transition-colors">Shoreline Atlas</h3>
<p className="text-label-md text-on-surface-variant">Lakshadweep Edition (1990-2022)</p>
</div>
<div className="bg-white p-stack-md rounded-xl border border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-secondary mb-stack-sm">analytics</span>
<h3 className="text-headline-sm font-headline-sm mb-2 group-hover:text-secondary transition-colors">Tsunami SAR</h3>
<p className="text-label-md text-on-surface-variant">Numerical Modeling Reports</p>
</div>
<div className="bg-white p-stack-md rounded-xl border border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-secondary mb-stack-sm">menu_book</span>
<h3 className="text-headline-sm font-headline-sm mb-2 group-hover:text-secondary transition-colors">Seaweed Farming</h3>
<p className="text-label-md text-on-surface-variant">Technical Practice Manuals</p>
</div>
<div className="bg-white p-stack-md rounded-xl border border-outline-variant/30 hover:border-secondary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-secondary mb-stack-sm">policy</span>
<h3 className="text-headline-sm font-headline-sm mb-2 group-hover:text-secondary transition-colors">BBNJ Bill 2026</h3>
<p className="text-label-md text-on-surface-variant">Public Consultation Draft</p>
</div>
</div>
</section>
</main>
{/*  Footer  */}



            <Footer />
        </div>
    );
};

export default Activity;
