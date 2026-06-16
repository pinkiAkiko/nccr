import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-on-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
<div className="col-span-1 md:col-span-1">
<div className="mb-6">
<h3 className="font-headline-sm text-headline-sm font-bold text-white mb-2">NCCR</h3>
<p className="text-surface-variant/80 text-label-md font-label-md">National Centre for Coastal Research</p>
</div>
<p className="text-surface-variant/80 text-body-md mb-6 leading-relaxed">
                    A premier research institute under the Ministry of Earth Sciences, Govt. of India, specializing in integrated coastal management.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" href="/">
<span className="material-symbols-outlined text-sm">public</span>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" href="/">
<span className="material-symbols-outlined text-sm">share</span>
</a>
</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-white uppercase tracking-wider mb-6">Quick Links</h4>
<ul className="space-y-4 text-surface-variant/80 text-label-md font-label-md">
<li><a className="hover:text-white transition-colors" href="/">Site Map</a></li>
<li><a className="hover:text-white transition-colors" href="/">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="/">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="/">Hyperlinking Policy</a></li>
<li><a className="hover:text-white transition-colors" href="/">Disclaimer</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-white uppercase tracking-wider mb-6">Reach Us</h4>
<div className="space-y-4 text-surface-variant/80 text-body-md">
<div className="flex gap-3">
<span className="material-symbols-outlined text-secondary shrink-0">location_on</span>
<p>NIOT Campus, Velacherry-Tambaram Main Road, Pallikaranai, Chennai - 600100, India</p>
</div>
<div className="flex gap-3">
<span className="material-symbols-outlined text-secondary shrink-0">phone</span>
<p>+91 44 66783599</p>
</div>
<div className="flex gap-3">
<span className="material-symbols-outlined text-secondary shrink-0">mail</span>
<p>contact@nccr.gov.in</p>
</div>
</div>
</div>
<div>
<h4 className="font-label-md text-label-md text-white uppercase tracking-wider mb-6">Engagement</h4>
<div className="space-y-4">
<div className="p-4 bg-white/5 rounded border border-white/10">
<h5 className="text-white text-label-md font-label-md mb-1">Total Visitors</h5>
<p className="text-secondary-fixed text-headline-sm font-headline-sm">3,517,126</p>
<p className="text-[10px] text-surface-variant/60 uppercase mt-1">Since 8th April 2019</p>
</div>
<div className="flex items-center gap-4">
<img alt="India.gov.in" className="h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" src="/assets/screen.png"/>
<img alt="MoES" className="h-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" src="/assets/screen2.png"/>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 py-8">
<div className="max-w-container-max mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-surface-variant/50 text-[12px]">
<p>© 2024 National Centre for Coastal Research. All rights reserved. Ministry of Earth Sciences, Govt. of India.</p>
<div className="flex gap-6">
<span>Last Updated: 08-Jun-2026</span>
<span>v2.4.0</span>
</div>
</div>
</div>
</footer>
  );
};

export default Footer;
