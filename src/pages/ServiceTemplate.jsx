import { useParams, Navigate, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';

export default function ServiceTemplate() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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
                {service.title.split(' ')[0]} Specialist
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                {service.title.split(' ')[0]} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  {service.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                {service.description} We deploy high-fidelity architectures designed to bridge the delta between operational logic and technological dominance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Initiate Architecture <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
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
                <img className="w-full h-full object-cover object-top" src={service.image} alt={service.title} />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl border border-slate-200 z-30 shadow-lg text-center hidden sm:block">
                <p className="text-slate-900 text-2xl font-extrabold tracking-tight">99.9%</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">Reliability SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEGIN: Technical Features Grid */}
      <section className="py-32 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-white shadow-sm p-10 rounded-[2.5rem] border border-slate-200 hover:border-blue-300 transition-all hover:-translate-y-2 group hover:shadow-lg">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 className="text-slate-900 font-black text-lg mb-2 tracking-tight">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Technical Features Grid */}

      {/* BEGIN: Engineered Process */}
      <section className="py-32 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Pipeline</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Technical <span className="text-blue-600">Roadmap</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative text-center md:text-left">
            <div className="hidden md:block absolute top-[5.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            {service.processSteps.map((p, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="w-20 h-20 rounded-[1.5rem] bg-white border-2 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)] flex items-center justify-center mx-auto md:mx-0 mb-8 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-blue-600">bolt</span>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{p.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Engineered Process */}

      {/* BEGIN: Tech Stack */}
      <section className="py-32 relative bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-16 tracking-tighter">Unified <span className="text-blue-600">Tech Stack</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            {service.techStack.map((tech, i) => (
              <div key={i} className="px-10 py-5 rounded-2xl bg-white border border-slate-200 text-blue-600 font-black text-[12px] uppercase tracking-widest shadow-md hover:scale-110 hover:shadow-lg hover:border-blue-200 transition-all cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Tech Stack */}

      {/* BEGIN: Elite Guard CTA */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-white shadow-xl rounded-[3.5rem] p-12 md:p-24 overflow-hidden text-center border border-slate-200 group">
            <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-3xl"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-blue-600 mb-8 animate-floating block">{service.icon}</span>
              <h2 className="text-4xl md:text-6xl font-black mb-10 text-slate-900 tracking-tighter leading-tight pb-2">
                Architect Your <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 italic px-2">Digital Alpha</span>
              </h2>
              <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto font-medium">
                Our lead engineers are ready to deploy your next high-fidelity solution. Initiate your consult today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <Link to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-6 rounded-xl font-black text-xl transition-all shadow-xl hover:-translate-y-2">
                  Initiate Consult
                </Link>
                <Link to="/training" className="bg-white hover:bg-slate-50 text-slate-900 px-12 py-6 rounded-xl font-black text-xl border border-slate-300 hover:-translate-y-2 transition-all shadow-sm">
                  Training Matrix
                </Link>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </section>
      {/* END: Elite Guard CTA */}
    </div>
  );
}
