import { useParams, Navigate, Link } from 'react-router-dom';
import coursesData from '../data/coursesData';

export default function CourseTemplate() {
  const { slug } = useParams();
  const course = coursesData[slug];

  if (!course) {
    return <Navigate to="/training" replace />;
  }

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-600 opacity-20 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {course.badge}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                {course.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  {course.title.split(' ').slice(-1)}
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 text-sm">schedule</span>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 text-sm">signal_cellular_alt</span>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{course.level}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 text-sm">language</span>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{course.language}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Enroll Now - {course.price} <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                <img className="w-full h-full object-cover object-top" src={course.image} alt={course.title} />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl border border-slate-200 z-30 shadow-lg text-center hidden sm:block">
                <p className="text-slate-900 text-lg font-extrabold tracking-tight">Join <span className="text-blue-600">{course.enrolled}</span> professionals</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">Already enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-bold text-slate-900 mb-4">Course Overview</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">verified</span>
                What You Will Learn
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {course.learningOutcomes.map((outcome, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                    <p className="text-slate-700 text-sm leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-blue-600/20 text-6xl">list_alt</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Prerequisites</h3>
              <ul className="space-y-4">
                {course.prerequisites.map((req, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
          </div>
          <div className="space-y-4">
            {course.curriculum.map((mod, i) => (
              <div key={i} className={`${mod.active ? 'bg-blue-600/5 border border-blue-600/30 electric-glow' : 'glass-card border border-slate-200'} rounded-2xl overflow-hidden transition-all hover:bg-white/[0.05]`}>
                <button className="w-full flex items-center justify-between p-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${mod.active ? 'bg-blue-600 text-white' : 'bg-blue-600/10 text-blue-600'}`}>0{i + 1}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{mod.title}</h4>
                      <p className={`text-xs uppercase tracking-widest mt-1 ${mod.active ? 'text-blue-500' : 'text-slate-500'}`}>{mod.modules} Modules • {mod.hours} Hours</p>
                    </div>
                  </div>
                  <span className={`material-symbols-outlined ${mod.active ? 'text-blue-500' : 'text-slate-600'}`}>{mod.active ? 'expand_less' : 'expand_more'}</span>
                </button>
                {mod.active && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="space-y-3 pl-14">
                      {mod.content.map((point, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm text-slate-700 p-3 rounded-lg bg-white border border-slate-200">
                          <span>{point}</span>
                          <span className="material-symbols-outlined text-xs">play_circle</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Ready to advance your skills?</h2>
              <p className="text-slate-600 mb-8 max-w-xl mx-auto">Enroll now to secure your spot or give us a call if you have any questions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 electric-glow">
                  Join Course <span className="material-symbols-outlined text-sm">school</span>
                </button>
                <Link to="/contact" className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-blue-600 text-sm">call</span> Give Us a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
