import React from 'react';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  Zap, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  Flame,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { TRANSLATIONS } from '../data/mockData';

export function Hero({ 
  language, 
  selectedCity, 
  searchQuery, 
  setSearchQuery, 
  onSearchSubmit,
  onOpenEmergency,
  onExploreServices,
  onViewArchitecture
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const quickTags = [
    { label: "⚡ Master Electrician", category: "electrician" },
    { label: "💧 Pipe Leakage & Plumber", category: "plumber" },
    { label: "🧓 Patient & Elderly Care", category: "caregiver" },
    { label: "✨ Deep Home Cleaning", category: "cleaner" },
    { label: "🔨 Master Wood Craftsman", category: "carpenter" }
  ];

  return (
    <div style={{
      position: 'relative',
      background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      color: '#ffffff',
      padding: '60px 24px 70px 24px',
      overflow: 'hidden'
    }}>
      {/* Decorative background grid */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        textAlign: 'center'
      }}>
        {/* Trust Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          padding: '6px 16px',
          borderRadius: '9999px',
          fontSize: '0.82rem',
          color: '#34d399',
          fontWeight: 600,
          marginBottom: '20px',
          backdropFilter: 'blur(8px)'
        }}>
          <ShieldCheck size={16} />
          <span>Backed by Registered Labour Cooperative Societies • Zero Middleman Cut</span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3.4rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          maxWidth: '960px',
          margin: '0 auto 20px auto',
          background: 'linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {t.heroTitle}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.15rem)',
          color: '#94a3b8',
          maxWidth: '780px',
          margin: '0 auto 36px auto',
          lineHeight: 1.6
        }}>
          {t.heroSubtitle}
        </p>

        {/* Main Search Bar & Action Box */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto 24px auto',
          backgroundColor: 'rgba(30, 41, 59, 0.95)',
          border: '1px solid #475569',
          borderRadius: '16px',
          padding: '8px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '8px',
          alignItems: 'center',
          backdropFilter: 'blur(16px)'
        }}>
          <div style={{
            flex: '1 1 300px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 14px',
            backgroundColor: '#0f172a',
            borderRadius: '10px',
            border: '1px solid #334155'
          }}>
            <Search size={18} color="#10b981" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '0.92rem',
                fontFamily: 'inherit'
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSearchSubmit();
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 14px',
            backgroundColor: '#0f172a',
            borderRadius: '10px',
            border: '1px solid #334155',
            color: '#cbd5e1',
            fontSize: '0.85rem'
          }}>
            <MapPin size={16} color="#38bdf8" />
            <span style={{ fontWeight: 600 }}>{selectedCity.name}</span>
          </div>

          <button
            onClick={onSearchSubmit}
            className="btn-primary"
            style={{
              flex: '0 0 auto',
              padding: '12px 24px',
              fontSize: '0.92rem'
            }}
          >
            <Search size={16} />
            <span>{t.findServices}</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '48px'
        }}>
          <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', alignItems: 'center' }}>
            Popular Services:
          </span>
          {quickTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchQuery(tag.category);
                onSearchSubmit();
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#e2e8f0',
                padding: '5px 12px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 500,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Metrics & Federation Trust Counter Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          backgroundColor: 'rgba(15, 23, 42, 0.7)',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(12px)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.75rem', 
              fontWeight: 800, 
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}>
              <Users size={22} />
              <span>14,820+</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              Active Verified Cooperative Workers
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.75rem', 
              fontWeight: 800, 
              color: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}>
              <TrendingUp size={22} />
              <span>95% Pay</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              Direct Pay to Workers (0% Commission Gouge)
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.75rem', 
              fontWeight: 800, 
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}>
              <Award size={22} />
              <span>52 Societies</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              Registered Labour Federations
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '1.75rem', 
              fontWeight: 800, 
              color: '#a855f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}>
              <Clock size={22} />
              <span>12 Mins</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '4px' }}>
              Average Urban Emergency Dispatch Time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
