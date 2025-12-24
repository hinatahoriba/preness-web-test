'use client';

import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Preness Logo SVG */}
          <svg className="h-10 w-10 text-brand-500" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8H20C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32H12C10.8954 32 10 31.1046 10 30V10C10 8.89543 10.8954 8 12 8Z" stroke="currentColor" strokeWidth="4" />
            <path d="M12 20H24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-slate-900">Preness</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">機能・分析</a>
          <a href="#flow" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">学習の流れ</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">料金プラン</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">よくある質問</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="text" size="sm">ログイン</Button>
          <Button variant="primary" size="sm">無料トライアル</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-4 shadow-lg flex flex-col space-y-4 animate-in slide-in-from-top-2">
          <a href="#features" className="text-base font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>機能・分析</a>
          <a href="#flow" className="text-base font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>学習の流れ</a>
          <a href="#pricing" className="text-base font-medium text-slate-600" onClick={() => setMobileMenuOpen(false)}>料金プラン</a>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" fullWidth>ログイン</Button>
            <Button variant="primary" fullWidth>無料トライアル</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
