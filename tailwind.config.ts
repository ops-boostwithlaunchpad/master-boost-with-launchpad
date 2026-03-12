import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0d9488',
          dark: '#0a7a70',
          light: 'rgba(13,148,136,0.09)',
        },
        ink: {
          DEFAULT: '#111110',
          2: '#302e2b',
        },
        mid: '#6b6860',
        dim: '#a09d98',
        stone: {
          0: '#fafaf9',
          1: '#f0eeeb',
          2: '#e4e1dc',
          3: '#d5d2cb',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          violet: '#7c3aed',
        },
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Instrument Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #7c3aed 100%)',
        'gradient-brand-hover': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #6d28d9 100%)',
        'gradient-text': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.08) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        'gradient-glow': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.08), transparent 40%)',
        'gradient-card': 'linear-gradient(135deg, rgba(59,130,246,0.04) 0%, rgba(139,92,246,0.04) 100%)',
        'gradient-border': 'linear-gradient(135deg, #3b82f6, #8b5cf6, #7c3aed)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'word-cycle': 'wordCycle 2.8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'border-rotate': 'borderRotate 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wordCycle: {
          '0%, 100%': { opacity: '0', transform: 'translateY(100%)' },
          '15%, 85%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderRotate: {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99,102,241,0.15)',
        'glow-lg': '0 0 40px rgba(99,102,241,0.2)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.2)',
        'card': '0 4px 24px rgba(17,17,16,0.04)',
        'card-hover': '0 12px 40px rgba(17,17,16,0.08)',
        'float': '0 20px 60px rgba(17,17,16,0.1)',
      },
    },
  },
  plugins: [],
}

export default config
