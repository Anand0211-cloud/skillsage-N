/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#020617',
          card: '#0f172a',
          accent: '#3b82f6',
          highlight: '#60a5fa',
          electric: '#0ea5e9'
        }
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(14, 165, 233, 0.15) 0px, transparent 50%)',
      }
    }
  },
  safelist: [
    'bg-brand-electric/10', 'text-brand-electric', 'border-brand-electric/30',
    'bg-brand-accent/10', 'text-brand-accent', 'border-brand-accent/30',
    'bg-brand-highlight/10', 'text-brand-highlight', 'border-brand-highlight/30',
    'bg-purple-400/10', 'text-purple-400', 'border-purple-400/30',
    'bg-emerald-400/10', 'text-emerald-400', 'border-emerald-400/30',
    'bg-red-400/10', 'text-red-400', 'border-red-400/30',
    'bg-violet-400/10', 'text-violet-400', 'border-violet-400/30',
    'bg-cyan-400/10', 'text-cyan-400', 'border-cyan-400/30',
    'bg-amber-400/10', 'text-amber-400', 'border-amber-400/30',
    'bg-pink-400/10', 'text-pink-400', 'border-pink-400/30',
    'from-brand-electric/5', 'from-brand-accent/5', 'from-brand-highlight/5',
    'from-purple-400/5', 'from-emerald-400/5',
    'from-red-500/20', 'to-orange-500/20',
    'from-violet-500/20', 'to-purple-500/20',
    'from-brand-accent/20', 'to-brand-electric/20',
    'from-cyan-500/20', 'to-teal-500/20',
    'from-amber-500/20', 'to-yellow-500/20',
    'from-pink-500/20', 'to-rose-500/20',
    'group-hover:bg-brand-electric', 'group-hover:bg-brand-accent',
    'group-hover:bg-brand-highlight', 'group-hover:bg-purple-400',
    'group-hover:bg-emerald-400',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
