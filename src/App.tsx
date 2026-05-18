"use client";

import React, { useRef, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';
import {
  Phone,
  MapPin,
  ArrowRight,
  Mail,
  Send,
  Award,
  Trophy,
  Heart,
  Activity,
  Shield,
  Flame,
  Target,
  Menu,
  X
} from 'lucide-react';
import { OrbitingCircles } from './components/ui/OrbitingCircles';

// --- Inline SVG Social Icons ---
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const IconTwitter = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
);

import { motion } from 'framer-motion';
import ScrollReveal from './components/ui/ScrollReveal';
import CinematicImage from './components/ui/CinematicImage';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Skeleton Loading Components ---
const SkeletonBar = ({ width, height, className = "", style = {} }: { width: string | number, height: string | number, className?: string, style?: React.CSSProperties }) => (
  <div 
    className={`skeleton-bar ${className}`} 
    style={{ 
      width: typeof width === 'number' ? `${width}px` : width, 
      height: typeof height === 'number' ? `${height}px` : height, 
      ...style 
    }} 
  />
);

const HomeSkeleton = () => (
  <div style={{ background: 'linear-gradient(135deg, #111111 0%, #070707 100%)', minHeight: '100vh' }}>
    {/* Hero Skeleton */}
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative', 
      paddingTop: '120px', 
      overflow: 'hidden' 
    }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3, zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 3, flex: 1, display: 'flex', alignItems: 'center', width: '100%', paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="responsive-grid-2" style={{ alignItems: 'center', width: '100%' }}>
          
          {/* Left Column Skeleton */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <SkeletonBar width={24} height={2} className="skeleton-shimmer-dark" />
              <SkeletonBar width={200} height={16} className="skeleton-shimmer-dark" />
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <SkeletonBar width="85%" height={56} className="skeleton-shimmer-dark" style={{ marginBottom: '1rem', display: 'block' }} />
              <SkeletonBar width="70%" height={56} className="skeleton-shimmer-dark" style={{ marginBottom: '1rem', display: 'block' }} />
              <SkeletonBar width="60%" height={56} className="skeleton-shimmer-dark" style={{ display: 'block' }} />
            </div>
            
            <div style={{ marginBottom: '3.5rem' }}>
              <SkeletonBar width="100%" height={16} className="skeleton-shimmer-dark" style={{ marginBottom: '0.6rem', display: 'block', maxWidth: '560px' }} />
              <SkeletonBar width="85%" height={16} className="skeleton-shimmer-dark" style={{ display: 'block', maxWidth: '560px' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <SkeletonBar width={180} height={46} className="skeleton-shimmer-dark" style={{ borderRadius: 'var(--radius-xs)' }} />
              <SkeletonBar width={150} height={46} className="skeleton-shimmer-dark" style={{ borderRadius: 'var(--radius-xs)' }} />
            </div>
          </div>

          {/* Right Column Circular Skeleton */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '440px', height: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="skeleton-shimmer-dark" style={{ width: '340px', height: '340px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.05)' }} />
              {/* Badges skeletons */}
              <div className="skeleton-shimmer-dark" style={{ width: '100px', height: '54px', borderRadius: '12px', position: 'absolute', top: '10%', left: '-5%' }} />
              <div className="skeleton-shimmer-dark" style={{ width: '110px', height: '54px', borderRadius: '12px', position: 'absolute', top: '15%', right: '-8%' }} />
              <div className="skeleton-shimmer-dark" style={{ width: '110px', height: '54px', borderRadius: '12px', position: 'absolute', bottom: '15%', left: '-5%' }} />
              <div className="skeleton-shimmer-dark" style={{ width: '120px', height: '54px', borderRadius: '12px', position: 'absolute', bottom: '10%', right: '-8%' }} />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom stats skeleton */}
      <div className="hero-stats-bar" style={{ background: 'rgba(15, 15, 15, 0.98)' }}>
        <div className="container">
          <div className="hero-stats-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ padding: '0 2rem' }}>
                <SkeletonBar width={80} height={36} className="skeleton-shimmer-dark" style={{ marginBottom: '0.5rem', display: 'block' }} />
                <SkeletonBar width={140} height={14} className="skeleton-shimmer-dark" style={{ marginBottom: '0.5rem', display: 'block' }} />
                <SkeletonBar width="100%" height={12} className="skeleton-shimmer-dark" style={{ display: 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* About Section Skeleton */}
    <section className="section-padding marble-bg">
      <div className="container">
        <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
          <div className="skeleton-shimmer" style={{ height: '500px', width: '100%', borderRadius: 'var(--radius-sm)' }} />
          <div>
            <SkeletonBar width={100} height={14} className="skeleton-shimmer" style={{ marginBottom: '1rem', display: 'block' }} />
            <SkeletonBar width="70%" height={40} className="skeleton-shimmer" style={{ marginBottom: '1.5rem', display: 'block' }} />
            <SkeletonBar width="100%" height={16} className="skeleton-shimmer" style={{ marginBottom: '0.8rem', display: 'block' }} />
            <SkeletonBar width="95%" height={16} className="skeleton-shimmer" style={{ marginBottom: '2rem', display: 'block' }} />
            <div style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid #f0e6c8', display: 'inline-block', minWidth: '180px' }}>
              <SkeletonBar width={80} height={36} className="skeleton-shimmer" style={{ marginBottom: '0.5rem', display: 'block' }} />
              <SkeletonBar width={100} height={12} className="skeleton-shimmer" style={{ display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const AboutSkeleton = () => (
  <div style={{ background: 'linear-gradient(135deg, #111111 0%, #070707 100%)', minHeight: '100vh', paddingTop: '120px' }}>
    <section className="section-padding" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <SkeletonBar width={120} height={14} className="skeleton-shimmer-dark" style={{ marginBottom: '2rem', display: 'block' }} />
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '2rem 0' }} />
        <div style={{ marginBottom: '3rem' }}>
          <SkeletonBar width="50%" height={60} className="skeleton-shimmer-dark" style={{ marginBottom: '1rem', display: 'block' }} />
          <SkeletonBar width="40%" height={60} className="skeleton-shimmer-dark" style={{ marginBottom: '1rem', display: 'block' }} />
          <SkeletonBar width="60%" height={60} className="skeleton-shimmer-dark" style={{ display: 'block' }} />
        </div>
        <SkeletonBar width="100%" height={18} className="skeleton-shimmer-dark" style={{ marginBottom: '0.8rem', display: 'block', maxWidth: '600px' }} />
        <SkeletonBar width="85%" height={18} className="skeleton-shimmer-dark" style={{ display: 'block', maxWidth: '600px' }} />
      </div>
    </section>
  </div>
);

const ServicesSkeleton = () => (
  <section className="section-padding" style={{ minHeight: '100vh', paddingTop: '140px', background: 'linear-gradient(135deg, #111111 0%, #070707 100%)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <SkeletonBar width={120} height={14} className="skeleton-shimmer-dark" style={{ marginBottom: '1rem', display: 'inline-block' }} />
        <SkeletonBar width={300} height={48} className="skeleton-shimmer-dark" style={{ display: 'block', margin: '0 auto' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ padding: '3rem 2.5rem', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)' }}>
            <SkeletonBar width={180} height={24} className="skeleton-shimmer-dark" style={{ marginBottom: '1.5rem', display: 'block' }} />
            <SkeletonBar width="100%" height={16} className="skeleton-shimmer-dark" style={{ marginBottom: '0.8rem', display: 'block' }} />
            <SkeletonBar width="90%" height={16} className="skeleton-shimmer-dark" style={{ marginBottom: '2.5rem', display: 'block' }} />
            <SkeletonBar width={100} height={14} className="skeleton-shimmer-dark" style={{ display: 'block' }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSkeleton = () => (
  <section className="section-padding" style={{ minHeight: '100vh', paddingTop: '140px', background: 'linear-gradient(135deg, #111111 0%, #070707 100%)' }}>
    <div className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#1a1a1a', padding: '5rem 3rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <SkeletonBar width={100} height={14} className="skeleton-shimmer-dark" style={{ marginBottom: '1.5rem', display: 'inline-block' }} />
        <SkeletonBar width="60%" height={48} className="skeleton-shimmer-dark" style={{ display: 'block', margin: '0 auto 1.5rem' }} />
        <SkeletonBar width="100%" height={16} className="skeleton-shimmer-dark" style={{ display: 'block', margin: '0 auto 0.8rem', maxWidth: '600px' }} />
        <SkeletonBar width="80%" height={16} className="skeleton-shimmer-dark" style={{ display: 'block', margin: '0 auto 3rem', maxWidth: '600px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          <SkeletonBar width={250} height={24} className="skeleton-shimmer-dark" style={{ marginBottom: '0.5rem' }} />
          <SkeletonBar width={220} height={24} className="skeleton-shimmer-dark" />
        </div>
      </div>
    </div>
  </section>
);

// --- Page Wrapper for Skeleton Loading Transition ---
function PageWrapper({ children, skeleton: Skeleton }: { children: React.ReactNode, skeleton: React.ComponentType }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850); // 850ms of shimmering elegance
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {isLoading ? (
        <motion.div 
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Skeleton />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

// --- Reusable Component: ShinyText ---
const ShinyText = ({ text, className = "" }: { text: string, className?: string }) => {
  return <span className={`shiny-text ${className}`}>{text}</span>;
};

// --- CountUp ---
const CountUp = ({ to, duration = 2500, delay = 0 }: { to: number, duration?: number, delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    const timeout = setTimeout(() => window.requestAnimationFrame(step), delay);
    return () => clearTimeout(timeout);
  }, [isVisible, to, duration, delay]);

  return <span ref={ref} className="count-up">{count}</span>;
};

// --- FadeIn wrapper using Framer Motion ---
const FadeIn = ({ children, delay = 0, className = "", animation = "up", style = {} }: { children: React.ReactNode, delay?: number, className?: string, animation?: string, style?: React.CSSProperties }) => {
  const variants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    right: { opacity: 0, x: -30 },
    left: { opacity: 0, x: 30 },
    in: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <motion.div
      initial={animation as any}
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={variants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// --- Gallery Data ---
const galleryItems = [
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", label: "Strength", num: "01" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80", label: "Endurance", num: "02" },
  { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80", label: "Form", num: "03" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", label: "Focus", num: "04" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", label: "Power", num: "05" },
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80", label: "Transform", num: "06" },
];

// --- Gallery Card ---
function GalleryCard({ src, label, num, delay, height, marginTop = 0 }: {
  src: string; label: string; num: string;
  delay: number; height: string; marginTop?: number;
}) {
  return (
    <FadeIn
      animation="up"
      delay={delay}
      style={{
        height,
        marginTop: 'var(--gallery-mt, 0px)',
        position: "relative",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(0,0,0,0.06)",
        flexShrink: 0,
        ['--desktop-mt' as any]: marginTop ? `${marginTop}px` : '0px'
      }}
      className="gallery-card-simple"
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: 'var(--transition-smooth)' }}
      />
      {/* Corner accents */}
      <div style={{ position: "absolute", top: 14, left: 14, width: 28, height: 28, borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 14, right: 14, width: 28, height: 28, borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37", pointerEvents: "none" }} />
      {/* Hover overlay */}
      <div
        className="gallery-overlay"
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.5rem",
          opacity: 0, transition: 'var(--transition-fast)'
        }}
      >
        <div className="overlay-content" style={{ transform: 'translateY(16px)', transition: 'var(--transition-smooth)' }}>
          <p style={{ color: "#D4AF37", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{num}</p>
          <p style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</p>
        </div>
      </div>
      <div style={{ position: "absolute", top: 12, right: 14, color: "rgba(255,255,255,0.35)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em" }}>{num}</div>
    </FadeIn>
  );
}

// --- Navbar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '1rem 0' : '2rem 0',
        background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(15px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent',
        transition: 'var(--transition-smooth)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--secondary)', position: 'relative', zIndex: 101 }}>
            Kymberley <ShinyText text="Marr" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ color: 'var(--text-main)', transition: 'color 0.3s ease' }} className="nav-link">
                {item}
              </Link>
            ))}
            <Link to="/contact" className="btn-gold" style={{ padding: '0.8rem 1.8rem', fontSize: '0.7rem' }}>Start Now</Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile-toggle" aria-label="Toggle Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <Link 
            key={item} 
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
            onClick={() => setMenuOpen(false)}
            className="mobile-menu-link"
          >
            {item}
          </Link>
        ))}
        <Link 
          to="/contact" 
          onClick={() => setMenuOpen(false)}
          className="btn-gold" 
          style={{ width: '100%', maxWidth: '250px', padding: '1.2rem', textAlign: 'center' }}
        >
          Start Now
        </Link>
      </div>
    </>
  );
};

// --- Home Page ---
const HomePage = () => {
  return (
    <div>
      {/* Premium Hero section with Circular Badges and bottom Stats Bar */}
      <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative', 
        background: 'linear-gradient(135deg, #111111 0%, #070707 100%)', 
        paddingTop: '120px', 
        overflow: 'hidden' 
      }}>
        {/* Soft background grid and ambient lighting glow */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3, zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(255, 62, 62, 0.03) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />

        <div className="container" style={{ position: 'relative', zIndex: 3, flex: 1, display: 'flex', alignItems: 'center', paddingBottom: '4rem', paddingTop: '2rem' }}>
          <div className="responsive-grid-2" style={{ alignItems: 'center', width: '100%' }}>
            
            {/* Left Column: Text Content */}
            <div>
              <FadeIn animation="down" className="text-gold" style={{ fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ width: '24px', height: '1.5px', background: 'var(--primary)' }} />
                ISSA Master Certified Coach
              </FadeIn>
              
              <FadeIn animation="up" style={{ transitionDuration: '1s' }}>
                <h1 style={{ 
                  color: 'white', 
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)', 
                  lineHeight: 1.05, 
                  marginBottom: '2.5rem', 
                  fontWeight: 900, 
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-main)'
                }}>
                  Achieve Your <br />
                  <span className="fitness-goals-title">FITNESS GOALS</span> <br />
                  With Kymberley Marr
                </h1>
              </FadeIn>
              
              <FadeIn animation="up" delay={0.25}>
                <p style={{ 
                  fontSize: '1.15rem', 
                  color: 'rgba(255, 255, 255, 0.65)', 
                  marginBottom: '3.5rem', 
                  maxWidth: '560px', 
                  fontWeight: 400, 
                  lineHeight: 1.65 
                }}>
                  Join the elite Kymberley Marr Fitness community and transform your body under the guidance of a top-tier ISSA Master Trainer. Personalized programming engineered for your absolute success.
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link to="/contact" className="btn-gold" style={{ background: '#FF1F1F', boxShadow: '0 8px 30px rgba(255,31,31,0.3)', border: 'none' }}>
                    Start Your Journey
                  </Link>
                  <Link to="/services" className="btn-gold" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'white !important', boxShadow: 'none' }}>
                    Explore Programs
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Circular Trainer Card with Floating Badges */}
            <FadeIn animation="left" delay={0.15}>
              <div className="hero-trainer-container">
                {/* Glowing breathing background backdrop */}
                <div className="hero-trainer-glow" />

                {/* Centered Circle Image */}
                <div className="hero-trainer-circle">
                  <img 
                    src="/kymberley_portrait.png" 
                    alt="Kymberley Marr" 
                    className="hero-trainer-image"
                  />
                </div>

                {/* Floating Indicators */}
                {/* 1. Coaches Badge (Top-Left) */}
                <div className="floating-glow-badge" style={{ top: '10%', left: '-5%' }}>
                  <span className="badge-value">+ 10</span>
                  <span className="badge-label">Years Exp</span>
                </div>

                {/* 2. Positive Reviews Badge (Top-Right) */}
                <div className="floating-glow-badge" style={{ top: '15%', right: '-8%' }}>
                  <span className="badge-value">+ 500</span>
                  <span className="badge-label">Reviews</span>
                </div>

                {/* 3. Workout Videos Badge (Bottom-Left) */}
                <div className="floating-glow-badge" style={{ bottom: '15%', left: '-5%' }}>
                  <span className="badge-value">100%</span>
                  <span className="badge-label">Science-Backed</span>
                </div>

                {/* 4. Trainers Badge (Bottom-Right) */}
                <div className="floating-glow-badge" style={{ bottom: '10%', right: '-8%' }}>
                  <span className="badge-value">+ 1500</span>
                  <span className="badge-label">Sessions Completed</span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>

        {/* Bottom Unified Stats / Trust Bar */}
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats-grid">
              
              {/* Stat 1 */}
              <div className="hero-stat-card">
                <div className="hero-stat-number" style={{ color: '#FF1F1F' }}>96%</div>
                <div className="hero-stat-title">Client Satisfaction</div>
                <div className="hero-stat-desc">Our members love their life-changing results and daily coaching experience.</div>
              </div>

              {/* Stat 2 */}
              <div className="hero-stat-card">
                <div className="hero-stat-number">+10</div>
                <div className="hero-stat-title">Years of Experience</div>
                <div className="hero-stat-desc">Trust in our certified, long-standing track record of premium conditioning.</div>
              </div>

              {/* Stat 3 */}
              <div className="hero-stat-card">
                <div className="hero-stat-number" style={{ color: '#FF1F1F' }}>+800</div>
                <div className="hero-stat-title">Active Members</div>
                <div className="hero-stat-desc">Join our close-knit, highly supportive fitness and wellness community.</div>
              </div>

              {/* Stat 4 */}
              <div className="hero-stat-card">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-title">Support Available</div>
                <div className="hero-stat-desc">Access professional expert guidance and accountability whenever you need it.</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding marble-bg" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '15%', left: '50%', width: '1px', height: '100px', background: 'linear-gradient(to bottom, var(--primary), transparent)', opacity: 0.3 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            <FadeIn animation="right">
              <CinematicImage 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" 
                alt="Journey to Excellence"
                height="500px"
              />
            </FadeIn>
            <FadeIn animation="left" delay={0.2}>
              <div className="text-gold" style={{ fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.8rem' }}>About Me</div>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Journey to Excellence</h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                I am Kymberley Marr, an ISSA-certified fitness professional dedicated to helping you set realistic goals and transform your health and your life for the better. My approach combines evidence-based training with holistic lifestyle changes.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
                <div style={{ padding: '1.5rem', background: 'white', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800 }}><CountUp to={10} />+</div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Years Experience</div>
                </div>
              </div>
              <Link to="/about" className="text-gold" style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Read Full Story <ArrowRight size={18} /></Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding" style={{ background: 'var(--bg-base)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '25vw', height: '25vw', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <FadeIn animation="up">
              <span className="section-subtitle">Premium Programs</span>
            </FadeIn>
            <FadeIn animation="up" delay={0.1}>
              <h2 className="section-title">Divine Services</h2>
            </FadeIn>

            <div className="divider-gold" style={{ margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {[
              { title: 'Personal Excellence', desc: 'Elite one-on-one sessions meticulously crafted for your physiological profile and performance goals.', icon: '01' },
              { title: 'Mastery Coaching', desc: 'A holistic architectural approach to your lifestyle, merging peak physical form with mental resilience.', icon: '02' },
              { title: 'Nutritional Alchemy', desc: 'Precision-based dietary protocols designed to fuel your evolution and optimize metabolic health.', icon: '03' }
            ].map((s, i) => (
              <FadeIn key={i} animation="up" delay={i * 0.1} className="service-card" style={{ padding: '4rem 3rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-surface)', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', opacity: 0.5 }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.25rem', fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.7 }}>{s.desc}</p>
                <Link to="/contact" className="text-gold" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore <ArrowRight size={14} />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Orbiting Circles Credentials Section */}
      <section className="section-padding" style={{ background: '#fcfcfc', overflow: 'hidden', borderBottom: '1px solid var(--border-light)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(var(--border-light) 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.2 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="responsive-grid-2-12" style={{ alignItems: 'center' }}>
            <FadeIn animation="right">
              <span className="section-subtitle">Scientific Foundation</span>
              <h2 className="section-title">Accredited Elite Coaching</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                True physical transformation is an exact science, built on rigorous biological principles, clinical anatomy, and evidence-based nutrition protocols. I combine academic mastery with extensive field experience to architect your ultimate performance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                {[
                  { title: "ISSA Master Trainer Status", desc: "Certified at the highest tier in fitness science, bio-mechanics, and elite conditioning." },
                  { title: "NASM Corrective Exercise Specialist", desc: "Expertise in joint alignment, posture correction, and injury prevention." },
                  { title: "Precision Nutrition Certification", desc: "Scientific metabolic manipulation and performance-enhancing nutrition architecture." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(212,175,55,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      flexShrink: 0,
                      marginTop: '0.2rem',
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}>
                      ✓
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn animation="left" className="orbiting-circles-container" style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Outer Orbit Area border glow backdrop */}
              <div style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              {/* Central Glowing Shield / Brand Badge */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--secondary) 0%, #0a0a0a 100%)',
                border: '2px solid var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.25)',
                zIndex: 5,
                fontWeight: 900,
                fontSize: '1.5rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.05em'
              }}>
                KM
              </div>

              {/* Inner Orbit (Radius: 90px) */}
              <OrbitingCircles radius={90} duration={20} iconSize={48} speed={1.2}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  border: '1px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  cursor: 'pointer'
                }} title="ISSA Certified">
                  <Award size={22} />
                </div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  border: '1px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  cursor: 'pointer'
                }} title="NASM Certified">
                  <Trophy size={22} />
                </div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--secondary)',
                  border: '1px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  cursor: 'pointer'
                }} title="Precision Nutrition Certified">
                  <Heart size={22} />
                </div>
              </OrbitingCircles>

              {/* Outer Orbit (Radius: 180px) - Rotating Reverse */}
              <OrbitingCircles radius={180} duration={28} reverse iconSize={48} speed={0.9}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }} title="Biometrics Specialist">
                  <Activity size={22} />
                </div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }} title="Injury Prevention Specialist">
                  <Shield size={22} />
                </div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }} title="Metabolic Focus">
                  <Flame size={22} />
                </div>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'white',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer'
                }} title="Target Goals">
                  <Target size={22} />
                </div>
              </OrbitingCircles>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ScrollReveal Dedicated Showcase Section */}
      <section style={{
        background: 'var(--secondary)',
        color: 'white',
        padding: '12rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(var(--primary-dark) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px', opacity: 0.05 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <span style={{
              color: 'var(--primary)',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              display: 'block',
              marginBottom: '2rem'
            }}>
              The Philosophy
            </span>
          </ScrollReveal>
          <ScrollReveal
            animation="reveal-line"
            delay={0.25}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.3,
              textTransform: 'uppercase',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              margin: '0 auto 2.5rem'
            }}
          >
            SHAPE YOUR BODY. CRAFT YOUR LEGACY.
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.4}>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Peak performance is not a destination — it is an ongoing sculpture of discipline, science, and absolute focus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ background: 'var(--secondary)', color: 'white', padding: '10rem 0' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center' }}>
            <FadeIn animation="right">
              <span className="section-subtitle">Why Choose Kymberley</span>
              <h2 className="section-title" style={{ color: 'white' }}>The Gold Standard <br /> In Fitness.</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.8 }}>
                Experience a level of coaching that transcends the ordinary. We combine clinical science with decade-long expertise.
              </p>
              <div className="responsive-grid-2" style={{ gap: '2.5rem' }}>
                {[
                  { title: 'Expertise', text: '10+ Years Experience' },
                  { title: 'Certification', text: 'ISSA Master Certified' },
                  { title: 'Methodology', text: 'Evidence-Based' },
                  { title: 'Results', text: 'Guaranteed Evolve' }
                ].map((f, i) => (
                  <div key={i}>
                    <h4 style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{f.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>{f.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn animation="left" style={{ position: 'relative' }}>
              <CinematicImage 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80" 
                alt="The Gold Standard in Fitness"
                height="600px"
              />
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', background: 'var(--primary)', padding: '2.5rem', borderRadius: 'var(--radius-sm)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'white', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>Success Stories</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '10rem 0', background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(var(--border-light) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px', opacity: 0.2 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <FadeIn animation="up">
              <span className="section-subtitle">Elite Community</span>
            </FadeIn>
            <FadeIn animation="up" delay={0.1}>
              <h2 className="section-title">Proven Results.</h2>
            </FadeIn>

          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {[
              { name: 'Marcus Chen', role: 'Executive', quote: "The transformation wasn't just physical. Kymberley helped me rebuild my discipline and mindset from the ground up." },
              { name: 'Sarah Jenkins', role: 'Athlete', quote: 'Professional, science-based, and incredibly effective. My performance in the field has seen a 40% increase in power output.' }
            ].map((t, i) => (
              <FadeIn key={i} animation="up" delay={i * 0.1} style={{ padding: '4rem', background: 'white', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '2rem', right: '3rem', fontSize: '5rem', color: 'var(--primary)', opacity: 0.1, fontFamily: 'serif' }}>"</div>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-light)' }} />
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{t.name}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "white", padding: "10rem 0", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <FadeIn animation="up" style={{ marginBottom: "4rem" }}>
            <p style={{ color: "#D4AF37", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", fontSize: "0.75rem", marginBottom: "0.75rem" }}>
              Visual Journey
            </p>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1, margin: 0 }}>Divine Gallery</h2>

              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", maxWidth: 280, lineHeight: 1.6, margin: 0 }}>
                Every session, every rep — a step closer to the best version of you.
              </p>
            </div>
            <div style={{ marginTop: "2rem", height: 1, background: "linear-gradient(to right, #D4AF37, transparent)" }} />
          </FadeIn>

          <div className="gallery-grid" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
            <GalleryCard src={galleryItems[0].src} label={galleryItems[0].label} num={galleryItems[0].num} delay={0} height="420px" />
            <GalleryCard src={galleryItems[1].src} label={galleryItems[1].label} num={galleryItems[1].num} delay={0.1} height="520px" marginTop={-50} />
            <GalleryCard src={galleryItems[2].src} label={galleryItems[2].label} num={galleryItems[2].num} delay={0.2} height="350px" marginTop={60} />
          </div>
          <div className="gallery-grid" style={{ gap: "1.25rem" }}>
            <GalleryCard src={galleryItems[3].src} label={galleryItems[3].label} num={galleryItems[3].num} delay={0.15} height="350px" marginTop={-20} />
            <GalleryCard src={galleryItems[4].src} label={galleryItems[4].label} num={galleryItems[4].num} delay={0.25} height="440px" />
            <GalleryCard src={galleryItems[5].src} label={galleryItems[5].label} num={galleryItems[5].num} delay={0.05} height="500px" marginTop={-40} />
          </div>

          <FadeIn animation="in" delay={0.4} style={{ marginTop: "3rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              6 Frames · Kymberley Marr Fitness
            </p>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(to right, transparent, #D4AF37, transparent)", margin: "0 2rem" }} />
            <p style={{ color: "#D4AF37", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Evolve Your Strength
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="section-padding" style={{ position: 'relative', background: 'var(--bg-base)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=40)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.03, filter: 'grayscale(100%)' }} />
        <div className="container">
          <div style={{ position: 'relative', background: 'var(--bg-divine)', padding: '6rem 4rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)', textAlign: 'center', boxShadow: '0 40px 100px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)', zIndex: 0 }} />
            <FadeIn animation="up" style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-subtitle">Take Action</span>
              <h2 className="section-title">Ready to Transform?</h2>

              <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '550px', margin: '0 auto 4rem', fontSize: '1.15rem', lineHeight: 1.7 }}>
                Contact me today to schedule your first consultation and begin your journey to excellence.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                <a href="tel:9209572284" className="btn-gold" style={{ padding: '1.25rem 3rem' }}>Call Now</a>
                <Link to="/contact" className="nav-link" style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>Email Me</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- About Page ---
const AboutPage = () => (
  <div style={{ background: 'var(--bg-base)' }}>
    {/* Section 01 */}
    <section className="section-padding" style={{ backgroundColor: '#D4AF37', color: '#fff', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <FadeIn animation="down">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'black', opacity: 0.6 }}>01 — Who I Am</p>
        </FadeIn>
        <div style={{ height: '1px', background: 'black', opacity: 0.1, margin: '2rem 0' }} />
        <FadeIn animation="up" style={{ transitionDuration: '1s' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, lineHeight: 0.9, textTransform: 'uppercase', color: 'black', marginBottom: '3rem' }}>
            Evolve<br />Your<br />Strength
          </h1>
        </FadeIn>
        <FadeIn animation="up" delay={0.3}>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '600px', color: 'black', lineHeight: 1.6 }}>
            I am Kymberley Marr, an ISSA-certified fitness professional with over a decade of experience. I specialize in helping individuals break through plateaus and achieve lasting transformations.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Section 02 */}
    <section className="section-padding" style={{ backgroundColor: '#000', color: '#D4AF37', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <FadeIn animation="down">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'white' }}>02 — The Mission</p>
        </FadeIn>
        <div style={{ height: '1px', background: 'white', opacity: 0.1, margin: '2rem 0' }} />
        <FadeIn animation="up" style={{ transitionDuration: '1s' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '3rem' }}>
            Results<br />First<br />Always
          </h2>
        </FadeIn>
        <FadeIn animation="up" delay={0.2}>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', maxWidth: '600px', color: 'white', opacity: 0.9, marginBottom: '4rem', lineHeight: 1.6 }}>
            My philosophy centers on a holistic approach. We don't just focus on the hours you spend in the gym; we optimize your nutrition, recovery, and mindset to guarantee success.
          </p>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          {[{ label: 'Nutrition', text: 'Tailored dietary strategies that fuel your performance without sacrificing the foods you love.' }, { label: 'Training', text: 'Evidence-based programming designed to build lean muscle and shred body fat effectively.' }, { label: 'Mindset', text: 'Cultivating the discipline and mental fortitude required for sustainable long-term health.' }].map((item, i) => (
            <FadeIn key={i} animation="up" delay={i * 0.1}>
              <p style={{ color: 'white', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)' }}>{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Section 03 */}
    <section className="section-padding" style={{ backgroundColor: '#F5F5F0', color: '#000', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <FadeIn animation="down">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)' }}>03 — The Process</p>
        </FadeIn>
        <div style={{ height: '1px', background: 'black', opacity: 0.1, margin: '2rem 0' }} />
        <FadeIn animation="up" style={{ transitionDuration: '1s' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 800, lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '3rem' }}>
            Commit.<br />Execute.<br />Transform.
          </h2>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
          {[{ label: '01 — Consult', text: 'We analyze your current lifestyle, set realistic goals, and build a custom blueprint.' }, { label: '02 — Execute', text: 'Follow the specialized training and nutrition protocols designed specifically for your body type.' }, { label: '03 — Evolve', text: 'Track your progress, adjust as needed, and achieve the ultimate physical transformation.' }].map((item, i) => (
            <FadeIn key={i} animation="up" delay={i * 0.15}>
              <p style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '1rem' }}>{item.label}</p>
              <p style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.7)' }}>{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Section 04 */}
    <section className="section-padding" style={{ backgroundColor: '#ffffff', color: '#000', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <FadeIn animation="up">
          <p style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)', marginBottom: '2rem' }}>04 — Take Action</p>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1, textTransform: 'uppercase', marginBottom: '3rem' }}>
            Ready To Begin?
          </h2>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 4rem', color: 'rgba(0,0,0,0.7)' }}>
            Take control of your health. Contact me today and let's shape the future of your fitness journey together.
          </p>
          <Link to="/contact" className="btn-gold" style={{ display: 'inline-block', padding: '1.5rem 4rem', fontSize: '1rem' }}>Start Now</Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

// --- Services Page ---
const ServicesPage = () => (
  <section className="section-padding" style={{ minHeight: '100vh', paddingTop: '140px', background: 'var(--bg-surface)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <FadeIn animation="up">
          <div className="text-gold" style={{ fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.8rem' }}>What I Offer</div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800 }}>Divine Services</h1>
        </FadeIn>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[
          { title: 'Personal Training', desc: 'One-on-one sessions tailored to your specific fitness goals, ensuring perfect form and progressive overload.' },
          { title: 'Transformation Coaching', desc: 'A complete lifestyle overhaul designed for sustainable, long-term results combining fitness and mindset.' },
          { title: 'Nutrition Guidance', desc: 'Expert dietary planning to fuel your body, optimize your performance, and support recovery.' },
          { title: 'Online Coaching', desc: 'Remote programming and accountability for clients anywhere in the world.' }
        ].map((s, i) => (
          <FadeIn key={i} animation="up" delay={i * 0.1}>
            <div className="service-card" style={{ padding: '3rem 2.5rem', background: 'white', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1rem', lineHeight: 1.6 }}>{s.desc}</p>
              <Link to="/contact" className="text-gold" style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Book Session</Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// --- Contact Page ---
const ContactPage = () => (
  <section className="section-padding marble-bg" style={{ minHeight: '100vh', paddingTop: '140px' }}>
    <div className="container">
      <FadeIn animation="up">
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          background: 'var(--bg-divine)', 
          padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)', 
          borderRadius: 'var(--radius-lg)', 
          border: '1px solid var(--border-gold)', 
          textAlign: 'center', 
          boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div className="text-gold" style={{ fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.8rem' }}>Take Action</div>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.1 }}>Ready to Transform?</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 3rem' }}>
            Contact me today to schedule your first consultation and begin your journey to excellence. I am ready to help you hit your goals.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600 }}>
              <Phone className="text-gold" /> (920) 957-2284
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600 }}>
              <MapPin className="text-gold" /> Wisconsin, USA
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:9209572284" className="btn-gold" style={{ padding: '1rem 2rem', fontSize: '1rem', flex: '1 1 auto', maxWidth: '200px' }}>Call Now</a>
            <a href="mailto:contact@kymberleymarr.com" className="btn-gold" style={{ background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)', padding: '1rem 2rem', fontSize: '1rem', flex: '1 1 auto', maxWidth: '200px' }}>Email Me</a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

// --- Footer ---
const Footer = () => (
  <footer style={{ background: 'var(--secondary)', color: 'white', padding: '8rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
    <div className="container">
      <div className="responsive-grid-4" style={{ marginBottom: '6rem' }}>
        {/* Brand */}
        <FadeIn>
          <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'white', display: 'block', marginBottom: '2rem' }}>
            Kymberley <span style={{ color: 'var(--primary)' }}>Marr</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2.5rem', maxWidth: '350px' }}>
            A legacy of strength, carved through science and dedication. We help elite individuals realize their full potential.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[IconInstagram, IconFacebook, IconTwitter].map((Icon, i) => (
              <a key={i} href="#" style={{ width: '44px', height: '44px', borderRadius: '0', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'var(--transition-fast)' }} className="social-link">
                <Icon />
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Links */}
        <FadeIn delay={0.1}>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Explore</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', transition: 'color 0.3s ease' }} className="footer-link">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Contact */}
        <FadeIn delay={0.2}>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Contact</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              <Phone size={16} className="text-gold" /> (920) 957-2284
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              <Mail size={16} className="text-gold" /> contact@kymberleymarr.com
            </li>
          </ul>
        </FadeIn>

        {/* Newsletter */}
        <FadeIn delay={0.3}>
          <h4 style={{ color: 'white', fontSize: '0.85rem', fontWeight: 800, marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Stay Elite</h4>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '2rem', lineHeight: 1.7 }}>Join our newsletter for exclusive fitness insights and protocols.</p>
          <div style={{ display: 'flex', position: 'relative' }}>
            <input
              type="email"
              placeholder="Email Address"
              style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '1.1rem 1.5rem', borderRadius: '0', color: 'white', fontSize: '0.85rem', outline: 'none' }}
            />
            <button style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', background: 'transparent', color: 'var(--primary)', padding: 0 }}>
              <Send size={18} />
            </button>
          </div>
        </FadeIn>
      </div>

      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '3rem' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Kymberley Marr Fitness. Handcrafted for Excellence.
        </p>
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Scroll to Top on Route Change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- App Root ---
export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious inertial easing
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    // Connect Lenis to custom requestAnimationFrame (raf) loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Synchronize GSAP ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageWrapper skeleton={HomeSkeleton}><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper skeleton={AboutSkeleton}><AboutPage /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper skeleton={ServicesSkeleton}><ServicesPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper skeleton={ContactSkeleton}><ContactPage /></PageWrapper>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}