import { Link } from 'react-router-dom';

export default function Cybersecurity() {
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
                Enterprise Security
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Cybersecurity <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Solutions</span>
              </h1>
              
              <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Fortify your digital assets with advanced threat intelligence, real-time monitoring, and proactive defense strategies designed for modern enterprises.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Request a Quote <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <button className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">play_circle</span> Watch Overview
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
                <img className="w-full h-full object-cover mix-blend-overlay opacity-80" data-alt="Cybersecurity digital shield and abstract data lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH2pDfl4t2S4UNs6Ri2qCh4mOwORD9_fZ0h8BFOOX7qBUmtvwkAlfbZBUeglJRSg-27BLPCELYLqbCM6ywpq6L0EvmUo4SArcGVwMi5rHF9qLt132RksyD_0SFq7U4CwnP6Rnm9nGDidK7mThi9uO5_LkClAdHWlVKtFCkfBpr8fc23N8h6mhqGMMnclzxcOZ9KQzJB-ZGxO_HPthVL5GqcBzbGKGfzRlt8MPlPZqK6eo4tB2JGa5xyeVtLYOeiQrumFdOoDUkyIQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative UI elements */}
              <div className="absolute top-6 left-6 bg-white p-4 rounded-xl border border-slate-200 shadow-lg z-20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">System Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview - Bento Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Service Overview</h2>
            <div className="w-20 h-1 bg-blue-500"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">
            <div className="md:col-span-2 lg:col-span-8 glass-card p-8 rounded-3xl glow-border transition-all">
              <span className="material-symbols-outlined text-blue-600 text-4xl mb-6">visibility</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Real-time Threat Monitoring</h3>
              <p className="text-slate-600 leading-relaxed">Continuous surveillance of your network architecture to detect and neutralize anomalies before they escalate into breaches. Our SOC operates 24/7/365 to ensure total visibility across your ecosystem.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-4 glass-card p-8 rounded-3xl glow-border transition-all">
              <span className="material-symbols-outlined text-blue-600 text-4xl mb-6">lock_reset</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Data Recovery</h3>
              <p className="text-slate-600 leading-relaxed">Encrypted backup solutions and disaster recovery protocols that keep your business running.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-4 glass-card p-8 rounded-3xl glow-border transition-all">
              <span className="material-symbols-outlined text-blue-600 text-4xl mb-6">security</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Compliance</h3>
              <p className="text-slate-600 leading-relaxed">Stay ahead of regulatory requirements including SOC2, GDPR, and HIPAA with our automated compliance auditing tools.</p>
            </div>
            <div className="md:col-span-2 lg:col-span-8 glass-card p-8 rounded-3xl glow-border transition-all flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-blue-600 text-4xl mb-6">hub</span>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Endpoint Protection</h3>
                <p className="text-slate-600 leading-relaxed">Securing every device that connects to your network, from mobile units to IoT devices, using next-gen AI firewall technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <img className="rounded-3xl shadow-2xl border border-slate-200" data-alt="High tech server room with blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL86FQQFxOXbz2zdx8JPfOOq4kfWLwwvyB9NqiyUujW-kCWpmdk8TAuhY6RHDUq1jKoUOYFq7T6EuBE0WJhxtf1twZfgUhCyOX9_NGehXIRg8f25wQnJXRKOqTIXb77nn8eelaYTn4trlXHbI172OURl7v2bE0rg9duHnqYxovmIYCtK7_snED1b3go1usS7HabtmEGZrso1pWVovkkMIq8ZU_ixakNqF3DEhKxEB5yZUPjbLRPGRgimE9TDy0iZtQBcYgzpcHyJk" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">Why Choose <span className="text-blue-600">SkillSage</span> Security?</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 text-xl">check</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Zero-Trust Architecture</h4>
                  <p className="text-slate-600">Implement a security model that never trusts and always verifies every access request.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 text-xl">check</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">AI-Powered Detection</h4>
                  <p className="text-slate-600">Leverage machine learning to identify polymorphic malware and zero-day threats.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 text-xl">check</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Rapid Incident Response</h4>
                  <p className="text-slate-600">Reduce dwell time with our automated response playbooks that isolate threats in seconds.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Methodology</h2>
          <p className="text-slate-600">How we secure your enterprise in four phases</p>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative grid md:grid-cols-4 gap-12">
            {/* Process Step 1 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-xl font-bold text-blue-600">01</span>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Discovery</h4>
              <p className="text-sm text-slate-600">Full audit of your current digital infrastructure and vulnerabilities.</p>
            </div>
            {/* Process Step 2 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-xl font-bold text-blue-600">02</span>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Strategy</h4>
              <p className="text-sm text-slate-600">Designing a custom-tailored security roadmap and architecture.</p>
            </div>
            {/* Process Step 3 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-xl font-bold text-blue-600">03</span>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Deployment</h4>
              <p className="text-sm text-slate-600">Seamless integration of tools and security protocols across systems.</p>
            </div>
            {/* Process Step 4 */}
            <div className="relative text-center">
              <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-xl font-bold text-blue-600">04</span>
              </div>
              <h4 className="text-lg font-bold mb-3 text-slate-900">Maintenance</h4>
              <p className="text-sm text-slate-600">Continuous 24/7 monitoring, updates, and periodic security drills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Case Studies</h2>
              <p className="text-slate-600">Real-world impact of our security solutions</p>
            </div>
            <button className="text-blue-600 font-bold border-b border-blue-600 pb-1">View All Projects</button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 relative aspect-[16/9]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Blue glowing server farm connectivity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTeCxK_t1DkMww7NwnHJdHCuUv1nw3fDsrwRKDxxS2CTz9LSWjEvdLqZhMS7ucNY_cyOM0z2b7HKZ7JaJnolzfrxJSHStlhQxRIOLYGWrwFdN0KHbk-bgt4ICwU_1Tp_ZWvkIaLKeB2yWDeVHnxDaflVVZcn5YkhV-lYGWK51i_vC8_uExoY3iseW43KTlNC-Kvx3n62P48umO_td6rPEeG-V7GG-H5wl5WPnZD0mEHzSBQCpTtb2wUlPvizA3BDBVzQAG2p7uf4" />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold">Read Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Global FinTech Security Migration</h3>
                  <p className="text-slate-600">Implemented Zero-Trust for a multi-national banking network.</p>
                </div>
                <span className="text-blue-600 font-mono text-sm">2023</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 relative aspect-[16/9]">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Abstract secure digital vault icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFcr_4iMPcmHWFzM0huYxgXypqjI_XtaXWKcSevCUmp2iDSIPMI8U2GLXrG2zo1raAFFd7k5pp8qa3LrZUCj50jgQ409Y5hk0jBaJER8Uh9kmNtP1veE8TXkzsMmsufQgY9S_8FLt-zGPw5_eIGx61v924cwfV67YLX170nhPsG0lgK19M-6JkhUvWudZcGxI5qycNzibgnSmIdsrrWDAkec29rlHOoxT-C9Hf9VOeg2ziMXQG2AEfGXY763R4QXklBRTP3O51HUk" />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold">Read Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">E-commerce Data Breach Prevention</h3>
                  <p className="text-slate-600">Eliminated critical vulnerabilities for a high-traffic retailer.</p>
                </div>
                <span className="text-blue-600 font-mono text-sm">2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="glass-card rounded-2xl p-6 group open:border-blue-600/50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg list-none text-slate-900">
                How fast can you respond to a security incident?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-900">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our average detection-to-containment time is under 15 minutes. Our automated response platform begins isolation protocols immediately upon threat confirmation.
              </p>
            </details>
            <details className="glass-card rounded-2xl p-6 group open:border-blue-600/50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg list-none text-slate-900">
                Do you provide services for small businesses?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-900">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Yes, we offer scalable solutions that range from basic managed firewall services for SMBs to full-scale SOC-as-a-service for global enterprises.
              </p>
            </details>
            <details className="glass-card rounded-2xl p-6 group open:border-blue-600/50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg list-none text-slate-900">
                How does SkillSage handle data privacy?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-slate-900">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are fully GDPR and SOC2 compliant. All internal data handling follows strict encryption protocols, and we never have access to your raw customer data.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 -z-10"></div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-900">Ready to secure your future?</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Join 200+ enterprise clients who trust SkillSage for their end-to-end cybersecurity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl inline-block">
                Get Started Now
              </Link>
              <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
