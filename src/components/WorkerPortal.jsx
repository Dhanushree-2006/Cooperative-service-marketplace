import React, { useState } from 'react';
import { 
  HardHat, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Wallet, 
  TrendingUp, 
  FileText, 
  Award, 
  HeartHandshake, 
  ToggleLeft, 
  ToggleRight,
  ChevronRight,
  PhoneCall,
  Navigation,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { WORKER_INCOMING_JOBS } from '../data/mockData';

export function WorkerPortal() {
  const [isOnline, setIsOnline] = useState(true);
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs', 'earnings', 'welfare', 'profile'
  const [incomingJobs, setIncomingJobs] = useState(WORKER_INCOMING_JOBS);
  const [acceptedJob, setAcceptedJob] = useState(null);

  const handleAcceptJob = (job) => {
    setAcceptedJob(job);
    setIncomingJobs(incomingJobs.filter(j => j.id !== job.id));
  };

  const handleDeclineJob = (jobId) => {
    setIncomingJobs(incomingJobs.filter(j => j.id !== jobId));
  };

  return (
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px 80px 24px'
    }}>
      {/* Top Worker Profile & Duty Status Bar */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '24px 28px',
        marginBottom: '28px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        border: '1px solid #334155'
      }}>
        {/* Worker ID Card */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&auto=format&fit=crop&q=80"
              alt="Worker"
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                objectFit: 'cover',
                border: '2px solid #10b981'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-4px',
              right: '-4px',
              backgroundColor: isOnline ? '#10b981' : '#64748b',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              border: '2px solid #0f172a'
            }} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Ramasamy Murugan</h2>
              <span style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 800
              }}>
                MASTER ELECTRICIAN
              </span>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>
              Chennai Central Labour Contract Co-op Society Ltd. (Reg: TN/LCS/2014/481)
            </div>
            <div style={{ display: 'flex', gap: '14px', marginTop: '6px', fontSize: '0.78rem', color: '#cbd5e1' }}>
              <span>⭐ <strong>4.95 Rating</strong> (842 Completed)</span>
              <span>🛡️ <strong>Aadhaar & Police KYC Verified</strong></span>
              <span>⚡ <strong>Emergency Standby Ready</strong></span>
            </div>
          </div>
        </div>

        {/* Online / Standby Toggle */}
        <div style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '14px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
              Duty Status
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: isOnline ? '#10b981' : '#94a3b8' }}>
              {isOnline ? "ONLINE • RECEIVING JOBS" : "OFFLINE • STANDBY"}
            </div>
          </div>

          <button
            onClick={() => setIsOnline(!isOnline)}
            style={{
              backgroundColor: isOnline ? '#059669' : '#334155',
              color: '#ffffff',
              border: 'none',
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {isOnline ? "Go Offline" : "Go Online"}
          </button>
        </div>
      </div>

      {/* Worker Portal Navigation Tabs */}
      <div style={{
        display: 'flex',
        gap: '10px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '12px',
        marginBottom: '28px',
        overflowX: 'auto'
      }}>
        {[
          { id: 'jobs', label: 'Live Job Dispatch Feed', icon: HardHat, count: incomingJobs.length },
          { id: 'earnings', label: 'Cooperative Passbook & Earnings', icon: Wallet, count: null },
          { id: 'welfare', label: 'Welfare, ESI & Insurance Card', icon: HeartHandshake, count: null },
          { id: 'profile', label: 'Skill Certifications & Badges', icon: Award, count: null }
        ].map(tab => {
          const IconC = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '10px',
                backgroundColor: isActive ? '#059669' : '#ffffff',
                color: isActive ? '#ffffff' : '#475569',
                border: `1px solid ${isActive ? '#059669' : '#cbd5e1'}`,
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              <IconC size={16} />
              <span>{tab.label}</span>
              {tab.count !== null && (
                <span style={{
                  backgroundColor: isActive ? '#065f46' : '#ecfdf5',
                  color: isActive ? '#ffffff' : '#059669',
                  padding: '2px 6px',
                  borderRadius: '9999px',
                  fontSize: '0.72rem'
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* TAB 1: LIVE JOB DISPATCH FEED */}
      {activeTab === 'jobs' && (
        <div>
          {/* Active Ongoing Job Banner if accepted */}
          {acceptedJob && (
            <div style={{
              backgroundColor: '#ecfdf5',
              border: '2px solid #10b981',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 800
                  }}>
                    ● ACTIVE IN-PROGRESS JOB
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                    {acceptedJob.service}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#475569', marginTop: '4px' }}>
                    Customer: <strong>{acceptedJob.customerName}</strong> • {acceptedJob.location}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700, marginTop: '4px' }}>
                    Guaranteed Payout: {acceptedJob.payout}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    style={{
                      backgroundColor: '#0284c7',
                      color: '#ffffff',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Navigation size={16} />
                    <span>Open GPS Navigation</span>
                  </button>

                  <button
                    onClick={() => setAcceptedJob(null)}
                    className="btn-primary"
                    style={{
                      padding: '10px 16px',
                      fontSize: '0.82rem'
                    }}
                  >
                    <CheckCircle2 size={16} />
                    <span>Complete Job & Collect OTP</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Incoming Job Cards */}
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            Incoming Citizen Dispatch Requests
          </h3>

          {incomingJobs.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '50px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px dashed #cbd5e1'
            }}>
              <HardHat size={40} color="#94a3b8" style={{ marginBottom: '10px' }} />
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#334155' }}>No new pending job alerts</div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '4px' }}>
                You are on active standby. New dispatches in your locality will ring here automatically.
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
              {incomingJobs.map(job => (
                <div
                  key={job.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '10px'
                    }}>
                      <span style={{
                        backgroundColor: job.urgency === 'HIGH' ? '#fef2f2' : '#f0fdf4',
                        color: job.urgency === 'HIGH' ? '#dc2626' : '#16a34a',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '4px',
                        border: `1px solid ${job.urgency === 'HIGH' ? '#fecaca' : '#bbf7d0'}`
                      }}>
                        {job.urgency === 'HIGH' ? "🚨 EMERGENCY SOS" : "📅 SCHEDULED"}
                      </span>

                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#059669' }}>
                        {job.payout}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                      {job.service}
                    </h4>

                    <div style={{ fontSize: '0.82rem', color: '#475569', marginBottom: '8px' }}>
                      Citizen: <strong>{job.customerName}</strong>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      color: '#64748b',
                      backgroundColor: '#f8fafc',
                      padding: '6px 10px',
                      borderRadius: '8px',
                      marginBottom: '12px'
                    }}>
                      <MapPin size={14} color="#0284c7" />
                      <span>{job.location}</span>
                    </div>

                    <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4, marginBottom: '16px' }}>
                      Notes: {job.notes}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => handleDeclineJob(job.id)}
                      style={{
                        flex: 1,
                        backgroundColor: '#ffffff',
                        border: '1px solid #cbd5e1',
                        color: '#64748b',
                        padding: '9px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 600
                      }}
                    >
                      Decline
                    </button>

                    <button
                      onClick={() => handleAcceptJob(job)}
                      className="btn-primary"
                      style={{
                        flex: 2,
                        padding: '9px',
                        fontSize: '0.82rem'
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>Accept & Navigate</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: COOPERATIVE PASSBOOK & EARNINGS */}
      {activeTab === 'earnings' && (
        <div>
          {/* Summary Metric Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '28px'
          }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Today's Direct Earnings
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#059669', marginTop: '4px' }}>
                ₹1,840.00
              </div>
              <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px' }}>
                ✓ 5 Jobs Completed (100% Retained)
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                This Month Direct Payout
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>
                ₹38,450.00
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                Settled to SBI Co-op A/c #4892
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Middleman Commission Saved
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0284c7', marginTop: '4px' }}>
                ₹11,535.00
              </div>
              <div style={{ fontSize: '0.75rem', color: '#0284c7', marginTop: '4px' }}>
                Compared to 30% Private Aggregator Cut
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
                Cooperative Dividend Pool
              </div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f59e0b', marginTop: '4px' }}>
                ₹4,200.00
              </div>
              <div style={{ fontSize: '0.75rem', color: '#f59e0b', marginTop: '4px' }}>
                Annual Profit Sharing Share
              </div>
            </div>
          </div>

          {/* Transparent Ledger Table */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '24px',
            overflowX: 'auto'
          }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Recent Direct Payout Transactions (Zero Leakage Ledger)
            </h4>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b', fontSize: '0.78rem' }}>
                  <th style={{ padding: '10px 12px' }}>Txn ID / Date</th>
                  <th style={{ padding: '10px 12px' }}>Service Performed</th>
                  <th style={{ padding: '10px 12px' }}>Customer Paid</th>
                  <th style={{ padding: '10px 12px' }}>Welfare Pool (5%)</th>
                  <th style={{ padding: '10px 12px' }}>Your Direct Pay</th>
                  <th style={{ padding: '10px 12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: "TXN-8819", date: "Today 14:20", title: "MCB Replacement & Short Fix", paid: 349, welfare: 17, net: 332, status: "CREDITED (Instant UPI)" },
                  { id: "TXN-8814", date: "Today 11:15", title: "Inverter Wiring Check", paid: 299, welfare: 15, net: 284, status: "CREDITED (Instant UPI)" },
                  { id: "TXN-8809", date: "Yesterday 18:00", title: "Chandelier & Fan Mounting", paid: 450, welfare: 22, net: 428, status: "CREDITED (Instant UPI)" },
                  { id: "TXN-8801", date: "22 Aug 2026", title: "3-Phase Distribution Box Setup", paid: 1200, welfare: 60, net: 1140, status: "CREDITED (Instant UPI)" }
                ].map((row, rIdx) => (
                  <tr key={rIdx} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '0.85rem' }}>
                    <td style={{ padding: '12px', fontWeight: 600 }}>
                      <div>{row.id}</div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{row.date}</div>
                    </td>
                    <td style={{ padding: '12px' }}>{row.title}</td>
                    <td style={{ padding: '12px', fontWeight: 700 }}>₹{row.paid}</td>
                    <td style={{ padding: '12px', color: '#0284c7' }}>₹{row.welfare}</td>
                    <td style={{ padding: '12px', fontWeight: 800, color: '#059669' }}>₹{row.net}</td>
                    <td style={{ padding: '12px' }}>
                      <span style={{
                        backgroundColor: '#ecfdf5',
                        color: '#059669',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: WELFARE & INSURANCE CARD */}
      {activeTab === 'welfare' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {/* ESI & Health Insurance Card */}
          <div style={{
            background: 'linear-gradient(135deg, #065f46 0%, #047857 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 10px 25px rgba(4, 120, 87, 0.3)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9 }}>
                Labour Cooperative Health Shield
              </span>
              <HeartHandshake size={24} />
            </div>

            <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '4px' }}>
              ₹5,00,000 Group Accident Cover
            </div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9, marginBottom: '20px' }}>
              Underwritten by National Cooperative Insurance Federation
            </div>

            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '10px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>ESI Smart Health IP Number: <strong>510098234891</strong></div>
              <div>Hospital Cashless Network: <strong>1,400+ Empanelled Hospitals</strong></div>
              <div>Family Dependent Medical Cover: <strong>Active (Spouse + 2 Children)</strong></div>
            </div>
          </div>

          {/* EPF & Pension Fund Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            border: '1px solid #334155'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94a3b8' }}>
                Cooperative Provident Fund (EPF)
              </span>
              <ShieldCheck size={24} color="#10b981" />
            </div>

            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10b981', marginBottom: '4px' }}>
              ₹1,42,800.00 Accumulated
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '20px' }}>
              UAN Account: <strong>100983726194</strong> • Monthly Contribution ₹1,200
            </div>

            <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '10px', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>Cooperative Society Share: <strong>₹600 / month matching</strong></div>
              <div>Pension Scheme (EPS) Eligibility: <strong>Qualified (9+ Years Service)</strong></div>
              <div>Emergency Loan Withdrawal: <strong>Eligible up to ₹90,000 (0% Interest)</strong></div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SKILL CERTIFICATIONS */}
      {activeTab === 'profile' && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '24px'
        }}>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            Verified Trade Guild Credentials & Certifications
          </h4>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { title: "NSDC Level 5 Master Electrician", issuer: "Skill India Mission", date: "Verified 2024", badge: "Gold Standard" },
              { title: "3-Phase High Voltage Safety Cert", issuer: "State Electricity Board (TNEB)", date: "Valid till 2028", badge: "Hazard Approved" },
              { title: "Home Automation & Smart Systems", issuer: "National Cooperative Guild", date: "Completed 2025", badge: "IoT Certified" },
              { title: "Police Verification & Background Check", issuer: "Greater Chennai Police", date: "Cleared March 2026", badge: "100% Clear" }
            ].map((c, cIdx) => (
              <div
                key={cIdx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <Award size={24} color="#059669" />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>{c.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{c.issuer} • {c.date}</div>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#ecfdf5',
                    color: '#047857',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    marginTop: '6px'
                  }}>
                    ✓ {c.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
