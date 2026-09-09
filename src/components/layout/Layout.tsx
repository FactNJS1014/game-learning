import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { GlobalSearchModal } from './GlobalSearchModal';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useApp();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950 font-sans text-slate-100 antialiased dark:bg-slate-950 dark:text-slate-100 light:bg-slate-50 light:text-slate-900">
      {/* Sidebar navigation */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Global Header */}
        <Header onOpenSidebar={() => setSidebarOpen(true)} />

        {/* Dynamic Page Container */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>

      {/* Global Cmd+K Search Modal */}
      <GlobalSearchModal />

      {/* Toast Notification Container */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-2xl border border-slate-700 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {toast.type === 'success' && (
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          )}
          {toast.type === 'error' && (
            <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
          )}
          {toast.type === 'info' && (
            <Info className="h-4 w-4 text-amber-400 shrink-0" />
          )}
          <span className="text-xs font-medium text-slate-200">{toast.message}</span>
        </div>
      )}
    </div>
  );
};
