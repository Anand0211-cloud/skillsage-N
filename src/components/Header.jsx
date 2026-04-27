import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Handle scroll state for floating effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  let navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/consultancy', label: 'Consultancy' },
    { to: '/training', label: 'Training' },
  ];

  if (location.pathname !== '/') {
    navLinks = [{ to: '/', label: 'Home' }, ...navLinks];
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <nav className={`max-w-5xl mx-auto px-6 h-16 flex items-center justify-between rounded-full transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-200' : 'bg-transparent'}`}>
          
          {/* Logo Placeholder */}
          <Link to="/" className="flex flex-col" onClick={closeMenu}>
            <span className="text-xl font-bold tracking-tight text-slate-900">SkillSage</span>
          </Link>
          
          {/* Navigation Links — Desktop (Centered) */}
          <div className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  className={`text-sm font-medium transition-all ${isActive ? 'text-black' : 'text-slate-500 hover:text-black'}`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {/* Primary Action — Desktop */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => setModalOpen(true)} 
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer shadow-sm"
            >
              Get in Touch
            </button>
          </div>

          {/* Hamburger Button — Mobile/Tablet Only */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 relative cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            style={{ WebkitTapHighlightColor: 'transparent', zIndex: 201 }}
          >
            <span style={{
              display: 'block', width: '24px', height: '2px', background: '#000',
              borderRadius: '2px', transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px', background: '#000',
              borderRadius: '2px', transition: 'all 0.3s',
              opacity: menuOpen ? 0 : 1
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px', background: '#000',
              borderRadius: '2px', transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
            }} />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-[200] flex flex-col items-center justify-center gap-8 animate-fade-in-up">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={`text-3xl font-medium transition-all delay-${(idx+1)*100} opacity-0 animate-fade-in-up ${isActive ? 'text-black' : 'text-slate-400'}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                closeMenu();
                setModalOpen(true);
              }}
              className="mt-8 bg-blue-600 text-white px-10 py-4 rounded-full font-medium text-lg opacity-0 animate-fade-in-up delay-400 shadow-md"
            >
              Get in Touch
            </button>
          </div>
        )}
      </header>
      
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
