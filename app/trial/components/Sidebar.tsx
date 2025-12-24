import React from 'react';
import { LayoutDashboard, User, History, LogOut, FileText, Menu, X } from 'lucide-react';
import { NavigationItem } from '../types';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const navItems: NavigationItem[] = [
  { id: 'dashboard', label: 'ホーム', icon: LayoutDashboard, path: '/' },
  { id: 'history', label: '学習履歴', icon: History, path: '/history' },
  { id: 'profile', label: 'アカウント設定', icon: User, path: '/profile' },
  { id: 'support', label: 'お問い合わせ・規約', icon: FileText, path: '/support' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-gray-600"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-8 border-b border-gray-50">
            <h1 className="text-2xl font-bold text-brand-500 tracking-tight">Preness</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-brand-50 text-brand-600' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <Icon size={20} className={`mr-3 ${isActive ? 'text-brand-500' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Logout Area */}
          <div className="p-4 border-t border-gray-50">
            <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-500 hover:text-red-600 rounded-lg transition-colors">
              <LogOut size={20} className="mr-3" />
              ログアウト
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};