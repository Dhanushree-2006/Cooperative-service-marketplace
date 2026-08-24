import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Bell, 
  Smartphone, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  CreditCard, 
  Navigation, 
  Lock, 
  Server, 
  Code2,
  HardHat,
  Users
} from 'lucide-react';
import { SYSTEM_MICROSERVICES, TRANSLATIONS } from '../data/mockData';

export function ArchitectureExplorer({ language }) {
  const [selectedService, setSelectedService] = useState(SYSTEM_MICROSERVICES[0]);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <section style={{
      maxWidth: '1320px',
      margin: '0 auto',
      padding: '40px 24px 80px 24px'
    }} id="system-architecture">
      {/* Header */}
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
          <Layers size={14} />
          Full System Architecture & Event-Driven Topology
        </div>

        <h2 style={{
          fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.02em',
          marginBottom: '10px'
        }}>
          {t.systemArchHeader}
        </h2>

        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          maxWidth: '720px',
          margin: '0 auto'
        }}>
          {t.systemArchSub} Click any service block to inspect technical specifications, tech stack, and real-time JSON payloads.
        </p>
      </div>

      {/* Interactive Architecture Canvas */}
      <div style={{
        backgroundColor: '#0f172a',
        border: '1px solid #334155',
        borderRadius: '24px',
        padding: '36px 28px',
        color: '#ffffff',
        marginBottom: '32px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Grid Accent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          pointerEvents: 'none'
        }} />

        {/* Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          position: 'relative',
          zIndex: 2,
          alignItems: 'center'
        }}>
          {/* Column 1: Admin & Client Gateways */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>
              1. Ingestion Gateways
            </div>

            {/* Admin Block */}
            <div style={{
              backgroundColor: '#581c87',
              border: '2px solid #a855f7',
              borderRadius: '14px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.25)'
            }}>
              <Layers size={22} color="#f3e8ff" style={{ marginBottom: '4px' }} />
              <div style={{ fontSize: '0.92rem', fontWeight: 800 }}>Admin Dashboard</div>
              <div style={{ fontSize: '0.72rem', color: '#e9d5ff' }}>Federation & Super Admin</div>
            </div>

            {/* API Gateway */}
            <div style={{
              backgroundColor: '#1e293b',
              border: '2px solid #38bdf8',
              borderRadius: '14px',
              padding: '18px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(56, 189, 248, 0.2)'
            }}>
              <Server size={24} color="#38bdf8" style={{ marginBottom: '4px' }} />
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>API Gateway</div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Kong / Envoy Reverse Proxy & Rate Limiter</div>
            </div>
          </div>

          {/* Column 2: 5 Microservices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>
              2. Core Microservices (Click to Inspect)
            </div>

            {SYSTEM_MICROSERVICES.map(srv => {
              const isSelected = selectedService.id === srv.id;

              return (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  style={{
                    backgroundColor: isSelected ? 'rgba(16, 185, 129, 0.2)' : '#1e293b',
                    border: `1.5px solid ${isSelected ? '#10b981' : '#334155'}`,
                    borderRadius: '12px',
                    padding: '12px 14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#10b981' : '#64748b'
                    }} />
                    <div>
                      <div style={{ fontSize: '0.84rem', fontWeight: 700, color: isSelected ? '#ffffff' : '#e2e8f0' }}>
                        {srv.name}
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                        {srv.latency} • {srv.tech.split('+')[0]}
                      </div>
                    </div>
                  </div>

                  {isSelected && <CheckCircle2 size={16} color="#10b981" />}
                </div>
              );
            })}
          </div>

          {/* Column 3: Core Database & Notifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>
              3. Data & Broadcast Layer
            </div>

            {/* Database */}
            <div style={{
              backgroundColor: '#0c4a6e',
              border: '2px solid #38bdf8',
              borderRadius: '14px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(56, 189, 248, 0.2)'
            }}>
              <Database size={24} color="#7dd3fc" style={{ marginBottom: '4px' }} />
              <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Core Database</div>
              <div style={{ fontSize: '0.72rem', color: '#bae6fd' }}>PostgreSQL + PostGIS + Redis Cluster</div>
            </div>

            {/* Notification Service */}
            <div style={{
              backgroundColor: '#1e293b',
              border: '2px solid #a855f7',
              borderRadius: '14px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(168, 85, 247, 0.2)'
            }}>
              <Bell size={24} color="#c084fc" style={{ marginBottom: '4px' }} />
              <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>Notification Service</div>
              <div style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>Gov SMS / WhatsApp Cloud / FCM</div>
            </div>
          </div>

          {/* Column 4: Client Apps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.08em' }}>
              4. Edge Stakeholder Apps
            </div>

            {/* Customer App */}
            <div style={{
              backgroundColor: '#064e3b',
              border: '2px solid #10b981',
              borderRadius: '14px',
              padding: '18px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)'
            }}>
              <Users size={24} color="#6ee7b7" style={{ marginBottom: '4px' }} />
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>Customer App</div>
              <div style={{ fontSize: '0.72rem', color: '#a7f3d0' }}>Booking, Live GPS, UPI, 7 Languages</div>
            </div>

            {/* Worker App */}
            <div style={{
              backgroundColor: '#064e3b',
              border: '2px solid #10b981',
              borderRadius: '14px',
              padding: '18px',
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)'
            }}>
              <HardHat size={24} color="#6ee7b7" style={{ marginBottom: '4px' }} />
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>Worker App</div>
              <div style={{ fontSize: '0.72rem', color: '#a7f3d0' }}>Job Feed, Passbook, Welfare Shield</div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Microservice Inspector Panel */}
      {selectedService && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '16px'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#ecfdf5',
                color: '#059669',
                padding: '3px 10px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 800,
                marginBottom: '6px'
              }}>
                ● {selectedService.status}
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                {selectedService.name}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '4px', maxWidth: '780px' }}>
                {selectedService.role}
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '8px 16px',
              fontSize: '0.82rem',
              color: '#334155'
            }}>
              Tech Stack: <strong>{selectedService.tech}</strong>
            </div>
          </div>

          {/* JSON Payload Inspector */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#475569',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}>
              <Code2 size={14} />
              <span>Real-Time Schema Payload Sample</span>
            </div>

            <pre style={{
              backgroundColor: '#0f172a',
              color: '#38bdf8',
              padding: '16px 20px',
              borderRadius: '12px',
              fontSize: '0.82rem',
              fontFamily: "'JetBrains Mono', monospace",
              overflowX: 'auto',
              border: '1px solid #334155'
            }}>
              {JSON.stringify(selectedService.samplePayload, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
}
