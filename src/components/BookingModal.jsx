import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  Star, 
  Smartphone, 
  Calendar, 
  Navigation, 
  QrCode, 
  ChevronRight, 
  Sparkles,
  PhoneCall,
  UserCheck,
  Zap,
  ArrowRight,
  Shield,
  FileCheck,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function BookingModal({ 
  worker, 
  isOpen, 
  onClose, 
  selectedCity 
}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    customerName: 'Ananya Sharma',
    phone: '+91 98401 23456',
    address: '42, 3rd Cross, 2nd Main Road, Anna Nagar',
    locality: selectedCity?.name || 'Chennai',
    serviceType: 'Emergency Repair & Inspection',
    serviceDate: 'Today (Immediate 15-min Dispatch)',
    customNotes: 'Main MCB switchboard tripping when geyser is switched on.',
    rating: 5,
    tipAmount: 50,
    feedback: 'Extremely polite, certified lineman who fixed the issue safely in 20 minutes!'
  });

  // Simulated live GPS tracking state
  const [workerLocationProgress, setWorkerLocationProgress] = useState(15);
  const [etaRemaining, setEtaRemaining] = useState(worker ? worker.etaMinutes : 12);
  const [otpCode] = useState('8492');
  const [otpVerified, setOtpVerified] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  useEffect(() => {
    if (currentStep === 4) {
      const interval = setInterval(() => {
        setWorkerLocationProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 95;
          }
          return prev + 15;
        });
        setEtaRemaining(prev => Math.max(1, prev - 2));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  if (!isOpen || !worker) return null;

  const baseFare = worker.startingFare || 249;
  const visitFee = 50;
  const welfareContribution = 15;
  const totalAmount = baseFare + visitFee + welfareContribution;

  const handleNextStep = () => {
    if (currentStep === 6) {
      setPaymentDone(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const stepsList = [
    { num: 1, label: "Register & KYC" },
    { num: 2, label: "Service Details" },
    { num: 3, label: "Match & Confirm" },
    { num: 4, label: "Live GPS Track" },
    { num: 5, label: "Service Delivery" },
    { num: 6, label: "UPI Payment" },
    { num: 7, label: "Cooperative Review" }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        width: '100%',
        maxWidth: '740px',
        maxHeight: '92vh',
        borderRadius: '24px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid #e2e8f0'
      }}>
        {/* Modal Header */}
        <div style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          padding: '18px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                backgroundColor: '#059669',
                color: '#ffffff',
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 800
              }}>
                7-STEP WORKFLOW
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                Service Booking Simulator
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '2px' }}>
              Cooperative Booking Engine
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#1e293b',
              border: 'none',
              color: '#cbd5e1',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* 7-Step Progress Stepper Bar */}
        <div style={{
          backgroundColor: '#f8fafc',
          borderBottom: '1px solid #e2e8f0',
          padding: '12px 20px',
          overflowX: 'auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            minWidth: '580px',
            justifyContent: 'space-between'
          }}>
            {stepsList.map((st, idx) => {
              const isPast = currentStep > st.num;
              const isCurrent = currentStep === st.num;

              return (
                <React.Fragment key={st.num}>
                  <div 
                    onClick={() => setCurrentStep(st.num)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      opacity: isCurrent || isPast ? 1 : 0.45
                    }}
                  >
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: isPast ? '#059669' : isCurrent ? '#0f172a' : '#cbd5e1',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.72rem',
                      fontWeight: 700
                    }}>
                      {isPast ? <Check size={13} /> : st.num}
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: isCurrent ? 700 : 500,
                      color: isCurrent ? '#0f172a' : '#64748b'
                    }}>
                      {st.label}
                    </span>
                  </div>

                  {idx < stepsList.length - 1 && (
                    <div style={{
                      flex: 1,
                      height: '2px',
                      backgroundColor: isPast ? '#059669' : '#e2e8f0',
                      margin: '0 8px'
                    }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Modal Body Container */}
        <div style={{
          padding: '24px',
          overflowY: 'auto',
          flex: 1
        }}>
          {/* STEP 1: REGISTER & KYC */}
          {currentStep === 1 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <UserCheck size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Step 1: Citizen Onboarding & Identity Verification
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Transparent Aadhaar / Mobile OTP KYC verification for household safety.
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Citizen Full Name
                  </label>
                  <input
                    type="text"
                    value={bookingDetails.customerName}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, customerName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Mobile Number (Verified via OTP)
                  </label>
                  <input
                    type="text"
                    value={bookingDetails.phone}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Service Address & House/Flat Details
                </label>
                <input
                  type="text"
                  value={bookingDetails.address}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, address: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    marginBottom: '16px'
                  }}
                />
              </div>

              <div style={{
                backgroundColor: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '12px',
                padding: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <ShieldCheck size={24} color="#059669" />
                <div style={{ fontSize: '0.8rem', color: '#065f46' }}>
                  <strong>Civic Privacy Guarantee:</strong> Your exact street address is only decrypted and shared with the verified cooperative tradesperson once the booking is confirmed.
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SEARCH & SERVICE REQUIREMENTS */}
          {currentStep === 2 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#f0f9ff',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Zap size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Step 2: Service & Requirement Specifications
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Specify the issue so the cooperative worker brings appropriate diagnostic tools.
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Selected Trade & Problem Category
                </label>
                <input
                  type="text"
                  value={bookingDetails.serviceType}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, serviceType: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Problem Description & Instructions
                </label>
                <textarea
                  rows={3}
                  value={bookingDetails.customNotes}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, customNotes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Skills required checklist */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '14px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                  Matched Worker Skill Badges ({worker.name})
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {worker.skills.map((s, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: '#ecfdf5',
                        color: '#047857',
                        border: '1px solid #a7f3d0',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: '6px'
                      }}
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: SCHEDULE & MATCH CONFIRMATION */}
          {currentStep === 3 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#fef3c7',
                  color: '#b45309',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Step 3: Schedule & Worker Match Confirmation
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Instant dispatch matched via Geo-location engine and cooperative roster.
                  </p>
                </div>
              </div>

              {/* Worker Card Preview */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '2px solid #10b981',
                borderRadius: '16px',
                padding: '18px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <img
                  src={worker.avatar}
                  alt={worker.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '14px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>{worker.name}</h4>
                    <span style={{
                      backgroundColor: '#ecfdf5',
                      color: '#059669',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px'
                    }}>
                      VERIFIED COOP
                    </span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px' }}>
                    {worker.society}
                  </div>
                  <div style={{ display: 'flex', gap: '14px', marginTop: '6px', fontSize: '0.78rem', color: '#334155' }}>
                    <span>⭐ <strong>{worker.rating}</strong> ({worker.completedJobs} jobs)</span>
                    <span>📍 <strong>{worker.distanceKm} km away</strong></span>
                    <span>⏱️ ETA: <strong>{worker.etaMinutes} mins</strong></span>
                  </div>
                </div>
              </div>

              {/* Time Slot Picker */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                  Choose Arrival Time
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                  {['Immediate Dispatch (15 Mins)', 'Today Evening (5:00 PM)', 'Tomorrow Morning (10:00 AM)'].map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      onClick={() => setBookingDetails({ ...bookingDetails, serviceDate: slot })}
                      style={{
                        padding: '12px',
                        borderRadius: '10px',
                        border: `2px solid ${bookingDetails.serviceDate === slot ? '#059669' : '#e2e8f0'}`,
                        backgroundColor: bookingDetails.serviceDate === slot ? '#ecfdf5' : '#ffffff',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        textAlign: 'center'
                      }}
                    >
                      {slot}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fair Tariff Preview */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '14px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <span style={{ color: '#64748b' }}>Standard Base Visit & Diagnostic Fee</span>
                  <span style={{ fontWeight: 600 }}>₹{baseFare}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <span style={{ color: '#64748b' }}>Safety Gear & Tooling Allowance</span>
                  <span style={{ fontWeight: 600 }}>₹{visitFee}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '10px' }}>
                  <span style={{ color: '#64748b' }}>Cooperative Welfare Fund Contribution</span>
                  <span style={{ fontWeight: 600 }}>₹{welfareContribution}</span>
                </div>
                <div style={{
                  borderTop: '1px solid #e2e8f0',
                  paddingTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#0f172a'
                }}>
                  <span>Total Estimated Payable</span>
                  <span style={{ color: '#059669' }}>₹{totalAmount}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: REAL-TIME LIVE GPS TRACKING */}
          {currentStep === 4 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Navigation size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Step 4: Live Geo-Location Dispatch & Route Tracking
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Worker is en route with verified safety kit and equipment.
                  </p>
                </div>
              </div>

              {/* Simulated Map Container */}
              <div style={{
                position: 'relative',
                height: '240px',
                backgroundColor: '#0f172a',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '16px',
                border: '1px solid #334155'
              }}>
                {/* Background Map Grid */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: 'radial-gradient(#334155 1.5px, transparent 1.5px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.6
                }} />

                {/* Simulated Route Line */}
                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <path
                    d="M 60 180 Q 200 40 400 120 T 640 60"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="4"
                    strokeDasharray="6,6"
                  />
                </svg>

                {/* Destination Pin (Customer) */}
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  right: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    backgroundColor: '#dc2626',
                    color: '#ffffff',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    marginBottom: '4px'
                  }}>
                    Your House
                  </div>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#dc2626',
                    border: '3px solid #ffffff',
                    boxShadow: '0 0 10px rgba(220, 38, 38, 0.8)'
                  }} />
                </div>

                {/* Moving Worker Pin */}
                <div style={{
                  position: 'absolute',
                  top: `${140 - (workerLocationProgress * 0.8)}px`,
                  left: `${(workerLocationProgress * 5.8) + 40}px`,
                  transition: 'all 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <div style={{
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                  }}>
                    <span>{worker.name}</span>
                    <span style={{ fontSize: '0.65rem', opacity: 0.85 }}>({etaRemaining}m)</span>
                  </div>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    border: '3px solid #ffffff',
                    boxShadow: '0 0 15px #10b981'
                  }} />
                </div>

                {/* Live Speed & Status Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  gap: '12px',
                  border: '1px solid #334155'
                }}>
                  <span>Live Speed: <strong>28 km/h</strong></span>
                  <span>Vehicle: <strong>Two-Wheeler (Tool Carrier)</strong></span>
                </div>
              </div>

              {/* Worker ETA & Call Strip */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Estimated Time of Arrival</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#059669' }}>
                    {etaRemaining} Minutes
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #cbd5e1',
                      color: '#334155',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <PhoneCall size={14} color="#059669" />
                    <span>Call Worker</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: SERVICE DELIVERY & OTP VERIFICATION */}
          {currentStep === 5 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#f5f3ff',
                  color: '#7c3aed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FileCheck size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Step 5: Job Execution & Secure Start/End OTP
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Worker has arrived at your doorstep. Verify the start OTP before work begins.
                  </p>
                </div>
              </div>

              {/* OTP Display Card */}
              <div style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                marginBottom: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Secure Service Start OTP
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  letterSpacing: '0.2em',
                  color: '#10b981',
                  margin: '8px 0',
                  fontFamily: 'monospace'
                }}>
                  {otpCode}
                </div>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                  Share this 4-digit code with <strong>{worker.name}</strong> to initiate the job on the cooperative ledger.
                </p>
              </div>

              {/* Inspection Checklist */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '10px' }}>
                  Safety & Quality Protocols Completed by Worker:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    "Federation Identity Card & Police Badge checked",
                    "Insulated high-voltage tools & multimeter diagnostic performed",
                    "Sparks & short circuit identified in secondary terminal block",
                    "Defective 32A MCB switch safely replaced with ISI-standard unit",
                    "Load testing & zero leakage verified"
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#0f172a' }}>
                      <CheckCircle2 size={16} color="#059669" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setOtpVerified(true)}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: otpVerified ? '#ecfdf5' : '#f1f5f9',
                  border: `1px solid ${otpVerified ? '#10b981' : '#cbd5e1'}`,
                  color: otpVerified ? '#047857' : '#475569',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <CheckCircle2 size={16} color={otpVerified ? '#059669' : '#64748b'} />
                <span>{otpVerified ? "Job Marked as Completed by Citizen" : "Confirm Job Completion"}</span>
              </button>
            </div>
          )}

          {/* STEP 6: DIGITAL PAYMENTS & FAIR INVOICE */}
          {currentStep === 6 && (
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CreditCard size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                    Step 6: Transparent UPI Payment & Fair-Split Invoice
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    0% platform cut. 95% credited directly to worker's cooperative bank account.
                  </p>
                </div>
              </div>

              {/* Split Breakdown Ledger */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '16px',
                marginBottom: '20px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', textTransform: 'uppercase' }}>
                  Democratic Escrow Payment Split
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.85rem', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ color: '#475569' }}>Worker Direct Wage ({worker.name})</span>
                  <span style={{ fontWeight: 700, color: '#059669' }}>₹284.00 (90.5%)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.85rem', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ color: '#475569' }}>Cooperative Society Welfare & ESI Pool</span>
                  <span style={{ fontWeight: 700, color: '#0284c7' }}>₹30.00 (9.5%)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.85rem', borderBottom: '1px dashed #e2e8f0' }}>
                  <span style={{ color: '#475569' }}>Platform Middleman Cut</span>
                  <span style={{ fontWeight: 700, color: '#059669' }}>₹0.00 (0% ZERO)</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                  <span>Total Payable</span>
                  <span style={{ color: '#059669' }}>₹{totalAmount}.00</span>
                </div>
              </div>

              {/* UPI QR Code Container */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  padding: '12px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  marginBottom: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}>
                  <QrCode size={130} color="#0f172a" />
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>
                  UPI ID: coop.{worker.id}@sbi
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '2px' }}>
                  Scan with GPay, PhonePe, Paytm, BHIM or any UPI App
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: 5-STAR RATING & REPUTATION SCORE */}
          {currentStep === 7 && (
            <div>
              <div style={{
                textAlign: 'center',
                padding: '10px 0 20px 0'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto'
                }}>
                  <Sparkles size={28} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                  Payment Verified & Completed!
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', maxWidth: '420px', margin: '4px auto 0 auto' }}>
                  Help {worker.name} build their democratic cooperative reputation score.
                </p>
              </div>

              {/* Star Rating Interactive Bar */}
              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '16px',
                textAlign: 'center',
                marginBottom: '18px'
              }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                  Rate Service Quality & Safety
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setBookingDetails({ ...bookingDetails, rating: star })}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transform: bookingDetails.rating >= star ? 'scale(1.15)' : 'scale(1)',
                        transition: 'transform 0.15s'
                      }}
                    >
                      <Star
                        size={32}
                        fill={bookingDetails.rating >= star ? '#f59e0b' : 'none'}
                        color={bookingDetails.rating >= star ? '#f59e0b' : '#cbd5e1'}
                      />
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: 700, marginTop: '8px' }}>
                  {bookingDetails.rating === 5 ? "Exceptional 5-Star Cooperative Service" : `${bookingDetails.rating} Stars`}
                </div>
              </div>

              {/* Review Textarea */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Review & Feedback (Recorded to State Cooperative Audit)
                </label>
                <textarea
                  rows={2}
                  value={bookingDetails.feedback}
                  onChange={(e) => setBookingDetails({ ...bookingDetails, feedback: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.85rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              {/* Optional Tip */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                  Optional Worker Welfare Bonus Tip
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[0, 30, 50, 100].map(tip => (
                    <button
                      key={tip}
                      onClick={() => setBookingDetails({ ...bookingDetails, tipAmount: tip })}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        border: `1px solid ${bookingDetails.tipAmount === tip ? '#059669' : '#cbd5e1'}`,
                        backgroundColor: bookingDetails.tipAmount === tip ? '#ecfdf5' : '#ffffff',
                        color: bookingDetails.tipAmount === tip ? '#047857' : '#334155',
                        fontWeight: 700,
                        fontSize: '0.82rem'
                      }}
                    >
                      {tip === 0 ? "No Tip" : `+₹${tip}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div style={{
          backgroundColor: '#f8fafc',
          borderTop: '1px solid #e2e8f0',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#475569',
                padding: '9px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              Back
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNextStep}
            className="btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '0.88rem'
            }}
          >
            <span>
              {currentStep === 1 && "Proceed to Requirements"}
              {currentStep === 2 && "Confirm Match & Schedule"}
              {currentStep === 3 && "Dispatch Worker & Track"}
              {currentStep === 4 && "Proceed to Job Delivery"}
              {currentStep === 5 && "Proceed to UPI Payment"}
              {currentStep === 6 && "Complete Payment & Review"}
              {currentStep === 7 && "Finish & Close Simulator"}
            </span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
