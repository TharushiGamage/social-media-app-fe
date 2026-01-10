import './App.css'
import { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import LandingPage from './pages/Landing/LandingPage';
import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}
        {currentPage === "profile" && <ProfilePage onNavigate={handleNavigate} />}
      </SignedIn>
    </>
  );
}

export default App
