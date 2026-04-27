export default function Contact() {
  return (
    <>
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
              Contact Us
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Get in <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Touch</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a question about our professional training programs? Our experts are here to help you navigate your learning journey and scale your skills effectively.
            </p>
            
            <div className="flex justify-center gap-4 mt-12 text-slate-500">
              <span className="material-symbols-outlined text-4xl animate-bounce">keyboard_arrow_down</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-brand-accent">mail</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Email us</h3>
                    <p className="text-slate-100/60 mb-2">Our support team is online 24/7.</p>
                    <a className="text-brand-accent font-medium hover:underline" href="mailto:hello@skillsage.com">hello@skillsage.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-brand-accent">phone</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Call us</h3>
                    <p className="text-slate-100/60 mb-2">Mon-Fri from 8am to 5pm.</p>
                    <a className="text-brand-accent font-medium hover:underline" href="tel:+15550000000">+1 (555) 000-0000</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-brand-accent">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-100/60">
                      123 Innovation Drive<br />
                      Silicon Valley, CA 94043
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-brand-accent">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-100/60">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Follow our journey</h3>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-accent transition-colors text-white" href="#">
                    <span className="material-symbols-outlined text-sm">share</span>
                  </a>
                  <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-accent transition-colors text-white" href="#">
                    <span className="material-symbols-outlined text-sm">public</span>
                  </a>
                  <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-brand-accent transition-colors text-white" href="#">
                    <span className="material-symbols-outlined text-sm">hub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Glassmorphism Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 md:p-12 rounded-2xl">
                <form action="#" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-100" htmlFor="name">Name</label>
                      <input className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-slate-100/30 text-slate-900" id="name" placeholder="Your name" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-100" htmlFor="email">Email</label>
                      <input className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-slate-100/30 text-slate-900" id="email" placeholder="you@company.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-100" htmlFor="subject">Subject</label>
                    <input className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-slate-100/30 text-slate-900" id="subject" placeholder="How can we help?" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-100" htmlFor="message">Message</label>
                    <textarea className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all placeholder:text-slate-100/30 resize-none text-slate-900" id="message" placeholder="Tell us about your project..." rows="5"></textarea>
                  </div>
                  <button className="w-full bg-brand-accent hover:bg-brand-highlight text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-brand-accent/20" type="submit">
                    Send Message
                  </button>
                  <p className="text-center text-xs text-slate-100/40 mt-4">
                    By clicking send, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[450px] rounded-3xl overflow-hidden border border-slate-800 grayscale invert opacity-70">
            <img className="w-full h-full object-cover" data-alt="Dark themed minimalist abstract map layout of a city" data-location="Silicon Valley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhEJCtapFxgECIdfu8mM6cxtyTMZ6c1vHPmtSy1D6NUg-A6qTy7K0OHtlot9X49gL7yKl1A23oWuigRJTZ53YxI2GpMoLTpPLgaudc50Nrft0mxldUQQgdzc5FbRYX8j9VNUK6RPUY-0mJusPLJpRf4RgYL_y0ZErvHgt7UDoEugI2kOVF1Z-udSsKAk3e3CtlohcEIIkoAzMsR_D3e7GSSK-dXoM9hJNq6wjFcv8UXAUPyNUjuKrMZGN_VxY60LM7TBtC5l0KvZ4" />
            <div className="absolute inset-0 bg-slate-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
