import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900 mb-6 block">SkillSage</span>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed mb-8">
              Architecting resilient digital infrastructure and bridging the technology skill gap for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-black hover:border-black transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-black hover:border-black transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm text-slate-500 hover:text-black transition-colors">Digital Transformation</Link></li>
              <li><Link to="/consultancy" className="text-sm text-slate-500 hover:text-black transition-colors">Strategic Advisory</Link></li>
              <li><Link to="/training" className="text-sm text-slate-500 hover:text-black transition-colors">Corporate Training</Link></li>
              <li><Link to="/services/cybersecurity-solutions" className="text-sm text-slate-500 hover:text-black transition-colors">Cyber Defense</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-slate-500 hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-black transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} SkillSage. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs text-slate-400">New York • London • Dubai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
