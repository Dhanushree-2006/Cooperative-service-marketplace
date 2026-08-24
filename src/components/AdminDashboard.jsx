import React, { useState } from 'react';
import { 
  Layers, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  TrendingUp, 
  MapPin, 
  Search, 
  Download, 
  Filter, 
  AlertTriangle,
  Building2,
  DollarSign
} from 'lucide-react';

export function AdminDashboard() {
  const [kycQueue, setKycQueue] = useState([
    {
      id: "KYC-901",
      workerName: "Manoj Rathore",
      trade: "Master Carpenter",
      society: "Rajasthan Rajya Shramik Sahakari Sangh",
      aadhaarStatus: "DigiLocker Verified (UIDAI)",
      policeCert: "Cleared (Jaipur Police)",
      experience: "8 Years",
      documents: ["Trade Certificate.pdf", "Aadhaar_Redacted.pdf", "Police_Clearance.pdf"],
      submittedAt: "10 mins ago"
    },
    {
      id: "KYC-902",
      workerName: "Anjali Haldar",
      trade: "Elderly & Patient Care Assistant",
      society: "Kolkata Mahila Seva Cooperative Society",
      aadhaarStatus: "DigiLocker Verified (UIDAI)",
      policeCert: "Cleared (Bidhannagar Police)",
      experience: "6 Years",
      documents: ["Nursing_Aid_NSDC.pdf", "First_Aid_RedCross.pdf"],
      submittedAt: "25 mins ago"
    },
    {
      id: "KYC-903",
      workerName: "Karthik Rajan",
      trade: "Plumber & Sanitary Specialist",
      society: "Coimbatore Labour Contract Co-op Society",
      aadhaarStatus: "DigiLocker Verified (UIDAI)",
      policeCert: "Pending Verification",
      experience: "5 Years",
      documents: ["ITI_Plumbing_Cert.pdf"],
      submittedAt: "1 hour ago"
    }
  ]);

  const [activeTab, setActiveTab] = useState('kyc'); // 'kyc', 'map', 'audit', 'societies'

  const handleApprove = (id) => {
    setKycQueue(kycQueue.filter(k => k.id !== id));
  };

  const handleReject = (id) => {
    setKycQueue(kycQueue.filter(k => k.id !== id));
  };

  return (
    <div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '40px 24px 80px 24px'
    }}>
      {/* Top Banner */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '28px',
        marginBottom: '28px',
        border: '1px solid #334155',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#059669',
            color: '#ffffff',
            padding: '3px 10px',
            borderRadius: '4px',
            fontSize: '0.72rem',
            fontWeight: 800,
            marginBottom: '8px'
          }}>
            <Layers size={14} />
            SUPER ADMIN & FEDERATION GOVERNANCE
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
            Cooperative Federation Control Suite
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '4px' }}>
            Democratic workforce oversight, automated zero-leakage wage audits, and verified trade onboarding.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            style={{
              backgroundColor: '#1e293b',
              color: '#ffffff',
              border: '1px solid #475569',
              padding: '10px 16px',
              borderRadius: '10px',
              fontSize: '0.85rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Download size={16} />
            <span>Export Audit PDF</span>
          </button>
        </div>
      </div>

      {/* Top Summary Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
        marginBottom: '28px'
      }}>
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
            Active Registered Workers
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>
            14,820
          </div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px' }}>
            +480 Onboarded This Month
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
            Affiliated Labour Societies
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7', marginTop: '4px' }}>
            52 Federations
          </div>
          <div style={{ fontSize: '0.75rem', color: '#0284c7', marginTop: '4px' }}>
            Covering 8 States / UTs
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
            Total Wage Disbursed
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669', marginTop: '4px' }}>
            ₹2.48 Crore
          </div>
          <div style={{ fontSize: '0.75rem', color: '#059669', marginTop: '4px' }}>
            100% Direct Escrow to Workers
          </div>
        </div>

        <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '20px' }}>
          <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>
            Platform Commission Leakage
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '4px' }}>
            0.00%
          </div>
          <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '4px' }}>
            Zero Middleman Exploitation
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div style={{
        display: 'flex',
        gap: '10px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '12px',
        marginBottom: '28px',
        overflowX: 'auto'
      }}>
        {[
          { id: 'kyc', label: 'Worker KYC & Certification Approvals', count: kycQueue.length },
          { id: 'audit', label: 'Zero-Leakage Wage Audit Ledger', count: null },
          { id: 'societies', label: 'Affiliated Cooperative Societies Registry', count: null }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 18px',
              borderRadius: '10px',
              backgroundColor: activeTab === tab.id ? '#059669' : '#ffffff',
              color: activeTab === tab.id ? '#ffffff' : '#475569',
              border: `1px solid ${activeTab === tab.id ? '#059669' : '#cbd5e1'}`,
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>{tab.label}</span>
            {tab.count !== null && (
              <span style={{
                backgroundColor: activeTab === tab.id ? '#065f46' : '#ecfdf5',
                color: activeTab === tab.id ? '#ffffff' : '#059669',
                padding: '2px 6px',
                borderRadius: '9999px',
                fontSize: '0.72rem'
              }}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* TAB 1: KYC APPROVAL QUEUE */}
      {activeTab === 'kyc' && (
        <div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
            Pending Verification Queue ({kycQueue.length} applicants)
          </h3>

          {kycQueue.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '1px dashed #cbd5e1'
            }}>
              <CheckCircle2 size={48} color="#10b981" style={{ marginBottom: '12px' }} />
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>All Worker KYC Applications Cleared!</div>
              <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '4px' }}>
                All pending background verifications and certifications have been approved.
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {kycQueue.map(item => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px'
                  }}
                >
                  <div style={{ flex: '1 1 340px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
                        {item.workerName}
                      </h4>
                      <span style={{
                        backgroundColor: '#ecfdf5',
                        color: '#059669',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}>
                        {item.trade}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.82rem', color: '#475569' }}>
                      Society: <strong>{item.society}</strong> • Exp: {item.experience}
                    </div>

                    <div style={{ display: 'flex', gap: '16px', marginTop: '10px', fontSize: '0.78rem' }}>
                      <span style={{ color: '#059669', fontWeight: 600 }}>
                        ✓ {item.aadhaarStatus}
                      </span>
                      <span style={{ color: item.policeCert.includes('Cleared') ? '#059669' : '#d97706', fontWeight: 600 }}>
                        ● {item.policeCert}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                      {item.documents.map((doc, dIdx) => (
                        <span
                          key={dIdx}
                          style={{
                            backgroundColor: '#f1f5f9',
                            color: '#334155',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            fontSize: '0.72rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <FileText size={12} />
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => handleReject(item.id)}
                      style={{
                        backgroundColor: '#fef2f2',
                        color: '#dc2626',
                        border: '1px solid #fecaca',
                        padding: '9px 16px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Reject Application
                    </button>

                    <button
                      onClick={() => handleApprove(item.id)}
                      className="btn-primary"
                      style={{
                        padding: '9px 20px',
                        fontSize: '0.82rem'
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>Approve & Issue Federation Badge</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: ZERO-LEAKAGE WAGE AUDIT */}
      {activeTab === 'audit' && (
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '16px',
          padding: '24px',
          overflowX: 'auto'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
            Government & Cooperative Wage Audit Ledger
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px' }}>
            Cryptographically signed escrow transactions with transparent commission-free settlement records.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b', fontSize: '0.78rem' }}>
                <th style={{ padding: '10px 12px' }}>Escrow Txn Ref</th>
                <th style={{ padding: '10px 12px' }}>Worker / Society</th>
                <th style={{ padding: '10px 12px' }}>Customer Paid</th>
                <th style={{ padding: '10px 12px' }}>Worker Received</th>
                <th style={{ padding: '10px 12px' }}>ESI / Welfare Split</th>
                <th style={{ padding: '10px 12px' }}>Middleman Cut</th>
                <th style={{ padding: '10px 12px' }}>Audit Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ref: "ESC-994812", worker: "Ramasamy Murugan (TN/LCS)", paid: 349, net: 332, welfare: 17, cut: 0, status: "100% VERIFIED" },
                { ref: "ESC-994811", worker: "Sunita Deshmukh (MH/MS)", paid: 599, net: 569, welfare: 30, cut: 0, status: "100% VERIFIED" },
                { ref: "ESC-994810", worker: "K. Biju Kumar (ULCCS)", paid: 199, net: 189, welfare: 10, cut: 0, status: "100% VERIFIED" },
                { ref: "ESC-994809", worker: "Devendra Patil (MH/RKSM)", paid: 299, net: 284, welfare: 15, cut: 0, status: "100% VERIFIED" }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9', fontSize: '0.85rem' }}>
                  <td style={{ padding: '12px', fontWeight: 600 }}>{row.ref}</td>
                  <td style={{ padding: '12px' }}>{row.worker}</td>
                  <td style={{ padding: '12px', fontWeight: 700 }}>₹{row.paid}.00</td>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#059669' }}>₹{row.net}.00</td>
                  <td style={{ padding: '12px', color: '#0284c7' }}>₹{row.welfare}.00</td>
                  <td style={{ padding: '12px', fontWeight: 800, color: '#059669' }}>₹{row.cut}.00 (0%)</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px'
                    }}>
                      ✓ {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 3: AFFILIATED SOCIETIES */}
      {activeTab === 'societies' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {[
            { name: "Uralungal Labour Contract Co-op Society (ULCCS)", state: "Kerala", reg: "KL/ULCCS/FED/002", members: 2800, rating: 4.98 },
            { name: "Chennai Central Labour Contract Co-op Society Ltd.", state: "Tamil Nadu", reg: "TN/LCS/2014/481", members: 3200, rating: 4.95 },
            { name: "Maharashtra Rajya Kashtakari Sahakari Mahasangh", state: "Maharashtra", reg: "MH/RKSM/2015/782", members: 4100, rating: 4.92 },
            { name: "Bengaluru Shrama Shakti Mahila Cooperative Union", state: "Karnataka", reg: "KA/SSMCU/2019/331", members: 4500, rating: 4.94 }
          ].map((soc, sIdx) => (
            <div
              key={sIdx}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Building2 size={20} color="#059669" />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>{soc.name}</h4>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                State: <strong>{soc.state}</strong> • Reg: {soc.reg}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', fontSize: '0.82rem' }}>
                <span>Active Member Workers: <strong>{soc.members}</strong></span>
                <span>Audit Score: <strong style={{ color: '#059669' }}>{soc.rating}/5.0</strong></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
