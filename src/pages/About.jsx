import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* BEGIN: Professional Hero */}
      {/* BEGIN: Professional Hero */}
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
              Global Strategy & Intelligence
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Architecting the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Next Tech Era</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We bridge the delta between human ingenuity and technological acceleration. At Skill Sage, we don't just solve current infrastructure problems—we prepare you for the next decade of innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">12+</div>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-widest">Years of Market Alpha</p>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-slate-900 mb-2">480+</div>
                <p className="text-xs text-slate-500 uppercase font-semibold tracking-widest">Enterprise Successes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: Professional Hero */}

      {/* BEGIN: Strategic Core Values */}
      <section className="py-32 relative bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Skill Sage DNA</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Our Strategic <span className="text-brand-highlight">Philosophy</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'High-Fidelity Engineering', 
                desc: 'Every architecture we build is audited for peak performance, zero-trust security, and infinite horizontal scalability.',
                icon: 'architecture' 
              },
              { 
                title: 'Iterative Innovation', 
                desc: 'We operate on a continuous deployment model, ensuring that our clients are always at the edge of technological possibility.',
                icon: 'auto_mode' 
              },
              { 
                title: 'Radical Integrity', 
                desc: 'Transparent reporting and deep-technical consulting aren\'t just options; they are the baseline of our client trust.',
                icon: 'gavel' 
              }
            ].map((value, idx) => (
              <div key={idx} className="glass-artifact p-12 rounded-[3rem] group border border-slate-200 hover:border-brand-accent/20 transition-all duration-700">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 group-hover:bg-brand-accent transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl text-brand-accent group-hover:text-slate-900">{value.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Strategic Core Values */}

      {/* BEGIN: Engineered Journey */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Evolution</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Our Strategic <span className="text-brand-highlight">Journey</span></h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Connector Line */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-brand-accent via-brand-electric to-transparent opacity-20"></div>
            
            {[
              { year: '2014', title: 'Founding Vision', desc: 'SkillSage established as an elite consultancy for enterprise IT architecture.' },
              { year: '2018', title: 'Intelligence Hub', desc: 'Launch of our first state-of-the-art training laboratory for hands-on technical labs.' },
              { year: '2022', title: 'Cloud-First Scale', desc: 'Migration of 200+ enterprise workloads to secure, hybrid-cloud environments.' },
              { year: '2024', title: 'Global Operations', desc: 'Expansion across 3 continents with 500+ active enterprise success stories.' }
            ].map((milestone, idx) => (
              <div key={idx} className={`relative mb-24 flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full md:text-left">
                  <div className={`glass-artifact p-8 rounded-[2rem] border border-slate-200 hover:border-brand-accent/30 transition-all ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-3xl font-black text-brand-accent mb-2 block">{milestone.year}</span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-brand-accent shadow-[0_0_15px_#3b82f6] z-10"></div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Engineered Journey */}

      {/* BEGIN: Elite Leadership */}
      <section className="py-32 relative bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-brand-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Visionaries</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900">Elite Executive <span className="text-brand-highlight">Leadership</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: 'Marcus Sterling', role: 'CEO & Founder', bio: 'Strategic architect with 15+ years in global infrastructure operations.', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' },
              { name: 'Elena Rodriguez', role: 'CTO', bio: 'Cloud-native pioneer specializing in ultra-secure, distributed ecosystems.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
              { name: 'David Chen', role: 'Head of Training', bio: 'Curriculum engineer focused on high-fidelity, lab-based technical mastery.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
              { name: 'Sarah Jenkins', role: 'Director Ops', bio: 'Operational excellence lead managing multi-continent scale delivery.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' }
            ].map((leader, idx) => (
              <div key={idx} className="group relative">
                <div className="relative h-[450px] rounded-[3rem] overflow-hidden border border-slate-200 group-hover:border-brand-accent/50 transition-all duration-700">
                  <img alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" src={`${leader.img}?auto=format&fit=crop&q=80&w=600`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-2xl font-black text-slate-900 mb-1">{leader.name}</h4>
                    <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">{leader.role}</p>
                    <p className="text-sm text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Elite Leadership */}

      {/* BEGIN: Professional CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden text-center border border-slate-200 group">
            <div className="absolute inset-0 bg-brand-accent/5 opacity-50 backdrop-blur-3xl"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-5xl text-brand-highlight mb-6 animate-floating">diversity_3</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter leading-tight pb-4">
                Partner with the <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-highlight to-slate-900 italic px-4 pb-4 inline-block -mx-4 -mb-4">Elite Guard</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
                Join 500+ enterprises who have secured their digital future through our engineered strategies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-slate-900 text-white hover:bg-brand-electric hover:text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-3xl hover:-translate-y-2">
                  Initiate Consult
                </Link>
                <Link to="/training" className="glass-artifact hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg border border-slate-300 hover:-translate-y-2">
                  Explore Academy
                </Link>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>
      {/* END: Professional CTA */}
    </>
  );
}
