import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Heart,
  Globe,
  Award
} from 'lucide-react';

export function Footer({ setActiveView }) {
  return (
    <footer style={{
      backgroundColor: '#090d16',
      color: '#ffffff',
      borderTop: '1px solid #1e293b',
      padding: '60px 24px 30px 24px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginBottom: '48px'
      }}>
        {/* Brand Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={20} color="#ffffff" />
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>
              Cooperative<span style={{ color: '#10b981' }}>Connect</span>
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
            Decentralized, democratic labour marketplace platform enabling zero-commission direct bookings between citizens and verified workers of registered Labour Cooperative Federations.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '0.75rem',
            color: '#a7f3d0'
          }}>
            <Award size={14} color="#10b981" />
            <span>National Labour Cooperative Federation Aligned</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 800, marginBottom: '16px', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Platform Portals
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
            <li>
              <button
                onClick={() => setActiveView('customer')}
                style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#10b981'}
                onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Citizen & Household Booking Portal
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView('worker')}
                style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#10b981'}
                onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Cooperative Worker Passbook & Job Feed
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView('admin')}
                style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#10b981'}
                onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Federation Admin & KYC Governance
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveView('architecture')}
                style={{ background: 'none', border: 'none', color: '#94a3b8', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#10b981'}
                onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Interactive System Architecture & Payloads
              </button>
            </li>
          </ul>
        </div>

        {/* 11 Platform Features */}
        <div>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 800, marginBottom: '16px', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Core Platform Architecture
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', color: '#64748b' }}>
            <li>1. Service Provider Registration & KYC</li>
            <li>2. Worker Skill Profiling & Guilds</li>
            <li>3. Real-Time Customer Booking</li>
            <li>4. Spatial Geo-Location Matching</li>
            <li>5. 0% Commission Digital Payments</li>
            <li>6. Rating & Performance Scoring</li>
            <li>7. ESI & ₹5L Accident Welfare</li>
            <li>8. 15-Minute SOS Emergency Dispatch</li>
            <li>9. Federation Governance Admin</li>
            <li>10. 7-Language Regional Localization</li>
            <li>11. AI Predictive Demand Forecasting</li>
          </ul>
        </div>

        {/* Contact & Hotline */}
        <div>
          <h4 style={{ fontSize: '0.92rem', fontWeight: 800, marginBottom: '16px', color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            24x7 Citizen & Worker Support
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: '#cbd5e1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneCall size={16} color="#10b981" />
              <span>National Toll-Free: <strong>1800-425-COOP</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} color="#38bdf8" />
              <span>Grievance: <strong>ombudsman@coopconnect.gov.in</strong></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#f59e0b" />
              <span>National Federation of Labour Cooperatives HQ, New Delhi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Credits */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        borderTop: '1px solid #1e293b',
        paddingTop: '24px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '12px',
        fontSize: '0.78rem',
        color: '#64748b'
      }}>
        <div>
          © 2026 CooperativeConnect. Democratic Civic Labour Tech for Smart India. Zero Commission Guaranteed.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Empowering informal gig workers with dignity & social security</span>
          <Heart size={13} color="#ef4444" fill="#ef4444" />
        </div>
      </div>
    </footer>
  );
}
