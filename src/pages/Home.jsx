import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        {/* Subtle grid background for a tech/professional feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              SkillSage Enterprise 2.0 is live
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Transform your business <br className="hidden md:block" />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">intelligent solutions.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We provide expert consultancy, robust software development, and immersive training to scale your enterprise capabilities and drive meaningful innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Schedule Consultation <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <Link 
                to="/services"
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                Explore Services
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500 text-base">verified</span> Trusted by 500+ enterprises
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500 text-base">star</span> 4.9/5 Average Rating
              </div>
            </div>
          </div>
          
          {/* Dashboard/Product Preview */}
          <div className="mt-10 relative mx-auto max-w-4xl lg:max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden aspect-[16/7] md:aspect-[21/9]">
              {/* Browser/Window Header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100 bg-slate-50">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              {/* Image Content */}
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="SkillSage Dashboard Preview" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>
      
      {/* ── PARTNERS ── */}
      <section className="py-16 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="text-2xl font-black tracking-tighter">Acme Corp</div>
             <div className="text-2xl font-black tracking-widest">GLOBAL</div>
             <div className="text-2xl font-black italic">TechFlow</div>
             <div className="text-2xl font-black tracking-tight">Vercel</div>
             <div className="text-2xl font-black uppercase">Stripe</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES (Asymmetric Layout) ── */}
      <section className="py-32 bg-white px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-slate-900">Enterprise-Grade <br className="hidden md:block"/> <span className="text-blue-600">IT Services.</span></h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Comprehensive software development, front-end IT, and digital marketing solutions to accelerate your business growth.
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-3xl">code</span>
                </div>
                <h3 className="text-4xl font-black tracking-tight mb-6">Software & IT Solutions</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                  Build robust front-end interfaces and scalable backend systems. We deliver custom software development tailored to your enterprise requirements.
                </p>
                <Link to="/services/software-development" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Explore IT Services <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Software Development" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-white font-bold text-sm tracking-widest uppercase">Scalable Architecture</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 (Reversed) */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-blue-400/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-[1.02]">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Marketing Analytics" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 right-8">
                    <div className="px-4 py-2 bg-blue-600/80 backdrop-blur-md rounded-lg border border-white/30 text-white font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> ROI Tracking
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-3xl">trending_up</span>
                </div>
                <h3 className="text-4xl font-black tracking-tight mb-6">Digital Marketing</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                  Drive exponential growth with data-driven marketing strategies, SEO optimization, and high-conversion digital campaigns.
                </p>
                <Link to="/services/website-development" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  View Marketing Solutions <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAINING (Visual Upgrade) ── */}
      <section className="py-32 bg-slate-50 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
                SkillSage Academy
              </div>
              <h2 className="text-5xl font-black tracking-tighter mb-4 text-slate-900">Elite Technical <span className="text-blue-600">Training.</span></h2>
              <p className="text-xl text-slate-600 font-medium max-w-2xl">Intensive, high-fidelity technical training programs designed for modern engineering teams.</p>
            </div>
            <Link to="/training" className="hidden md:inline-flex items-center gap-2 text-blue-600 font-bold bg-white border border-slate-200 px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all">
              View All Courses <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50">
              <div className="col-span-2 hidden md:block">Track ID</div>
              <div className="col-span-12 md:col-span-4">Program</div>
              <div className="col-span-12 md:col-span-4">Focus Area</div>
              <div className="col-span-12 md:col-span-2 text-right">Action</div>
            </div>
            
            {[
              { id: 'AI-ENG', title: 'Generative AI Engineering', desc: 'LLMs, RAG Architectures, Vector DBs', link: '/training/generative-ai-masterclass' },
              { id: 'SEC-OPS', title: 'Offensive Cybersecurity', desc: 'Pen-testing, Threat Hunting, Zero Trust', link: '/training' },
              { id: 'CLD-ARC', title: 'Cloud Native Architecture', desc: 'Kubernetes, Serverless, Terraform', link: '/training' },
              { id: 'DAT-SCI', title: 'Data Intelligence', desc: 'Data Warehousing, Predictive Analytics', link: '/training' }
            ].map((course, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 p-8 border-b border-slate-100 items-center hover:bg-blue-50/50 transition-colors group">
                <div className="col-span-12 md:col-span-2 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-sm">terminal</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">{course.id}</span>
                </div>
                <div className="col-span-12 md:col-span-4 text-xl font-black text-slate-900">{course.title}</div>
                <div className="col-span-12 md:col-span-4 text-sm text-slate-600 font-medium">{course.desc}</div>
                <div className="col-span-12 md:col-span-2 md:text-right mt-4 md:mt-0">
                  <Link to={course.link} className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-900 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all w-full md:w-auto shadow-sm">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTANCY (Dark Mode Contrast) ── */}
      <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Consultancy
              </div>
              <h2 className="text-5xl font-black tracking-tighter mb-6">Strategic <br />Advisory</h2>
              <p className="text-xl text-slate-400 mb-10 font-medium">
                Executive-level guidance to align your technical infrastructure with your global business objectives.
              </p>
              <button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
                Book Consultation <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white">memory</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">AI Integration</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">Embed intelligent automation across your enterprise stack to drive measurable ROI.</p>
                </div>
                <div className="p-8 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white">cloud_sync</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Cloud Strategy</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">End-to-end multi-cloud orchestration and legacy modernization roadmaps.</p>
                </div>
                <div className="p-8 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white">verified_user</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Security Audits</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">Comprehensive risk assessment and compliance alignment for enterprise networks.</p>
                </div>
                <div className="p-8 border border-slate-800 rounded-3xl bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 transition-all group">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-blue-400 group-hover:text-white">database</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Data Engineering</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">Architecting scalable data pipelines and centralized data lakes for real-time analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHITE & BLUE GRADIENT CTA ── */}
      <section className="py-40 relative px-6 text-center overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white z-0"></div>
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">build?</span>
          </h2>
          <p className="text-2xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
            Join the industry leaders transforming their digital infrastructure with SkillSage.
          </p>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-6 rounded-full font-black text-xl transition-transform hover:scale-105 shadow-2xl shadow-blue-600/30 inline-flex items-center gap-3 cursor-pointer"
          >
            Start Your Project <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
