import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import consultancyData from '../data/consultancyData';

export default function ConsultancyDetail() {
  const { slug } = useParams();
  const service = consultancyData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/consultancy" replace />;
  }

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {service.tagline}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                {service.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  {service.title.split(' ').slice(-1)}
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                {service.heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Book Strategy Session <span className="material-symbols-outlined text-sm">call</span>
                </Link>
                <Link 
                  to="/consultancy"
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  All Services
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block perspective-1000 mt-10 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3]">
                {/* Browser/Window Header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 bg-slate-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                {/* Image Content */}
                <img src={service.image} alt={service.title} className="w-full h-full object-cover object-top" />
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl border border-slate-200 z-30 shadow-lg text-center">
                <p className="text-slate-900 text-2xl font-extrabold tracking-tighter">{service.stats[0].value}</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">{service.stats[0].label}</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white px-6 py-4 rounded-xl border border-slate-200 z-30 shadow-lg text-center">
                <p className="text-slate-900 text-2xl font-extrabold tracking-tighter">{service.stats[1].value}</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">{service.stats[1].label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR (mobile-friendly) ─── */}
      <section className="py-12 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES GRID ─── */}
      <section className="py-32 relative bg-white" id="capabilities">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">What We Deliver</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Core <span className="text-blue-600">Capabilities</span></h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Deep-domain expertise tailored to your enterprise needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white transition-colors">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT PROCESS ─── */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Pipeline</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">Engagement <span className="text-blue-600">Roadmap</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-slate-200">
              <div className="h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>

            {service.processSteps.map((step, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-blue-600 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-transform">
                    {['search_insights', 'architecture', 'rocket_launch', 'tune'][idx]}
                  </span>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-[10px] font-black text-white flex items-center justify-center border-4 border-white group-hover:bg-blue-600 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES (Dark Mode) ─── */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Real-World Impact</span>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                Proven <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Use Cases</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                See how organizations like yours have leveraged our {service.title.toLowerCase()} expertise to achieve transformational outcomes.
              </p>

              <div className="space-y-5">
                {service.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all group backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-all">
                      <span className="material-symbols-outlined text-sm text-blue-400 group-hover:text-white transition-colors">check_circle</span>
                    </div>
                    <span className="text-slate-300 font-medium leading-relaxed">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="bg-slate-900 p-12 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
                <div className="text-center mb-12 relative z-10">
                  <span className="material-symbols-outlined text-5xl text-blue-400 mb-4 block">integration_instructions</span>
                  <h3 className="text-2xl font-black text-white mb-2">Technology Stack</h3>
                  <p className="text-sm text-slate-400 font-medium">Tools and platforms we leverage</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                  {service.techStack.map((tech, idx) => (
                    <div key={idx} className="px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-blue-300 font-black text-xs uppercase tracking-widest hover:scale-110 hover:border-blue-400 transition-all cursor-default shadow-lg">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHITE & BLUE CTA ─── */}
      <section className="py-32 relative px-6 text-center overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white z-0"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="material-symbols-outlined text-6xl text-blue-600/20 mb-8 animate-floating">{service.icon}</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 leading-tight">
            Ready to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transform?</span>
          </h2>
          <p className="text-2xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
            Our lead consultants are ready to architect your next breakthrough. Schedule your strategy session today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-6 rounded-full font-black text-xl transition-transform hover:scale-105 shadow-2xl shadow-blue-600/30 inline-flex justify-center items-center gap-3">
              Book Strategy Session <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
