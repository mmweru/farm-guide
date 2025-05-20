// App.jsx
import { useState, useRef } from 'react';
import { Leaf } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import AnimatedBackground from './components/AnimatedBackground';

export default function AgricultureWebsite() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const solutionsRef = useRef(null);
  const navRef = useRef(null);

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-900 font-['Montserrat',sans-serif] overflow-x-hidden">
      <AnimatedBackground />

      <Navbar
        navRef={navRef}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setShowAuthModal={setShowAuthModal}
      />

      <Hero
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        scrollToSolutions={scrollToSolutions}
        setShowAuthModal={setShowAuthModal}
      />

      <Solutions
        solutionsRef={solutionsRef}
        isVisible={isVisible}
      />

      <Stats isVisible={isVisible} />

      <CTA setShowAuthModal={setShowAuthModal} />

      <Footer />

      <AuthModal
        showAuthModal={showAuthModal}
        setShowAuthModal={setShowAuthModal}
      />
    </div>
  );
}