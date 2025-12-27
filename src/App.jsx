import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import LandingPage from './pages/Landing/LandingPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <HomePage />
      </SignedIn>
    </>
  );
}

export default App
