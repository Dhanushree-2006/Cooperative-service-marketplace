import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { WorkerDirectory } from './components/WorkerDirectory';
import { BookingModal } from './components/BookingModal';
import { EmergencySOS } from './components/EmergencySOS';
import { AIDemandForecast } from './components/AIDemandForecast';
import { CooperativeTrust } from './components/CooperativeTrust';
import { WorkerPortal } from './components/WorkerPortal';
import { AdminDashboard } from './components/AdminDashboard';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { Footer } from './components/Footer';
import { CITIES, VERIFIED_WORKERS } from './data/mockData';
import { X, CheckCircle2, ShieldCheck, Users, HardHat, Sparkles } from 'lucide-react';

export function App() {
  // Global States
  const [activeView, setActiveView] = useState('customer'); // 'customer', 'worker', 'admin', 'architecture'
  const [language, setLanguage] = useState('en');
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedWorkerForBooking, setSelectedWorkerForBooking] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authRole, setAuthRole] = useState('customer'); // 'customer', 'worker'

  const handleOpenBooking = (worker) => {
    setSelectedWorkerForBooking(worker);
    setIsBookingModalOpen(true);
  };

  const handleOpenEmergency = () => {
    const emergencyWorker = VERIFIED_WORKERS.find(w => w.isEmergencyReady) || VERIFIED_WORKERS[0];
    setSelectedWorkerForBooking(emergencyWorker);
    setIsBookingModalOpen(true);
  };

  const handleSearchSubmit = () => {
    const workerSec = document.getElementById('workers-section');
    if (workerSec) {
      workerSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* Top Navbar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        language={language}
        setLanguage={setLanguage}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onOpenEmergency={handleOpenEmergency}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {activeView === 'customer' && (
          <>
            <Hero
              language={language}
              selectedCity={selectedCity}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onOpenEmergency={handleOpenEmergency}
              onExploreServices={() => {
                const el = document.getElementById('categories-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onViewArchitecture={() => setActiveView('architecture')}
            />

            <CategoryGrid
              language={language}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                const el = document.getElementById('workers-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <EmergencySOS
              language={language}
              selectedCity={selectedCity}
              onBookEmergencyWorker={handleOpenEmergency}
            />

            <WorkerDirectory
              language={language}
              selectedCategory={selectedCategory}
              searchQuery={searchQuery}
              onBookWorker={handleOpenBooking}
            />

            <AIDemandForecast
              language={language}
              selectedCity={selectedCity}
            />

            <CooperativeTrust
              language={language}
            />
          </>
        )}

        {activeView === 'worker' && (
          <WorkerPortal />
        )}

        {activeView === 'admin' && (
          <AdminDashboard />
        )}

        {activeView === 'architecture' && (
          <ArchitectureExplorer
            language={language}
          />
        )}
      </main>

      {/* Interactive 7-Step Booking Modal */}
      {isBookingModalOpen && (
        <BookingModal
          worker={selectedWorkerForBooking}
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          selectedCity={selectedCity}
        />
      )}

      {/* Simple Auth Modal Simulator */}
      {isAuthModalOpen && (
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
            borderRadius: '20px',
            padding: '28px',
            maxWidth: '440px',
            width: '100%',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                Cooperative Portal Access
              </h3>
              <button
                onClick={() => setIsAuthModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Role Switcher */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '10px' }}>
              <button
                onClick={() => setAuthRole('customer')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: authRole === 'customer' ? '#059669' : 'transparent',
                  color: authRole === 'customer' ? '#ffffff' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Users size={14} />
                <span>Citizen / Household</span>
              </button>

              <button
                onClick={() => setAuthRole('worker')}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  backgroundColor: authRole === 'worker' ? '#059669' : 'transparent',
                  color: authRole === 'worker' ? '#ffffff' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <HardHat size={14} />
                <span>Cooperative Worker</span>
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                {authRole === 'customer' ? "Mobile Number (OTP Verification)" : "Registered Federation Member ID / Mobile"}
              </label>
              <input
                type="text"
                defaultValue="+91 98401 23456"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <button
              onClick={() => {
                if (authRole === 'worker') {
                  setActiveView('worker');
                } else {
                  setActiveView('customer');
                }
                setIsAuthModalOpen(false);
              }}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '0.9rem',
                borderRadius: '10px',
                marginBottom: '14px'
              }}
            >
              <span>Instant Democratic Login with OTP</span>
            </button>

            <div style={{ fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
              Encrypted through DigiLocker & Government Citizen Identity Gateway
            </div>
          </div>
        </div>
      )}

      {/* Platform Footer */}
      <Footer setActiveView={setActiveView} />
    </div>
  );
}

export default App;
