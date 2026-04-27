import { Link } from 'react-router-dom';

export default function SoftwareDevelopment() {
  return (
    <div className="pb-24">
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
                Enterprise Engineering
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Scalable Software <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Development</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                We engineer resilient, polyglot software architectures designed for infinite scale. From microservices orchestration to legacy modernization, we build the digital nervous system of industry leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Initiate Architecture <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                  Performance Metrics
                </button>
              </div>
            </div>

            <div className="relative group mt-10 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3]">
                {/* Browser/Window Header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 bg-slate-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                </div>
                {/* Image Content */}
                <img className="w-full h-full object-cover object-top" alt="Software Architecture Visualization" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl border border-slate-200 z-30 shadow-lg text-center hidden sm:block">
                <p className="text-slate-900 text-2xl font-extrabold tracking-tight">99.99%</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">Uptime Resilience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Technical Bento Grid */}
      <section className="py-32 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Competencies</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Full-Stack <span className="text-blue-500">Expertise</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">
            <div className="md:col-span-2 lg:col-span-8 bg-white shadow-sm hover:shadow-md border-slate-200 p-12 rounded-[3.5rem] flex flex-col justify-between group h-full hover:border-blue-600/30 transition-all duration-700">
              <div>
                <span className="material-symbols-outlined text-blue-600 text-5xl mb-8">cloud_done</span>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Cloud-Native Architecture</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-lg">We architect distributed systems that thrive in the cloud. Using Kubernetes orchestration and serverless fabrics, we ensure zero-threshold scaling.</p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                {['AWS', 'Kubernetes', 'Terraform', 'OCI'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-blue-600/5 border border-blue-600/10 text-[10px] font-black uppercase tracking-widest text-blue-500">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-4 bg-white shadow-sm hover:shadow-md border-slate-200 p-12 rounded-[3.5rem] hover:border-blue-600/30 transition-all duration-700">
              <span className="material-symbols-outlined text-blue-600 text-5xl mb-8">neurology</span>
              <h3 className="text-2xl font-black text-slate-900 mb-6">AI Integration</h3>
              <p className="text-slate-500 leading-relaxed font-medium">Embedding Large Language Models and predictive neural networks directly into your enterprise workflow logic.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-4 bg-white shadow-sm hover:shadow-md border-slate-200 p-12 rounded-[3.5rem] hover:border-blue-600/30 transition-all duration-700">
              <span className="material-symbols-outlined text-blue-600 text-5xl mb-8">hub</span>
              <h3 className="text-2xl font-black text-slate-900 mb-6">Microservices</h3>
              <p className="text-slate-500 leading-relaxed font-medium">Decoupling monolithic debt into independent, modular units communicating via high-speed gRPC and message brokers.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-8 bg-white shadow-sm hover:shadow-md border-slate-200 p-12 rounded-[3.5rem] relative overflow-hidden group hover:border-blue-600/30 transition-all duration-700">
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Legacy Modernization</h3>
                  <p className="text-slate-500 mb-8 max-w-xl leading-relaxed font-medium">Strategic refactoring of aging systems into modern, competitive assets without operational interruption.</p>
                  <button className="text-blue-600 font-black flex items-center gap-2 text-[10px] uppercase tracking-widest">
                    Technical Blueprint <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
                <div className="w-full md:w-1/3">
                  <img alt="Data Visualization" className="rounded-3xl w-full h-40 object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Technical Bento Grid */}

      {/* BEGIN: Engineered Process */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Build Cycle</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Software <span className="text-blue-500">Methodology</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 relative text-center md:text-left">
            <div className="hidden md:block absolute top-[5.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"></div>
            {[
              { step: '01', title: 'Audit & Analysis', icon: 'analytics', desc: 'Comprehensive technical debt assessment and requirements logic mapping.' },
              { step: '02', title: 'Logic Blueprint', icon: 'schema', desc: 'Architecting modular service patterns and database schemas for scale.' },
              { step: '03', title: 'Agile Build', icon: 'sprint', desc: 'Iterative, CI/CD-driven engineering with weekly deployment targets.' },
              { step: '04', title: 'QA & Evolution', icon: 'biotech', desc: 'Rigorous unit testing and automated QA cycles before global launch.' }
            ].map((p, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="w-20 h-20 rounded-[1.5rem] bg-white border-2 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)] flex items-center justify-center mx-auto md:mx-0 mb-8 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-blue-600">{p.icon}</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Engineered Process */}

      {/* BEGIN: Elite Guard CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white shadow-sm hover:shadow-md border-slate-200 rounded-[3.5rem] p-12 md:p-24 overflow-hidden text-center border border-slate-200 group">
            <div className="absolute inset-0 bg-blue-600/5 opacity-50 backdrop-blur-3xl"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-blue-500 mb-8 animate-floating">terminal</span>
              <h2 className="text-4xl md:text-6xl font-black mb-10 text-slate-900 tracking-tighter leading-tight pb-4">
                Ready to Scale Your <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-slate-900 italic px-4 pb-4 inline-block -mx-4 -mb-4">Digital Vision?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto font-medium">
                Our lead architects are ready for a technical deep-dive. Schedule your engineering consultation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link to="/contact" className="bg-slate-900 text-white hover:bg-blue-600 hover:text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-3xl hover:-translate-y-2">
                  Talk to an Expert
                </Link>
                <button className="bg-white shadow-sm hover:shadow-md border-slate-200 hover:bg-slate-50 text-slate-900 px-12 py-6 rounded-2xl font-black text-xl border border-slate-300 hover:-translate-y-2">
                  Architecture Audit
                </button>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>
      {/* END: Elite Guard CTA */}
    </div>
  );
}
