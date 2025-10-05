
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, MessageCircle, BarChart3, Settings } from "lucide-react";
import { I18nProvider, useI18n } from './components/i18n/I18nProvider';
import { Skeleton } from "@/components/ui/skeleton";
import LanguageSetupModal from './components/i18n/LanguageSetupModal';

function AppLayout({ children, currentPageName }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, user, userLoaded } = useI18n();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  
  useEffect(() => {
    if (userLoaded) {
        if (!user && currentPageName !== 'Welcome') {
            navigate(createPageUrl('Welcome'));
        } else if (user) {
            // Check if it's a new user (created within the last 60 seconds)
            const isNewUser = (new Date() - new Date(user.created_date)) < 60000;
            if (isNewUser) {
                setShowLanguageModal(true);
            }
        }
    }
  }, [user, userLoaded, navigate, currentPageName]);

  useEffect(() => {
    document.title = "Bondly: High-EQ Assistant for Couples";
  }, []);

  // Public welcome page doesn't need the layout
  if (currentPageName === 'Welcome') {
      return <>{children}</>;
  }

  if (!userLoaded || !user) {
      return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 p-4 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <LanguageSetupModal isOpen={showLanguageModal} onClose={() => setShowLanguageModal(false)} />
      <style>{`
        :root {
          --primary-coral: #FF6B6B;
          --primary-orange: #FF8E53;
          --warm-peach: #FFB5A7;
          --soft-cream: #FDF2F8;
          --text-dark: #2D2D2D;
          --text-light: #6B7280;
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--primary-coral), var(--primary-orange));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <h1 className="text-xl font-bold gradient-text">{t('appName')}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 pb-20">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-orange-100">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            <Link
              to={createPageUrl("Assistant")}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                location.pathname.includes('Assistant') 
                  ? 'bg-gradient-to-br from-orange-100 to-red-100 text-orange-600' 
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs font-medium">{t('assistant')}</span>
            </Link>
            
            <Link
              to={createPageUrl("Dashboard")}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                location.pathname.includes('Dashboard') 
                  ? 'bg-gradient-to-br from-orange-100 to-red-100 text-orange-600' 
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              <span className="text-xs font-medium">{t('insights')}</span>
            </Link>

            <Link
              to={createPageUrl("Settings")}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all ${
                location.pathname.includes('Settings') 
                  ? 'bg-gradient-to-br from-orange-100 to-red-100 text-orange-600' 
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span className="text-xs font-medium">{t('settings')}</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function LayoutWrapper(props) {
    return (
        <I18nProvider>
            <AppLayout {...props} />
        </I18nProvider>
    )
}
