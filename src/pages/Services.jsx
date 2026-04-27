import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData';

export default function Services() {
  const itServices = [
    'website-development',
    'software-development',
    'web-app-dev',
    'erp-solutions',
    'e-commerce',
    'ai-integration',
    'ai-agents',
    'automation'
  ];

  const marketingServices = [
    'digital-marketing',
    'seo-optimization',
    'meta-ads',
    'brand-visibility',
    'full-branding',
    'ad-campaigns'
  ];

  return (
    <div className="pb-32 overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Core Expertise
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Elevate Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Digital Empire</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              SkillSage orchestrates high-performance technology development, cybersecurity fortitude, and strategic digital growth for industry leaders.
            </p>
            
            <div className="flex justify-center gap-4 mt-12 text-slate-500">
              <span className="material-symbols-outlined text-4xl animate-bounce">keyboard_arrow_down</span>
            </div>
          </div>
        </div>
      </section>

      {/* IT Development Services */}
      <section className="py-32 px-6 bg-white relative" id="it-services">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-20 text-center md:text-left justify-between">
            <div>
              <div className="h-1 w-16 bg-blue-600 rounded-full mb-6 mx-auto md:mx-0"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">IT Development <span className="text-blue-600">Precision</span></h2>
            </div>
            <p className="text-slate-600 max-w-md text-lg">Robust, scalable ecosystems engineered for the next generation of business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((slug) => {
              const service = servicesData[slug];
              if (!service) return null;
              return (
                <div key={slug} className="bg-white shadow-sm hover:shadow-xl p-10 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all hover:-translate-y-2 group flex flex-col items-center text-center relative overflow-hidden">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                    <Link to={`/services/${slug}`} className="before:absolute before:inset-0">{service.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{service.description.slice(0, 100)}...</p>
                  <div className="mt-8 text-xs font-black text-blue-600 tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    EXAMINE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marketing & Branding Section */}
      <section className="py-32 px-6 bg-slate-50" id="marketing-services">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-20 text-center md:text-left justify-between">
            <div>
              <div className="h-1 w-16 bg-blue-500 rounded-full mb-6 mx-auto md:mx-0"></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Marketing <span className="text-blue-500">&amp; Branding</span></h2>
            </div>
            <p className="text-slate-600 max-w-md text-lg">Defining identities and dominating markets with precision-targeted growth strategies.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
             {marketingServices.map((slug) => {
              const service = servicesData[slug];
              if (!service) return null;
              return (
                <div key={slug} className="bg-white shadow-md overflow-hidden group rounded-[2.5rem] border border-slate-200 hover:border-blue-300 transition-all flex flex-col relative h-[450px] hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-2/3 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-10 relative flex flex-col flex-grow">
                    <div className="absolute top-0 right-10 -translate-y-1/2 w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl font-bold">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-500 transition-colors">
                      <Link to={`/services/${slug}`} className="before:absolute before:inset-0">{service.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description.slice(0, 80)}...</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Graphic Section */}
      <section className="py-40 relative bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute -inset-10 bg-blue-100 blur-[120px] rounded-full pointer-events-none"></div>
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" alt="Cyber Security" className="relative rounded-[3rem] shadow-2xl border border-slate-200" />
          </div>
          <div>
            <h2 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Fortify Your Digital <br/> <span className="text-blue-600">Infrastructure</span></h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">Beyond development, we build digital fortresses. Our security-first approach ensures that your innovations are protected by enterprise-grade defense mechanisms.</p>
            <div className="flex flex-wrap gap-10">
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-blue-600">100%</span>
                  <span className="text-xs text-slate-600 font-bold uppercase tracking-widest mt-2">Success Rate</span>
               </div>
               <div className="w-px h-12 bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-blue-600">24/7</span>
                  <span className="text-xs text-slate-600 font-bold uppercase tracking-widest mt-2">Threat Ops</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-white p-20 rounded-[3.5rem] border border-blue-100 text-center relative overflow-hidden group shadow-2xl shadow-blue-900/5">
           <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] group-hover:opacity-100 transition-opacity"></div>
           <span className="material-symbols-outlined text-7xl text-blue-600 mb-8 animate-floating block">bolt</span>
           <h2 className="text-5xl font-black mb-8 text-slate-900 leading-tight">Architect Your <br/> Future Today</h2>
           <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto font-medium">Join the ranks of innovators building resilient, elite-tier digital infrastructure with SkillSage.</p>
           <Link to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-16 py-6 rounded-xl font-black text-xl transition-all shadow-xl shadow-blue-600/20 inline-block">
             Launch Your Consult
           </Link>
        </div>
      </section>
    </div>
  );
}
