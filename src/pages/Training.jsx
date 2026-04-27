import { Link } from 'react-router-dom';
import categoriesData from '../data/categoriesData';

export default function Training() {
  return (
    <div className="pb-24">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12" data-purpose="hero-section">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Empowering Your IT Career
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Professional Technology <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Training Programs</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master in-demand technologies with industry-focused training. Hands-on experience guided by expert consultants.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                View All Courses <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                Corporate Training
              </button>
            </div>
            
            <div className="flex justify-center gap-4 mt-12 text-slate-500">
              <span className="material-symbols-outlined text-4xl animate-bounce">keyboard_arrow_down</span>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories Grid */}
      <section className="py-32 bg-slate-50" data-purpose="categories-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Training Categories</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-xl mx-auto">Explore our comprehensive list of certification paths and skill sets tailored for the modern digital landscape.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(categoriesData).map(([slug, cat]) => (
              <Link key={slug} to={`/training/category/${slug}`} className="bg-white p-10 rounded-3xl group flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-xl shadow-sm border border-slate-200 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-all`}></div>
                <div className={`w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <span className={`material-symbols-outlined text-3xl font-bold text-blue-600`}>{cat.icon}</span>
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">{cat.title}</h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed line-clamp-2">{cat.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-32" data-purpose="featured-courses">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Featured <span className="text-blue-600">Courses</span></h2>
              <p className="text-slate-600 text-lg">Our most popular industry-standard certification courses, designed for rapid career advancement.</p>
            </div>
            <Link className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 text-lg transition-colors" to="/training">
              View All Programs
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Generative AI Masterclass */}
            <article className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-200 transition-all flex flex-col group h-full">
              <div className="h-56 bg-blue-50 p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-indigo-50"></div>
                <span className="material-symbols-outlined text-7xl text-blue-600">psychology</span>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1 bg-blue-100 text-blue-700 text-[10px] font-black rounded-full border border-blue-200 uppercase tracking-widest">Advanced</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">40 Hours</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                  <Link to="/training/generative-ai-masterclass">Generative AI Masterclass</Link>
                </h3>
                <p className="text-slate-600 text-sm mb-10 flex-grow leading-relaxed">Deep dive into LLMs, prompt engineering, and building AI-powered applications for business.</p>
                <Link to="/training/generative-ai-masterclass" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded-xl transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2">
                   Enroll Now <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </Link>
              </div>
            </article>

             {/* AWS Solutions Architect */}
            <article className="glass-card border border-slate-200 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all flex flex-col group h-full">
              <div className="h-56 bg-orange-500/5 p-12 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-brand-highlight/10"></div>
                 <span className="material-symbols-outlined text-7xl text-orange-400 animate-pulse">cloud</span>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-black rounded-full border border-orange-500/20 uppercase tracking-widest">Intermediate</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">32 Hours</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-orange-400 transition-colors line-clamp-2">
                  <Link to="/training/aws-solutions-architect">AWS Solutions Architect</Link>
                </h3>
                <p className="text-slate-600 text-sm mb-10 flex-grow leading-relaxed">Comprehensive training for AWS Certified Solutions Architect Associate (SAA-C03).</p>
                <Link to="/training/aws-solutions-architect" className="w-full py-4 bg-white hover:bg-orange-500 text-slate-900 font-bold text-center rounded-xl transition-all border border-slate-200 hover:border-transparent flex items-center justify-center gap-2">
                   Enroll Now <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </Link>
              </div>
            </article>

            {/* Kubernetes Administrator */}
            <article className="glass-card border border-slate-200 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all flex flex-col group h-full">
               <div className="h-56 bg-red-500/5 p-12 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-brand-highlight/10"></div>
                 <span className="material-symbols-outlined text-7xl text-red-500">grid_view</span>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1 bg-red-500/10 text-red-400 text-[10px] font-black rounded-full border border-red-500/20 uppercase tracking-widest">Professional</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">48 Hours</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-red-500 transition-colors line-clamp-2">
                  <Link to="/training/kubernetes-admin">Kubernetes Administrator (CKA)</Link>
                </h3>
                <p className="text-slate-600 text-sm mb-10 flex-grow leading-relaxed">Advanced container orchestration, cluster management, and production-ready deployments.</p>
                <Link to="/training/kubernetes-admin" className="w-full py-4 bg-white hover:bg-red-500 text-slate-900 font-bold text-center rounded-xl transition-all border border-slate-200 hover:border-transparent flex items-center justify-center gap-2">
                   Enroll Now <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to boost your skills?</h2>
              <p className="text-white/90 mb-12 max-w-xl mx-auto text-lg md:text-xl">Get monthly updates on upcoming batches, early-bird discounts, and free tech webinars directly to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input className="flex-grow rounded-xl border-none bg-white/10 text-white placeholder-white/60 focus:ring-4 focus:ring-white/20 py-5 px-8 outline-none backdrop-blur-md" placeholder="Enter your work email" type="email" />
                <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl shadow-blue-900/20" type="submit">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
