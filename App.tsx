
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RealisationPage from './pages/RealisationPage';
import ContactPage from './pages/ContactPage';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.Home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case PageView.Home:
        return <HomePage setView={setCurrentView} />;
      case PageView.About:
        return <AboutPage />;
      case PageView.Services:
        return <ServicesPage />;
      case PageView.Realisations:
        return <RealisationPage />;
      case PageView.Contact:
        return <ContactPage />;
      default:
        return <HomePage setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer setView={setCurrentView} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
