import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header id="header" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0a2e5c] to-[#1a6bc7] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-[#0a2e5c]">Gierman Plumbing</h1>
              <p className="text-xs text-gray-500">Ashtabula, OH</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#e85d04] font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-[#e85d04] font-medium transition-colors">Services</a>
            <a href="#work" className="text-gray-700 hover:text-[#e85d04] font-medium transition-colors">Our Work</a>
            <a href="#about" className="text-gray-700 hover:text-[#e85d04] font-medium transition-colors">About</a>
            <a href="#reviews" className="text-gray-700 hover:text-[#e85d04] font-medium transition-colors">Reviews</a>
            <a href="#contact" className="bg-[#e85d04] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#c94f02] transition-colors">Contact</a>
          </nav>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6 fill-gray-700" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#0a2e5c] via-[#1a3d6b] to-[#0a2e5c] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          </div>
          
          <div className="max-w-[1280px] mx-auto px-6 py-20 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#e85d04]/20 border border-[#e85d04]/50 text-[#ffaa70] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-[#e85d04] rounded-full animate-pulse"></span>
                Available 24/7 for Emergencies
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
                Century Home<br />
                <span className="text-[#e85d04]">Plumbing Experts</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10 font-light">
                Trusted plumbing service in Ashtabula, OH. Specializing in historic and century homes with modern solutions that respect your home&apos;s character.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                <a href="#contact" className="inline-flex items-center gap-2 bg-[#e85d04] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-[#e85d04]/40 hover:bg-[#c94f02] hover:-translate-y-1 transition-all">
                  Get Free Estimate
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </a>
                <a href="tel:4409642727" className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/40 text-white font-semibold text-lg px-7 py-3.5 rounded-lg backdrop-blur-sm hover:bg-white/20 hover:border-white/70 hover:-translate-y-1 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  (440) 964-2727
                </a>
              </div>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 text-white/75 text-sm font-semibold">
                  <svg className="w-5 h-5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-3 text-white/75 text-sm font-semibold">
                  <svg className="w-5 h-5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  5-Star Reviews
                </div>
                <div className="flex items-center gap-3 text-white/75 text-sm font-semibold">
                  <svg className="w-5 h-5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Emergency Service
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-[#0a2e5c] py-0">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-wrap">
              <div className="flex items-center gap-4 px-10 py-7 border-r border-white/[0.08] text-white flex-1 min-w-[200px] justify-center hover:bg-white/[0.04] transition-colors">
                <div className="w-11 h-11 bg-[#e85d04]/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5.5 h-5.5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <strong className="block text-base font-bold tracking-wide">Local Experts</strong>
                  <span className="text-xs text-white/55 font-normal">Serving Ashtabula County</span>
                </div>
              </div>
              <div className="flex items-center gap-4 px-10 py-7 border-r border-white/[0.08] text-white flex-1 min-w-[200px] justify-center hover:bg-white/[0.04] transition-colors">
                <div className="w-11 h-11 bg-[#e85d04]/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5.5 h-5.5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <strong className="block text-base font-bold tracking-wide">Licensed</strong>
                  <span className="text-xs text-white/55 font-normal">Fully Insured</span>
                </div>
              </div>
              <div className="flex items-center gap-4 px-10 py-7 border-r border-white/[0.08] text-white flex-1 min-w-[200px] justify-center hover:bg-white/[0.04] transition-colors">
                <div className="w-11 h-11 bg-[#e85d04]/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5.5 h-5.5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <strong className="block text-base font-bold tracking-wide">24/7 Service</strong>
                  <span className="text-xs text-white/55 font-normal">Emergency Response</span>
                </div>
              </div>
              <div className="flex items-center gap-4 px-10 py-7 text-white flex-1 min-w-[200px] justify-center hover:bg-white/[0.04] transition-colors">
                <div className="w-11 h-11 bg-[#e85d04]/15 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5.5 h-5.5 fill-[#e85d04]" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <strong className="block text-base font-bold tracking-wide">5-Star Rated</strong>
                  <span className="text-xs text-white/55 font-normal">Trusted by Locals</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#e85d04] font-bold text-sm uppercase tracking-widest">What We Do</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black text-[#0a2e5c] mt-4 mb-6">Plumbing Services You Can Count On</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">From plugged sewers to leaking pipes, we handle every job with the expertise your home deserves — especially older homes built to last.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service cards would go here */}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-[#0a2e5c] text-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#e85d04] font-bold text-sm uppercase tracking-widest">Get In Touch</span>
              <h2 className="font-serif text-4xl md:text-5xl font-black mt-4 mb-6">Ready to Schedule Service?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">Call us today for fast, reliable plumbing service. We&apos;re here to help with all your plumbing needs.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="tel:4409642727" className="flex items-center gap-3 bg-[#e85d04] text-white font-bold text-xl px-8 py-4 rounded-lg hover:bg-[#c94f02] transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (440) 964-2727
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#051a33] text-white py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0a2e5c] to-[#1a6bc7] rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">Gierman Plumbing</h3>
                <p className="text-sm text-white/60">Ashtabula, OH</p>
              </div>
            </div>
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Gierman Plumbing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
