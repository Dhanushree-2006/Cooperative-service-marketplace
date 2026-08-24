import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  MapPin, 
  Globe, 
  Flame, 
  Cpu, 
  HardHat, 
  Layers, 
  Bell, 
  CheckCircle2, 
  PhoneCall,
  Menu,
  X
} from 'lucide-react';
import { CITIES, TRANSLATIONS } from '../data/mockData';

export function Navbar({ 
  activeView, 
  setActiveView, 
  language, 
  setLanguage, 
  selectedCity, 
  setSelectedCity,
  onOpenEmergency,
  onOpenAuth
}) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [cityMenuOpen, setCityMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const languagesList = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'ml', label: 'Malayalam', native: 'മലയാളം' },
    { code: 'kn', label: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: '#0f172a',
      color: '#ffffff',
      boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
      borderBottom: '1px solid #1e293b'
    }}>
      {/* Top Federation Banner */}
      <div style={{
        background: 'linear-gradient(90deg, #047857 0%, #059669 50%, #047857 100%)',
        padding: '6px 20px',
        fontSize: '0.78rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            backgroundColor: '#ffffff', 
            color: '#065f46', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontWeight: 800,
            fontSize: '0.7rem' 
          }}>
            GOVT RECOGNIZED
          </span>
          <span>National Federation of Labour Cooperatives Initiative | 100% Zero-Commission Civic Platform</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
            <PhoneCall size={12} /> 24x7 Cooperative Helpline: <strong>1800-425-COOP</strong>
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px', opacity: 0.9 }}>
            <ShieldCheck size={12} /> ₹5L Group Insurance Guaranteed
          </span>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveView('customer')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.45)'
          }}>
            <Users size={24} color="#ffffff" />
          </div>
          <div>
            <div style={{ 
              fontSize: '1.25rem', 
              fontWeight: 800, 
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>Cooperative</span>
              <span style={{ color: '#10b981' }}>Connect</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Labour Service Marketplace
            </div>
          </div>
        </div>

        {/* Navigation View Switchers (Desktop) */}
        <nav style={{
          display: 'none',
          gap: '6px',
          backgroundColor: '#1e293b',
          padding: '4px',
          borderRadius: '10px',
          border: '1px solid #334155'
        }} className="desktop-nav">
          <button
            onClick={() => setActiveView('customer')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '7px',
              fontSize: '0.84rem',
              fontWeight: 600,
              backgroundColor: activeView === 'customer' ? '#059669' : 'transparent',
              color: activeView === 'customer' ? '#ffffff' : '#cbd5e1'
            }}
          >
            <Users size={15} />
            {t.customerPortal}
          </button>

          <button
            onClick={() => setActiveView('worker')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '7px',
              fontSize: '0.84rem',
              fontWeight: 600,
              backgroundColor: activeView === 'worker' ? '#059669' : 'transparent',
              color: activeView === 'worker' ? '#ffffff' : '#cbd5e1'
            }}
          >
            <HardHat size={15} />
            {t.workerPortal}
          </button>

          <button
            onClick={() => setActiveView('admin')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '7px',
              fontSize: '0.84rem',
              fontWeight: 600,
              backgroundColor: activeView === 'admin' ? '#059669' : 'transparent',
              color: activeView === 'admin' ? '#ffffff' : '#cbd5e1'
            }}
          >
            <Layers size={15} />
            {t.adminPortal}
          </button>

          <button
            onClick={() => setActiveView('architecture')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '7px',
              fontSize: '0.84rem',
              fontWeight: 600,
              backgroundColor: activeView === 'architecture' ? '#2563eb' : 'transparent',
              color: activeView === 'architecture' ? '#ffffff' : '#cbd5e1'
            }}
          >
            <Cpu size={15} />
            {t.architectureTab}
          </button>
        </nav>

        {/* Right Section Tools */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Location Selector */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => { setCityMenuOpen(!cityMenuOpen); setLangMenuOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                border: '1px solid #334155',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <MapPin size={15} color="#10b981" />
              <span>{selectedCity.name}</span>
            </button>

            {cityMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                width: '240px',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                padding: '8px',
                zIndex: 60
              }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', padding: '6px 8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  Select State / District
                </div>
                {CITIES.map(c => (
                  <div
                    key={c.id}
                    onClick={() => {
                      setSelectedCity(c);
                      setCityMenuOpen(false);
                    }}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: selectedCity.id === c.id ? '#059669' : 'transparent',
                      color: selectedCity.id === c.id ? '#ffffff' : '#e2e8f0',
                      transition: 'all 0.15s'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600 }}>{c.name}</div>
                      <div style={{ fontSize: '0.68rem', opacity: 0.8 }}>{c.state}</div>
                    </div>
                    <span style={{ fontSize: '0.7rem', opacity: 0.85 }}>{c.workers} workers</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Language Switcher */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => { setLangMenuOpen(!langMenuOpen); setCityMenuOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#1e293b',
                color: '#e2e8f0',
                border: '1px solid #334155',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <Globe size={15} color="#38bdf8" />
              <span>{languagesList.find(l => l.code === language)?.native}</span>
            </button>

            {langMenuOpen && (
              <div style={{
                position: 'absolute',
                top: '110%',
                right: 0,
                width: '180px',
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                padding: '6px',
                zIndex: 60
              }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', padding: '6px 8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  Regional Languages
                </div>
                {languagesList.map(l => (
                  <div
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: language === l.code ? '#059669' : 'transparent',
                      color: language === l.code ? '#ffffff' : '#e2e8f0'
                    }}
                  >
                    <span>{l.native}</span>
                    <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>{l.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Emergency SOS Button */}
          <button
            onClick={onOpenEmergency}
            className="btn-emergency"
            style={{
              padding: '7px 14px',
              fontSize: '0.82rem',
              animation: 'pulseGlow 2s infinite ease-in-out'
            }}
          >
            <Flame size={16} />
            <span style={{ fontWeight: 800 }}>SOS 15-MIN</span>
          </button>

          {/* Login / Auth Trigger */}
          <button
            onClick={onOpenAuth}
            style={{
              backgroundColor: '#1e293b',
              color: '#ffffff',
              border: '1px solid #475569',
              padding: '7px 14px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              fontWeight: 600,
              display: 'none'
            }}
            className="desktop-auth"
          >
            Sign In / Register
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              padding: '6px',
              borderRadius: '6px',
              backgroundColor: '#1e293b',
              color: '#ffffff'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#1e293b',
          borderTop: '1px solid #334155',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <button
            onClick={() => { setActiveView('customer'); setMobileMenuOpen(false); }}
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              textAlign: 'left',
              backgroundColor: activeView === 'customer' ? '#059669' : '#0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Users size={16} />
            {t.customerPortal}
          </button>
          <button
            onClick={() => { setActiveView('worker'); setMobileMenuOpen(false); }}
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              textAlign: 'left',
              backgroundColor: activeView === 'worker' ? '#059669' : '#0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <HardHat size={16} />
            {t.workerPortal}
          </button>
          <button
            onClick={() => { setActiveView('admin'); setMobileMenuOpen(false); }}
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              textAlign: 'left',
              backgroundColor: activeView === 'admin' ? '#059669' : '#0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Layers size={16} />
            {t.adminPortal}
          </button>
          <button
            onClick={() => { setActiveView('architecture'); setMobileMenuOpen(false); }}
            style={{
              padding: '10px 14px',
              borderRadius: '8px',
              textAlign: 'left',
              backgroundColor: activeView === 'architecture' ? '#2563eb' : '#0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Cpu size={16} />
            {t.architectureTab}
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-auth { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
