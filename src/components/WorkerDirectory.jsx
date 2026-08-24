import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Award, 
  HardHat, 
  Zap, 
  PhoneCall, 
  ArrowRight,
  Shield
} from 'lucide-react';
import { VERIFIED_WORKERS, TRANSLATIONS } from '../data/mockData';

export function WorkerDirectory({ 
  language, 
  selectedCategory, 
  searchQuery, 
  onBookWorker 
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Filter workers
  const filteredWorkers = VERIFIED_WORKERS.filter(worker => {
    const matchesCat = !selectedCategory || selectedCategory === 'all' || worker.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.society.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px 70px 24px'
    }} id="workers-section">
      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '16px',
        marginBottom: '32px'
      }}>
        <div>
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
            marginBottom: '8px'
          }}>
            <ShieldCheck size={14} />
            Federation Verified Directory
          </div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.02em'
          }}>
            {t.verifiedWorkersHeader}
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '4px' }}>
            {t.verifiedWorkersSub}
          </p>
        </div>

        {/* Active Filter Indicator */}
        {selectedCategory && selectedCategory !== 'all' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#f1f5f9',
            padding: '6px 14px',
            borderRadius: '8px',
            fontSize: '0.82rem',
            color: '#334155'
          }}>
            <span>Filtering by category: <strong>{selectedCategory}</strong></span>
          </div>
        )}
      </div>

      {/* Workers Grid */}
      {filteredWorkers.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1px dashed #cbd5e1'
        }}>
          <HardHat size={48} color="#94a3b8" style={{ marginBottom: '12px' }} />
          <h3 style={{ fontSize: '1.2rem', color: '#334155' }}>No workers found matching this filter</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '6px' }}>
            Try resetting your search query or choosing another service category.
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {filteredWorkers.map(worker => (
            <div
              key={worker.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
              className="card-hover"
            >
              <div>
                {/* Header with Avatar and Basic Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={worker.avatar}
                      alt={worker.name}
                      style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '16px',
                        objectFit: 'cover',
                        border: '2px solid #10b981'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: '-4px',
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      borderRadius: '9999px',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CheckCircle2 size={14} />
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px'
                    }}>
                      <h3 style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#0f172a'
                      }}>
                        {worker.name}
                      </h3>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        backgroundColor: '#fffbeb',
                        color: '#b45309',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '0.78rem',
                        fontWeight: 700
                      }}>
                        <Star size={13} fill="#f59e0b" color="#f59e0b" />
                        <span>{worker.rating}</span>
                        <span style={{ fontSize: '0.7rem', color: '#92400e', opacity: 0.8 }}>
                          ({worker.completedJobs})
                        </span>
                      </div>
                    </div>

                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#059669',
                      marginTop: '2px'
                    }}>
                      {worker.role} • {worker.experienceYears} yrs exp
                    </div>

                    {/* Proximity Pill */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginTop: '6px',
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <MapPin size={13} color="#38bdf8" /> {worker.distanceKm} km away
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Clock size={13} color="#10b981" /> ETA: {worker.etaMinutes} mins
                      </span>
                    </div>
                  </div>
                </div>

                {/* Federation & Society Box */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  marginBottom: '14px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#065f46',
                    textTransform: 'uppercase'
                  }}>
                    <Award size={13} color="#059669" />
                    <span>Registered Cooperative Society</span>
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#1e293b',
                    marginTop: '2px'
                  }}>
                    {worker.society}
                  </div>
                  <div style={{
                    fontSize: '0.7rem',
                    color: '#64748b',
                    marginTop: '2px',
                    fontFamily: 'monospace'
                  }}>
                    Reg No: {worker.societyReg}
                  </div>
                </div>

                {/* Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  marginBottom: '14px'
                }}>
                  {worker.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      style={{
                        backgroundColor: '#ecfdf5',
                        color: '#047857',
                        border: '1px solid #a7f3d0',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: '9999px'
                      }}
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>

                {/* Skills tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '5px',
                  marginBottom: '16px'
                }}>
                  {worker.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        backgroundColor: '#f1f5f9',
                        color: '#475569',
                        fontSize: '0.72rem',
                        padding: '2px 7px',
                        borderRadius: '4px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Welfare Guarantee Line */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.72rem',
                  color: '#0369a1',
                  backgroundColor: '#f0f9ff',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  marginBottom: '16px'
                }}>
                  <Shield size={13} color="#0284c7" />
                  <span>Coverage: {worker.insuranceCoverage}</span>
                </div>
              </div>

              {/* Bottom Row Pricing & Book Action */}
              <div style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>
                    Standard Base Fare
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    ₹{worker.startingFare}
                  </div>
                </div>

                <button
                  onClick={() => onBookWorker(worker)}
                  className="btn-primary"
                  style={{
                    padding: '9px 18px',
                    fontSize: '0.85rem'
                  }}
                >
                  <span>{t.bookNow}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
