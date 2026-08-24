import React from 'react';
import { 
  Zap, 
  Droplets, 
  Hammer, 
  Paintbrush, 
  Sparkles, 
  HeartPulse, 
  Car, 
  Flower2, 
  Wrench, 
  Building2, 
  Utensils, 
  ShieldAlert,
  ArrowUpRight,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { SERVICE_CATEGORIES, TRANSLATIONS } from '../data/mockData';

const iconMap = {
  Zap,
  Droplets,
  Hammer,
  Paintbrush,
  Sparkles,
  HeartPulse,
  Car,
  Flower2,
  Wrench,
  Building2,
  Utensils,
  ShieldAlert
};

export function CategoryGrid({ 
  language, 
  selectedCategory, 
  setSelectedCategory, 
  onSelectCategory 
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <section style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '70px 24px 40px 24px'
    }}>
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
          <CheckCircle2 size={14} />
          Certified Trade Guilds
        </div>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.02em',
          marginBottom: '12px'
        }}>
          {t.categoriesHeader}
        </h2>
        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          maxWidth: '680px',
          margin: '0 auto'
        }}>
          {t.categoriesSub}
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {SERVICE_CATEGORIES.map(cat => {
          const IconComponent = iconMap[cat.icon] || Zap;
          const isSelected = selectedCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                onSelectCategory(cat.id);
              }}
              style={{
                backgroundColor: isSelected ? '#ecfdf5' : '#ffffff',
                border: `2px solid ${isSelected ? '#10b981' : '#e2e8f0'}`,
                borderRadius: '16px',
                padding: '22px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: isSelected ? '0 12px 25px rgba(16, 185, 129, 0.18)' : '0 2px 8px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="card-hover"
            >
              {/* Category Top Row */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: cat.bgColor,
                    color: cat.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                  }}>
                    <IconComponent size={24} />
                  </div>

                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    backgroundColor: cat.bgColor,
                    color: cat.color,
                    padding: '3px 8px',
                    borderRadius: '9999px'
                  }}>
                    {cat.tag}
                  </span>
                </div>

                {/* Name and Description */}
                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '6px'
                }}>
                  {cat.name}
                </h3>
                <p style={{
                  fontSize: '0.82rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                  marginBottom: '16px'
                }}>
                  {cat.desc}
                </p>

                {/* Skills tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '5px',
                  marginBottom: '18px'
                }}>
                  {cat.skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row Pricing & Action */}
              <div style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                    Tariff from
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
                    ₹{cat.startingRate}{' '}
                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>
                      /{cat.rateUnit}
                    </span>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}>
                  <span>Book</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
