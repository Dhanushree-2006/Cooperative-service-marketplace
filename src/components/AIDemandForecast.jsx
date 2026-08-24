import React, { useState } from 'react';
import { 
  TrendingUp, 
  Cpu, 
  Clock, 
  CloudSun, 
  Zap, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { AI_DEMAND_FORECAST_DATA, TRANSLATIONS } from '../data/mockData';

export function AIDemandForecast({ language, selectedCity }) {
  const [selectedWindow, setSelectedWindow] = useState('next6'); // 'next6', 'tomorrow', 'weekend', 'monsoon'
  const [isRebalanced, setIsRebalanced] = useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const handleRebalance = () => {
    setIsRebalanced(true);
    setTimeout(() => {
      setIsRebalanced(false);
    }, 4000);
  };

  return (
    <section style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px 70px 24px'
    }} id="ai-forecasting">
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#eff6ff',
          color: '#2563eb',
          fontWeight: 700,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          padding: '4px 12px',
          borderRadius: '9999px',
          marginBottom: '10px'
        }}>
          <Cpu size={14} />
          Core Platform Feature #11 • Machine Learning
        </div>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.02em',
          marginBottom: '10px'
        }}>
          {t.aiDemandHeader}
        </h2>

        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          maxWidth: '680px',
          margin: '0 auto'
        }}>
          {t.aiDemandSub} across <strong>{selectedCity.name}</strong> municipal zones.
        </p>
      </div>

      {/* Control Strip */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '14px 20px',
        marginBottom: '28px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}>
        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { id: 'next6', label: 'Next 6 Hours (Live)' },
            { id: 'tomorrow', label: 'Tomorrow Projection' },
            { id: 'weekend', label: 'Weekend Surge Curve' },
            { id: 'monsoon', label: 'Monsoon / Heatwave Multiplier' }
          ].map(pill => (
            <button
              key={pill.id}
              onClick={() => setSelectedWindow(pill.id)}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                border: `1px solid ${selectedWindow === pill.id ? '#2563eb' : '#cbd5e1'}`,
                backgroundColor: selectedWindow === pill.id ? '#eff6ff' : '#ffffff',
                color: selectedWindow === pill.id ? '#1d4ed8' : '#475569',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* AI Action Trigger */}
        <button
          onClick={handleRebalance}
          className="btn-primary"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
            padding: '9px 18px',
            fontSize: '0.84rem'
          }}
        >
          <Sparkles size={16} />
          <span>{isRebalanced ? "Workforce Optimally Rebalanced!" : "Auto-Rebalance Standby Workforce"}</span>
        </button>
      </div>

      {/* AI Projection Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {AI_DEMAND_FORECAST_DATA.map((item, idx) => {
          const isCritical = item.surgeLevel.includes('CRITICAL');
          const isHigh = item.surgeLevel.includes('HIGH');

          return (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: `1.5px solid ${isCritical ? '#fca5a5' : isHigh ? '#fde68a' : '#e2e8f0'}`,
                borderRadius: '16px',
                padding: '22px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              className="card-hover"
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: '#0f172a'
                  }}>
                    <Clock size={16} color="#64748b" />
                    <span>{item.timeSlot}</span>
                  </div>

                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    backgroundColor: isCritical ? '#fef2f2' : isHigh ? '#fffbeb' : '#f0fdf4',
                    color: isCritical ? '#dc2626' : isHigh ? '#b45309' : '#16a34a'
                  }}>
                    {item.surgeLevel}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  {item.trade}
                </h3>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  backgroundColor: '#f8fafc',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  marginBottom: '14px'
                }}>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '0.72rem' }}>Predicted Influx</div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>{item.predictedDemand} requests</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#64748b', fontSize: '0.72rem' }}>Active Available</div>
                    <div style={{ fontWeight: 800, color: '#059669', fontSize: '1rem' }}>{item.availableWorkers} workers</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.8rem', color: '#475569', lineHeight: 1.4, marginBottom: '14px' }}>
                  <strong>Causal Factor:</strong> {item.cause}
                </div>
              </div>

              <div style={{
                backgroundColor: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '10px',
                padding: '10px 12px',
                fontSize: '0.78rem',
                color: '#1e40af'
              }}>
                <strong>AI Recommended Action:</strong> {item.recommendedAction}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
