'use client';

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { History } from './components/History';
import { AnalysisReport } from './components/AnalysisReport';
import { Profile } from './components/Profile';
import { BookingFlow } from './components/BookingFlow';
import { RescheduleFlow } from './components/RescheduleFlow';
import { SectionPracticeFlow } from './components/SectionPracticeFlow';
import { Support } from './components/Support';
import { FAQ } from './components/FAQ';

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Simple router logic
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={setActiveTab} />;
      case 'history':
        return <History onViewDetails={() => setActiveTab('analysis')} />;
      case 'analysis':
        return <AnalysisReport />;
      case 'profile':
        return <Profile />;
      case 'booking':
        return <BookingFlow onBack={() => setActiveTab('dashboard')} />;
      case 'reschedule':
        return <RescheduleFlow onBack={() => setActiveTab('dashboard')} />;
      case 'section-practice':
        return <SectionPracticeFlow onBack={() => setActiveTab('dashboard')} />;
      case 'support':
        return <Support onNavigate={setActiveTab} />;
      case 'faq':
        return <FAQ onBack={() => setActiveTab('support')} />;
      default:
        return <Dashboard onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans text-gray-900">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8 transition-all duration-300">
        <div className="max-w-6xl mx-auto">
           {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Page;
