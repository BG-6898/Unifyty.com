import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import ModulesSection from "./components/ModulesSection";
import IntegrationsSection from "./components/IntegrationsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import DemoModal from "./components/DemoModal";

const Home = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header 
        onSignInClick={() => setIsSignInOpen(true)}
        onDemoClick={() => setIsDemoOpen(true)}
      />
      <main>
        <HeroSection onDemoClick={() => setIsDemoOpen(true)} />
        <StatsSection />
        <FeaturesSection />
        <ModulesSection />
        <IntegrationsSection />
        <PricingSection />
        <FAQSection />
        <CTASection onDemoClick={() => setIsDemoOpen(true)} />
      </main>
      <Footer />
      
      {/* Global Modals */}
      <SignInForm isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
