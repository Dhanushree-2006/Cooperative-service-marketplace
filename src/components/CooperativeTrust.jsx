import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  TrendingUp, 
  Award, 
  Users, 
  Check, 
  X,
  Scale
} from 'lucide-react';
import { COOPERATIVE_COMPARISON, TRANSLATIONS } from '../data/mockData';

export function CooperativeTrust({ language }) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const pillars = [
    {
      icon: ShieldCheck,
      title: "1. Verified Cooperative Identity",
      desc: "Every worker is a vetted member of registered Labour Cooperatives with police verification and NSDC skill testing.",
      color: "#059669"
    },
    {
      icon: TrendingUp,
      title: "2. Fair Wage Retention (95%+)",
      desc: "Workers receive 95% of citizen payments directly to their bank account with zero middleman or corporate cut.",
      color: "#0284c7"
    },
    {
      icon: HeartHandshake,
      title: "3. Universal Social Security",
      desc: "Guaranteed ESI medical cover, EPF pension contributions, and ₹5,00,000 group accident protection for worker families.",
      color: "#e11d48"
    },
    {
      icon: Scale,
      title: "4. Standardized Fair Tariffs",
      desc: "Published transparent rates without distress surge pricing or hidden convenience surcharges.",
      color: "#d97706"
    },
    {
      icon: Users,
      title: "5. Democratic Worker Ownership",
      desc: "Workers are shareholders in their cooperative federations with voting rights and annual profit dividends.",
      color: "#7c3aed"
    }
  ];

  return (
    <section style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px 80px 24px'
    }} id="cooperative-trust">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#ecfdf5',
          color: '#059669',
          fontWeight: 700,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          padding: '4px 12px',
          borderRadius: '9999px',
          marginBottom: '10px'
        }}>
          <ShieldCheck size={14} />
          Democratic Model & Social Justice
        </div>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.02em',
          marginBottom: '10px'
        }}>
          {t.cooperativeTrustHeader}
        </h2>

        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          maxWidth: '680px',
          margin: '0 auto'
        }}>
          {t.cooperativeTrustSub}
        </p>
      </div>

      {/* 5 Pillars Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '48px'
      }}>
        {pillars.map((p, idx) => {
          const IconC = p.icon;
          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px 20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
              className="card-hover"
            >
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: `${p.color}15`,
                color: p.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <IconC size={22} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Side by Side Comparative Table */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '20px',
        padding: '32px 24px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
        overflowX: 'auto'
      }}>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px', textAlign: 'center' }}>
          Democratic Cooperative Model vs Exploitative Private Aggregator
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#64748b', textAlign: 'center', marginBottom: '24px' }}>
          Comparing economic dignity, pricing ethics, and worker welfare.
        </p>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e2e8f0', fontSize: '0.84rem' }}>
              <th style={{ padding: '14px', color: '#475569' }}>Key Metric</th>
              <th style={{ padding: '14px', color: '#059669', backgroundColor: '#ecfdf5', borderRadius: '8px 0 0 0' }}>
                CooperativeConnect Platform
              </th>
              <th style={{ padding: '14px', color: '#dc2626', backgroundColor: '#fef2f2', borderRadius: '0 8px 0 0' }}>
                Typical Gig App Aggregator
              </th>
            </tr>
          </thead>
          <tbody>
            {COOPERATIVE_COMPARISON.map((comp, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '0.86rem' }}>
                <td style={{ padding: '16px 14px', fontWeight: 700, color: '#1e293b' }}>
                  {comp.metric}
                </td>
                <td style={{ padding: '16px 14px', color: '#065f46', backgroundColor: '#f0fdf4', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={18} color="#059669" />
                    <span>{comp.cooperativeModel}</span>
                  </div>
                </td>
                <td style={{ padding: '16px 14px', color: '#991b1b', backgroundColor: '#fef2f2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <X size={18} color="#dc2626" />
                    <span>{comp.aggregatorModel}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
