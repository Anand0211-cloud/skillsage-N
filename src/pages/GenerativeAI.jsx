import { Link } from 'react-router-dom';

export default function GenerativeAI() {
  return (
    <div className="pb-24">
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
                Advanced Specialization
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Generative AI <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Masterclass</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Master the frontier of artificial intelligence. Build, deploy, and scale Large Language Models and Diffusion systems from scratch.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 text-sm">schedule</span>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">40 Hours</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 text-sm">signal_cellular_alt</span>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Advanced</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="material-symbols-outlined text-blue-500 text-sm">language</span>
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">English</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Enroll Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                  Download Syllabus
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
                <img className="w-full h-full object-cover object-top" data-alt="Futuristic glowing AI neural network visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF2PI5jmIByW9lEeeU91EmmJloyFRwnnXTIDrgBkY0W9GUynz191oLlNzj89gqzNAjpgtHdTDJeiDDt1C8sireCryIat85RFJVBsPCYLc2uxf7u9wnDr9qMjgrxua8iFcxFv-hSbfSO9I0uDesRzD4lacJI4EVhsqWOtVlINKIm7X8BmIspaReMCRClQUSWKxDriJm4nwAqltQw315U4Wq5-nJtaW-B829fEp_nWPIQgHsWPQxbSsLTmTrLSHcHRE22m1ecIiITFs" />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl border border-slate-200 z-30 shadow-lg text-center hidden sm:block">
                <div className="flex items-center justify-center mb-2">
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tAPx6NafG7Q9i-R_knetnqymuFKgTxVai4WafHr4wMzxyXO1uq14PNOwdXTrg01Y0HMwEr-haD3JxRZ99egXyzF3OfM9vbOexoXMinEYgoeSbF4u4R1GkAtKZt8xAN7il6zyi7zkgz-gPvw4rzuzFrT3dZ0nx2NVTJ6_E1HqC0ClhBk08-ZfApn023TppQWbwaqU3KeTOSQHcQ-Ti6tMWr1bFy2MFdPgj4LBaUzMXx0pposbHHjyfgwym0idF4mkCSdVTRSKV9E" alt="" />
                    <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6plYmphplZ_RT9HmpkvU0PEVXwc05EVLFDEJsEElY4ZYmCOKbS2ASBCVrPFmci1K62Izsd56ySDFcSrFHNYR-NCuGW6SzgtKyQKNby70g7nh5_cespkToGqtNfZNJIAPMNyByNTgmofJhw2nJ3KCLrY736ArXRzNt_Jz-whj0Y0rVnNZsMfhBIPCzrwPj88qFIBm6xZls2piJYIFSOxFQWMJuT5SV8n20yAUr5fz8UAfNP8wZz2CDfcV3-KPZx2aUkNjuOChTDNI" alt="" />
                    <img className="w-6 h-6 rounded-full border border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQo9ULGIhjtfoqrOacKvvQM38qRJAUrJFSUU7TgWFUilwG_EOkvVkWvitM-hajs-eJhXVM347EbP8pGkY82z7Fu9w22Pf7Bp4FEGpVKkcJ5gL4TcmBpPLGkVSd7qymHxBqd-CuVOwxQcmMzv4BaMid4d6ZfEEtO3vXOH451tyoCSc2CuXFy9lVyJB-xXVGMeX377uWDXus8Idwhuuixp_MnDbjLrnvL3fhxCLg66uepkYMVwwUSc5yTdAuJTadQ5k0j8OIRKRNhbM" alt="" />
                  </div>
                </div>
                <p className="text-slate-900 text-sm font-extrabold tracking-tight">1,200+ professionals</p>
                <p className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mt-1">Already enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Overview Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-sans text-3xl font-bold text-slate-900 mb-4">Course Overview</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* What You Will Learn Card */}
            <div className="md:col-span-2 glass-card rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">verified</span>
                What You Will Learn
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                  <p className="text-slate-700 text-sm leading-relaxed">Architecture of Transformer models and attention mechanisms.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                  <p className="text-slate-700 text-sm leading-relaxed">Fine-tuning LLMs using LoRA, QLoRA, and PEFT techniques.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                  <p className="text-slate-700 text-sm leading-relaxed">Implementing Retrieval Augmented Generation (RAG) pipelines.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                  <p className="text-slate-700 text-sm leading-relaxed">Diffusion model mathematics and image generation workflows.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                  <p className="text-slate-700 text-sm leading-relaxed">Deploying AI agents with LangChain and AutoGPT frameworks.</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-blue-600 shrink-0">check_circle</span>
                  <p className="text-slate-700 text-sm leading-relaxed">Ethical AI practices and model bias mitigation strategies.</p>
                </div>
              </div>
            </div>
            {/* Prerequisites Card */}
            <div className="glass-card rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-blue-600/20 text-6xl">list_alt</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Prerequisites</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  Proficiency in Python (NumPy, PyTorch)
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  Strong Linear Algebra &amp; Calculus
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  Understanding of Deep Learning basics
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                  Familiarity with API integrations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section (Accordion-Style) */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-bold text-slate-900 mb-4">Course Curriculum</h2>
            <p className="text-slate-600">A comprehensive journey through generative systems</p>
          </div>
          <div className="space-y-4">
            {/* Module 1 */}
            <div className="glass-card border border-slate-200 rounded-2xl overflow-hidden transition-all hover:bg-white/[0.05]">
              <button className="w-full flex items-center justify-between p-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">01</div>
                  <div>
                    <h4 className="font-bold text-slate-900">The Transformer Revolution</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">4 Modules • 8 Hours</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-600">expand_more</span>
              </button>
            </div>
            {/* Module 2 */}
            <div className="bg-blue-600/5 border border-blue-600/30 rounded-2xl overflow-hidden shadow-lg electric-glow">
              <button className="w-full flex items-center justify-between p-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">02</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Large Language Models (LLMs)</h4>
                    <p className="text-xs text-blue-500 uppercase tracking-widest mt-1">Currently Viewing • 12 Hours</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-blue-500">expand_less</span>
              </button>
              <div className="px-6 pb-6 pt-2">
                <div className="space-y-3 pl-14">
                  <div className="flex items-center justify-between text-sm text-slate-700 p-3 rounded-lg bg-white border border-slate-200">
                    <span>Tokenization &amp; Embedding Strategies</span>
                    <span className="material-symbols-outlined text-xs">play_circle</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-700 p-3 rounded-lg bg-white border border-slate-200">
                    <span>Fine-tuning with PEFT &amp; LoRA</span>
                    <span className="material-symbols-outlined text-xs">play_circle</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-700 p-3 rounded-lg bg-white border border-slate-200">
                    <span>RLHF: Reinforcement Learning from Human Feedback</span>
                    <span className="material-symbols-outlined text-xs">lock</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Module 3 */}
            <div className="glass-card border border-slate-200 rounded-2xl overflow-hidden">
              <button className="w-full flex items-center justify-between p-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">03</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Visual Synthesis &amp; Diffusion</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">6 Modules • 10 Hours</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-600">expand_more</span>
              </button>
            </div>
            {/* Module 4 */}
            <div className="glass-card border border-slate-200 rounded-2xl overflow-hidden">
              <button className="w-full flex items-center justify-between p-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">04</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Deployment &amp; AI Agents</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">5 Modules • 10 Hours</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-600">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/5 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white mb-4">Ready to advance your skills?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">Enroll now to secure your spot or give us a call if you have any questions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 electric-glow">
                  Join Course <span className="material-symbols-outlined text-sm">school</span>
                </button>
                <Link to="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 shadow-sm rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-blue-400 text-sm">call</span> Give Us a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
