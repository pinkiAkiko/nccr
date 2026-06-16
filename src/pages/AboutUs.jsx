import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(section);
        });
        
        return () => observer.disconnect();
    }, []);

    return (
        <div className="bg-background text-on-background font-body-md selection:bg-secondary/30">
            <Navbar />
            <main className="max-w-container-max mx-auto px-margin-desktop py-stack-lg">
        
        {/*  Hero Section / History  */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-section-gap">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-md font-label-md">
                    <span className="material-symbols-outlined text-[16px]">history</span>
                    ESTABLISHED 1997
                </div>
                <h1 className="text-display-lg font-display-lg text-primary leading-tight">Securing India's Coastal Future.</h1>
                <p className="text-body-lg text-on-surface-variant max-w-xl">
                    The National Centre for Coastal Research (NCCR) was established as a Project Directorate under the Department of Ocean Development. Originally known as ICMAM, we have evolved into a premier scientific institution dedicated to the preservation and sustainable management of India's vast marine ecosystems.
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary text-on-primary px-8 py-3 rounded hover:bg-primary-container transition-colors font-label-md text-label-md">Download Charter</button>
                    <button className="border border-primary text-primary px-8 py-3 rounded hover:bg-surface-container-low transition-colors font-label-md text-label-md">Watch Legacy</button>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/10 rounded-xl blur-2xl group-hover:bg-secondary/20 transition-all"></div>
                <img src="/assets/about_page_img2.png" alt="Historical inauguration image" className="relative rounded-xl w-full h-[400px] object-cover shadow-2xl border border-white/50" />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded shadow-lg">
                    <p className="text-label-md font-label-md text-primary flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                        The inauguration ceremony of the ICMAM Project Directorate, 1998.
                    </p>
                </div>
            </div>
        </section>

        {/*  Mandate & Organization Setup (Bento Grid)  */}
        <section className="mb-section-gap">
            <div className="text-center mb-12">
                <h2 className="text-headline-lg font-headline-lg text-primary">Strategic Framework</h2>
                <div className="h-1 w-20 bg-secondary mx-auto mt-4"></div>
            </div>

            <div className="bento-grid">
                {/*  Vision  */}
                <div className="col-span-12 md:col-span-8 bg-primary p-12 rounded-xl text-white flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <span className="material-symbols-outlined text-[48px] text-secondary mb-6">visibility</span>
                    <h3 className="text-headline-md font-headline-md mb-4">Our Vision</h3>
                    <p className="text-body-lg text-surface-variant max-w-2xl">
                        To achieve excellence in coastal scientific research for the benefit of society, ensuring sustainable development of the coastal zone through innovative monitoring and predictive modeling.
                    </p>
                </div>

                {/*  Mission  */}
                <div className="col-span-12 md:col-span-4 bg-white border border-outline-variant/30 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-[32px] text-primary mb-4">target</span>
                    <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Mission</h3>
                    <p className="text-body-md text-on-surface-variant">
                        Providing scientific solutions for coastal hazards and management through integrated monitoring of water quality and marine ecosystems.
                    </p>
                </div>

                {/*  Org Setup  */}
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-low p-8 rounded-xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-headline-sm font-headline-sm text-primary mb-4">Organization Setup</h3>
                        <p className="text-body-md text-on-surface-variant mb-6">Structured for scientific precision across multiple domains of oceanography and coastal management.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-label-md font-label-md text-primary">
                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                Project Directorate (Chennai)
                            </li>
                            <li className="flex items-center gap-3 text-label-md font-label-md text-primary">
                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                Regional Field Units
                            </li>
                            <li className="flex items-center gap-3 text-label-md font-label-md text-primary">
                                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                Specialized Research Labs
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="mt-8 text-secondary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all">
                        View Full Hierarchy <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>

                {/*  Legacy Image  */}
                <div className="col-span-12 md:col-span-6 lg:col-span-8 relative rounded-xl overflow-hidden min-h-[300px]">
                    <img src="/assets/about_img1.png" alt="Community engagement image Sagar Sangamam" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                        <h4 className="text-white text-headline-sm font-headline-sm">Sagar Sangamam Legacy</h4>
                        <p className="text-surface-variant/90 text-body-md max-w-lg">Our community initiatives bridges the gap between scientific research and coastal stakeholders.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  Leadership / Scientists  */}
        <section className="mb-section-gap">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-headline-lg font-headline-lg text-primary">Our Scientists</h2>
                    <p className="text-body-md text-on-surface-variant mt-2">A multidisciplinary team of world-class oceanographers and researchers.</p>
                </div>
                <a href="#" className="border border-outline text-on-surface-variant px-6 py-2 rounded font-label-md text-label-md hover:bg-surface-container transition-colors">Official Directory</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {/*  Scientist Card 1  */}
                <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:border-secondary/50 transition-all">
                    <div className="aspect-square bg-surface-container relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                            <span className="material-symbols-outlined text-[80px]">person</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-headline-sm font-headline-sm text-primary">Dr. M.V. Ramana Murthy</h4>
                        <p className="text-label-md font-label-md text-secondary mb-3">Scientist G / Director</p>
                        <p className="text-body-md text-on-surface-variant line-clamp-2">Specialization in Coastal Engineering, Ocean Observation and Hazard Management.</p>
                    </div>
                </div>

                {/*  Scientist Card 2  */}
                <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:border-secondary/50 transition-all">
                    <div className="aspect-square bg-surface-container relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                            <span className="material-symbols-outlined text-[80px]">person</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-headline-sm font-headline-sm text-primary">Dr. Pravakar Mishra</h4>
                        <p className="text-label-md font-label-md text-secondary mb-3">Scientist F</p>
                        <p className="text-body-md text-on-surface-variant line-clamp-2">Expertise in Coastal Water Quality Monitoring and Biogeochemistry.</p>
                    </div>
                </div>

                {/*  Scientist Card 3  */}
                <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:border-secondary/50 transition-all">
                    <div className="aspect-square bg-surface-container relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                            <span className="material-symbols-outlined text-[80px]">person</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-headline-sm font-headline-sm text-primary">Dr. Sisir Kumar Dash</h4>
                        <p className="text-label-md font-label-md text-secondary mb-3">Scientist E</p>
                        <p className="text-body-md text-on-surface-variant line-clamp-2">Specializing in Shoreline Management and Coastal Processes.</p>
                    </div>
                </div>

                {/*  Scientist Card 4  */}
                <div className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 hover:border-secondary/50 transition-all">
                    <div className="aspect-square bg-surface-container relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                            <span className="material-symbols-outlined text-[80px]">person</span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h4 className="text-headline-sm font-headline-sm text-primary">Dr. B.R. Subramanian</h4>
                        <p className="text-label-md font-label-md text-secondary mb-3">Scientist G (Retd.)</p>
                        <p className="text-body-md text-on-surface-variant line-clamp-2">Founding contributions to Integrated Coastal Zone Management in India.</p>
                    </div>
                </div>
            </div>
        </section>

        {/*  Facilities & Technology  */}
        <section className="bg-primary rounded-2xl overflow-hidden p-margin-desktop relative">
            <div src="DATA:ANIMATION:ANIMATION_2" className="absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                    <h2 className="text-headline-lg font-headline-lg mb-6">Advanced Research Facilities</h2>
                    <p className="text-body-lg text-surface-variant mb-8">NCCR houses state-of-the-art laboratories equipped with the latest technology for analyzing satellite data, water quality, and sediment transport patterns.</p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary">database</span>
                            <div>
                                <h5 className="text-label-md font-label-md text-white">Tier III HPC</h5>
                                <p className="text-body-md text-surface-variant/70">High-performance computing for modeling.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary">biotech</span>
                            <div>
                                <h5 className="text-label-md font-label-md text-white">Ocean Lab</h5>
                                <p className="text-body-md text-surface-variant/70">Certified biogeochemical analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-64 rounded-lg bg-surface-container-high/10 backdrop-blur-md flex items-center justify-center border border-white/10 group hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[48px] text-secondary group-hover:scale-110 transition-transform">satellite_alt</span>
                    </div>
                    <div className="h-64 rounded-lg bg-surface-container-high/10 backdrop-blur-md flex items-center justify-center border border-white/10 mt-8 group hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-[48px] text-secondary group-hover:scale-110 transition-transform">waves</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
            <Footer />
        </div>
    );
};

export default AboutUs;
