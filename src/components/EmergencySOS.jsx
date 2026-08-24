import React, { useState } from 'react';
import { 
  Flame, 
  AlertTriangle, 
  Clock, 
  ShieldAlert, 
  PhoneCall, 
  MapPin, 
  CheckCircle2, 
  Waves, 
  Ambulance, 
  KeyRound, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { EMERGENCY_SERVICES, TRANSLATIONS } from '../data/mockData';

const emergencyIconMap = {
  Flame,
  Waves,
  Ambulance,
  KeyRound
};

export function EmergencySOS({ 
  language, 
  selectedCity, 
  onBookEmergencyWorker 
}) {
  const [selectedEmergency, setSelectedEmergency] = useState(EMERGENCY_SERVICES[0]);
  const [isDispatched, setIsDispatched] = useState(false);
  const [emergencyTimer, setEmergencyTimer] = useState(14);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const handleDispatch = () => {
    setIsDispatched(true);
    const interval = setInterval(() => {
      setEmergencyTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 3000);
  };

  return (
    <section style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px 70px 24px'
    }} id="emergency-section">
      {/* Emergency Container Card */}
      <div style={{
        background: 'linear-gradient(135deg, #450a0a 0%, #1f0808 50%, #0f172a 100%)',
        border: '2px solid #ef4444',
        borderRadius: '24px',
        padding: '36px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(220, 38, 38, 0.25)'
      }}>
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          backgroundColor: '#ef4444',
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.2,
          pointerEvents: 'none'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          {/* Left Column: SOS Title & Description */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid #ef4444',
              color: '#fca5a5',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px'
            }}>
              <Flame size={16} color="#ef4444" className="animate-pulse" />
              <span>Priority Standby Dispatch System</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '14px',
              letterSpacing: '-0.02em'
            }}>
              {t.emergencySOS}
            </h2>

            <p style={{
              fontSize: '0.98rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              {t.emergencySub} in <strong>{selectedCity.name}</strong>. Certified first-responder cooperative workers on active standby 24x7 with specialized rapid tools.
            </p>

            {/* Helpline and Guarantees */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '16px',
              padding: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={20} color="#f87171" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                  Guaranteed 10 to 15 Minute Arrival Window
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldAlert size={20} color="#f87171" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                  Standard Emergency Base Tariffs (Zero Distress Price Surge)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PhoneCall size={20} color="#f87171" />
                <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                  Toll-Free Direct Dispatch Hotline: <strong>1800-425-COOP</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Emergency Category Selector & Dispatcher */}
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}>
            {!isDispatched ? (
              <div>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  marginBottom: '16px',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <AlertTriangle size={20} color="#ef4444" />
                  <span>Select Emergency Scenario</span>
                </h3>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  {EMERGENCY_SERVICES.map(em => {
                    const IconComp = emergencyIconMap[em.icon] || Flame;
                    const isSel = selectedEmergency.id === em.id;

                    return (
                      <div
                        key={em.id}
                        onClick={() => setSelectedEmergency(em)}
                        style={{
                          backgroundColor: isSel ? 'rgba(239, 68, 68, 0.15)' : 'rgba(30, 41, 59, 0.6)',
                          border: `1.5px solid ${isSel ? '#ef4444' : '#334155'}`,
                          borderRadius: '12px',
                          padding: '12px 16px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          backgroundColor: isSel ? '#dc2626' : '#1e293b',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <IconComp size={18} />
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>
                            {em.title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '2px' }}>
                            {em.sla} • {em.price}
                          </div>
                        </div>

                        {isSel && (
                          <div style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            backgroundColor: '#ef4444',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <CheckCircle2 size={14} color="#ffffff" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={handleDispatch}
                  className="btn-emergency"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '1rem',
                    borderRadius: '12px'
                  }}
                >
                  <Flame size={20} />
                  <span>Dispatch Priority {selectedEmergency.urgency} Unit</span>
                </button>
              </div>
            ) : (
              /* Post-Dispatch Screen */
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.7)',
                  animation: 'pulseGlow 2s infinite'
                }}>
                  <Flame size={32} />
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  color: '#f87171',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '4px'
                }}>
                  Standby Dispatch Triggered
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  Emergency Unit Dispatched!
                </h3>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '20px' }}>
                  A priority certified first-responder has accepted your distress call for <strong>{selectedEmergency.title}</strong>.
                </p>

                {/* Countdown Box */}
                <div style={{
                  backgroundColor: '#0f172a',
                  border: '1px solid #334155',
                  borderRadius: '14px',
                  padding: '16px',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Estimated Emergency ETA</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ef4444', fontFamily: 'monospace' }}>
                    00:{emergencyTimer < 10 ? `0${emergencyTimer}` : emergencyTimer}:00
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px' }}>
                    ● Master Tradesperson GPS Connected & Travelling at 35 km/h
                  </div>
                </div>

                <button
                  onClick={() => setIsDispatched(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: '1px solid #64748b',
                    color: '#cbd5e1',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    cursor: 'pointer'
                  }}
                >
                  Reset Emergency Dispatch Simulator
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
