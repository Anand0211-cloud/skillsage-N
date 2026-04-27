import { Link } from 'react-router-dom';

const primaryServices = [
  {
    title: 'AI in Enterprises',
    slug: 'ai-in-enterprises',
    desc: 'Embed intelligent automation and predictive analytics across your enterprise stack. From NLP-powered workflows to computer vision pipelines, we architect AI systems that drive measurable ROI.',
    icon: 'psychology',
    color: 'blue-600',
    hover: 'blue-500',
    stats: '3x',
    statsLabel: 'Avg. Efficiency Gain'
  },
  {
    title: 'Cloud Management',
    slug: 'cloud-management',
    desc: 'End-to-end multi-cloud orchestration across AWS, Azure, and GCP. We optimize workloads, automate provisioning, and ensure 99.99% uptime with intelligent cost governance.',
    icon: 'cloud_sync',
    color: 'indigo-500',
    hover: 'indigo-400',
    stats: '40%',
    statsLabel: 'Cost Reduction'
  },
  {
    title: 'Infrastructure Consulting',
    slug: 'infrastructure-consulting',
    desc: 'Design, deploy, and manage resilient IT infrastructure — from zero-trust networks and hybrid-cloud environments to edge computing and disaster recovery frameworks.',
    icon: 'dns',
    color: 'blue-500',
    hover: 'blue-400',
    stats: '99.99%',
    statsLabel: 'Uptime SLA'
  },
  {
    title: 'Enterprise Resource Planning',
    slug: 'enterprise-resource-planning',
    desc: 'Strategic ERP implementation and migration — SAP, Oracle, Microsoft Dynamics. We streamline operations, unify data silos, and accelerate digital transformation at scale.',
    icon: 'account_tree',
    color: 'purple-500',
    hover: 'purple-400',
    stats: '60%',
    statsLabel: 'Process Optimization'
  },
  {
    title: 'AI-Driven Strategic Planning',
    slug: 'ai-strategic-planning',
    desc: 'Leverage machine learning models and predictive intelligence for data-driven corporate strategy. From market forecasting to resource allocation — plan smarter, execute faster.',
    icon: 'smart_toy',
    color: 'emerald-500',
    hover: 'emerald-400',
    stats: '85%',
    statsLabel: 'Forecast Accuracy'
  }
];

const additionalServices = [
  {
    title: 'Cybersecurity Advisory',
    slug: 'cybersecurity-advisory',
    desc: 'Comprehensive threat assessments, penetration testing, and zero-trust architecture design to fortify your digital perimeter.',
    icon: 'shield_lock',
    gradient: 'from-rose-500/20 to-orange-500/20',
    accent: 'rose-500'
  },
  {
    title: 'Data Analytics & BI',
    slug: 'data-analytics-bi',
    desc: 'Transform raw data into strategic insights with custom dashboards, ETL pipelines, and real-time business intelligence platforms.',
    icon: 'bar_chart',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    accent: 'violet-500'
  },
  {
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    desc: 'Modernize legacy systems, digitize workflows, and build a culture of innovation with our end-to-end transformation roadmaps.',
    icon: 'change_circle',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    accent: 'indigo-500'
  },
  {
    title: 'DevOps & CI/CD',
    slug: 'devops-cicd',
    desc: 'Accelerate delivery with automated pipelines, containerized deployments, and infrastructure-as-code best practices.',
    icon: 'hub',
    gradient: 'from-cyan-500/20 to-teal-500/20',
    accent: 'cyan-500'
  },
  {
    title: 'Compliance & Governance',
    slug: 'compliance-governance',
    desc: 'Navigate complex regulatory landscapes — GDPR, HIPAA, SOC 2, ISO 27001 — with expert compliance consulting and audit preparation.',
    icon: 'verified_user',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    accent: 'amber-500'
  },
  {
    title: 'IT Staff Augmentation',
    slug: 'it-staff-augmentation',
    desc: 'Scale your technical teams on-demand with pre-vetted engineers, architects, and specialists matched to your exact requirements.',
    icon: 'groups',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accent: 'pink-500'
  }
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive assessment of your current landscape, pain points, and strategic objectives.', icon: 'search_insights' },
  { step: '02', title: 'Strategy', desc: 'Custom roadmap design with clear milestones, KPIs, and risk mitigation frameworks.', icon: 'strategy' },
  { step: '03', title: 'Execution', desc: 'Agile implementation with dedicated teams, sprint reviews, and transparent reporting.', icon: 'engineering' },
  { step: '04', title: 'Optimization', desc: 'Continuous monitoring, performance tuning, and iterative improvements post-launch.', icon: 'tune' }
];

export default function Consultancy() {
  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Strategic Consultancy
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Transforming Vision <br className="hidden md:block" />
              Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Enterprise Reality</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We partner with forward-thinking organizations to engineer scalable strategies, optimize complex systems, and unlock transformative growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/contact"
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Book Consultancy Call <span className="material-symbols-outlined text-sm">call</span>
              </Link>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                View All Services
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12 animate-fade-in-up">
              {[
                { value: '500+', label: 'Enterprise Clients' },
                { value: '98%', label: 'Success Rate' },
                { value: '24/7', label: 'Expert Support' },
                { value: '12+', label: 'Years Experience' }
              ].map((stat, idx) => (
                <div key={idx} className="px-6 py-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center min-w-[140px]">
                  <div className="text-xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRIMARY CONSULTANCY SERVICES ─── */}
      <section className="py-32 px-6 relative bg-slate-50" id="core-consultancy">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
              Core Expertise
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Enterprise-Grade <span className="text-blue-600">Consultancy</span></h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Deep-domain expertise across the critical pillars of modern enterprise technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, idx) => {
              // We map our custom colors to actual Tailwind utility classes to ensure they compile properly
              const colorMap = {
                'blue-600': 'text-blue-600 bg-blue-50 border-blue-200 group-hover:border-blue-600',
                'indigo-500': 'text-indigo-600 bg-indigo-50 border-indigo-200 group-hover:border-indigo-500',
                'blue-500': 'text-cyan-600 bg-cyan-50 border-cyan-200 group-hover:border-cyan-500',
                'purple-500': 'text-purple-600 bg-purple-50 border-purple-200 group-hover:border-purple-500',
                'emerald-500': 'text-emerald-600 bg-emerald-50 border-emerald-200 group-hover:border-emerald-500'
              };
              const activeTheme = colorMap[service.color] || colorMap['blue-600'];

              return (
                <Link
                  to={`/consultancy/${service.slug}`}
                  key={idx}
                  className={`group bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${idx >= 3 ? 'lg:col-span-1' : ''} ${idx === 3 ? 'md:col-start-1 lg:col-start-auto' : ''}`}
                >
                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${activeTheme.split(' ')[1]}`}>
                      <span className={`material-symbols-outlined text-3xl ${activeTheme.split(' ')[0]}`}>{service.icon}</span>
                    </div>

                    <h3 className={`text-2xl font-black text-slate-900 mb-4 tracking-tight transition-colors ${activeTheme.split(' ')[0].replace('text-', 'group-hover:text-')}`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">
                      {service.desc}
                    </p>

                    {/* Stat chip */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                      <div>
                        <span className={`text-2xl font-black ${activeTheme.split(' ')[0]}`}>{service.stats}</span>
                        <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest ml-3">{service.statsLabel}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all">
                        <span className="material-symbols-outlined text-sm text-slate-900 group-hover:text-white transition-colors">arrow_forward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Center the last two cards */}
          <style>{`
            @media (min-width: 1024px) {
              #core-consultancy .grid > :nth-child(4) { grid-column-start: 1; }
              #core-consultancy .grid > :nth-child(5) { grid-column-start: 2; }
            }
          `}</style>
        </div>
      </section>

      {/* ─── FEATURED BANNER ─── */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-3xl z-0"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative perspective-1000">
            <div className="absolute -inset-10 bg-blue-400/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 transform transition-transform hover:scale-[1.02] duration-700">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
                alt="Strategic Consultancy Session"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 text-white font-bold text-sm tracking-widest uppercase shadow-lg">Data-Driven Strategy</div>
              </div>
            </div>
          </div>
          <div>
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block">Why SkillSage</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
              Strategy Meets <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Execution Excellence</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              Unlike traditional consulting firms, we don't just deliver slide decks — we embed with your teams, build alongside your engineers, and stay accountable until measurable outcomes are achieved.
            </p>
            <div className="space-y-5">
              {[
                'Dedicated cross-functional consulting squads',
                'Outcome-based engagement models',
                'Post-deployment optimization & monitoring',
                'Industry-certified domain experts'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-sm text-blue-600">check_circle</span>
                  </div>
                  <span className="text-slate-800 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ADDITIONAL CONSULTANCY SERVICES (Dark Mode) ─── */}
      <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden" id="extended-services">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-20 text-center md:text-left justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6 mx-auto md:mx-0">
                Extended Advisory
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Solutions</span></h2>
            </div>
            <p className="text-slate-400 max-w-md text-lg font-medium">Deep-dive consultancy services that cover every dimension of your technology landscape.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, idx) => (
              <Link to={`/consultancy/${service.slug}`} key={idx} className="group relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>

                <div className="relative p-10 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 group-hover:bg-${service.accent} transition-colors duration-500`}>
                    <span className={`material-symbols-outlined text-2xl text-${service.accent} group-hover:text-white transition-colors`}>{service.icon}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow font-medium group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>

                  <div className="mt-8 text-xs font-black text-blue-400 tracking-[0.2em] flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    LEARN MORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONSULTING PROCESS ─── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Pipeline</span>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter">How We <span className="text-blue-600">Deliver</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-slate-100">
              <div className="h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-1000"></div>
            </div>

            {processSteps.map((item, idx) => (
              <div key={idx} className="relative group text-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-blue-600 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all">{item.icon}</span>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-[10px] font-black text-white flex items-center justify-center border-4 border-white group-hover:bg-blue-600 transition-colors">{item.step}</div>
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[220px] mx-auto font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY STATS ─── */}
      <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '$18M+', label: 'Client Revenue Generated', icon: 'trending_up' },
              { value: '200+', label: 'Projects Delivered', icon: 'task_alt' },
              { value: '35+', label: 'Industries Served', icon: 'category' },
              { value: '15+', label: 'Countries Reached', icon: 'public' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <span className="material-symbols-outlined text-blue-600 group-hover:text-white transition-colors">{stat.icon}</span>
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHITE & BLUE CTA ─── */}
      <section className="py-32 relative px-6 text-center overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white z-0"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="material-symbols-outlined text-6xl text-blue-600/20 mb-8 animate-floating">handshake</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-slate-900 leading-tight">
            Ready to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transform?</span>
          </h2>
          <p className="text-2xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
            Let our consultants architect a roadmap tailored to your unique challenges and growth ambitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-6 rounded-full font-black text-xl transition-transform hover:scale-105 shadow-2xl shadow-blue-600/30 inline-flex justify-center items-center gap-3">
              Book Consultancy Call Now <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
